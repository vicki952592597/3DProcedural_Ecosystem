/* ═══════════════════════════════════════════════════════════════
 *  Bloom — Deadrabbit 花朵绽放效果 1:1 无损复刻
 *  原版: https://deadrabbit.collax.app/bloom
 *  
 *  所有参数从原版 Next.js 源码精确提取:
 *  camera position=[0,2,2] zoom=2.5 | lerp target={x:-0.3*pointer.x, y:2, z:2} factor=0.05
 *  env dawn.hdr intensity=0.5 rotation=[0,-PI/1.5,0] blur=2
 *  stem position=[0,-3.3,-0.03] scale=[0.8,0.8,0.8] roughness=0.5 color=#fff
 *  128 petals 140° each | MeshStandard DoubleSide | map+normalMap+roughnessMap+metalnessMap+emissiveMap
 *  anim: cam z 0→2(2s) | startProgress 0→1(5.5s delay 0.5s) | group rotY→-PI/2(1.5s)
 *  背景: CSS渐变 black→#8386ff (非scene.background)
 *  无 UnrealBloomPass — 仅鼠标扭曲后处理
 * ═══════════════════════════════════════════════════════════════ */

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

export class Bloom {
  constructor() {
    this.name = 'Bloom';
    this.category = 'flora';
    this._clock = new THREE.Clock();
    this._loaded = false;
    this._renderer = null;

    // 场景
    this._scene = null;
    this._camera = null;
    this._group = null;
    this._petalMesh = null;
    this._stemMesh = null;
    this._particles = null;

    // 动画
    this._startProgress = 0;
    this._groupRotY = 0;
    this._animStartTime = -1;

    // 鼠标
    this._pointer = new THREE.Vector2(0, 0);

    // 扭曲系统
    this._distortRT1 = null;
    this._distortRT2 = null;
    this._distortPhase = false;
    this._distortScene = null;
    this._distortCamera = null;
    this._distortMat = null;
    this._lastNDC = new THREE.Vector2(0.5, 0.5);
    this._currNDC = new THREE.Vector2(0.5, 0.5);
    this._pointerDiff = 0;
    this._isPointerEnter = false;

    // 合成
    this._compScene = null;
    this._compCamera = null;
    this._compMat = null;
    this._mainRT = null;

    // 花瓣 shader uniforms
    this._uStartProgress = { value: 0 };
    this._uTime = { value: 0 };
    // 可控 uniforms
    this._uCycleDuration = { value: 6 };
    this._uScaleMinY = { value: 0.01 };
    this._uScaleMaxY = { value: 0.7 };
    this._uScaleMinZ = { value: 0.3 };
    this._uScaleMaxZ = { value: 0.4 };
    this._uBendMin = { value: 1 };
    this._uBendMax = { value: -2 };

    // ── 材质系统 uniforms ──
    this._uBaseColor = { value: new THREE.Color(0.75, 0.55, 0.95) };  // 花瓣基色（淡紫）
    this._uRoughness = { value: 0.55 };
    this._uMetalness = { value: 0.0 };
    this._uEmissiveColor = { value: new THREE.Color(0.5, 0.3, 0.8) };
    this._uEmissiveIntensity = { value: 0.8 };
    this._uSSSIntensity = { value: 0.6 };      // 3S 次表面散射强度
    this._uSSSColor = { value: new THREE.Color(0.8, 0.5, 1.0) };
    this._uFresnelPower = { value: 2.5 };       // 菲涅尔指数
    this._uFresnelColor = { value: new THREE.Color(0.5, 0.35, 0.8) };
    this._uFresnelIntensity = { value: 0.5 };
    this._uPointLightIntensity = { value: 3.5 };
    this._uPointLightColor = { value: new THREE.Color(0.9, 0.7, 1.0) };
    this._uPointLightY = { value: 0.3 };
    this._uEnvLightIntensity = { value: 1.2 };
    this._uDirLightIntensity = { value: 0.8 };
    this._uTranslucency = { value: 0.5 };       // 通透度
    this._uShaderType = { value: 0 };           // 0=SSS, 1=Fresnel, 2=Iridescent, 3=Silk, 4=Crystal
    this._uRimWidth = { value: 0.3 };
    this._uRimColor = { value: new THREE.Color(0.4, 0.27, 0.67) };
    this._uRimIntensity = { value: 0.0 };       // 默认0=无描边

    // 运行时参数
    this._params = {
      particleGravity: 0.0098,
      distortStrength: 0.05,
    };
  }

  getCamera() { return this._camera; }
  getLights() { return []; }
  getBackground() { return null; }

  /* ─── init ─── */
  async init(parentScene, renderer) {
    this._renderer = renderer;

    // 场景 — 原版: Canvas 透明, CSS 渐变在 HTML 层
    this._scene = new THREE.Scene();
    // scene.background = null → 透明 Canvas，露出下面的 CSS 渐变

    // 创建 CSS 渐变背景 + 星光层（原版: from-black to-#8386ff + 粒子星光）
    this._createHTMLBackground(renderer);

    // 相机 — 原版 R3F: position=[0,2,2] zoom=2.5
    // R3F 的 zoom 在 PerspectiveCamera 上等效缩小 fov
    // 原版 fov=75 (R3F默认), zoom=2.5 → 等效 fov ≈ 75/2.5 = 30
    this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    this._camera.position.set(0, 4, 0.3); // 入场起始：正上方俯瞰，完全遮住根茎
    this._camera.zoom = 2.5;
    this._camera.updateProjectionMatrix();
    this._camera.lookAt(0, 0, 0);

    // 主 group
    this._group = new THREE.Group();
    this._group.rotation.y = 0; // 动画到 -PI/2
    this._scene.add(this._group);

    // 加载所有资源
    await this._loadAssets(renderer);

    // 设置扭曲后处理
    this._setupDistortion(renderer);

    // 设置最终合成 (场景RT + 扭曲)
    this._setupComposite(renderer);

    // 鼠标事件
    this._bindPointer(renderer);

    // 原版 Canvas flat=true → NoToneMapping
    renderer.toneMapping = THREE.NoToneMapping;

    // 启动动画
    this._animStartTime = this._clock.getElapsedTime();
    this._loaded = true;
  }

