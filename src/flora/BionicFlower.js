import * as THREE from 'three';
import { ProceduralEntity } from '../core/ProceduralEntity.js';
import { ProceduralMaterial } from '../core/ProceduralMaterial.js';
import { ProceduralFactory } from '../core/ProceduralFactory.js';
import { PhyllotaxisEngine } from './PhyllotaxisEngine.js';

/**
 * BionicFlower - 程序化仿生花卉
 *
 * 特性:
 * - 基于 Fibonacci Phyllotaxis 的花瓣排列
 * - 参数化 Bézier 曲面花瓣生成
 * - GPU 驱动的绽放动画 (Morphing)
 * - SSS (次表面散射) 花瓣材质
 * - 完全零资产依赖
 *
 * @extends ProceduralEntity
 */
export class BionicFlower extends ProceduralEntity {
  /**
   * @param {Object} params
   * @param {number} [params.seed=42]
   * @param {number} [params.petalCount=8] - 每层花瓣数
   * @param {number} [params.whorls=3] - 花瓣层数
   * @param {number} [params.petalWidth=0.35] - 花瓣宽度
   * @param {number} [params.petalLength=1.0] - 花瓣长度
   * @param {number} [params.curl=0.4] - 花瓣卷曲度
   * @param {number} [params.bloomPhase=1.0] - 绽放相位 [0=花苞, 1=全开]
   * @param {number[]} [params.color=[1.0, 0.4, 0.6]] - 花瓣颜色 RGB
   * @param {number[]} [params.innerColor=[1.0, 0.9, 0.3]] - 花芯颜色
   * @param {number} [params.sssIntensity=0.6] - 次表面散射强度
   * @param {number} [params.petalSegments=12] - 花瓣网格细分
   * @param {boolean} [params.animated=true] - 是否启用GPU动画
   */
  constructor(params = {}) {
    super({
      petalCount: 8,
      whorls: 3,
      petalWidth: 0.35,
      petalLength: 1.0,
      curl: 0.4,
      bloomPhase: 1.0,
      color: [1.0, 0.4, 0.6],
      innerColor: [1.0, 0.9, 0.3],
      sssIntensity: 0.6,
      petalSegments: 12,
      animated: true,
      ...params
    });
  }

  /**
   * 构建花瓣几何体
   * 使用 Bézier 曲面方程参数化生成
   */
  _buildGeometry() {
    const p = this._params;
    const group = new THREE.BufferGeometry();

    // 获取花瓣排列数据
    const petals = PhyllotaxisEngine.petalArrangement({
      petalCount: p.petalCount,
      whorls: p.whorls,
      innerRadius: 0.15,
      outerRadius: 0.5,
      heightSpread: 0.2,
      curlFactor: p.curl
    });

    const allPositions = [];
    const allNormals = [];
    const allUvs = [];
    const allIndices = [];
    const allPetalIds = []; // 用于 shader 动画
    const allWhorlIds = [];

    const seg = p.petalSegments;

    for (const petal of petals) {
      const vertexOffset = allPositions.length / 3;

      // 获取此花瓣的贝塞尔控制点
      const cp = PhyllotaxisEngine.petalBezierControlPoints({
        width: p.petalWidth * petal.scale,
        length: p.petalLength * petal.scale,
        curl: p.curl * petal.curl,
        tipSharpness: 0.3 + this.rng.next() * 0.2
      });

      // 生成花瓣网格
      for (let vi = 0; vi <= seg; vi++) {
        const v = vi / seg;
        for (let ui = 0; ui <= seg; ui++) {
          const u = ui / seg;

          // 双三次贝塞尔曲面求值
          const point = this._evaluateBezierSurface(cp, u, v);

          // 将花瓣中心居中 (偏移到 -width/2)
          const hw = p.petalWidth * petal.scale * 0.5;
          point[0] -= hw;

          // 应用花瓣旋转和位置
          const rotated = this._rotatePoint(
            point,
            petal.angle,
            petal.radius,
            petal.height
          );

          allPositions.push(rotated[0], rotated[1], rotated[2]);
          allUvs.push(u, v);
          allPetalIds.push(petal.index);
          allWhorlIds.push(petal.whorl);
        }
      }

      // 计算法线 (通过有限差分)
      const vertsPerPetal = (seg + 1) * (seg + 1);
      for (let vi = 0; vi <= seg; vi++) {
        for (let ui = 0; ui <= seg; ui++) {
          const idx = vertexOffset + vi * (seg + 1) + ui;
          const normal = this._computeNormal(allPositions, idx, ui, vi, seg, vertexOffset);
          allNormals.push(normal[0], normal[1], normal[2]);
        }
      }

      // 索引
      for (let vi = 0; vi < seg; vi++) {
        for (let ui = 0; ui < seg; ui++) {
          const a = vertexOffset + vi * (seg + 1) + ui;
          const b = a + 1;
          const c = a + (seg + 1);
          const d = c + 1;
          allIndices.push(a, b, d, a, d, c);
        }
      }
    }

    // 添加花芯 (中心球)
    this._addPistil(allPositions, allNormals, allUvs, allIndices, allPetalIds, allWhorlIds);

    group.setAttribute('position', new THREE.Float32BufferAttribute(allPositions, 3));
    group.setAttribute('normal', new THREE.Float32BufferAttribute(allNormals, 3));
    group.setAttribute('uv', new THREE.Float32BufferAttribute(allUvs, 2));
    group.setAttribute('aPetalId', new THREE.Float32BufferAttribute(allPetalIds, 1));
    group.setAttribute('aWhorlId', new THREE.Float32BufferAttribute(allWhorlIds, 1));
    group.setIndex(allIndices);

    group.computeBoundingSphere();
    return group;
  }

