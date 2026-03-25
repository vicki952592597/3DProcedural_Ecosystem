import * as THREE from 'three';
import { UniformsManager } from './UniformsManager.js';
import { ShaderChunk } from './ShaderChunk.js';

/**
 * ProceduralMaterial - 程序化材质基类
 * 拒绝使用默认材质，所有材质通过 ShaderMaterial 构建
 * 内置 SSS (次表面散射)、薄膜干涉、各向异性高光等光学模型
 */
export class ProceduralMaterial extends THREE.ShaderMaterial {
  /**
   * @param {Object} options
   * @param {string} options.vertexShader
   * @param {string} options.fragmentShader
   * @param {Object} [options.uniforms]
   * @param {boolean} [options.transparent=false]
   * @param {number} [options.side=THREE.FrontSide]
   * @param {boolean} [options.depthWrite=true]
   */
  constructor(options = {}) {
    const um = UniformsManager.getInstance();
    const globalUniforms = um.getGlobalUniformsClone();

    const mergedUniforms = {
      ...globalUniforms,
      ...THREE.UniformsLib.lights,
      ...(options.uniforms || {})
    };

    super({
      vertexShader: options.vertexShader || ProceduralMaterial.defaultVertexShader(),
      fragmentShader: options.fragmentShader || ProceduralMaterial.defaultFragmentShader(),
      uniforms: mergedUniforms,
      transparent: options.transparent ?? false,
      side: options.side ?? THREE.DoubleSide,
      depthWrite: options.depthWrite ?? true,
      lights: options.lights ?? true,
      glslVersion: THREE.GLSL3
    });

    this._entityType = options.entityType || 'generic';

    // 订阅全局 uniform 更新
    um.subscribe(this, ['uTime', 'uDeltaTime', 'uResolution']);
  }

  /**
   * 默认顶点着色器
   */
  static defaultVertexShader() {
    return /* glsl */`
      precision highp float;

      uniform float uTime;

      out vec3 vNormal;
      out vec3 vWorldPosition;
      out vec2 vUv;
      out vec3 vViewDir;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);

        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        vViewDir = normalize(cameraPosition - worldPos.xyz);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
  }

  /**
   * 默认片段着色器
   */
  static defaultFragmentShader() {
    return /* glsl */`
      precision highp float;

      uniform float uTime;

      in vec3 vNormal;
      in vec3 vWorldPosition;
      in vec2 vUv;
      in vec3 vViewDir;

      out vec4 fragColor;

      void main() {
        vec3 normal = normalize(vNormal);
        float diffuse = max(dot(normal, normalize(vec3(1.0, 1.0, 0.5))), 0.0);
        vec3 color = vec3(0.8, 0.3, 0.5) * (0.3 + 0.7 * diffuse);
        fragColor = vec4(color, 1.0);
      }
    `;
  }

  // =============================================
  // 光学模型工具函数 (GLSL 代码块)
  // =============================================

  /**
   * SSS - 次表面散射近似 GLSL 函数
   * 用于花瓣、皮肤等半透明材质
   * @returns {string} GLSL 代码
   */
  static sssFunction() {
    return /* glsl */`
      vec3 subsurfaceScattering(
        vec3 lightDir, vec3 viewDir, vec3 normal,
        vec3 sssColor, float sssIntensity, float sssPower,
        float thickness
      ) {
        // 前向散射 (wrap lighting)
        float NdotL = dot(normal, lightDir);
        float wrapDiffuse = max(0.0, (NdotL + 0.5) / 1.5);

        // 透射光 (back-lighting / translucency)
        vec3 scatterDir = lightDir + normal * 0.3;
        float VdotS = pow(clamp(dot(viewDir, -scatterDir), 0.0, 1.0), sssPower);
        vec3 translucency = sssColor * VdotS * sssIntensity * thickness;

        // 边缘散射增强
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
        vec3 rimSSS = sssColor * fresnel * 0.3 * thickness;

        return translucency + rimSSS + sssColor * wrapDiffuse * 0.1;
      }
    `;
  }

  /**
   * 薄膜干涉 (Thin-film Iridescence) GLSL 函数
   * 用于蝴蝶翅膀、肥皂泡、油膜等
   * @returns {string} GLSL 代码
   */
  static thinFilmIridescenceFunction() {
    return /* glsl */`
      vec3 thinFilmIridescence(float cosTheta, float filmThickness, float ior) {
        // 光程差计算
        float delta = 2.0 * ior * filmThickness * cosTheta;

        // 波长依赖的干涉条纹 (RGB 三通道不同波长)
        // R ≈ 650nm, G ≈ 550nm, B ≈ 450nm
        vec3 wavelengths = vec3(650.0, 550.0, 450.0);

        vec3 phase = 2.0 * 3.14159265 * delta / wavelengths;

        // 干涉强度 (Fresnel + 多光束干涉)
        float r = (ior - 1.0) / (ior + 1.0);
        float R = r * r;

        vec3 interference = vec3(
          R + R + 2.0 * R * cos(phase.r),
          R + R + 2.0 * R * cos(phase.g),
          R + R + 2.0 * R * cos(phase.b)
        );

        // 归一化到可视范围
        interference = clamp(interference / (4.0 * R), 0.0, 1.0);

        // 色彩映射：将干涉图样转化为光谱色
        vec3 spectralColor;
        spectralColor.r = 0.5 + 0.5 * cos(phase.r);
        spectralColor.g = 0.5 + 0.5 * cos(phase.g + 1.0);
        spectralColor.b = 0.5 + 0.5 * cos(phase.b + 2.0);

        return mix(spectralColor, interference, 0.6);
      }
    `;
  }

  /**
   * 各向异性高光 (Anisotropic Specular) GLSL 函数
   * 用于毛发、丝绸、蝴蝶翅膀纹理
   * @returns {string} GLSL 代码
   */
  static anisotropicSpecularFunction() {
    return /* glsl */`
      float anisotropicSpecular(
        vec3 lightDir, vec3 viewDir, vec3 normal, vec3 tangent,
        float roughnessX, float roughnessY
      ) {
        vec3 halfDir = normalize(lightDir + viewDir);
        vec3 bitangent = cross(normal, tangent);

        float NdotH = max(dot(normal, halfDir), 0.0);
        float TdotH = dot(tangent, halfDir);
        float BdotH = dot(bitangent, halfDir);

        // Ward 各向异性分布
        float exponent = -(
          (TdotH * TdotH) / (roughnessX * roughnessX) +
          (BdotH * BdotH) / (roughnessY * roughnessY)
        ) / max(NdotH * NdotH, 0.001);

        float D = exp(exponent) / (
          3.14159265 * roughnessX * roughnessY *
          max(NdotH * NdotH * NdotH * NdotH, 0.001)
        );

        return clamp(D * max(dot(normal, lightDir), 0.0), 0.0, 10.0);
      }
    `;
  }

  /**
   * Fresnel 效应 GLSL 函数
   * @returns {string} GLSL 代码
   */
  static fresnelFunction() {
    return /* glsl */`
      float fresnelSchlick(float cosTheta, float F0) {
        return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
      }
      vec3 fresnelSchlickV(float cosTheta, vec3 F0) {
        return F0 + (1.0 - F0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
      }
    `;
  }
}