  /* ─── 加载资源 ─── */
  async _loadAssets(renderer) {
    const gltfLoader = new GLTFLoader();
    const rgbeLoader = new RGBELoader();
    const base = (typeof import.meta.env !== 'undefined' && import.meta.env.BASE_URL) || '/';

    const [petalGLTF, stemGLTF, hdr] = await Promise.all([
      new Promise((r, j) => gltfLoader.load(base + 'model/bloom-petal.glb', r, undefined, j)),
      new Promise((r, j) => gltfLoader.load(base + 'model/bloom-stem.glb', r, undefined, j)),
      new Promise((r, j) => rgbeLoader.load(base + 'model/dawn.hdr', r, undefined, j)),
    ]);

    // HDR 环境 — 原版: intensity=0.5, rotation=[0,-PI/1.5,0], blur=2
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const envRT = pmrem.fromEquirectangular(hdr);
    this._scene.environment = envRT.texture;
    this._scene.environmentIntensity = 0.5;
    this._scene.environmentRotation = new THREE.Euler(0, -Math.PI / 1.5, 0);
    hdr.dispose();
    pmrem.dispose();

    // 花茎 — 使用与花瓣协调的淡紫色调材质
    const stem = stemGLTF.scene;
    stem.position.set(0, -3.3, -0.03);
    stem.scale.setScalar(0.8);
    stem.traverse(c => {
      if (c.isMesh) {
        c.material = new THREE.MeshStandardMaterial({
          roughness: 0.4,
          metalness: 0.0,
          color: new THREE.Color(0.88, 0.84, 0.92),  // 接近白色带一丝紫
          emissive: new THREE.Color(0.25, 0.22, 0.32),
          emissiveIntensity: 0.5,
          envMapIntensity: 1.2,
        });
      }
    });
    this._group.add(stem);
    this._stemMesh = stem;

    // 花瓣 — 128 InstancedMesh, 140° 旋转
    this._setupPetals(petalGLTF);

    // 原版无额外光源，纯 HDR 环境 + emissive 驱动
    // 只加一个微弱环境光避免完全无光的死黑
    const ambientLight = new THREE.AmbientLight(0x8888aa, 0.15);
    this._scene.add(ambientLight);
    this._ambientLight = ambientLight;

    // 粒子 — 原版: 20x20=400个, size=0.01, gravity=-0.0098, spread=20
    this._setupParticles();
  }

