import * as THREE from 'three';
import { ProceduralEntity } from '../core/ProceduralEntity.js';
import { ProceduralMaterial } from '../core/ProceduralMaterial.js';
import { ProceduralFactory } from '../core/ProceduralFactory.js';
import { VertexKinematics } from './VertexKinematics.js';
import { BoidsFlocking } from './BoidsFlocking.js';

/**
 * BionicButterfly - 程序化仿生蝴蝶
 *
 * 特性:
 * - 程序化对称翅膀几何体 (Bézier 曲面)
 * - GPU Vertex Shader 驱动的高频振翅动画
 * - 薄膜干涉 (Thin-film Iridescence) 结构色材质
 * - 各向异性高光 (Anisotropic Specular)
 * - 支持 InstancedMesh + Boids 群体模式
 *
 * @extends ProceduralEntity
 */
export class BionicButterfly extends ProceduralEntity {
  /**
   * @param {Object} params
   * @param {number} [params.seed=42]
   * @param {number} [params.wingSpan=1.5] - 翅膀展幅
   * @param {number} [params.wingAspect=1.2] - 翅膀长宽比
   * @param {number} [params.wingSegments=16] - 翅膀网格细分
   * @param {number} [params.flapFrequency=8.0] - 扇动频率 (Hz)
   * @param {number} [params.flapAmplitude=0.8] - 扇动振幅
   * @param {number[]} [params.baseColor=[0.1, 0.05, 0.2]] - 翅膀基础色
   * @param {number} [params.filmThickness=400.0] - 薄膜厚度 (nm)
   * @param {number} [params.ior=1.5] - 折射率
   * @param {number} [params.iridescenceIntensity=0.8] - 干涉色强度
   * @param {number} [params.flockCount=0] - 群体数量 (0=单体)
   */
  constructor(params = {}) {
    super({
      wingSpan: 1.5,
      wingAspect: 1.2,
      wingSegments: 16,
      flapFrequency: 8.0,
      flapAmplitude: 0.8,
      baseColor: [0.1, 0.05, 0.2],
      filmThickness: 400.0,
      ior: 1.5,
      iridescenceIntensity: 0.8,
      flockCount: 0,
      ...params
    });

    /** @type {BoidsFlocking|null} */
    this._boids = null;
  }

  /**
   * 构建蝴蝶翅膀几何体
   * 对称结构，左右各一片翅膀 + 身体
   */
  _buildGeometry() {
    const p = this._params;
    const seg = p.wingSegments;
    const span = p.wingSpan;
    const aspect = p.wingAspect;

    const positions = [];
    const normals = [];
    const uvs = [];
    const indices = [];
    const wingMask = []; // 0=身体, >0=翅膀 (用于 shader 中的翅膀位移)

    // === 生成一侧翅膀然后镜像 ===
    for (let side = 0; side < 2; side++) {
      const mirror = side === 0 ? 1 : -1;
      const vertOffset = positions.length / 3;

      for (let vi = 0; vi <= seg; vi++) {
        const v = vi / seg; // 0 = 翅根, 1 = 翅尖
        for (let ui = 0; ui <= seg; ui++) {
          const u = ui / seg; // 0 = 前缘, 1 = 后缘

          // 翅膀轮廓方程 (仿蝴蝶翅形)
          const wingWidth = span * 0.5 * this._wingProfile(v);
          const wingLength = span * aspect;

          const x = mirror * (v * wingWidth + 0.05); // 左右对称
          const z = (u - 0.5) * wingLength * this._wingChord(v);
          const y = this._wingCamber(u, v) * 0.1; // 翅膀微拱

          positions.push(x, y, z);
          normals.push(0, 1, 0); // 初始法线，后面重算
          uvs.push(u, v);
          wingMask.push(v); // 翅尖 mask 越大
        }
      }

      // 索引
      for (let vi = 0; vi < seg; vi++) {
        for (let ui = 0; ui < seg; ui++) {
          const a = vertOffset + vi * (seg + 1) + ui;
          const b = a + 1;
          const c = a + (seg + 1);
          const d = c + 1;
          if (side === 0) {
            indices.push(a, b, d, a, d, c);
          } else {
            indices.push(a, d, b, a, c, d); // 反面
          }
        }
      }
    }

    // === 身体 (圆柱形) ===
    const bodyOffset = positions.length / 3;
    const bodySegs = 8;
    const bodyLen = span * aspect * 0.6;
    const bodyRadius = 0.03;

    for (let i = 0; i <= bodySegs; i++) {
      const t = i / bodySegs;
      const z = (t - 0.5) * bodyLen;
      const r = bodyRadius * (1.0 - Math.abs(t - 0.4) * 1.5);

      for (let j = 0; j <= bodySegs; j++) {
        const angle = (j / bodySegs) * Math.PI * 2;
        positions.push(
          Math.cos(angle) * Math.max(r, 0.005),
          Math.sin(angle) * Math.max(r, 0.005),
          z
        );
        normals.push(Math.cos(angle), Math.sin(angle), 0);
        uvs.push(j / bodySegs, t);
        wingMask.push(0); // 身体不参与翅膀动画
      }
    }

    for (let i = 0; i < bodySegs; i++) {
      for (let j = 0; j < bodySegs; j++) {
        const a = bodyOffset + i * (bodySegs + 1) + j;
        const b = a + 1;
        const c = a + (bodySegs + 1);
        const d = c + 1;
        indices.push(a, b, d, a, d, c);
      }
    }

    // 重新计算法线
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setAttribute('aWingMask', new THREE.Float32BufferAttribute(wingMask, 1));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    geo.computeBoundingSphere();

    return geo;
  }

