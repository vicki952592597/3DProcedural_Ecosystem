import * as THREE from 'three';

/**
 * Dahlia（大丽花 V3）— 1:1 还原 dahlia-v3 原版
 * 
 * 与原版完全一致：
 *   - 7 层花瓣，总计 74 瓣 (5+7+9+11+13+14+15)
 *   - 花瓣 segU=18, segV=10
 *   - 紫色冷调配色（花心粉白 → 外层深紫）
 *   - 全 GLSL 自照明（wrap lighting + specular + SSS + Fresnel + 能量波）
 *   - 花茎（紫灰色 shader）
 *   - 星空渐变背景 shader
 *   - 轨道式相机旋转 + 鼠标视差
 */

/* ─── 花瓣层定义（原版 dahlia-v3 1:1） ─── */
const LAYERS = [
  { n: 5,  len: 0.22, wid: 0.16, open: 0.22, curl: 0.70 },
  { n: 7,  len: 0.32, wid: 0.22, open: 0.42, curl: 0.55 },
  { n: 9,  len: 0.42, wid: 0.30, open: 0.62, curl: 0.40 },
  { n: 11, len: 0.52, wid: 0.38, open: 0.82, curl: 0.28 },
  { n: 13, len: 0.60, wid: 0.44, open: 1.02, curl: 0.18 },
  { n: 14, len: 0.66, wid: 0.48, open: 1.20, curl: 0.10 },
  { n: 15, len: 0.70, wid: 0.52, open: 1.38, curl: 0.05 },
];
const NL = LAYERS.length;
const TOTAL = LAYERS.reduce((s, l) => s + l.n, 0); // 74

export class Dahlia {
  constructor(params = {}) {
    this.options = {
      petalScale: 1,
      petalLength: 1,
      petalWidth: 1,
      openAngleScale: 1,
      bloomWaveAmp: 0.14,
      cycleDuration: 5,
      breatheAmp: 0.004,
      radialPulse: 0.025,
      energyWaveSpeed: 0.4,
      energyWaveStrength: 0.22,
      fresnelStrength: 0.38,
      coreGlow: 0.55,
      specularStr: 0.14,
      sssStrength: 0.25,
      cameraDistance: 2.2,
      autoRotateSpeed: 0.015,
      mouseParallaxH: 0.45,
      mouseParallaxV: 0.2,
      smoothFactor: 0.04,
      stemY: -0.28,
      stemLength: 0.55,
      ...params,
    };
    this._group = new THREE.Group();
    this._clock = new THREE.Clock();
    this._mouse = { x: 0, y: 0 };
    this._smooth = { x: 0, y: 0 };
    this._mesh = null;
    this._stemMesh = null;
    this._bgMesh = null;
    this._material = null;
    this._bgMaterial = null;
    this._dummy = new THREE.Object3D();
    this._initMatrices = [];
    this._heights = [];
    this._layerRatios = [];
    // 自带相机（轨道式，与原版一致 FOV 45）
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.set(0, 1, this.options.cameraDistance);
  }

  build() {
    const geo = this._createPetalGeo();
    this._material = this._createMaterial();
    this._mesh = new THREE.InstancedMesh(geo, this._material, TOTAL);
    this._mesh.frustumCulled = false;
    this._precomputeInstances();
    this._applyInstances();
    this._group.add(this._mesh);
    this._createStem();
    this._createBackground();
    return this;
  }

  addTo(scene) {
    scene.add(this._group);
    if (this._bgMesh) scene.add(this._bgMesh);
    return this;
  }

  setMouse(x, y) {
    this._mouse.x = (x / window.innerWidth) * 2 - 1;
    this._mouse.y = -(y / window.innerHeight) * 2 + 1;
  }