  /* ─── 花瓣 ─── */
  _setupPetals(gltf) {
    let geo = null, srcMat = null;
    gltf.scene.traverse(c => {
      if (c.isMesh && !geo) { geo = c.geometry; srcMat = c.material; }
    });
    if (!geo) return;

    // 贴图色彩空间
    if (srcMat.map) srcMat.map.colorSpace = THREE.SRGBColorSpace;
    if (srcMat.emissiveMap) srcMat.emissiveMap.colorSpace = THREE.SRGBColorSpace;

    // 完全自定义 ShaderMaterial — 多材质系统 (SSS / Fresnel / 彩虹 / 丝绸 / 水晶)
    const mat = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      uniforms: {
        uStartProgress: this._uStartProgress,
        uTime: this._uTime,
        uCycleDuration: this._uCycleDuration,
        uScaleMinY: this._uScaleMinY,
        uScaleMaxY: this._uScaleMaxY,
        uScaleMinZ: this._uScaleMinZ,
        uScaleMaxZ: this._uScaleMaxZ,
        uBendMin: this._uBendMin,
        uBendMax: this._uBendMax,
        tMap: { value: srcMat.map },
        tEmissive: { value: srcMat.emissiveMap },
        tNormal: { value: srcMat.normalMap },
        // 材质参数
        uBaseColor: this._uBaseColor,
        uRoughness: this._uRoughness,
        uMetalness: this._uMetalness,
        uEmissiveColor: this._uEmissiveColor,
        uEmissiveIntensity: this._uEmissiveIntensity,
        uSSSIntensity: this._uSSSIntensity,
        uSSSColor: this._uSSSColor,
        uFresnelPower: this._uFresnelPower,
        uFresnelColor: this._uFresnelColor,
        uFresnelIntensity: this._uFresnelIntensity,
        uPointLightIntensity: this._uPointLightIntensity,
        uPointLightColor: this._uPointLightColor,
        uPointLightY: this._uPointLightY,
        uEnvLightIntensity: this._uEnvLightIntensity,
        uDirLightIntensity: this._uDirLightIntensity,
        uTranslucency: this._uTranslucency,
        uShaderType: this._uShaderType,
        uRimWidth: this._uRimWidth,
        uRimColor: this._uRimColor,
        uRimIntensity: this._uRimIntensity,
      },
      vertexShader: /* glsl */`
        uniform float uStartProgress, uTime, uCycleDuration;
        uniform float uScaleMinY, uScaleMaxY, uScaleMinZ, uScaleMaxZ;
        uniform float uBendMin, uBendMax;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vViewDir;

        vec3 tslBend(vec3 p, float f) {
          if(abs(f) < 1e-5) return p;
          float a = p.x * f;
          float sa = sin(a), ca = cos(a);
          return vec3(
            -(p.y - 1.0/f) * sa,
            p.y * ca + (1.0 - ca) / f,
            p.z
          );
        }

        vec3 tslRotY(vec3 p, float a) {
          float c = cos(a), s = sin(a);
          return vec3(p.x*c + p.z*s, p.y, -p.x*s + p.z*c);
        }

        vec3 deform(vec3 pos) {
          float iid = float(gl_InstanceID);
          float po = iid / 64.0 * uCycleDuration;
          float nt = mod(uTime + po, uCycleDuration) / uCycleDuration;
          float bs = mix(uBendMin, uBendMax, uStartProgress);
          float cv = mix(6.28318, bs * 3.14159, nt);
          vec3 sf = mix(vec3(0.8, uScaleMinY, uScaleMinZ), vec3(0.8, uScaleMaxY, uScaleMaxZ), uStartProgress);
          float ya = 3.14159 * -0.3 * uStartProgress;

          pos *= sf;
          pos = tslBend(pos, cv);
          pos *= clamp(nt / 0.5, 0.0, 1.0);
          pos *= mix(0.8, 0.2, clamp((nt - 0.5) / 0.5, 0.0, 1.0));
          pos = tslRotY(pos, ya);
          return pos;
        }

        void main() {
          vUv = uv;

          vec3 pos = deform(position);

          // Finite difference 法线
          float e = 0.005;
          vec3 px = deform(position + vec3(e, 0.0, 0.0));
          vec3 pz = deform(position + vec3(0.0, 0.0, e));
          vec3 fdN = normalize(cross(pz - pos, px - pos));

          // 实例矩阵
          vec4 wp = instanceMatrix * vec4(pos, 1.0);
          vec4 worldPos4 = modelMatrix * wp;
          vWorldPos = worldPos4.xyz;

          // 法线: 实例旋转 + 模型旋转
          mat3 iRot = mat3(instanceMatrix);
          vNormal = normalize(mat3(modelMatrix) * iRot * fdN);

          // 视线方向
          vViewDir = normalize(cameraPosition - vWorldPos);

          gl_Position = projectionMatrix * viewMatrix * worldPos4;
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D tMap;
        uniform sampler2D tEmissive;
        uniform float uStartProgress;
        uniform float uTime;
        // 材质参数
        uniform vec3 uBaseColor;
        uniform float uRoughness;
        uniform float uMetalness;
        uniform vec3 uEmissiveColor;
        uniform float uEmissiveIntensity;
        uniform float uSSSIntensity;
        uniform vec3 uSSSColor;
        uniform float uFresnelPower;
        uniform vec3 uFresnelColor;
        uniform float uFresnelIntensity;
        uniform float uPointLightIntensity;
        uniform vec3 uPointLightColor;
        uniform float uPointLightY;
        uniform float uEnvLightIntensity;
        uniform float uDirLightIntensity;
        uniform float uTranslucency;
        uniform float uShaderType;
        uniform float uRimWidth;
        uniform vec3 uRimColor;
        uniform float uRimIntensity;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPos;
        varying vec3 vViewDir;

        // ── 工具函数 ──
        vec3 rgb2hsv(vec3 c) {
          vec4 K = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);
          vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
          vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
          float d = q.x - min(q.w, q.y);
          float e = 1.0e-10;
          return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
        }

        vec3 hsv2rgb(vec3 c) {
          vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
          vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
          return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }

        // ── 光照计算 (共用) ──
        struct LightResult {
          vec3 pointDiff;
          vec3 pointSSS;
          vec3 hemi;
          vec3 dir;
          vec3 dirSSS;
          float fresnel;
          float attenuation;
          vec3 Lp;
          vec3 L;
        };

        LightResult calcLighting(vec3 N, vec3 V, vec3 worldPos) {
          LightResult r;

          // 中心点光源
          vec3 plPos = vec3(0.0, uPointLightY, 0.0);
          vec3 toLight = plPos - worldPos;
          float dist = length(toLight);
          r.Lp = normalize(toLight);
          r.attenuation = 1.0 / (1.0 + 2.0 * dist + dist * dist);
          float NdLp = max(dot(N, r.Lp), 0.0) * 0.6 + 0.4;
          r.pointDiff = uPointLightColor * uPointLightIntensity * r.attenuation * NdLp;

          // 点光SSS
          float pSSS = max(dot(-N, r.Lp), 0.0);
          pSSS = pow(pSSS, 1.2);
          r.pointSSS = uSSSColor * pSSS * r.attenuation * 2.5;

          // 半球光
          float h = N.y * 0.35 + 0.55;
          vec3 hBot = uBaseColor * 0.4;
          vec3 hTop = uBaseColor * 1.1;
          r.hemi = mix(hBot, hTop, h) * uEnvLightIntensity;

          // 方向光
          r.L = normalize(vec3(0.2, 0.9, 0.4));
          float NdL = dot(N, r.L) * 0.5 + 0.5;
          NdL = NdL * NdL;
          r.dir = vec3(0.6, 0.5, 0.8) * NdL * uDirLightIntensity;

          // 方向光背光SSS
          float bs = max(dot(-N, r.L), 0.0);
          bs = pow(bs, 1.5);
          r.dirSSS = uSSSColor * bs;

          // 菲涅尔
          r.fresnel = pow(1.0 - max(dot(N, V), 0.0), uFresnelPower);

          return r;
        }

        // ═══════════════════════════════════════
        // Shader 0: SSS 次表面散射 (默认 — 通透花瓣)
        // ═══════════════════════════════════════
        vec4 shaderSSS(vec3 base, vec3 N, vec3 V, vec3 worldPos, float fadeIn, vec4 tex) {
          LightResult li = calcLighting(N, V, worldPos);

          vec3 diffuse = base * (li.hemi + li.dir + li.pointDiff);
          vec3 sss = base * li.dirSSS * uSSSIntensity;
          vec3 pSSS = base * li.pointSSS * uSSSIntensity;
          vec3 rim = uFresnelColor * li.fresnel * uFresnelIntensity;
          vec3 emissive = texture2D(tEmissive, vUv).rgb * uEmissiveIntensity * fadeIn;

          // 通透度: 背面也接收光
          vec3 translucent = base * uTranslucency * max(0.3 - dot(N, V), 0.0);

          vec3 color = diffuse + sss + pSSS + rim + emissive + translucent;
          return vec4(color, tex.a);
        }

        // ═══════════════════════════════════════
        // Shader 1: Fresnel 菲涅尔 (边缘发光 + 玻璃感)
        // ═══════════════════════════════════════
        vec4 shaderFresnel(vec3 base, vec3 N, vec3 V, vec3 worldPos, float fadeIn, vec4 tex) {
          LightResult li = calcLighting(N, V, worldPos);

          float f = li.fresnel;
          // 强菲涅尔: 边缘几乎全是光
          vec3 fresnelGlow = uFresnelColor * f * uFresnelIntensity * 2.0;

          // 柔和漫反射
          vec3 diffuse = base * (li.hemi * 0.6 + li.dir * 0.5 + li.pointDiff * 0.8);

          // 玻璃感: 中心偏透明, 边缘不透明
          float alpha = mix(0.4, 1.0, f) * tex.a;

          // 高光
          vec3 H = normalize(V + li.L);
          float spec = pow(max(dot(N, H), 0.0), mix(16.0, 128.0, 1.0 - uRoughness));
          vec3 specColor = uPointLightColor * spec * 0.6;

          vec3 emissive = texture2D(tEmissive, vUv).rgb * uEmissiveIntensity * fadeIn;
          vec3 color = diffuse + fresnelGlow + specColor + emissive;
          return vec4(color, alpha);
        }

        // ═══════════════════════════════════════
        // Shader 2: Iridescent 彩虹 (薄膜干涉)
        // ═══════════════════════════════════════
        vec4 shaderIridescent(vec3 base, vec3 N, vec3 V, vec3 worldPos, float fadeIn, vec4 tex) {
          LightResult li = calcLighting(N, V, worldPos);

          float NdV = max(dot(N, V), 0.0);
          // 薄膜干涉色相偏移
          float iriHue = fract(NdV * 2.0 + uTime * 0.05);
          vec3 iriColor = hsv2rgb(vec3(iriHue, 0.6, 1.0));

          float f = li.fresnel;
          vec3 diffuse = base * (li.hemi + li.dir * 0.6);
          vec3 iri = iriColor * f * 1.5;
          vec3 sss = base * li.dirSSS * uSSSIntensity * 0.5;

          vec3 emissive = texture2D(tEmissive, vUv).rgb * uEmissiveIntensity * fadeIn;
          vec3 color = diffuse + iri + sss + li.pointDiff * base * 0.5 + emissive;
          return vec4(color, tex.a);
        }

        // ═══════════════════════════════════════
        // Shader 3: Silk 丝绸 (各向异性高光)
        // ═══════════════════════════════════════
        vec4 shaderSilk(vec3 base, vec3 N, vec3 V, vec3 worldPos, float fadeIn, vec4 tex) {
          LightResult li = calcLighting(N, V, worldPos);

          // 丝绸各向异性: 基于切线方向
          vec3 T = normalize(cross(N, vec3(0.0, 1.0, 0.0)));
          vec3 H = normalize(V + li.L);
          float TdH = dot(T, H);
          float aniso = pow(sqrt(1.0 - TdH * TdH), mix(8.0, 64.0, 1.0 - uRoughness));

          vec3 diffuse = base * (li.hemi + li.dir * 0.7);
          vec3 silkSpec = uBaseColor * 1.5 * aniso;

          // 柔和光泽
          float sheen = pow(1.0 - max(dot(N, V), 0.0), 1.5) * 0.4;
          vec3 sheenColor = mix(base, vec3(1.0), 0.3) * sheen;

          vec3 sss = base * li.dirSSS * uSSSIntensity * 0.4;
          vec3 emissive = texture2D(tEmissive, vUv).rgb * uEmissiveIntensity * fadeIn;
          vec3 color = diffuse + silkSpec + sheenColor + sss + li.pointDiff * base * 0.6 + emissive;
          return vec4(color, tex.a);
        }

        // ═══════════════════════════════════════
        // Shader 4: Crystal 水晶 (折射感 + 焦散)
        // ═══════════════════════════════════════
        vec4 shaderCrystal(vec3 base, vec3 N, vec3 V, vec3 worldPos, float fadeIn, vec4 tex) {
          LightResult li = calcLighting(N, V, worldPos);

          float NdV = max(dot(N, V), 0.0);
          float f = li.fresnel;

          // 水晶折射色散
          vec3 refractDir = refract(-V, N, 0.9);
          float dispR = max(dot(refractDir, li.L), 0.0);
          float dispG = max(dot(refract(-V, N, 0.92), li.L), 0.0);
          float dispB = max(dot(refract(-V, N, 0.94), li.L), 0.0);
          vec3 caustic = vec3(
            pow(dispR, 4.0),
            pow(dispG, 4.0),
            pow(dispB, 4.0)
          ) * 2.0;

          // 锐利高光
          vec3 H = normalize(V + li.L);
          float spec = pow(max(dot(N, H), 0.0), 128.0);

          vec3 diffuse = base * (li.hemi * 0.5 + li.pointDiff * 0.6);
          vec3 crystalReflect = uFresnelColor * f * 1.2;
          
          float alpha = mix(0.5, 1.0, f) * tex.a;

          vec3 emissive = texture2D(tEmissive, vUv).rgb * uEmissiveIntensity * fadeIn;
          vec3 color = diffuse + crystalReflect + caustic + vec3(spec) * 0.4 + emissive;
          return vec4(color, alpha);
        }

        void main() {
          vec4 tex = texture2D(tMap, vUv);
          float fadeIn = clamp(uStartProgress * 2.0, 0.0, 1.0);

          // 基色 = 贴图 × 自定义颜色
          vec3 base = tex.rgb * uBaseColor * fadeIn * 1.8;

          // 法线 (双面) + 边缘柔化防止接缝描边
          vec3 N = normalize(vNormal);
          if (!gl_FrontFacing) N = -N;
          vec3 V = normalize(vViewDir);

          // 当视线几乎平行花瓣（掠射角），将法线向视线方向偏转
          // 消除正/反面交界处的硬接缝
          float edgeNdV = dot(N, V);
          if (edgeNdV < 0.15) {
            // 在掠射角区域，逐渐将法线混合向视线方向
            float blend = smoothstep(0.0, 0.15, edgeNdV);
            N = normalize(mix(V * 0.5 + N * 0.5, N, blend));
          }

          vec4 result;
          int st = int(uShaderType + 0.5);
          if (st == 1) {
            result = shaderFresnel(base, N, V, vWorldPos, fadeIn, tex);
          } else if (st == 2) {
            result = shaderIridescent(base, N, V, vWorldPos, fadeIn, tex);
          } else if (st == 3) {
            result = shaderSilk(base, N, V, vWorldPos, fadeIn, tex);
          } else if (st == 4) {
            result = shaderCrystal(base, N, V, vWorldPos, fadeIn, tex);
          } else {
            result = shaderSSS(base, N, V, vWorldPos, fadeIn, tex);
          }

          // 描边/轮廓 (基于菲涅尔边缘检测)
          if (uRimIntensity > 0.01) {
            float rimEdge = pow(1.0 - max(dot(N, V), 0.0), 1.0 / max(uRimWidth, 0.05));
            float rimMask = smoothstep(0.3, 0.8, rimEdge);
            result.rgb = mix(result.rgb, uRimColor * (1.0 + uRimIntensity), rimMask * uRimIntensity);
          }

          // Reinhard tone mapping
          result.rgb = result.rgb / (result.rgb + vec3(0.8));
          // gamma
          result.rgb = pow(result.rgb, vec3(1.0 / 2.2));

          gl_FragColor = result;
        }
      `,
    });

    const mesh = new THREE.InstancedMesh(geo, mat, 128);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < 128; i++) {
      dummy.rotation.set(0, THREE.MathUtils.degToRad(140 * i), 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    this._group.add(mesh);
    this._petalMesh = mesh;
  }

  /* ─── 粒子 (原版: 20x20=400, size=0.01, gravity=-0.0098) ─── */
  _setupParticles() {
    const count = 400;
    const spread = 20;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const phases = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
      phases[i] = Math.random();
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    this._particleVel = vel;

    // 原版: SpriteNodeMaterial, colorNode = abs(sin(time * phase * flashTime))
    const mat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: /* glsl */`
        attribute float aPhase;
        varying float vAlpha;
        uniform float uTime;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = max(1.0, 0.01 * (300.0 / -mv.z));
          gl_Position = projectionMatrix * mv;
          vAlpha = abs(sin(uTime * aPhase * 1.0));
        }
      `,
      fragmentShader: /* glsl */`
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          if (d > 1.0) discard;
          float a = (1.0 - d) * vAlpha * 0.5;
          gl_FragColor = vec4(1.0, 1.0, 1.0, a);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this._particles = new THREE.Points(geo, mat);
    this._scene.add(this._particles);
  }

  /* ─── 扭曲系统 (Ping-Pong RT — 原版 1:1) ─── */
  _setupDistortion(renderer) {
    const w = window.innerWidth, h = window.innerHeight;
    const opts = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat, type: THREE.FloatType };
    this._distortRT1 = new THREE.WebGLRenderTarget(w, h, opts);
    this._distortRT2 = new THREE.WebGLRenderTarget(w, h, opts);

    this._distortScene = new THREE.Scene();
    this._distortCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // 原版参数: brushSize=0.08, fadingRate=0.9
    this._distortMat = new THREE.ShaderMaterial({
      uniforms: {
        tPrev: { value: null },
        uPointer: { value: new THREE.Vector2(0.5, 0.5) },
        uLastPointer: { value: new THREE.Vector2(0.5, 0.5) },
        uBrushSize: { value: 0.08 },
        uFadingRate: { value: 0.9 },
        uIsPointerEnter: { value: 0 },
        uDiff: { value: 0 },
        uAspect: { value: w / h },
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D tPrev;
        uniform vec2 uPointer, uLastPointer;
        uniform float uBrushSize, uFadingRate, uIsPointerEnter, uDiff, uAspect;
        varying vec2 vUv;

        float distToSeg(vec2 p, vec2 a, vec2 b) {
          vec2 pa = p - a, ba = b - a;
          float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
          return length(pa - ba * h);
        }

        void main() {
          vec2 asp = vec2(uAspect, 1.0);
          vec2 p = vUv * asp;
          vec2 a = uLastPointer * asp;
          vec2 b = uPointer * asp;

          // 线段笔刷
          float segDist = distToSeg(p, a, b);
          float brush = 1.0 - smoothstep(0.0, uBrushSize, segDist);

          // 鼠标移动方向作为扭曲方向
          vec2 dir = normalize(b - a + vec2(0.001));
          float dirInfluence = brush * dot(normalize(p - a + vec2(0.001)), dir) * 0.5 + 0.5;

          // 衰减前一帧
          vec4 prev = texture2D(tPrev, vUv) * uFadingRate;

          // 鼠标移动强度
          float influence = uIsPointerEnter * smoothstep(0.0001, 0.005, uDiff);

          // 用鼠标速度和方向产生扭曲量
          vec2 distortVec = dir * brush * influence * uDiff * 8.0;

          gl_FragColor = vec4(prev.rg + distortVec, 0.0, 1.0);
        }
      `,
    });

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this._distortMat);
    this._distortScene.add(quad);
  }

  /* ─── 合成 (场景RT + 扭曲纹理) ─── */
  _setupComposite(renderer) {
    const w = window.innerWidth, h = window.innerHeight;
    this._mainRT = new THREE.WebGLRenderTarget(w, h, {
      minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });

    this._compScene = new THREE.Scene();
    this._compCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // 原版: uv.x + distort.x * 0.05, flip(uv.y)
    this._compMat = new THREE.ShaderMaterial({
      uniforms: {
        tScene: { value: null },
        tDistort: { value: null },
        uDistortStrength: { value: 0.05 },
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D tScene;
        uniform sampler2D tDistort;
        uniform float uDistortStrength;
        varying vec2 vUv;
        void main() {
          vec4 d = texture2D(tDistort, vUv);
          vec2 uv = vUv + d.rg * uDistortStrength;
          gl_FragColor = texture2D(tScene, uv);
        }
      `,
      transparent: true,
    });

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this._compMat);
    this._compScene.add(quad);
  }

  /* ─── 鼠标事件 ─── */
  _bindPointer(renderer) {
    const canvas = renderer.domElement;
    this._onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      // R3F pointer: [-1, 1]
      const px = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const py = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this._pointer.set(px, py);

      // 原版: new Vector2(0.5*pointer.x+0.5, 0.5*pointer.y+0.5)
      const nx = 0.5 * px + 0.5;
      const ny = 0.5 * py + 0.5;
      this._lastNDC.copy(this._currNDC);
      this._currNDC.set(nx, ny);
      // 原版 diff = delta.length()
      const dx = this._currNDC.x - this._lastNDC.x;
      const dy = this._currNDC.y - this._lastNDC.y;
      this._pointerDiff = Math.sqrt(dx * dx + dy * dy);
    };
    // 原版: setIsPointerEnter 始终为 true
    this._isPointerEnter = true;
    canvas.addEventListener('pointermove', this._onMove);
  }

  /* ─── HTML 背景 + 星光 (原版 CSS 层) ─── */
  _createHTMLBackground(renderer) {
    const canvas = renderer.domElement;
    const parent = canvas.parentElement;

    // 确保 canvas 透明
    renderer.setClearColor(0x000000, 0);

    // 渐变背景层
    this._bgDiv = document.createElement('div');
    this._bgDiv.id = 'bloom-bg';
    this._bgDiv.style.cssText = `
      position:absolute; inset:0; z-index:-2;
      background:linear-gradient(to bottom, #000000, #8386ff);
      pointer-events:none;
    `;
    parent.style.position = 'relative';
    parent.insertBefore(this._bgDiv, canvas);

    // 星光层
    this._starsDiv = document.createElement('div');
    this._starsDiv.id = 'bloom-stars';
    this._starsDiv.style.cssText = `
      position:absolute; inset:0; z-index:-1;
      pointer-events:none; overflow:hidden;
    `;
    parent.insertBefore(this._starsDiv, canvas);

    // 生成星光粒子 (CSS)
    const starCount = 120;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2.5 + 0.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 4;
      const opacity = 0.2 + Math.random() * 0.6;
      star.style.cssText = `
        position:absolute;
        left:${x}%; top:${y}%;
        width:${size}px; height:${size}px;
        border-radius:50%;
        background:white;
        opacity:${opacity};
        animation:bloom-twinkle ${duration}s ${delay}s ease-in-out infinite;
      `;
      this._starsDiv.appendChild(star);
    }

    // 注入动画 keyframe
    if (!document.getElementById('bloom-star-style')) {
      const style = document.createElement('style');
      style.id = 'bloom-star-style';
      style.textContent = `
        @keyframes bloom-twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.9; transform: scale(1.2); }
        }
      `;
      document.head.appendChild(style);
    }
  }

  /* ─── update ─── */
  update(time, delta) {
    if (!this._loaded) return;

    const t = this._clock.getElapsedTime();
    const elapsed = t - this._animStartTime;

    // ── 入场动画 (原版 gsap timeline 1:1) ──

    // 1. camera: 从正上方 (0,4,0.3) 缓缓下降到 (0,2,2)
    //    延迟 1s 等花开始绽放后再移动, 总动画 3s
    const camDelay = 1.0;
    const camElapsed = Math.max(elapsed - camDelay, 0);
    const camT = Math.min(camElapsed / 3.0, 1);
    const camEase = camT * camT * (3 - 2 * camT); // smoothstep
    const camY = 4.0 + (2.0 - 4.0) * camEase;   // 4 → 2
    const camZ = 0.3 + (2.0 - 0.3) * camEase;   // 0.3 → 2
    this._camera.position.z = camZ;
    this._camera.position.y = camY;

    // 2. group rotation y: 0 → -PI/2, duration 1.5s
    const rotT = Math.min(elapsed / 1.5, 1);
    this._group.rotation.y = -(rotT * rotT * (3 - 2 * rotT)) * Math.PI / 2;

    // 3. startProgress: 0 → 1, delay 0.5s, duration 5.5s
    const spElapsed = Math.max(elapsed - 0.5, 0);
    const spT = Math.min(spElapsed / 5.5, 1);
    this._startProgress = spT * spT * (3 - 2 * spT); // smoothstep
    this._uStartProgress.value = this._startProgress;

    // 4. time
    this._uTime.value = t;

    // ── 相机 lerp (原版 1:1) ──
    // position.lerp({x: -(0.3 * pointer.x), y: 2, z: 2}, 0.05)
    const tx = -(0.3 * this._pointer.x);
    this._camera.position.x += (tx - this._camera.position.x) * 0.05;
    // y 和 z 在入场动画期间由动画驱动，结束后 lerp 到目标
    if (camT >= 1) {
      this._camera.position.y += (2 - this._camera.position.y) * 0.05;
      this._camera.position.z += (2 - this._camera.position.z) * 0.05;
    }
    this._camera.lookAt(0, 0, 0);

    // ── 粒子更新 (原版: gravity -0.0098, y<0 反弹) ──
    if (this._particles) {
      this._particles.material.uniforms.uTime.value = t;
      const posA = this._particles.geometry.getAttribute('position');
      const arr = posA.array;
      const vel = this._particleVel;
      for (let i = 0; i < posA.count; i++) {
        const i3 = i * 3;
        vel[i3 + 1] -= this._params.particleGravity;
        arr[i3] += vel[i3];
        arr[i3 + 1] += vel[i3 + 1];
        arr[i3 + 2] += vel[i3 + 2];
        if (arr[i3 + 1] < 0) {
          arr[i3 + 1] = 0;
          vel[i3 + 1] = -vel[i3 + 1];
        }
      }
      posA.needsUpdate = true;
    }
  }

  /* ─── render ─── */
  render(renderer) {
    if (!this._loaded) return;

    // 1. 渲染主场景到 RT (透明背景)
    renderer.setRenderTarget(this._mainRT);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.render(this._scene, this._camera);

    // 2. 更新扭曲 ping-pong
    const readRT = this._distortPhase ? this._distortRT2 : this._distortRT1;
    const writeRT = this._distortPhase ? this._distortRT1 : this._distortRT2;

    this._distortMat.uniforms.tPrev.value = readRT.texture;
    this._distortMat.uniforms.uPointer.value.copy(this._currNDC);
    this._distortMat.uniforms.uLastPointer.value.copy(this._lastNDC);
    this._distortMat.uniforms.uDiff.value = this._pointerDiff;
    this._distortMat.uniforms.uIsPointerEnter.value = this._isPointerEnter ? 1 : 0;

    renderer.setRenderTarget(writeRT);
    renderer.render(this._distortScene, this._distortCamera);

    this._distortPhase = !this._distortPhase;
    this._pointerDiff *= 0.95;

    // 3. 合成: 场景 + 扭曲 → 透明输出到屏幕
    this._compMat.uniforms.tScene.value = this._mainRT.texture;
    this._compMat.uniforms.tDistort.value = writeRT.texture;
    renderer.setRenderTarget(null);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.render(this._compScene, this._compCamera);
  }

  /* ─── resize ─── */
  onResize(w, h) {
    if (this._camera) {
      this._camera.aspect = w / h;
      this._camera.updateProjectionMatrix();
    }
    if (this._mainRT) this._mainRT.setSize(w, h);
    if (this._distortRT1) { this._distortRT1.setSize(w, h); this._distortRT2.setSize(w, h); }
    if (this._distortMat) this._distortMat.uniforms.uAspect.value = w / h;
  }

  /* ─── applyParam — 控制面板实时参数调整 ─── */
  applyParam(key, value) {
    switch (key) {
      // ── 相机 ──
      case 'cameraZoom':
        if (this._camera) { this._camera.zoom = value; this._camera.updateProjectionMatrix(); }
        break;
      case 'cameraFov':
        if (this._camera) { this._camera.fov = value; this._camera.updateProjectionMatrix(); }
        break;

      // ── 花瓣动画 ──
      case 'startProgress':
        this._uStartProgress.value = value;
        this._startProgress = value;
        break;
      case 'cycleDuration':
        this._uCycleDuration.value = value;
        break;
      case 'petalRotStep':
        if (this._petalMesh) {
          const dummy = new THREE.Object3D();
          for (let i = 0; i < 128; i++) {
            dummy.rotation.set(0, THREE.MathUtils.degToRad(value * i), 0);
            dummy.updateMatrix();
            this._petalMesh.setMatrixAt(i, dummy.matrix);
          }
          this._petalMesh.instanceMatrix.needsUpdate = true;
        }
        break;

      // ── 花瓣形态 ──
      case 'scaleMinY': this._uScaleMinY.value = value; break;
      case 'scaleMaxY': this._uScaleMaxY.value = value; break;
      case 'scaleMinZ': this._uScaleMinZ.value = value; break;
      case 'scaleMaxZ': this._uScaleMaxZ.value = value; break;

      // ── 弯曲 ──
      case 'bendMin': this._uBendMin.value = value; break;
      case 'bendMax': this._uBendMax.value = value; break;

      // ── 环境光 ──
      case 'envIntensity':
        if (this._scene) this._scene.environmentIntensity = value;
        break;
      case 'envRotation':
        if (this._scene) this._scene.environmentRotation = new THREE.Euler(0, value, 0);
        break;

      // ── 鼠标扭曲 ──
      case 'distortStrength':
        this._params.distortStrength = value;
        if (this._compMat) this._compMat.uniforms.uDistortStrength.value = value;
        break;
      case 'distortBrush':
        if (this._distortMat) this._distortMat.uniforms.uBrushSize.value = value;
        break;
      case 'distortFade':
        if (this._distortMat) this._distortMat.uniforms.uFadingRate.value = value;
        break;

      // ── 粒子 ──
      case 'particleSize':
        if (this._particles) this._particles.material.uniforms.uSize = { value: value };
        break;
      case 'particleGravity':
        this._params.particleGravity = value;
        break;
      case 'particleSpread':
        // 重新生成粒子位置
        if (this._particles) {
          const posA = this._particles.geometry.getAttribute('position');
          for (let i = 0; i < posA.count; i++) {
            posA.array[i * 3] = (Math.random() - 0.5) * value;
            posA.array[i * 3 + 1] = (Math.random() - 0.5) * value;
            posA.array[i * 3 + 2] = (Math.random() - 0.5) * value;
          }
          posA.needsUpdate = true;
        }
        break;

      // ── 花茎 ──
      case 'stemRoughness':
        if (this._stemMesh) {
          this._stemMesh.traverse(c => {
            if (c.isMesh && c.material) c.material.roughness = value;
          });
        }
        break;
      case 'stemPosY':
        if (this._stemMesh) this._stemMesh.position.y = value;
        break;

      // ── 材质类型 ──
      case 'shaderType':
        this._uShaderType.value = value;
        break;

      // ── 材质参数 ──
      case 'baseColor': {
        const c = new THREE.Color(value);
        this._uBaseColor.value.copy(c);
        break;
      }
      case 'roughness': this._uRoughness.value = value; break;
      case 'metalness': this._uMetalness.value = value; break;
      case 'emissiveColor': {
        const c = new THREE.Color(value);
        this._uEmissiveColor.value.copy(c);
        break;
      }
      case 'emissiveIntensity': this._uEmissiveIntensity.value = value; break;
      case 'sssIntensity': this._uSSSIntensity.value = value; break;
      case 'sssColor': {
        const c = new THREE.Color(value);
        this._uSSSColor.value.copy(c);
        break;
      }
      case 'fresnelPower': this._uFresnelPower.value = value; break;
      case 'fresnelColor': {
        const c = new THREE.Color(value);
        this._uFresnelColor.value.copy(c);
        break;
      }
      case 'fresnelIntensity': this._uFresnelIntensity.value = value; break;
      case 'pointLightIntensity': this._uPointLightIntensity.value = value; break;
      case 'pointLightColor': {
        const c = new THREE.Color(value);
        this._uPointLightColor.value.copy(c);
        break;
      }
      case 'pointLightY': this._uPointLightY.value = value; break;
      case 'envLightIntensity': this._uEnvLightIntensity.value = value; break;
      case 'dirLightIntensity': this._uDirLightIntensity.value = value; break;
      case 'translucency': this._uTranslucency.value = value; break;
      case 'rimWidth': this._uRimWidth.value = value; break;
      case 'rimIntensity': this._uRimIntensity.value = value; break;
      case 'rimColor': {
        const c = new THREE.Color(value);
        this._uRimColor.value.copy(c);
        break;
      }

      // ── 背景颜色 ──
      case 'bgColorTop':
      case 'bgColorBot':
        this._updateBackground(
          key === 'bgColorTop' ? value : null,
          key === 'bgColorBot' ? value : null
        );
        break;
    }
  }

  /* ─── 更新渐变背景 (CSS层) ─── */
  _updateBackground(top, bot) {
    this._bgTop = top || this._bgTop || '#000000';
    this._bgBot = bot || this._bgBot || '#8386ff';
    if (this._bgDiv) {
      this._bgDiv.style.background = `linear-gradient(to bottom, ${this._bgTop}, ${this._bgBot})`;
    }
  }

  /* ─── dispose ─── */
  dispose() {
    if (this._mainRT) this._mainRT.dispose();
    if (this._distortRT1) { this._distortRT1.dispose(); this._distortRT2.dispose(); }
    const canvas = this._renderer?.domElement;
    if (canvas) {
      canvas.removeEventListener('pointermove', this._onMove);
    }
    // 清理 HTML 背景和星光层
    if (this._bgDiv && this._bgDiv.parentElement) this._bgDiv.parentElement.removeChild(this._bgDiv);
    if (this._starsDiv && this._starsDiv.parentElement) this._starsDiv.parentElement.removeChild(this._starsDiv);
    // 恢复 renderer 清除色
    if (this._renderer) this._renderer.setClearColor(0x000000, 1);
  }
}