  /**
   * 构建薄膜干涉 + 各向异性高光材质
   */
  _buildMaterial() {
    const p = this._params;

    const vertexShader = /* glsl */`
      precision highp float;

      uniform float uTime;
      uniform float uFlapFrequency;
      uniform float uFlapAmplitude;
      uniform float uRandomSeed;
      uniform float uWingSpan;

      attribute float aWingMask;

      out vec3 vNormal;
      out vec3 vWorldPosition;
      out vec2 vUv;
      out vec3 vViewDir;
      out float vWingMask;
      out vec3 vTangent;

      ${VertexKinematics.wingFlapFunction()}

      void main() {
        vUv = uv;
        vWingMask = aWingMask;

        vec3 pos = position;

        // GPU 翅膀扇动 (通过 Vertex Kinematics)
        if (aWingMask > 0.01) {
          float phase = uRandomSeed * 6.283;
          pos = wingFlap(pos, uWingSpan * 0.5, phase, uTime, uFlapFrequency, uFlapAmplitude);
        }

        // 计算切线（用于各向异性高光）
        vTangent = normalize(vec3(0.0, 0.0, 1.0)); // 沿翅膀前后缘方向

        vNormal = normalize(normalMatrix * normal);

        vec4 worldPos = modelMatrix * vec4(pos, 1.0);
        vWorldPosition = worldPos.xyz;
        vViewDir = normalize(cameraPosition - worldPos.xyz);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = /* glsl */`
      precision highp float;

      uniform float uTime;
      uniform vec3 uBaseColor;
      uniform float uFilmThickness;
      uniform float uIOR;
      uniform float uIridescenceIntensity;
      uniform float uRandomSeed;

      in vec3 vNormal;
      in vec3 vWorldPosition;
      in vec2 vUv;
      in vec3 vViewDir;
      in float vWingMask;
      in vec3 vTangent;

      out vec4 fragColor;

      ${ProceduralMaterial.thinFilmIridescenceFunction()}
      ${ProceduralMaterial.anisotropicSpecularFunction()}
      ${ProceduralMaterial.fresnelFunction()}

      // 翅膀图案 (程序化)
      float wingPattern(vec2 uv, float seed) {
        // 蝴蝶翅膀的纹脉结构
        float vein = smoothstep(0.48, 0.5, abs(fract(uv.y * 8.0 + seed) - 0.5));
        float cell = smoothstep(0.45, 0.5, abs(fract(uv.x * 6.0 + uv.y * 3.0 + seed * 2.0) - 0.5));

        // 眼斑
        float eyeSpot = 1.0 - smoothstep(0.0, 0.15,
          length(uv - vec2(0.6, 0.5 + seed * 0.1)));
        eyeSpot += 1.0 - smoothstep(0.0, 0.08,
          length(uv - vec2(0.6, 0.5 + seed * 0.1))) * 0.5;

        return max(vein * cell, eyeSpot);
      }

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewDir);
        vec3 lightDir = normalize(vec3(0.5, 1.0, 0.3));

        float NdotV = max(dot(normal, viewDir), 0.0);

        // 薄膜干涉色
        float filmVar = uFilmThickness + sin(vUv.x * 10.0 + vUv.y * 5.0) * 50.0;
        vec3 iridescence = thinFilmIridescence(NdotV, filmVar, uIOR);

        // 翅膀图案
        float pattern = wingPattern(vUv, uRandomSeed);

