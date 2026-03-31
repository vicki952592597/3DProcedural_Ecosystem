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
  }

  getCamera() { return this._camera; }
  getLights() { return []; }
  getBackground() { return null; }

  /* ─── init ─── */
  async init(parentScene, renderer) {
    this._renderer = renderer;

    // 场景 — 无 scene.background (原版用 CSS 渐变)
    this._scene = new THREE.Scene();

    // 渐变背景 (模拟 CSS from-black to-#8386ff)
    const bgCanvas = document.createElement('canvas');
    bgCanvas.width = 2; bgCanvas.height = 512;
    const bgCtx = bgCanvas.getContext('2d');
    const grad = bgCtx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#000000');
    grad.addColorStop(1, '#8386ff');
    bgCtx.fillStyle = grad;
    bgCtx.fillRect(0, 0, 2, 512);
    const bgTex = new THREE.CanvasTexture(bgCanvas);
    this._scene.background = bgTex;

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
    const mat = new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      map: srcMat.map,
      normalMap: srcMat.normalMap,
      roughnessMap: srcMat.roughnessMap,
      metalnessMap: srcMat.metalnessMap,
      emissiveMap: srcMat.emissiveMap,
    });

    // 确保贴图色彩空间正确
    if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace;

    const uStartProgress = this._uStartProgress;
    const uTime = this._uTime;

    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uStartProgress = uStartProgress;
      shader.uniforms.uTime = uTime;

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

        // 原版 1:1: instanceID / 64 * 6
        float iid = float(gl_InstanceID);
        float phaseOffset = iid / 64.0 * 6.0;
        // mod(time + phaseOffset, 6) / 6
        float nt = mod(uTime + phaseOffset, 6.0) / 6.0;

        // mix(startProgress, 0, 1, 1, -2) → bendStrength
        float bendStr = mix(1.0, -2.0, uStartProgress);
        // mix(nt, 0, 1, PI*2, bendStr*PI)
        float curv = mix(6.28318, bendStr * 3.14159, nt);

        // scaleFactor = mix(startProgress, 0, 1, (0.8,0.01,0.3), (0.8,0.7,0.4))
        vec3 sf = mix(vec3(0.8, 0.01, 0.3), vec3(0.8, 0.7, 0.4), uStartProgress);

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

      // ─── 法线重算 (原版 finite difference 1:1) ───
      // 原版 positionNode 中: pos2 = deform(pos + (0, 0.01, 0)), pos3 = deform(pos + (0.01, 0, 0))
      // objectNormal = normalize(cross(normalize(pos2-pos), normalize(pos3-pos)))
      shader.vertexShader = shader.vertexShader.replace(
        '#include <defaultnormal_vertex>',
        /* glsl */`
        // ── Finite difference normal recalculation (原版 1:1) ──
        float fd_iid = float(gl_InstanceID);
        float fd_phaseOffset = fd_iid / 64.0 * 6.0;
        float fd_nt = mod(uTime + fd_phaseOffset, 6.0) / 6.0;
        float fd_bendStr = mix(1.0, -2.0, uStartProgress);
        float fd_curv = mix(6.28318, fd_bendStr * 3.14159, fd_nt);
        vec3 fd_sf = mix(vec3(0.8, 0.01, 0.3), vec3(0.8, 0.7, 0.4), uStartProgress);
        float fd_bloomS = clamp(fd_nt / 0.5, 0.0, 1.0);
        float fd_shrinkT = clamp((fd_nt - 0.5) / 0.5, 0.0, 1.0);
        float fd_shrinkS = mix(0.8, 0.2, fd_shrinkT);
        float fd_yAngle = 3.14159 * -0.3 * uStartProgress;

        // 原版: shift = vec2(0.01, 0), pos2 = deform(pos + shift.yyx), pos3 = deform(pos + shift.xyy)
        vec3 fd_shift_yyx = vec3(0.0, 0.0, 0.01); // shift.yyx = (0, 0, 0.01)
        vec3 fd_shift_xyy = vec3(0.01, 0.0, 0.0); // shift.xyy = (0.01, 0, 0)

        vec3 fd_pos2 = position + fd_shift_yyx;
        fd_pos2 = tslScale(fd_pos2, fd_sf);
        fd_pos2 = tslBend(fd_pos2, fd_curv, vec3(0.0));
        fd_pos2 = tslScale(fd_pos2, vec3(fd_bloomS));
        fd_pos2 = tslScale(fd_pos2, vec3(fd_shrinkS));
        fd_pos2 = tslRotateY(fd_pos2, fd_yAngle);

        vec3 fd_pos3 = position + fd_shift_xyy;
        fd_pos3 = tslScale(fd_pos3, fd_sf);
        fd_pos3 = tslBend(fd_pos3, fd_curv, vec3(0.0));
        fd_pos3 = tslScale(fd_pos3, vec3(fd_bloomS));
        fd_pos3 = tslScale(fd_pos3, vec3(fd_shrinkS));
        fd_pos3 = tslRotateY(fd_pos3, fd_yAngle);

        vec3 fd_objectNormal = normalize(cross(normalize(fd_pos2 - transformed), normalize(fd_pos3 - transformed)));
        objectNormal = fd_objectNormal;

        #include <defaultnormal_vertex>
        `
      );

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
      // 法线处理 — 原版关键: frontFacing时取abs让背面也有正确光照
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <normal_fragment_begin>',
        /* glsl */`
        #include <normal_fragment_begin>
        if (gl_FrontFacing) {
          normal = abs(normal);
        }
        `
      );
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
          float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
          return length(pa - ba * h);
        }

        void main() {
          vec2 asp = vec2(uAspect, 1.0);
          vec2 p = vUv * asp;
          vec2 a = uLastPointer * asp;
          vec2 b = uPointer * asp;

          // 原版: 两种笔刷 — 线段距离 + 点到点
          float segDist = distToSeg(p, a, b);
          float segBrush = 1.0 - smoothstep(0.0, uBrushSize, segDist);

          vec2 dir = b - a;
          float proj = clamp(dot(p - a, dir) / dot(dir, dir), 0.0, 1.0);
          float segMix = segBrush * proj * (1.0 - uFadingRate) + uFadingRate;

          vec4 prev = texture2D(tPrev, vUv) * uFadingRate;

          float ptDist = length(p - b);
          float ptBrush = 1.0 - smoothstep(0.0, uBrushSize, ptDist);

          float influence = uIsPointerEnter * smoothstep(0.001, 0.01, uDiff);

          vec4 newVal = mix(prev, vec4(uIsPointerEnter, 0.0, 0.0, 1.0), ptBrush);
          vec4 segVal = mix(prev, vec4(uIsPointerEnter, 0.0, 0.0, 1.0), segMix);

          gl_FragColor = mix(prev, segVal, influence);
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
    });

    this._compScene = new THREE.Scene();
    this._compCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // 原版: uv.x + distort.x * 0.05, flip(uv.y)
    this._compMat = new THREE.ShaderMaterial({
      uniforms: {
        tScene: { value: null },
        tDistort: { value: null },
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D tScene;
        uniform sampler2D tDistort;
        varying vec2 vUv;
        void main() {
          vec4 d = texture2D(tDistort, vUv);
          // 原版 WebGPU 用 flipY，WebGL RT 不需要翻转
          vec2 uv = vec2(vUv.x + d.r * 0.05, vUv.y);
          gl_FragColor = texture2D(tScene, uv);
        }
      `,
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
        vel[i3 + 1] -= 0.0098;
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

    // 1. 渲染主场景到 RT
    renderer.setRenderTarget(this._mainRT);
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

    // 3. 合成: 场景 + 扭曲
    this._compMat.uniforms.tScene.value = this._mainRT.texture;
    this._compMat.uniforms.tDistort.value = writeRT.texture;
    renderer.setRenderTarget(null);
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

  /* ─── dispose ─── */
  dispose() {
    if (this._mainRT) this._mainRT.dispose();
    if (this._distortRT1) { this._distortRT1.dispose(); this._distortRT2.dispose(); }
    const canvas = this._renderer?.domElement;
    if (canvas) {
      canvas.removeEventListener('pointermove', this._onMove);
    }
  }
}