  update() {
    const dt = this._clock.getDelta();
    const o = this.options;
    const t = this._clock.getElapsedTime();

    // 鼠标视差缓动（原版一致）
    this._smooth.x += (this._mouse.x - this._smooth.x) * o.smoothFactor;
    this._smooth.y += (this._mouse.y - this._smooth.y) * o.smoothFactor;

    // 轨道式相机旋转（原版 1:1）
    const angle = t * o.autoRotateSpeed + this._smooth.x * o.mouseParallaxH;
    const pitch = 0.18 + this._smooth.y * o.mouseParallaxV;
    this.camera.position.set(
      Math.sin(angle) * o.cameraDistance * Math.cos(pitch),
      Math.sin(pitch) * o.cameraDistance + 0.08,
      Math.cos(angle) * o.cameraDistance * Math.cos(pitch)
    );
    this.camera.lookAt(this._smooth.x * -0.05, this._smooth.y * 0.03, 0);

    // Shader uniforms
    if (this._material) {
      const u = this._material.uniforms;
      u.uTime.value += dt;
      u.uBreathAmp.value = o.breatheAmp;
      u.uEnergySpeed.value = o.energyWaveSpeed;
      u.uEnergyStr.value = o.energyWaveStrength;
      u.uFresnelStr.value = o.fresnelStrength;
      u.uCoreGlow.value = o.coreGlow;
    }

    // 背景
    if (this._bgMaterial) {
      this._bgMaterial.uniforms.uTime.value += dt;
    }

    // Instance 动画
    this._animateInstances(this._material.uniforms.uTime.value);
  }

  resize(w, h) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  dispose() {
    if (this._mesh) {
      this._mesh.geometry.dispose();
      this._material.dispose();
      this._group.remove(this._mesh);
    }
    if (this._stemMesh) {
      this._stemMesh.geometry.dispose();
      this._stemMesh.material.dispose();
      this._group.remove(this._stemMesh);
    }
    if (this._bgMesh) {
      this._bgMesh.geometry.dispose();
      this._bgMaterial.dispose();
      if (this._bgMesh.parent) this._bgMesh.parent.remove(this._bgMesh);
    }
    if (this._group.parent) this._group.parent.remove(this._group);
  }

