import * as THREE from 'three';
import { DeterministicRNG } from '../core/DeterministicRNG.js';

/**
 * BoidsFlocking - Boids 大群集群模拟算法
 * 基于 Reynolds (1987) 三规则: 对齐、聚合、分离
 * 通过 GPGPU InstancedMesh 实现 GPU 级群体运动
 *
 * 提供两种模式:
 * 1. CPU 模式: 适合小群体 (<100), 直接更新 InstancedMesh 矩阵
 * 2. GPU Texture 模式: 适合大群体 (>100), 通过 DataTexture 传递位置/速度
 */
export class BoidsFlocking {
  /**
   * @param {Object} config
   * @param {number} config.count - 个体数量
   * @param {number} [config.seed=42]
   * @param {number} [config.separationDist=1.5] - 分离距离
   * @param {number} [config.alignmentDist=3.0] - 对齐距离
   * @param {number} [config.cohesionDist=4.0] - 聚合距离
   * @param {number} [config.separationWeight=1.5] - 分离权重
   * @param {number} [config.alignmentWeight=1.0] - 对齐权重
   * @param {number} [config.cohesionWeight=1.0] - 聚合权重
   * @param {number} [config.maxSpeed=2.0] - 最大速度
   * @param {number} [config.maxForce=0.03] - 最大转向力
   * @param {number[]} [config.bounds=[20,10,20]] - 活动边界 [x,y,z]
   * @param {number} [config.boundaryForce=0.5] - 边界反弹力
   */
  constructor(config = {}) {
    this.count = config.count || 50;
    this.rng = new DeterministicRNG(config.seed ?? 42);

    // Boids 参数
    this.separationDist = config.separationDist ?? 1.5;
    this.alignmentDist = config.alignmentDist ?? 3.0;
    this.cohesionDist = config.cohesionDist ?? 4.0;
    this.separationWeight = config.separationWeight ?? 1.5;
    this.alignmentWeight = config.alignmentWeight ?? 1.0;
    this.cohesionWeight = config.cohesionWeight ?? 1.0;
    this.maxSpeed = config.maxSpeed ?? 2.0;
    this.maxForce = config.maxForce ?? 0.03;
    this.bounds = config.bounds ?? [20, 10, 20];
    this.boundaryForce = config.boundaryForce ?? 0.5;

    // 状态数组
    /** @type {Float32Array} 位置 [x,y,z, x,y,z, ...] */
    this.positions = new Float32Array(this.count * 3);
    /** @type {Float32Array} 速度 [vx,vy,vz, ...] */
    this.velocities = new Float32Array(this.count * 3);
    /** @type {Float32Array} 加速度 */
    this.accelerations = new Float32Array(this.count * 3);

    /** @type {THREE.DataTexture|null} GPU 位置纹理 */
    this._positionTexture = null;
    /** @type {THREE.DataTexture|null} GPU 速度纹理 */
    this._velocityTexture = null;

    this._initialize();
  }

