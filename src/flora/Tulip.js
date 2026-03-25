import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Tulip（郁金香）— 1:1 还原原版 tulip
 * 
 * 使用 GLB 模型 + 贴图（与原版完全一致）：
 *   - tulip-split.glb 拆分模型（genjin/left1-3/huarui/huaban1-6）
 *   - color.png + roughness.png 贴图
 *   - MeshStandardMaterial 材质
 *   - 6 种动画模式（生长/绽放/风动/发光/旋转/凋零）
 *   - 星空渐变背景 shader
 *   - 轨道式自动旋转相机 + 鼠标视差
 *   - 专用灯光组
 */

/* ─── 部件生长阶段定义（原版 1:1） ─── */
const PARTS = {
  genjin:  { type: 'stem',   growStart: 0,    growEnd: 0.4 },
  left1:   { type: 'leaf',   growStart: 0.08, growEnd: 0.45 },
  left2:   { type: 'leaf',   growStart: 0.12, growEnd: 0.48 },
  left3:   { type: 'leaf',   growStart: 0.15, growEnd: 0.50 },
  huarui:  { type: 'pistil', growStart: 0.35, growEnd: 0.60 },
  huaban1: { type: 'petal',  growStart: 0.38, growEnd: 0.85, order: 0 },
  huaban4: { type: 'petal',  growStart: 0.41, growEnd: 0.87, order: 1 },
  huaban2: { type: 'petal',  growStart: 0.44, growEnd: 0.89, order: 2 },
  huaban5: { type: 'petal',  growStart: 0.47, growEnd: 0.91, order: 3 },
  huaban3: { type: 'petal',  growStart: 0.50, growEnd: 0.93, order: 4 },
  huaban6: { type: 'petal',  growStart: 0.53, growEnd: 0.95, order: 5 },
};

function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
function easeOutBack(t) { return 1 + 2.7 * Math.pow(t - 1, 3) + 1.7 * Math.pow(t - 1, 2); }

export class Tulip {
  constructor(params = {}) {
    this.options = {
      autoPlay: true,
      growthDuration: 8,
      loopMode: 'loop',
      petalOpenAngle: 0.3,
      petalScale: 1,
      petalCurl: 0.4,
      stemHeight: 1,
      stemBend: 0.05,
      leafScale: 1,
      leafDroop: 0.2,
      windStrength: 1,
      windSpeed: 0.5,
      sssStrength: 0.3,
      cameraDistance: 3.5,
      autoRotateSpeed: 0.01,
      mouseParallaxH: 0.3,
      mouseParallaxV: 0.15,
      smoothFactor: 0.04,
      activeTab: 1, // 1=生长, 2=绽放, 3=风动, 4=发光, 5=旋转, 6=凋零
      ...params,
    };
    this._group = new THREE.Group();
    this._group.position.set(0, -0.15, 0);
    this._clock = new THREE.Clock();
    this._time = 0;
    this._mouse = { x: 0, y: 0 };
    this._target = { x: 0, y: 0 };
    this._bgMesh = null;
    this._bgMat = null;
    this._lightGroup = new THREE.Group();
    this._loaded = false;
    this._parts = new Map(); // name -> { mesh, initPos, initQuat, initScale, mat, origPositions, zMin, zMax, zRange }

    // 自带相机 FOV 45（原版一致）
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.set(0, 0.2, 0.8);
  }

  build() {
    this._createBackground();
    this._createLights();
    this._loadModel();
    return this;
  }

  addTo(scene) {
    scene.add(this._group);
    scene.add(this._lightGroup);
    if (this._bgMesh) scene.add(this._bgMesh);
    return this;
  }

  setMouse(x, y) {
    this._mouse.x = (x / window.innerWidth - 0.5) * 2;
    this._mouse.y = (y / window.innerHeight - 0.5) * 2;
  }