  /* ─── 花瓣几何体（原版 dahlia-v3 1:1：segU=18, segV=10） ─── */
  _createPetalGeo() {
    const segU = 18, segV = 10;
    const pos = [], uvs = [], idx = [];

    for (let j = 0; j <= segV; j++) {
      const v = j / segV;
      const vn = (v - 0.5) * 2;
      for (let i = 0; i <= segU; i++) {
        const u = i / segU;

        // 原版宽度轮廓
        const widthProfile = Math.pow(Math.sin(u * Math.PI * 0.48), 0.42)
                           * Math.pow(1.0 - Math.pow(u, 1.7), 0.52);

        // 横截面弧度（原版）
        const curlAngle = 0.45 * (1.0 - 0.25 * u);
        const halfW = 0.28 * widthProfile;
        const localX = halfW * Math.sin(vn * curlAngle);
        const localY = halfW * (1.0 - Math.cos(vn * curlAngle));

        // 纵向拱起 + 尖端微翘
        const archY = 0.04 * (1.0 - 0.4 * u) * (1.0 - vn * vn);
        const tipCurl = 0.03 * u * u;

        pos.push(localX, localY + archY + tipCurl, u);
        uvs.push(u, v);
      }
    }

    for (let j = 0; j < segV; j++) {
      for (let i = 0; i < segU; i++) {
        const a = j * (segU + 1) + i;
        idx.push(a, a + segU + 1, a + 1, a + 1, a + segU + 1, a + segU + 2);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    return geo;
  }

  /* ─── 预计算初始矩阵（原版 1:1） ─── */
  _precomputeInstances() {
    const d = this._dummy;
    let idx = 0;
    LAYERS.forEach((L, li) => {
      const lr = li / (NL - 1);
      for (let pi = 0; pi < L.n; pi++) {
        const th = (pi / L.n) * Math.PI * 2 + (li % 2 ? Math.PI / L.n : 0);
        const j1 = Math.sin(idx * 137.508 + li * 42);
        const j2 = Math.cos(idx * 73 + li * 31);
        const R = 0.02 + 0.14 * lr;
        const phi = L.open + 0.04 * j2;
        const x = R * Math.sin(phi) * Math.cos(th + 0.05 * j1);
        const z = R * Math.sin(phi) * Math.sin(th + 0.05 * j1);
        const y = R * Math.cos(phi);
        d.position.set(x, y, z);
        const out = new THREE.Vector3(x, y, z).normalize();
        d.lookAt(d.position.clone().add(out));
        const sl = L.len * (1 + 0.06 * j1);
        const sw = L.wid * (1 + 0.05 * j2);
        d.scale.set(sw, sw * 0.85, sl);
        d.rotation.x += 0.05 * j1;
        d.rotation.z += 0.04 * j2;
        d.updateMatrix();
        this._initMatrices.push(d.matrix.clone());
        this._heights.push(1 - lr);     // aHeight
        this._layerRatios.push(lr);      // aLayer
        idx++;
      }
    });
  }

  _applyInstances() {
    for (let i = 0; i < TOTAL; i++) {
      this._mesh.setMatrixAt(i, this._initMatrices[i]);
    }
    this._mesh.geometry.setAttribute('aHeight',
      new THREE.InstancedBufferAttribute(new Float32Array(this._heights), 1));
    this._mesh.geometry.setAttribute('aLayer',
      new THREE.InstancedBufferAttribute(new Float32Array(this._layerRatios), 1));
    this._mesh.instanceMatrix.needsUpdate = true;
  }

  /* ─── 每帧 Instance 动画（原版 1:1） ─── */
  _animateInstances(t) {
    const o = this.options;
    const d = this._dummy;
    const cycle = (t % o.cycleDuration) / o.cycleDuration;
    let idx = 0;
    LAYERS.forEach((L, li) => {
      const lr = li / (NL - 1);
      const lp = cycle - lr * 0.35;
      const bloomWave = 0.14 * Math.sin(lp * Math.PI * 2);
      const radPulse = 0.025 * Math.sin(lp * Math.PI * 2);

      for (let pi = 0; pi < L.n; pi++) {
        const j1 = Math.sin(idx * 137.508 + li * 42);
        const j2 = Math.cos(idx * 73 + li * 31);
        const th = (pi / L.n) * Math.PI * 2 + (li % 2 ? Math.PI / L.n : 0) + 0.05 * j1;
        const R = 0.02 + 0.14 * lr + radPulse;
        const phi = L.open + 0.04 * j2 + bloomWave;
        const x = R * Math.sin(phi) * Math.cos(th);
        const z = R * Math.sin(phi) * Math.sin(th);
        const y = R * Math.cos(phi);

        d.position.set(x, y, z);
        const out = new THREE.Vector3(x, y, z).normalize();
        d.lookAt(d.position.clone().add(out));

        const sl = L.len * (1 + 0.06 * j1);
        const sw = L.wid * (1 + 0.05 * j2);
        d.scale.set(sw, sw * 0.85, sl);
        d.rotation.x += 0.05 * j1;
        d.rotation.z += 0.04 * j2;
        d.updateMatrix();
        this._mesh.setMatrixAt(idx, d.matrix);
        idx++;
      }
    });
    this._mesh.instanceMatrix.needsUpdate = true;
  }

  /* ─── 花瓣 Shader（原版 dahlia-v3 1:1） ─── */
  _createMaterial() {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime:        { value: 0 },
        uBreathAmp:   { value: 0.004 },
        uEnergySpeed: { value: 0.4 },
        uEnergyStr:   { value: 0.22 },
        uFresnelStr:  { value: 0.38 },
        uCoreGlow:    { value: 0.55 },
      },
      vertexShader: VERT_DAHLIA,
      fragmentShader: FRAG_DAHLIA,
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      depthTest: true,
    });
  }

  /* ─── 花茎（原版紫灰色 shader） ─── */
  _createStem() {
    const o = this.options;
    const geo = new THREE.CylinderGeometry(0.014, 0.026, o.stemLength, 8, 6);
    const mat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vN;
        void main() {
          vN = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        varying vec3 vN;
        void main() {
          vec3 col = vec3(0.32, 0.28, 0.42);
          float l = max(dot(vN, normalize(vec3(0.2, 0.8, 0.4))), 0.0);
          col *= 0.35 + l * 0.55;
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    this._stemMesh = new THREE.Mesh(geo, mat);
    this._stemMesh.position.set(0, o.stemY, 0);
    this._group.add(this._stemMesh);
  }

  /* ─── 星空渐变背景（原版 dahlia-v3 1:1） ─── */
  _createBackground() {
    this._bgMaterial = new THREE.ShaderMaterial({
      depthWrite: false,
      depthTest: false,
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.9999, 1.0);
        }`,
      fragmentShader: BG_FRAG,
    });
    this._bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this._bgMaterial);
    this._bgMesh.renderOrder = -1;
    this._bgMesh.frustumCulled = false;
  }
}

/* ========== VERTEX SHADER (原版 dahlia-v3 1:1) ========== */
const VERT_DAHLIA = /* glsl */`
  attribute float aHeight;
  attribute float aLayer;
  uniform float uTime;
  varying vec3 vWN, vWP;
  varying vec2 vUv;
  varying float vH, vL, vFr;
  void main() {
    vUv = uv; vH = aHeight; vL = aLayer;
    vec3 pos = position;
    pos += normal * (0.004 * sin(uTime * 0.8 + aHeight * 3.0 + aLayer * 1.5));
    pos.x += 0.003 * sin(uTime * 0.3 + pos.z * 2.0) * uv.x;
    vec4 wp = modelMatrix * instanceMatrix * vec4(pos, 1.0);
    vWP = wp.xyz;
    vWN = normalize((modelMatrix * instanceMatrix * vec4(normal, 0.0)).xyz);
    vec3 vd = normalize(cameraPosition - wp.xyz);
    vFr = pow(1.0 - max(dot(vWN, vd), 0.0), 2.5);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

/* ========== FRAGMENT SHADER (原版 dahlia-v3 1:1) ========== */
const FRAG_DAHLIA = /* glsl */`
  uniform float uTime;
  varying vec3 vWN, vWP;
  varying vec2 vUv;
  varying float vH, vL, vFr;
  void main() {
    float u = vUv.x, v = vUv.y, lr = vL;
    vec3 N = normalize(vWN);
    vec3 V = normalize(cameraPosition - vWP);

    // 配色梯度（原版 1:1）：花心粉白 → 外层冷蓝紫
    vec3 c0 = vec3(0.94, 0.86, 0.97);
    vec3 c1 = vec3(0.74, 0.64, 0.90);
    vec3 c2 = vec3(0.50, 0.45, 0.78);
    vec3 c3 = vec3(0.34, 0.31, 0.64);
    vec3 c4 = vec3(0.23, 0.21, 0.50);

    vec3 base;
    if (lr < 0.18) base = mix(c0, c1, lr / 0.18);
    else if (lr < 0.42) base = mix(c1, c2, (lr - 0.18) / 0.24);
    else if (lr < 0.68) base = mix(c2, c3, (lr - 0.42) / 0.26);
    else base = mix(c3, c4, (lr - 0.68) / 0.32);

    base *= 0.92 + 0.08 * sin(u * 3.14);

    // 能量波浪从上到下（原版用 vH）
    float wp2 = vH - uTime * 0.4;
    float wave = pow(sin(wp2 * 6.2832) * 0.5 + 0.5, 2.5);
    vec3 eC = mix(vec3(0.65, 0.50, 0.92), c0, lr * 0.4);
    base += eC * wave * 0.22;

    // 光照（wrap lighting，原版 1:1）
    vec3 L1 = normalize(vec3(0.15, 0.85, 0.35));
    vec3 L2 = normalize(vec3(-0.3, 0.3, -0.5));
    float w = 0.42;
    float d1 = (max(dot(N, L1), 0.0) + w) / (1.0 + w);
    float d2 = (max(dot(N, L2), 0.0) + w) / (1.0 + w);
    vec3 col = base * (0.26 + 0.10 * (1.0 - lr) + d1 * 0.50 + d2 * 0.12);

    // 高光（原版 1:1）
    vec3 H = normalize(L1 + V);
    col += vec3(0.58, 0.52, 0.85) * pow(max(dot(N, H), 0.0), 36.0) * 0.14;

    // SSS（原版 1:1）
    vec3 sD = normalize(L1 + V * 0.3);
    col += vec3(0.58, 0.45, 0.80) * pow(max(dot(-N, sD), 0.0), 2.5) * 0.25 * (1.0 - lr * 0.3);

    // 菲涅尔（原版 1:1）
    col += vec3(0.45, 0.40, 0.85) * vFr * 0.38;

    // 花心辉光（原版 1:1）
    col += c0 * pow(1.0 - lr, 2.5) * (1.0 - u * 0.5) * (0.55 + 0.03 * sin(uTime * 1.2));

    // 波浪叠加
    col += eC * wave * 0.06 * (1.0 + vFr);

    // Alpha（原版 1:1）
    float fU = smoothstep(0.0, 0.05, u) * smoothstep(1.0, 0.88, u);
    float fV = 1.0 - pow(abs(v - 0.5) * 2.0, 2.2) * 0.4;
    float a = fU * fV;
    a *= mix(0.85, 0.50, lr);
    a = max(a, vFr * 0.12);
    a = clamp(a, 0.0, 0.94);

    gl_FragColor = vec4(col, a);
  }
`;

/* ========== 星空渐变背景 FRAGMENT（原版 dahlia-v3 1:1） ========== */
const BG_FRAG = /* glsl */`
  uniform float uTime;
  varying vec2 vUv;

  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  void main() {
    vec2 uv = vUv;
    // 渐变背景（原版 1:1）
    vec3 top = vec3(0.012, 0.012, 0.050);
    vec3 mid = vec3(0.042, 0.038, 0.175);
    vec3 bot = vec3(0.165, 0.132, 0.400);
    float t = uv.y;
    vec3 col;
    if (t > 0.6) col = mix(mid, top, smoothstep(0.6, 1.0, t));
    else if (t > 0.25) col = mix(bot, mid, smoothstep(0.25, 0.6, t));
    else col = mix(bot * 1.08, bot, smoothstep(0.0, 0.25, t));

    // 花朵区域微弱辉光
    float cd = length(vec2(uv.x - 0.5, (uv.y - 0.48) * 1.3));
    col += vec3(0.04, 0.03, 0.10) * exp(-cd * cd * 4.0);

    // 星空层1（原版 1:1）
    vec2 sg = uv * vec2(60.0, 35.0);
    vec2 sc = floor(sg);
    float sr = hash(sc);
    if (sr > 0.92) {
      vec2 sp = fract(sg) - 0.5;
      vec2 so = (vec2(hash(sc + 1.0), hash(sc + 2.0)) - 0.5) * 0.4;
      float sd = length(sp - so);
      float star = smoothstep(0.035, 0.0, sd);
      float tw = sin(uTime * (1.0 + sr * 2.5) + sr * 6.28) * 0.5 + 0.5;
      float brightness = (tw * 0.5 + 0.5) * 0.7;
      brightness *= smoothstep(0.2, 0.7, uv.y);
      col += vec3(0.6, 0.6, 0.85) * star * brightness;
    }

    // 星空层2（稀疏亮星，原版 1:1）
    vec2 sg2 = uv * vec2(25.0, 15.0);
    vec2 sc2 = floor(sg2);
    float sr2 = hash(sc2 + 100.0);
    if (sr2 > 0.96) {
      vec2 sp2 = fract(sg2) - 0.5;
      vec2 so2 = (vec2(hash(sc2 + 3.0), hash(sc2 + 4.0)) - 0.5) * 0.3;
      float sd2 = length(sp2 - so2);
      float star2 = smoothstep(0.02, 0.0, sd2);
      float tw2 = sin(uTime * 0.8 + sr2 * 6.28) * 0.5 + 0.5;
      star2 *= smoothstep(0.3, 0.8, uv.y);
      col += vec3(0.75, 0.72, 0.95) * star2 * (tw2 * 0.3 + 0.7) * 0.9;
    }

    gl_FragColor = vec4(col, 1.0);
  }
`;