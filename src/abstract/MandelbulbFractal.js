import * as THREE from 'three';
import { ProceduralEntity } from '../core/ProceduralEntity.js';
import { ProceduralMaterial } from '../core/ProceduralMaterial.js';
import { ProceduralFactory } from '../core/ProceduralFactory.js';
import { SimplexNoise4D } from './SimplexNoise4D.js';

/**
 * MandelbulbFractal - Mandelbulb 3D 分形折叠拓扑
 *
 * 基于 Raymarching SDF 的实时 Mandelbulb 分形渲染
 * 使用全屏四边形 + Fragment Shader 实现体积渲染
 *
 * @extends ProceduralEntity
 */
export class MandelbulbFractal extends ProceduralEntity {
  /**
   * @param {Object} params
   * @param {number} [params.seed=42]
   * @param {number} [params.power=8.0] - 分形幂次
   * @param {number} [params.iterations=12] - 迭代次数
   * @param {number} [params.bailout=2.0] - 逃逸半径
   * @param {number} [params.scale=2.0] - 缩放
   * @param {number[]} [params.colorA=[0.1, 0.2, 0.6]] - 颜色 A
   * @param {number[]} [params.colorB=[0.9, 0.3, 0.1]] - 颜色 B
   * @param {number} [params.glowIntensity=0.5] - 辉光强度
   * @param {boolean} [params.animate=true] - 动态幂次变化
   */
  constructor(params = {}) {
    super({
      power: 8.0,
      iterations: 12,
      bailout: 2.0,
      scale: 2.0,
      colorA: [0.1, 0.2, 0.6],
      colorB: [0.9, 0.3, 0.1],
      glowIntensity: 0.5,
      animate: true,
      ...params
    });
  }

  /**
   * 全屏四边形几何体 (用于 Raymarching)
   */
  _buildGeometry() {
    const geo = new THREE.PlaneGeometry(2, 2);
    return geo;
  }