  /**
   * 构建 SSS 花瓣材质
   * 集成次表面散射、Fresnel 边缘光
   */
  _buildMaterial() {
    const p = this._params;

    const vertexShader = /* glsl */`
      precision highp float;

      uniform float uTime;
      uniform float uBloomPhase;
      uniform float uRandomSeed;

      attribute float aPetalId;
      attribute float aWhorlId;

      out vec3 vNormal;
      out vec3 vWorldPosition;
      out vec2 vUv;
      out vec3 vViewDir;
      out float vPetalId;
      out float vWhorlId;

      // 简化噪声
      float hash(float n) { return fract(sin(n) * 43758.5453123); }

      void main() {
        vUv = uv;
        vPetalId = aPetalId;
        vWhorlId = aWhorlId;

        vec3 pos = position;

        // GPU 绽放动画 - 花瓣展开 (非线性正弦波偏导数)
        float petalPhase = hash(aPetalId * 13.37 + uRandomSeed) * 0.3;
        float bloomT = clamp(uBloomPhase + sin(uTime * 0.5 + petalPhase) * 0.05, 0.0, 1.0);

        // 花瓣根据绽放相位展开
        float openAngle = (1.0 - bloomT) * 1.2;
        float distFromCenter = length(pos.xz);

        // 花瓣向上卷曲（花苞状态）
        pos.y += distFromCenter * openAngle * 0.8;
        pos.xz *= mix(0.3, 1.0, bloomT);

        // 微风摆动 (GPU 级非线性正弦波)
        float windPhase = aPetalId * 0.5 + uRandomSeed;
        float windStrength = 0.02 * (1.0 + sin(uTime * 2.3 + windPhase));
        pos.x += sin(uTime * 1.7 + pos.y * 3.0 + windPhase) * windStrength;
        pos.z += cos(uTime * 1.3 + pos.y * 2.0 + windPhase) * windStrength * 0.7;

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
      uniform vec3 uPetalColor;
      uniform vec3 uInnerColor;
      uniform float uSSSIntensity;
      uniform float uBloomPhase;

      in vec3 vNormal;
      in vec3 vWorldPosition;
      in vec2 vUv;
      in vec3 vViewDir;
      in float vPetalId;
      in float vWhorlId;

      out vec4 fragColor;

      ${ProceduralMaterial.sssFunction()}
      ${ProceduralMaterial.fresnelFunction()}

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewDir);
        vec3 lightDir = normalize(vec3(0.5, 1.0, 0.3));

        // 花瓣颜色渐变 (中心到边缘)
        float centerDist = length(vUv - vec2(0.5, 0.0));
        vec3 baseColor = mix(uInnerColor, uPetalColor, smoothstep(0.0, 0.6, vUv.y));

        // 花脉纹理 (程序化)
        float veinPattern = abs(sin(vUv.x * 20.0 + vUv.y * 5.0)) * 0.1;
        baseColor -= veinPattern * 0.15;

        // 基础漫反射
        float NdotL = max(dot(normal, lightDir), 0.0);
        float diffuse = NdotL * 0.6 + 0.4; // wrap lighting

        // 次表面散射
        float thickness = 1.0 - vUv.y * 0.5; // 花瓣越远越薄
        vec3 sss = subsurfaceScattering(
          lightDir, viewDir, normal,
          uPetalColor * 1.5, uSSSIntensity, 4.0,
          thickness
        );

        // Fresnel 边缘光
        float fresnel = fresnelSchlick(max(dot(normal, viewDir), 0.0), 0.04);
        vec3 rimLight = vec3(1.0, 0.9, 0.95) * fresnel * 0.5;

        // 花瓣半透明（背光时可见）
        float backLight = max(dot(-normal, lightDir), 0.0);
        vec3 translucency = uPetalColor * backLight * 0.4 * thickness;

        // 最终合成
        vec3 finalColor = baseColor * diffuse + sss + rimLight + translucency;

        // 柔和的花瓣边缘 Alpha
        float edgeAlpha = smoothstep(0.0, 0.05, vUv.x) * smoothstep(1.0, 0.95, vUv.x);
        float tipAlpha = smoothstep(1.0, 0.85, vUv.y);
        float alpha = edgeAlpha * tipAlpha;

        // Gamma 校正
        finalColor = pow(finalColor, vec3(1.0 / 2.2));

        fragColor = vec4(finalColor, alpha);
      }
    `;

    return new ProceduralMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: true,
      uniforms: {
        uPetalColor: { value: new THREE.Vector3(...p.color) },
        uInnerColor: { value: new THREE.Vector3(...p.innerColor) },
        uSSSIntensity: { value: p.sssIntensity },
        uBloomPhase: { value: p.bloomPhase },
        uRandomSeed: { value: p.seed * 0.001 }
      }
    });
  }

  // =============================================
  // 私有辅助方法
  // =============================================

  /**
   * 双三次贝塞尔曲面求值
   * @param {Array<Array<number[]>>} cp - 4x4 控制点
   * @param {number} u - U 参数 [0, 1]
   * @param {number} v - V 参数 [0, 1]
   * @returns {number[]} [x, y, z]
   */
  _evaluateBezierSurface(cp, u, v) {
    const bernstein = (t) => {
      const t2 = t * t;
      const t3 = t2 * t;
      const mt = 1 - t;
      const mt2 = mt * mt;
      const mt3 = mt2 * mt;
      return [mt3, 3 * mt2 * t, 3 * mt * t2, t3];
    };

    const bu = bernstein(u);
    const bv = bernstein(v);

    let x = 0, y = 0, z = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const w = bu[j] * bv[i];
        x += cp[i][j][0] * w;
        y += cp[i][j][1] * w;
        z += cp[i][j][2] * w;
      }
    }

    return [x, y, z];
  }

  /**
   * 将花瓣点旋转到正确位置
   */
  _rotatePoint(point, angle, radius, height) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return [
      point[0] * cos - point[2] * sin + cos * radius,
      point[1] + height,
      point[0] * sin + point[2] * cos + sin * radius
    ];
  }

  /**
   * 计算法线（有限差分法）
   */
  _computeNormal(positions, idx, ui, vi, seg, offset) {
    const getPos = (i) => {
      const base = i * 3;
      return [positions[base], positions[base + 1], positions[base + 2]];
    };

    const center = getPos(idx);
    let tangentU, tangentV;

    if (ui < seg) {
      const right = getPos(idx + 1);
      tangentU = [right[0] - center[0], right[1] - center[1], right[2] - center[2]];
    } else {
      const left = getPos(idx - 1);
      tangentU = [center[0] - left[0], center[1] - left[1], center[2] - left[2]];
    }

    if (vi < seg) {
      const up = getPos(idx + seg + 1);
      tangentV = [up[0] - center[0], up[1] - center[1], up[2] - center[2]];
    } else {
      const down = getPos(idx - seg - 1);
      tangentV = [center[0] - down[0], center[1] - down[1], center[2] - down[2]];
    }

    // Cross product
    const nx = tangentU[1] * tangentV[2] - tangentU[2] * tangentV[1];
    const ny = tangentU[2] * tangentV[0] - tangentU[0] * tangentV[2];
    const nz = tangentU[0] * tangentV[1] - tangentU[1] * tangentV[0];
    const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;

    return [nx / len, ny / len, nz / len];
  }

  /**
   * 添加花芯（中心球体 + 花蕊）
   */
  _addPistil(positions, normals, uvs, indices, petalIds, whorlIds) {
    const offset = positions.length / 3;
    const segments = 8;
    const radius = 0.12;

    // 球面斐波那契分布的花蕊
    const pistilPoints = PhyllotaxisEngine.fibonacciSphere(32, radius);

    for (const pt of pistilPoints) {
      positions.push(pt.x, pt.y + 0.05, pt.z);
      const len = Math.sqrt(pt.x ** 2 + pt.y ** 2 + pt.z ** 2) || 1;
      normals.push(pt.x / len, pt.y / len, pt.z / len);
      uvs.push(pt.theta / (Math.PI * 2), pt.phi / Math.PI);
      petalIds.push(-1); // 标记为花芯
      whorlIds.push(-1);
    }

    // 简单三角扇形索引
    for (let i = 1; i < pistilPoints.length - 1; i++) {
      indices.push(offset, offset + i, offset + i + 1);
    }
  }

  /**
   * 设置绽放相位
   * @param {number} phase - [0=花苞, 1=全开]
   * @returns {this}
   */
  setBloomPhase(phase) {
    if (this._material) {
      this._material.uniforms.uBloomPhase.value = phase;
    }
    return this;
  }
}

// 注册到工厂
ProceduralFactory.register('BionicFlower', BionicFlower, {
  petalCount: 8,
  whorls: 3,
  color: [1.0, 0.4, 0.6]
});
