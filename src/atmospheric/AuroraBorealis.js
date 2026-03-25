import * as THREE from 'three';
import { ProceduralEntity } from '../core/ProceduralEntity.js';
import { ProceduralMaterial } from '../core/ProceduralMaterial.js';
import { ProceduralFactory } from '../core/ProceduralFactory.js';
import { FBMNoise } from './FBMNoise.js';

/**
 * AuroraBorealis - 程序化极光 (北极光)
 *
 * 基于体积渲染 + FBM 噪声合成的极光效果
 * 使用全屏 Raymarching 实现流动的帷幕状极光
 *
 * @extends ProceduralEntity
 */
export class AuroraBorealis extends ProceduralEntity {
  /**
   * @param {Object} params
   * @param {number} [params.seed=42]
   * @param {number[]} [params.colorTop=[0.1, 0.8, 0.3]] - 极光顶部颜色 (绿)
   * @param {number[]} [params.colorBottom=[0.3, 0.1, 0.6]] - 极光底部颜色 (紫)
   * @param {number[]} [params.colorAccent=[0.1, 0.3, 0.9]] - 强调色 (蓝)
   * @param {number} [params.height=5.0] - 极光高度
   * @param {number} [params.curtainWidth=15.0] - 帷幕宽度
   * @param {number} [params.speed=0.3] - 流动速度
   * @param {number} [params.intensity=1.5] - 亮度强度
   * @param {number} [params.turbulence=1.0] - 湍流强度
   * @param {number} [params.raySteps=48] - 光线步进数
   */
  constructor(params = {}) {
    super({
      colorTop: [0.1, 0.8, 0.3],
      colorBottom: [0.3, 0.1, 0.6],
      colorAccent: [0.1, 0.3, 0.9],
      height: 5.0,
      curtainWidth: 15.0,
      speed: 0.3,
      intensity: 1.5,
      turbulence: 1.0,
      raySteps: 48,
      ...params
    });
  }

  _buildGeometry() {
    return new THREE.PlaneGeometry(2, 2);
  }

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
      uniform vec3 uColorTop;
      uniform vec3 uColorBottom;
      uniform vec3 uColorAccent;
      uniform float uHeight;
      uniform float uCurtainWidth;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uTurbulence;
      uniform int uRaySteps;

      in vec2 vUv;
      out vec4 fragColor;

      ${FBMNoise.glsl()}

