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
    this._camera.position.set(0, 2, 0); // 入场起始 z=0, 动画到 z=2
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

    // 花茎 — 原版: position=[0,-3.3,-0.03] scale=[0.8,0.8,0.8] roughness=0.5 color=#fff
    const stem = stemGLTF.scene;
    stem.position.set(0, -3.3, -0.03);
    stem.scale.setScalar(0.8);
    stem.traverse(c => {
      if (c.isMesh) {
        c.material = new THREE.MeshStandardMaterial({ roughness: 0.5, color: '#ffffff' });
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

    // 原版: MeshStandardNodeMaterial, side=DoubleSide
    // 使用 onBeforeCompile 注入顶点变形 (WebGL 等效 TSL positionNode)
    // GLB 材质: 只有 baseColor + emissive + normal (无 roughness/metalness 贴图)
    const mat = new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      map: srcMat.map,
      normalMap: srcMat.normalMap,
      emissiveMap: srcMat.emissiveMap,
      emissive: new THREE.Color(1, 1, 1),  // 启用 emissiveMap
      emissiveIntensity: 0.5,              // 自发光让暗部通透
      roughness: 0.6,                      // 柔和漫反射，减少高光对比
      metalness: 0.0,
      envMapIntensity: 1.0,
      normalScale: new THREE.Vector2(1.0, 1.0),
    });

    // 确保贴图色彩空间正确
    if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace;
    if (mat.emissiveMap) mat.emissiveMap.colorSpace = THREE.SRGBColorSpace;

    const uStartProgress = this._uStartProgress;
    const uTime = this._uTime;

    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uStartProgress = uStartProgress;
      shader.uniforms.uTime = uTime;
      shader.uniforms.uCycleDuration = this._uCycleDuration;
      shader.uniforms.uScaleMinY = this._uScaleMinY;
      shader.uniforms.uScaleMaxY = this._uScaleMaxY;
      shader.uniforms.uScaleMinZ = this._uScaleMinZ;
      shader.uniforms.uScaleMaxZ = this._uScaleMaxZ;
      shader.uniforms.uBendMin = this._uBendMin;
      shader.uniforms.uBendMax = this._uBendMax;

      // ─── 顶点 Shader 注入 ───
      // 原版 TSL 逻辑 1:1 翻译:
      // 1. i = instanceID/64*6 → normalizedTime = mod(time+i, 6)/6
      // 2. bendStrength = mix(startProgress, 0,1, 1,-2)
      // 3. curvature = mix(n, 0,1, PI*2, bendStrength*PI)
      // 4. scaleFactor = mix(startProgress, 0,1, (0.8,0.01,0.3), (0.8,0.7,0.4))
      // 5. scale → bend(axis=2,Z轴) → scale(bloom 0→1 @n<0.5) → scale(shrink 0.8→0.2 @n>0.5) → rotateY(PI*-0.3 + startProgress)
      shader.vertexShader = shader.vertexShader.replace(
        '#include <common>',
        /* glsl */`
        #include <common>
        uniform float uStartProgress;
        uniform float uTime;
        uniform float uCycleDuration;
        uniform float uScaleMinY;
        uniform float uScaleMaxY;
        uniform float uScaleMinZ;
        uniform float uScaleMaxZ;
        uniform float uBendMin;
        uniform float uBendMax;

        vec3 tslScale(vec3 p, vec3 s) {
          return vec3(p.x*s.x, p.y*s.y, p.z*s.z);
        }

        // 原版 bend(r_co, factor, axis=2, dcut=(0,0,0), origin=(0,0,0))
        // axis=2 的 Else 分支: angle = x * factor
        vec3 tslBend(vec3 p, float factor, vec3 origin) {
          if(abs(factor) < 1e-5) return p;
          p -= origin;
          float cx = p.x;
          float cy = p.y;
          float cz = p.z;
          // axis=2: angle based on x coordinate
          float angle = cx * factor;
          float sinA = sin(angle);
          float cosA = cos(angle);
          vec3 result;
          // axis=2 Else branch from original TSL:
          // d.x = -(y - 1/factor) * sin(angle)
          // d.y = y * cos(angle) + (1-cos(angle))/factor  
          // d.z = z (unchanged)
          result.x = -(cy - (1.0/factor)) * sinA;
          result.y = cy * cosA + (1.0 - cosA) / factor;
          result.z = cz;
          return result + origin;
        }

        // 原版 rotate(position, axis=(0,1,0), angle)
        vec3 tslRotateY(vec3 p, float a) {
          float ca = cos(a); float sa = sin(a);
          return vec3(p.x*ca + p.z*sa, p.y, -p.x*sa + p.z*ca);
        }
        `
      );

      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        /* glsl */`
        #include <begin_vertex>

        // instanceID / 64 * cycleDuration
        float iid = float(gl_InstanceID);
        float phaseOffset = iid / 64.0 * uCycleDuration;
        float nt = mod(uTime + phaseOffset, uCycleDuration) / uCycleDuration;

        // bendStrength = mix(startProgress, 0, 1, bendMin, bendMax)
        float bendStr = mix(uBendMin, uBendMax, uStartProgress);
        float curv = mix(6.28318, bendStr * 3.14159, nt);

        // scaleFactor (controllable Y and Z, X fixed at 0.8)
        vec3 sf = mix(vec3(0.8, uScaleMinY, uScaleMinZ), vec3(0.8, uScaleMaxY, uScaleMaxZ), uStartProgress);

        // 1. scale by startProgress-dependent factor
        transformed = tslScale(transformed, sf);
        // 2. bend axis=2, origin=(0,0,0)
        transformed = tslBend(transformed, curv, vec3(0.0));
        // 3. bloom scale: remap(nt, 0, 0.5, 0, 1)
        float bloomS = clamp(nt / 0.5, 0.0, 1.0);
        transformed = tslScale(transformed, vec3(bloomS));
        // 4. shrink scale: remap(nt, 0.5, 1, 0.8, 0.2)
        float shrinkT = clamp((nt - 0.5) / 0.5, 0.0, 1.0);
        float shrinkS = mix(0.8, 0.2, shrinkT);
        transformed = tslScale(transformed, vec3(shrinkS));
        // 5. rotate Y: mul(mul(PI, -0.3), startProgress) = PI * -0.3 * startProgress
        float yAngle = 3.14159 * -0.3 * uStartProgress;
        transformed = tslRotateY(transformed, yAngle);
        `
      );

      // 不做 finite difference 法线重算 — 让 Three.js 用 normalMatrix 自动变换
      // 避免人工计算带来的过强对比度

      // ─── 片元 Shader 注入 ───
      // 原版 colorNode: mix(0, texture(map), clamp(0, 1, startProgress*2))
      // 原版 frontFacing: if(faceDirection) normal=abs(normal) else normal=normal
      shader.uniforms.uStartProgressF = uStartProgress;
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <common>',
        /* glsl */`
        #include <common>
        uniform float uStartProgressF;
        `
      );
      // 法线处理 — DoubleSide 时确保背面法线翻转
      // 不做 abs()，避免不自然的对比度
      // 颜色淡入
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <color_fragment>',
        /* glsl */`
        #include <color_fragment>
        float fadeIn = clamp(uStartProgressF * 2.0, 0.0, 1.0);
        diffuseColor.rgb = mix(vec3(0.0), diffuseColor.rgb, fadeIn);
        `
      );
    };

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

    // 1. camera z: 0 → 2, duration 2s (easeOut)
    const camT = Math.min(elapsed / 2.0, 1);
    const camZ = camT * camT * (3 - 2 * camT) * 2; // smoothstep 0→2
    this._camera.position.z = camZ;

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
    this._camera.position.y += (2 - this._camera.position.y) * 0.05;
    // z 在入场动画期间由动画驱动，结束后 lerp 到 2
    if (camT >= 1) {
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