  /** 初始化 Boid 群体的随机位置和速度 */
  _initialize() {
    this.rng.reset();
    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;
      // 随机位置 (在边界内)
      this.positions[i3]     = this.rng.range(-this.bounds[0] * 0.5, this.bounds[0] * 0.5);
      this.positions[i3 + 1] = this.rng.range(1, this.bounds[1]);
      this.positions[i3 + 2] = this.rng.range(-this.bounds[2] * 0.5, this.bounds[2] * 0.5);

      // 随机初始速度
      const speed = this.rng.range(0.5, this.maxSpeed);
      const theta = this.rng.range(0, Math.PI * 2);
      const phi = this.rng.range(-0.3, 0.3);
      this.velocities[i3]     = Math.cos(theta) * Math.cos(phi) * speed;
      this.velocities[i3 + 1] = Math.sin(phi) * speed * 0.3;
      this.velocities[i3 + 2] = Math.sin(theta) * Math.cos(phi) * speed;
    }
  }

  /**
   * 更新一帧 (CPU 模式)
   * @param {number} deltaTime
   */
  update(deltaTime) {
    const dt = Math.min(deltaTime, 0.05); // 限帧防止爆炸

    // 清零加速度
    this.accelerations.fill(0);

    // 计算所有 Boid 之间的交互力
    for (let i = 0; i < this.count; i++) {
      this._computeForces(i);
    }

    // 积分位置和速度
    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;

      // 速度 += 加速度
      this.velocities[i3]     += this.accelerations[i3] * dt;
      this.velocities[i3 + 1] += this.accelerations[i3 + 1] * dt;
      this.velocities[i3 + 2] += this.accelerations[i3 + 2] * dt;

      // 限制最大速度
      const speed = Math.sqrt(
        this.velocities[i3] ** 2 +
        this.velocities[i3 + 1] ** 2 +
        this.velocities[i3 + 2] ** 2
      );
      if (speed > this.maxSpeed) {
        const s = this.maxSpeed / speed;
        this.velocities[i3] *= s;
        this.velocities[i3 + 1] *= s;
        this.velocities[i3 + 2] *= s;
      }

      // 位置 += 速度
      this.positions[i3]     += this.velocities[i3] * dt;
      this.positions[i3 + 1] += this.velocities[i3 + 1] * dt;
      this.positions[i3 + 2] += this.velocities[i3 + 2] * dt;

      // 边界约束（柔性反弹）
      this._applyBoundary(i);
    }

    // 更新 GPU 纹理（如果存在）
    if (this._positionTexture) this._updateTextures();
  }

  /**
   * 计算单个 Boid 的三规则力
   * @private
   */
  _computeForces(index) {
    const i3 = index * 3;
    const px = this.positions[i3], py = this.positions[i3 + 1], pz = this.positions[i3 + 2];

    let sepX = 0, sepY = 0, sepZ = 0, sepCount = 0;
    let aliX = 0, aliY = 0, aliZ = 0, aliCount = 0;
    let cohX = 0, cohY = 0, cohZ = 0, cohCount = 0;

    for (let j = 0; j < this.count; j++) {
      if (j === index) continue;
      const j3 = j * 3;
      const dx = this.positions[j3] - px;
      const dy = this.positions[j3 + 1] - py;
      const dz = this.positions[j3 + 2] - pz;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < 0.001) continue;

      // 分离: 远离太近的邻居
      if (dist < this.separationDist) {
        const w = 1.0 / dist;
        sepX -= dx * w;
        sepY -= dy * w;
        sepZ -= dz * w;
        sepCount++;
      }

      // 对齐: 匹配邻居的速度方向
      if (dist < this.alignmentDist) {
        aliX += this.velocities[j3];
        aliY += this.velocities[j3 + 1];
        aliZ += this.velocities[j3 + 2];
        aliCount++;
      }

      // 聚合: 向邻居的中心移动
      if (dist < this.cohesionDist) {
        cohX += this.positions[j3];
        cohY += this.positions[j3 + 1];
        cohZ += this.positions[j3 + 2];
        cohCount++;
      }
    }

    // 归一化并施力
    const applyForce = (fx, fy, fz, weight) => {
      const len = Math.sqrt(fx * fx + fy * fy + fz * fz);
      if (len > 0) {
        const s = Math.min(this.maxForce * weight / len, this.maxForce * weight);
        this.accelerations[i3]     += fx * s;
        this.accelerations[i3 + 1] += fy * s;
        this.accelerations[i3 + 2] += fz * s;
      }
    };

    if (sepCount > 0) applyForce(sepX, sepY, sepZ, this.separationWeight);
    if (aliCount > 0) applyForce(aliX / aliCount - this.velocities[i3], aliY / aliCount - this.velocities[i3 + 1], aliZ / aliCount - this.velocities[i3 + 2], this.alignmentWeight);
    if (cohCount > 0) applyForce(cohX / cohCount - px, cohY / cohCount - py, cohZ / cohCount - pz, this.cohesionWeight);
  }

  /**
   * 应用边界约束
   * @private
   */
  _applyBoundary(index) {
    const i3 = index * 3;
    const margin = 2.0;
    const [bx, by, bz] = this.bounds;

    for (let axis = 0; axis < 3; axis++) {
      const bound = this.bounds[axis] * 0.5;
      const pos = this.positions[i3 + axis];
      if (axis === 1) {
        // Y 轴: 保持在 [0.5, by] 范围内
        if (pos < 0.5) this.velocities[i3 + axis] += this.boundaryForce;
        if (pos > by) this.velocities[i3 + axis] -= this.boundaryForce;
      } else {
        if (pos < -bound + margin) this.velocities[i3 + axis] += this.boundaryForce;
        if (pos > bound - margin) this.velocities[i3 + axis] -= this.boundaryForce;
      }
    }
  }

  /**
   * 应用状态到 InstancedMesh
   * @param {THREE.InstancedMesh} instancedMesh
   */
  applyToInstancedMesh(instancedMesh) {
    const dummy = new THREE.Object3D();
    const _q = new THREE.Quaternion();
    const _up = new THREE.Vector3(0, 1, 0);
    const _dir = new THREE.Vector3();

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;

      dummy.position.set(
        this.positions[i3],
        this.positions[i3 + 1],
        this.positions[i3 + 2]
      );

      // 朝向速度方向
      _dir.set(
        this.velocities[i3],
        this.velocities[i3 + 1],
        this.velocities[i3 + 2]
      ).normalize();

      dummy.quaternion.setFromUnitVectors(_up, _dir);

      // 添加微小的倾斜（转弯时倾斜）
      const bank = Math.atan2(this.accelerations[i3], 9.8) * 0.3;
      dummy.rotateZ(bank);

      dummy.updateMatrix();
      instancedMesh.setMatrixAt(i, dummy.matrix);
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
  }

  /**
   * 创建 GPU 数据纹理（用于大群体 Shader 模式）
   * @returns {{ positionTexture: THREE.DataTexture, velocityTexture: THREE.DataTexture }}
   */
  createGPUTextures() {
    const size = Math.ceil(Math.sqrt(this.count));
    const texSize = size * size;

    const posData = new Float32Array(texSize * 4);
    const velData = new Float32Array(texSize * 4);

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;
      const i4 = i * 4;
      posData[i4]     = this.positions[i3];
      posData[i4 + 1] = this.positions[i3 + 1];
      posData[i4 + 2] = this.positions[i3 + 2];
      posData[i4 + 3] = 1.0;

      velData[i4]     = this.velocities[i3];
      velData[i4 + 1] = this.velocities[i3 + 1];
      velData[i4 + 2] = this.velocities[i3 + 2];
      velData[i4 + 3] = 0.0;
    }

    this._positionTexture = new THREE.DataTexture(posData, size, size, THREE.RGBAFormat, THREE.FloatType);
    this._positionTexture.needsUpdate = true;

    this._velocityTexture = new THREE.DataTexture(velData, size, size, THREE.RGBAFormat, THREE.FloatType);
    this._velocityTexture.needsUpdate = true;

    return {
      positionTexture: this._positionTexture,
      velocityTexture: this._velocityTexture,
      textureSize: size
    };
  }

  /** @private */
  _updateTextures() {
    if (!this._positionTexture) return;

    const posData = this._positionTexture.image.data;
    const velData = this._velocityTexture.image.data;

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;
      const i4 = i * 4;
      posData[i4]     = this.positions[i3];
      posData[i4 + 1] = this.positions[i3 + 1];
      posData[i4 + 2] = this.positions[i3 + 2];
      velData[i4]     = this.velocities[i3];
      velData[i4 + 1] = this.velocities[i3 + 1];
      velData[i4 + 2] = this.velocities[i3 + 2];
    }

    this._positionTexture.needsUpdate = true;
    this._velocityTexture.needsUpdate = true;
  }

  /** 获取 Boids 状态的 GLSL 采样函数 */
  static gpuSampleFunction() {
    return /* glsl */`
      uniform sampler2D tBoidsPosition;
      uniform sampler2D tBoidsVelocity;
      uniform float uBoidsTexSize;

      vec4 getBoidPosition(int id) {
        float u = (mod(float(id), uBoidsTexSize) + 0.5) / uBoidsTexSize;
        float v = (floor(float(id) / uBoidsTexSize) + 0.5) / uBoidsTexSize;
        return texture(tBoidsPosition, vec2(u, v));
      }

      vec4 getBoidVelocity(int id) {
        float u = (mod(float(id), uBoidsTexSize) + 0.5) / uBoidsTexSize;
        float v = (floor(float(id) / uBoidsTexSize) + 0.5) / uBoidsTexSize;
        return texture(tBoidsVelocity, vec2(u, v));
      }
    `;
  }

  dispose() {
    if (this._positionTexture) this._positionTexture.dispose();
    if (this._velocityTexture) this._velocityTexture.dispose();
  }
}