  update() {
    const dt = this._clock.getDelta();
    const o = this.options;
    this._time += dt;
    const t = this._time;

    // 鼠标视差（原版 1:1）
    this._target.x += (this._mouse.x * o.mouseParallaxH - this._target.x) * o.smoothFactor;
    this._target.y += (-this._mouse.y * o.mouseParallaxV - this._target.y) * o.smoothFactor;

    // 轨道相机（原版 1:1）
    this.camera.position.x = Math.sin(o.autoRotateSpeed * t + this._target.x) * o.cameraDistance * 0.23;
    this.camera.position.z = Math.cos(o.autoRotateSpeed * t + this._target.x) * o.cameraDistance * 0.23;
    this.camera.position.y = 0.15 + this._target.y;
    this.camera.lookAt(0, 0.08, 0);

    // 背景
    if (this._bgMat) this._bgMat.uniforms.uTime.value += dt;

    if (!this._loaded) return;

    // 生长进度
    let progress;
    if (o.autoPlay) {
      const cycle = o.growthDuration;
      if (o.loopMode === 'loop') {
        progress = (t % cycle) / cycle;
      } else if (o.loopMode === 'pingpong') {
        const phase = (t % (cycle * 2)) / cycle;
        progress = phase <= 1 ? phase : 2 - phase;
      } else {
        progress = Math.min(t / cycle, 1);
      }
    } else {
      progress = Math.max(0, Math.min(1, o.growthProgress || 0));
    }

    this._animateParts(progress, t);
  }