  /**
   * Mandelbulb Raymarching 材质
   */
  _buildMaterial() {
    const p = this._params;

    const vertexShader = /* glsl */`
      precision highp float;
      out vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `;

    const fragmentShader = /* glsl */`
      precision highp float;

      uniform float uTime;
      uniform vec2 uResolution;
      uniform float uPower;
      uniform int uIterations;
      uniform float uBailout;
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform float uGlowIntensity;
      uniform float uAnimate;
      uniform float uScale;

      in vec2 vUv;
      out vec4 fragColor;

      ${SimplexNoise4D.glsl()}

      // Mandelbulb SDF
      vec2 mandelbulbDE(vec3 pos) {
        vec3 z = pos;
        float dr = 1.0;
        float r = 0.0;
        float trap = 1e10;
        float power = uPower + uAnimate * sin(uTime * 0.3) * 2.0;

        for (int i = 0; i < 20; i++) {
          if (i >= uIterations) break;
          r = length(z);
          if (r > uBailout) break;

          // 球坐标转换
          float theta = acos(z.z / r);
          float phi = atan(z.y, z.x);
          dr = pow(r, power - 1.0) * power * dr + 1.0;

          // 分形折叠
          float zr = pow(r, power);
          theta = theta * power;
          phi = phi * power;

          z = zr * vec3(
            sin(theta) * cos(phi),
            sin(phi) * sin(theta),
            cos(theta)
          );
          z += pos;

          // 轨道陷阱 (用于着色)
          trap = min(trap, length(z));
        }

        return vec2(0.5 * log(r) * r / dr, trap);
      }

      // 场景 SDF
      float map(vec3 p) {
        return mandelbulbDE(p / uScale).x * uScale;
      }

      // 法线计算
      vec3 calcNormal(vec3 p) {
        vec2 e = vec2(0.0005, 0.0);
        return normalize(vec3(
          map(p + e.xyy) - map(p - e.xyy),
          map(p + e.yxy) - map(p - e.yxy),
          map(p + e.yyx) - map(p - e.yyx)
        ));
      }

      // AO
      float calcAO(vec3 p, vec3 n) {
        float occ = 0.0, sca = 1.0;
        for (int i = 0; i < 5; i++) {
          float h = 0.01 + 0.05 * float(i);
          occ += (h - map(p + h * n)) * sca;
          sca *= 0.85;
        }
        return clamp(1.0 - 2.0 * occ, 0.0, 1.0);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;

        // 相机设置 (轨道相机)
        float camDist = 3.5;
        float camAngle = uTime * 0.15;
        vec3 ro = vec3(
          camDist * cos(camAngle),
          camDist * 0.4 * sin(uTime * 0.1),
          camDist * sin(camAngle)
        );
        vec3 ta = vec3(0.0);
        vec3 ww = normalize(ta - ro);
        vec3 uu = normalize(cross(ww, vec3(0.0, 1.0, 0.0)));
        vec3 vv = cross(uu, ww);
        vec3 rd = normalize(uv.x * uu + uv.y * vv + 1.8 * ww);

        // Raymarching
        float t = 0.0;
        float glow = 0.0;
        vec3 col = vec3(0.0);
        bool hit = false;
        float trap = 0.0;

        for (int i = 0; i < 128; i++) {
          vec3 p = ro + rd * t;
          vec2 res = mandelbulbDE(p / uScale);
          float d = res.x * uScale;
          trap = res.y;

          // 辉光累积
          glow += 0.1 / (1.0 + d * d * 400.0);

          if (d < 0.001) { hit = true; break; }
          if (t > 10.0) break;
          t += d * 0.8; // 步进因子
        }

        if (hit) {
          vec3 p = ro + rd * t;
          vec3 n = calcNormal(p);
          vec3 lightDir = normalize(vec3(0.8, 0.6, -0.5));

          // 漫反射
          float diff = max(dot(n, lightDir), 0.0);
          float spec = pow(max(dot(reflect(-lightDir, n), -rd), 0.0), 32.0);
          float ao = calcAO(p, n);

          // 基于轨道陷阱的着色
          vec3 surfCol = mix(uColorA, uColorB, clamp(trap * 0.5, 0.0, 1.0));

          // 添加4D噪声细节
          float noiseDetail = snoise4D(vec4(p * 3.0, uTime * 0.1)) * 0.1;
          surfCol += noiseDetail;

          col = surfCol * (0.2 + 0.8 * diff) * ao;
          col += vec3(1.0, 0.95, 0.9) * spec * 0.5;

          // 距离衰减雾
          float fog = exp(-t * 0.15);
          col = mix(vec3(0.01, 0.01, 0.02), col, fog);
        }

        // 辉光叠加
        col += uGlowIntensity * glow * mix(uColorA, uColorB, 0.5) * 0.15;

        // 背景梯度
        if (!hit) {
          col = mix(vec3(0.01, 0.01, 0.03), vec3(0.02, 0.0, 0.05), uv.y + 0.5);
          col += uGlowIntensity * glow * mix(uColorA, uColorB, 0.5) * 0.15;
        }

        // Gamma + 色调映射
        col = col / (col + vec3(1.0)); // Reinhard
        col = pow(col, vec3(1.0 / 2.2));

        fragColor = vec4(col, 1.0);
      }
    `;

    return new ProceduralMaterial({
      vertexShader,
      fragmentShader,
      transparent: false,
      side: THREE.FrontSide,
      depthWrite: false,
      depthTest: false,
      uniforms: {
        uPower: { value: p.power },
        uIterations: { value: p.iterations },
        uBailout: { value: p.bailout },
        uScale: { value: p.scale },
        uColorA: { value: new THREE.Vector3(...p.colorA) },
        uColorB: { value: new THREE.Vector3(...p.colorB) },
        uGlowIntensity: { value: p.glowIntensity },
        uAnimate: { value: p.animate ? 1.0 : 0.0 }
      }
    });
  }

  /**
   * 覆写 _buildMesh：使用全屏四边形 + 禁用深度
   */
  _buildMesh() {
    const mesh = new THREE.Mesh(this._geometry, this._material);
    mesh.frustumCulled = false;
    return mesh;
  }

  /** 设置分形幂次 */
  setPower(power) {
    if (this._material) this._material.uniforms.uPower.value = power;
    return this;
  }
}

ProceduralFactory.register('MandelbulbFractal', MandelbulbFractal, {
  power: 8.0,
  colorA: [0.1, 0.2, 0.6],
  colorB: [0.9, 0.3, 0.1]
});