      // 极光密度场
      float auroraDensity(vec3 p) {
        float time = uTime * uSpeed;

        // 帷幕形状：沿 X 轴的正弦波褶皱
        float curtain = sin(p.x * 0.3 + time * 0.5) * 0.5 +
                        sin(p.x * 0.7 + time * 0.3) * 0.3;

        // Z 方向的密度衰减（薄帷幕）
        float zFade = exp(-abs(p.z - curtain) * 3.0);

        // Y 方向的高度分布
        float heightNorm = (p.y - 2.0) / uHeight;
        float heightFade = smoothstep(0.0, 0.2, heightNorm) *
                           smoothstep(1.0, 0.7, heightNorm);

        // FBM 湍流扰动
        float noise = fbm_standard(
          vec3(p.x * 0.5 + time * 0.2, p.y * 0.8, p.z * 0.5 + time * 0.15),
          5, 2.0, 0.5
        );

        // 高频流动细节
        float detail = fbm_ridged(
          vec3(p.x * 1.5 + time * 0.4, p.y * 2.0 - time * 0.1, p.z * 1.0),
          4, 2.5, 0.45
        );

        float density = zFade * heightFade;
        density *= (0.5 + 0.5 * noise * uTurbulence);
        density *= (0.7 + 0.3 * detail);

        // X 方向的帷幕宽度限制
        float xFade = smoothstep(uCurtainWidth, uCurtainWidth * 0.5, abs(p.x));
        density *= xFade;

        return max(density * 0.5, 0.0);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;

        // 相机 (仰视)
        vec3 ro = vec3(0.0, 0.0, -5.0);
        vec3 rd = normalize(vec3(uv.x * 1.2, uv.y * 0.8 + 0.6, 1.0));

        // 极光区域的 AABB
        vec3 boxMin = vec3(-uCurtainWidth, 2.0, -3.0);
        vec3 boxMax = vec3(uCurtainWidth, 2.0 + uHeight, 3.0);

        // AABB 相交
        vec3 invRd = 1.0 / rd;
        vec3 t0 = (boxMin - ro) * invRd;
        vec3 t1 = (boxMax - ro) * invRd;
        vec3 tMinV = min(t0, t1);
        vec3 tMaxV = max(t0, t1);
        float tEnter = max(max(tMinV.x, tMinV.y), tMinV.z);
        float tExit = min(min(tMaxV.x, tMaxV.y), tMaxV.z);

        vec3 col = vec3(0.0);
        float alpha = 0.0;

        if (tExit > tEnter && tExit > 0.0) {
          float tStart = max(tEnter, 0.0);
          float tEnd = tExit;
          float stepSize = (tEnd - tStart) / float(uRaySteps);

          float transmittance = 1.0;
          vec3 accumColor = vec3(0.0);

          for (int i = 0; i < 64; i++) {
            if (i >= uRaySteps) break;
            if (transmittance < 0.01) break;

            float t = tStart + (float(i) + 0.5) * stepSize;
            vec3 p = ro + rd * t;

            float density = auroraDensity(p);

            if (density > 0.001) {
              // 极光颜色：高度依赖
              float heightRatio = (p.y - 2.0) / uHeight;
              vec3 auroraColor = mix(uColorBottom, uColorTop, heightRatio);

              // 添加强调色的随机变化
              float accentMask = fbm_standard(
                vec3(p.x * 0.3, p.y * 0.5, uTime * 0.2), 3, 2.0, 0.5
              );
              auroraColor = mix(auroraColor, uColorAccent, clamp(accentMask * 0.3, 0.0, 0.3));

              // 发光强度
              float glow = density * uIntensity;

              // Beer-Lambert 积分
              float extinction = density * 2.0 * stepSize;
              float localT = exp(-extinction);

              accumColor += transmittance * auroraColor * glow * stepSize;
              transmittance *= localT;
            }
          }

          col = accumColor;
          alpha = 1.0 - transmittance;
        }

        // 星空背景
        vec2 starUv = gl_FragCoord.xy / uResolution;
        float stars = 0.0;
        for (float i = 0.0; i < 3.0; i++) {
          vec2 sUv = starUv * (200.0 + i * 100.0);
          vec2 cell = floor(sUv);
          vec2 fUv = fract(sUv) - 0.5;
          float r = fract(sin(dot(cell, vec2(127.1 + i, 311.7))) * 43758.5453);
          float brightness = smoothstep(0.98, 1.0, r);
          float twinkle = 0.5 + 0.5 * sin(uTime * (2.0 + r * 3.0) + r * 6.28);
          float dist = length(fUv);
          stars += brightness * smoothstep(0.05, 0.0, dist) * twinkle;
        }
        vec3 bg = vec3(0.005, 0.005, 0.015) + vec3(0.8, 0.85, 1.0) * stars * 0.5;

        col = bg * (1.0 - alpha) + col;

        // Gamma
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
        uColorTop: { value: new THREE.Vector3(...p.colorTop) },
        uColorBottom: { value: new THREE.Vector3(...p.colorBottom) },
        uColorAccent: { value: new THREE.Vector3(...p.colorAccent) },
        uHeight: { value: p.height },
        uCurtainWidth: { value: p.curtainWidth },
        uSpeed: { value: p.speed },
        uIntensity: { value: p.intensity },
        uTurbulence: { value: p.turbulence },
        uRaySteps: { value: p.raySteps }
      }
    });
  }

  _buildMesh() {
    const mesh = new THREE.Mesh(this._geometry, this._material);
    mesh.frustumCulled = false;
    return mesh;
  }
}

ProceduralFactory.register('AuroraBorealis', AuroraBorealis, {
  colorTop: [0.1, 0.8, 0.3],
  colorBottom: [0.3, 0.1, 0.6],
  intensity: 1.5
});