        // 基础色 + 干涉色混合
        vec3 baseColor = uBaseColor;
        vec3 surfaceColor = mix(baseColor, iridescence, uIridescenceIntensity * (0.5 + 0.5 * pattern));

        // 各向异性高光
        vec3 tangent = normalize(vTangent);
        float anisoSpec = anisotropicSpecular(lightDir, viewDir, normal, tangent, 0.3, 0.05);
        vec3 specular = vec3(1.0, 0.95, 0.9) * anisoSpec * 0.5;

        // 漫反射
        float NdotL = max(dot(normal, lightDir), 0.0);
        float diffuse = NdotL * 0.7 + 0.3;

        // Fresnel 边缘光
        float fresnel = fresnelSchlick(NdotV, 0.04);
        vec3 rimLight = iridescence * fresnel * 0.4;

        // 半透明 (背光效果)
        float backLight = max(dot(-normal, lightDir), 0.0);
        vec3 translucency = surfaceColor * backLight * 0.3;

        // 合成
        vec3 finalColor = surfaceColor * diffuse + specular + rimLight + translucency;

        // 翅膀边缘衰减
        float edgeMask = vWingMask > 0.01 ? smoothstep(1.0, 0.8, vWingMask) : 1.0;
        float alpha = vWingMask > 0.01 ? edgeMask * 0.95 : 1.0;

        // 身体使用深色
        if (vWingMask < 0.01) {
          finalColor = vec3(0.02, 0.01, 0.03) * (diffuse * 0.5 + 0.5);
          alpha = 1.0;
        }

        finalColor = pow(finalColor, vec3(1.0 / 2.2));
        fragColor = vec4(finalColor, alpha);
      }
    `;

    return new ProceduralMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: {
        uBaseColor: { value: new THREE.Vector3(...p.baseColor) },
        uFilmThickness: { value: p.filmThickness },
        uIOR: { value: p.ior },
        uIridescenceIntensity: { value: p.iridescenceIntensity },
        uFlapFrequency: { value: p.flapFrequency },
        uFlapAmplitude: { value: p.flapAmplitude },
        uWingSpan: { value: p.wingSpan },
        uRandomSeed: { value: p.seed * 0.001 }
      }
    });
  }

  /**
   * 构建网格 - 支持群体 InstancedMesh 模式
   */
  _buildMesh() {
    const p = this._params;

    if (p.flockCount > 0) {
      // 群体模式: 使用 InstancedMesh
      const mesh = new THREE.InstancedMesh(this._geometry, this._material, p.flockCount);
      mesh.frustumCulled = false;

      // 初始化 Boids
      this._boids = new BoidsFlocking({
        count: p.flockCount,
        seed: p.seed,
        maxSpeed: 3.0,
        bounds: [30, 15, 30]
      });

      this._boids.applyToInstancedMesh(mesh);
      return mesh;
    }

    return new THREE.Mesh(this._geometry, this._material);
  }

  // =============================================
  // 翅膀形状参数方程
  // =============================================

  /**
   * 翅膀宽度轮廓 (沿展幅方向)
   * @param {number} t - 翅根到翅尖 [0, 1]
   */
  _wingProfile(t) {
    // 仿蝴蝶翅膀轮廓: 先宽后窄
    return Math.sin(t * Math.PI) * (1.0 - t * 0.3);
  }

  /**
   * 翅膀弦长分布
   * @param {number} t - 翅根到翅尖 [0, 1]
   */
  _wingChord(t) {
    // 翅根弦长最大，翅尖收窄
    return 1.0 - t * t * 0.5;
  }

  /**
   * 翅膀拱度 (弯曲程度)
   */
  _wingCamber(u, v) {
    return Math.sin(u * Math.PI) * (1.0 - v) * 0.5;
  }

  /**
   * 更新群体模拟 (每帧调用)
   * @param {number} deltaTime
   * @returns {this}
   */
  updateFlock(deltaTime) {
    if (this._boids && this._mesh) {
      this._boids.update(deltaTime);
      this._boids.applyToInstancedMesh(this._mesh);
    }
    return this;
  }

  /**
   * 获取 Boids 系统
   * @returns {BoidsFlocking|null}
   */
  getBoids() {
    return this._boids;
  }

  dispose() {
    super.dispose();
    if (this._boids) {
      this._boids.dispose();
      this._boids = null;
    }
  }
}

// 注册到工厂
ProceduralFactory.register('BionicButterfly', BionicButterfly, {
  wingSpan: 1.5,
  baseColor: [0.1, 0.05, 0.2],
  filmThickness: 400.0
});