  resize(w, h) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  dispose() {
    this._group.traverse(child => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
        else child.material.dispose();
      }
    });
    if (this._group.parent) this._group.parent.remove(this._group);
    if (this._lightGroup.parent) this._lightGroup.parent.remove(this._lightGroup);
    if (this._bgMesh) {
      this._bgMesh.geometry.dispose();
      this._bgMat.dispose();
      if (this._bgMesh.parent) this._bgMesh.parent.remove(this._bgMesh);
    }
  }

  /* ─── 加载 GLB 模型 + 贴图（原版 1:1） ─── */
  _loadModel() {
    const loader = new GLTFLoader();
    const texLoader = new THREE.TextureLoader();

    // 使用 Vite 的 BASE_URL 确保开发和生产环境路径都正确
    const base = (typeof import.meta.env !== 'undefined' && import.meta.env.BASE_URL) || '/';

    // 加载贴图
    const colorTex = texLoader.load(base + 'model/color.png');
    colorTex.flipY = true;
    colorTex.colorSpace = THREE.SRGBColorSpace;

    const roughTex = texLoader.load(base + 'model/roughness.png');
    roughTex.flipY = true;

    loader.load(base + 'model/tulip-split.glb', (gltf) => {
      const model = gltf.scene.clone(true);
      model.traverse(child => {
        if (!child.isMesh) return;

        const partDef = PARTS[child.name];
        const mat = new THREE.MeshStandardMaterial({
          map: colorTex,
          roughnessMap: roughTex,
          roughness: 0.55,
          metalness: 0,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0,
          envMapIntensity: 0.3,
        });
        child.material = mat;
        child.castShadow = true;
        child.receiveShadow = true;

        // 花瓣/叶片需要独立 geometry（顶点变形动画会修改 position）
        let origPositions = null;
        let zMin = 0, zMax = 0, zRange = 1;
        if (partDef && (partDef.type === 'petal' || partDef.type === 'leaf')) {
          // 先 clone geometry 确保独立，再保存原始顶点
          child.geometry = child.geometry.clone();
          const posAttr = child.geometry.getAttribute('position');
          origPositions = new Float32Array(posAttr.array);
          let minZ = Infinity, maxZ = -Infinity;
          for (let i = 0; i < posAttr.count; i++) {
            const z = origPositions[i * 3 + 2];
            if (z < minZ) minZ = z;
            if (z > maxZ) maxZ = z;
          }
          zMin = minZ;
          zMax = maxZ;
          zRange = maxZ - minZ || 1;
        }

        this._parts.set(child.name, {
          mesh: child,
          initPos: child.position.clone(),
          initQuat: child.quaternion.clone(),
          initScale: child.scale.clone(),
          mat,
          origPositions,
          zMin,
          zMax,
          zRange,
        });
      });

      this._group.add(model);
      this._loaded = true;
    });
  }

  /* ─── 专用灯光（原版 1:1） ─── */
  _createLights() {
    const amb = new THREE.AmbientLight(0xe8e0f0, 0.6);
    const dir1 = new THREE.DirectionalLight(0xfff5ee, 1.8);
    dir1.position.set(3, 5, 2);
    dir1.castShadow = true;
    const dir2 = new THREE.DirectionalLight(0xd0c8ff, 0.7);
    dir2.position.set(-2, 4, -3);
    const dir3 = new THREE.DirectionalLight(0xf0e8ff, 0.3);
    dir3.position.set(0, -1, 2);
    const pt = new THREE.PointLight(0xffd4e0, 0.8, 2, 2);
    pt.position.set(0, 0.25, 0.15);
    const hemi = new THREE.HemisphereLight(0xb8c8ff, 0x2a3a1a, 0.35);
    this._lightGroup.add(amb, dir1, dir2, dir3, pt, hemi);
  }

  /* ─── 星空渐变背景（原版 1:1） ─── */
  _createBackground() {
    this._bgMat = new THREE.ShaderMaterial({
      depthWrite: false,
      depthTest: false,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }
      `,
      fragmentShader: BG_TULIP_FS,
    });
    this._bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this._bgMat);
    this._bgMesh.renderOrder = -1;
    this._bgMesh.frustumCulled = false;
  }

  /* ─── 动画（原版 1:1 — Tab 1 生长模式） ─── */
  _animateParts(progress, t) {
    const o = this.options;
    const windH = Math.sin(t * o.windSpeed * 0.4) * o.windStrength;
    const windV = Math.cos(t * o.windSpeed * 0.3 + 1.5) * o.windStrength;

    this._parts.forEach((data, name) => {
      const { mesh, initPos, initQuat, initScale, mat, origPositions, zMin, zRange } = data;
      const partDef = PARTS[name];
      if (!partDef) return;

      const localProgress = Math.max(0, Math.min(1,
        (progress - partDef.growStart) / (partDef.growEnd - partDef.growStart)
      ));
      const order = partDef.order || 0;

      // 重置到初始状态
      mesh.position.copy(initPos);
      mesh.quaternion.copy(initQuat);
      mesh.scale.copy(initScale);
      if (origPositions) {
        const posAttr = mesh.geometry.getAttribute('position');
        posAttr.array.set(origPositions);
        posAttr.needsUpdate = true;
      }

      // 生长动画（原版 Tab 1 1:1）
      this._animateGrowth(mesh, mat, partDef, localProgress, order, t, windH, windV, origPositions, zMin, zRange);

      mesh.visible = localProgress > 0.001;
    });

    // 整体微风摇摆
    const stemGrow = Math.min(3 * progress, 1);
    this._group.rotation.y = 0;
    this._group.rotation.z = 0.003 * windH * stemGrow;
    this._group.rotation.x = 0.002 * windV * stemGrow;
  }

  /* ─── 生长动画逻辑（原版 Tab 1 1:1） ─── */
  _animateGrowth(mesh, mat, partDef, progress, order, t, windH, windV, origPositions, zMin, zRange) {
    const o = this.options;

    if (partDef.type === 'stem') {
      const g = easeOutCubic(progress);
      mesh.scale.set(
        mesh.scale.x * (0.3 + 0.7 * g),
        mesh.scale.y * Math.max(0.001, g),
        mesh.scale.z * (0.3 + 0.7 * g)
      );
      mat.opacity = Math.min(progress * 5, 1);
      if (g > 0.3) {
        mesh.rotateZ(0.003 * windH * g);
        mesh.rotateX(0.002 * windV * g);
      }
    } else if (partDef.type === 'leaf') {
      const g = easeOutBack(progress);
      mesh.scale.multiplyScalar(Math.max(0.001, g));
      mat.opacity = Math.min(progress * 4, 1);
      mesh.rotateY((1 - g) * 0.6);
      mesh.rotateX((1 - g) * 0.18);
      if (g > 0.3) {
        mesh.rotateZ(0.008 * Math.sin(t * o.windSpeed * 0.6 + mesh.id * 2) * o.windStrength * g);
      }
    } else if (partDef.type === 'pistil') {
      mat.opacity = easeOutCubic(Math.min(progress * 2.5, 1));
    } else if (partDef.type === 'petal') {
      mat.opacity = easeOutCubic(Math.min(progress * 2.5, 1));

      // 花瓣缩放
      const scaleG = Math.max(0.001, easeOutBack(Math.min(progress / 0.5, 1)));
      mesh.scale.multiplyScalar(scaleG);

      // 花瓣展开
      const openG = easeOutBack(Math.min(Math.max((progress - 0.25) / 0.75, 0), 1));
      const closedAmount = 1 - openG;

      if (closedAmount > 0.005) {
        mesh.rotateX(-(0.5 * closedAmount));
        mesh.rotateY(0.08 * closedAmount * (order % 2 === 0 ? 1 : -1));
      }

      // 花瓣顶部外翻变形（原版 1:1）
      // 原版：n = 1 - easeInOutCubic(progress/0.65)
      // 进度低时 n≈1 花瓣大幅外翻（含苞待放形态）
      // 进度高时 n≈0 花瓣收拢（绽放后自然闭合）
      if (origPositions && zRange) {
        const posAttr = mesh.geometry.getAttribute('position');
        const arr = posAttr.array;
        // easeInOutCubic → 取反
        let rawT = Math.min(progress / 0.65, 1);
        let eased = rawT < 0.5
          ? 4 * rawT * rawT * rawT
          : 1 - Math.pow(-2 * rawT + 2, 3) / 2;
        const curlAmount = 1 - eased; // 原版关键：1 - eased
        for (let i = 0; i < posAttr.count; i++) {
          const oz = origPositions[i * 3 + 2];
          const nz = (oz - zMin) / zRange;
          arr[i * 3 + 2] = oz + nz * nz * curlAmount * 3.5;
        }
        posAttr.needsUpdate = true;
      }

      // 花瓣微风
      if (openG > 0.7) {
        const windT = (openG - 0.7) / 0.3;
        mesh.rotateX(0.005 * Math.sin(t * (1 + order * 0.18) + order * 1.5) * windT * o.windStrength);
        mesh.rotateZ(0.004 * Math.sin(t * (0.7 + order * 0.13) + order * 2.1) * windT * o.windStrength);
      }
    }
  }
}

/* ========== 星空渐变背景 (原版 1:1) ========== */
const BG_TULIP_FS = /* glsl */`
  uniform float uTime;
  varying vec2 vUv;
  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  void main() {
    vec2 uv = vUv;
    vec3 top = vec3(0.02, 0.015, 0.06);
    vec3 mid = vec3(0.06, 0.04, 0.14);
    vec3 bot = vec3(0.12, 0.08, 0.22);
    float t = uv.y;
    vec3 col;
    if (t > 0.5) col = mix(mid, top, smoothstep(0.5, 1.0, t));
    else col = mix(bot, mid, smoothstep(0.0, 0.5, t));
    col = mix(vec3(0.02, 0.03, 0.01), col, smoothstep(0.0, 0.15, t));
    vec2 sg = uv * vec2(50.0, 30.0);
    vec2 sc = floor(sg);
    float sr = hash(sc);
    if (sr > 0.93) {
      vec2 sp = fract(sg) - 0.5;
      vec2 so = (vec2(hash(sc + 1.0), hash(sc + 2.0)) - 0.5) * 0.4;
      float sd = length(sp - so);
      float star = smoothstep(0.03, 0.0, sd);
      float tw = sin(uTime * (1.0 + sr * 2.5) + sr * 6.28) * 0.5 + 0.5;
      col += vec3(0.5, 0.5, 0.7) * star * (tw * 0.5 + 0.5) * 0.6 * smoothstep(0.25, 0.7, uv.y);
    }
    gl_FragColor = vec4(col, 1.0);
  }
`;