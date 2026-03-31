/* ═══════════════════════════════════════════════════════════════
 *  Bloom — Deadrabbit 花朵绽放效果 1:1 完全复刻
 *  原版: https://deadrabbit.collax.app/bloom
 *  
 *  技术要点:
 *  - 128 花瓣 InstancedMesh (GLB pp.glb)
 *  - 花茎 GLB (stem.glb)
 *  - 顶点 Shader: 缩放 + 旋转 + 弯曲 + 绽放动画
 *  - 粒子系统: 发光漂浮粒子
 *  - 后处理: UnrealBloom + 鼠标交互扭曲
 *  - HDR 环境光 (dawn.hdr)
 *  - 入场动画: 相机推进 + 花瓣逐步绽放
 * ═══════════════════════════════════════════════════════════════ */

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

export class Bloom {
  constructor() {
    this.name = 'Bloom';
    this.description = '花朵绽放 — Deadrabbit 1:1 复刻';
    this.category = 'flora';
    
    // 内部状态
    this._scene = null;
    this._camera = null;
    this._group = null;
    this._petalMesh = null;   // InstancedMesh x128
    this._stemMesh = null;
    this._particles = null;
    this._composer = null;
    this._clock = new THREE.Clock();
    
    // 动画参数
    this._progress = { value: 0 };      // 绽放进度 0→1
    this._startProgress = { value: 0 };  // 入场进度 0→1
    this._animStarted = false;
    this._animStartTime = 0;
    
    // 鼠标交互
    this._pointer = new THREE.Vector2(0, 0);
    this._lastPointer = new THREE.Vector2(0, 0);
    this._pointerDiff = 0;
    this._isPointerEnter = false;
    
    // 扭曲纹理 (ping-pong)
    this._distortRT1 = null;
    this._distortRT2 = null;
    this._distortPhase = false;
    this._distortMaterial = null;
    
    // 花瓣材质 uniforms
    this._petalUniforms = {
      uProgress: { value: 0 },
      uStartProgress: { value: 0 },
      uTime: { value: 0 },
      map: { value: null },
      normalMap: { value: null },
      roughnessMap: { value: null },
      metalnessMap: { value: null },
      emissiveMap: { value: null },
    };
    
    this._loaded = false;
    this._renderer = null;
  }

  /* ─── 公共接口 ─── */
  
  getCamera() { return this._camera; }
  
  getBackground() { return null; } // 使用渐变背景，非 scene.background
  
  getLights() { return []; } // 使用 HDR 环境光
  
  async init(parentScene, renderer) {
    this._renderer = renderer;
    this._scene = new THREE.Scene();
    
    // 相机 (原版: position [0,2,2], zoom 2.5)
    this._camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    this._camera.position.set(0, 2, 0.01); // 入场起始位置 (z:0 → z:2)
    this._camera.zoom = 2.5;
    this._camera.updateProjectionMatrix();
    
    // 创建包裹组
    this._group = new THREE.Group();
    this._scene.add(this._group);
    
    // 渐变背景
    this._createGradientBackground();
    
    // 加载所有资源
    await this._loadAll(renderer);
    
    // 后处理
    this._setupPostProcessing(renderer);
    
    // 鼠标扭曲
    this._setupDistortion(renderer);
    
    // 鼠标事件
    this._setupPointerEvents(renderer);
    
    // 启动入场动画
    this._animStartTime = this._clock.getElapsedTime();
    this._animStarted = true;
    this._loaded = true;
  }

  update(time, delta) {
    if (!this._loaded) return;
    
    const t = this._clock.getElapsedTime();
    this._petalUniforms.uTime.value = t;
    
    // ── 入场动画 ──
    if (this._animStarted) {
      const elapsed = t - this._animStartTime;
      
      // 相机推进: z: 0.01 → 2, 持续 2s
      const camT = Math.min(elapsed / 2.0, 1);
      const camEased = 1 - Math.pow(1 - camT, 3);
      this._camera.position.z = 0.01 + camEased * 1.99;
      
      // 绽放进度: 延迟 0.5s, 持续 5.5s
      const bloomElapsed = Math.max(elapsed - 0.5, 0);
      const bloomT = Math.min(bloomElapsed / 5.5, 1);
      const bloomEased = bloomT < 0.5
        ? 4 * bloomT * bloomT * bloomT
        : 1 - Math.pow(-2 * bloomT + 2, 3) / 2;
      this._startProgress.value = bloomEased;
      this._petalUniforms.uStartProgress.value = bloomEased;
    }
    
    // ── 鼠标视差 ──
    const targetX = -(0.3 * this._pointer.x);
    this._camera.position.x += (targetX - this._camera.position.x) * 0.05;
    this._camera.position.y += (2 - this._camera.position.y) * 0.05;
    this._camera.lookAt(0, 0.5, 0);
    
    // ── 更新花瓣实例矩阵 ──
    this._updatePetals(t);
    
    // ── 更新粒子 ──
    this._updateParticles(t, delta || 0.016);
    
    // ── 更新扭曲 ──
    this._updateDistortion();
  }
  
  render(renderer) {
    if (!this._loaded) return;
    
    // 使用 composer 渲染
    if (this._composer) {
      this._composer.render();
    }
  }
  
  dispose() {
    if (this._distortRT1) this._distortRT1.dispose();
    if (this._distortRT2) this._distortRT2.dispose();
    if (this._composer) {
      this._composer.passes.forEach(p => p.dispose && p.dispose());
    }
    // 移除事件
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerenter', this._onPointerEnter);
    window.removeEventListener('pointerleave', this._onPointerLeave);
  }

  /* ─── 渐变背景 ─── */
  
  _createGradientBackground() {
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#000000');    // 顶部: 黑色
    gradient.addColorStop(1, '#8386ff');    // 底部: 紫蓝色
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 2, 512);
    
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    this._scene.background = tex;
  }

  /* ─── 加载所有资源 ─── */
  
  async _loadAll(renderer) {
    const gltfLoader = new GLTFLoader();
    const rgbeLoader = new RGBELoader();
    const base = (typeof import.meta.env !== 'undefined' && import.meta.env.BASE_URL) || '/';
    
    const [petalGLTF, stemGLTF, envMap] = await Promise.all([
      new Promise((res, rej) => gltfLoader.load(base + 'model/bloom-petal.glb', res, undefined, rej)),
      new Promise((res, rej) => gltfLoader.load(base + 'model/bloom-stem.glb', res, undefined, rej)),
      new Promise((res, rej) => rgbeLoader.load(base + 'model/dawn.hdr', res, undefined, rej)),
    ]);
    
    // ── HDR 环境光 ──
    const pmremGen = new THREE.PMREMGenerator(renderer);
    pmremGen.compileEquirectangularShader();
    const envRT = pmremGen.fromEquirectangular(envMap);
    this._scene.environment = envRT.texture;
    this._scene.environmentIntensity = 0.5;
    this._scene.environmentRotation = new THREE.Euler(0, -Math.PI / 1.5, 0);
    envMap.dispose();
    pmremGen.dispose();
    
    // ── 花茎 ──
    this._setupStem(stemGLTF);
    
    // ── 花瓣 ──
    this._setupPetals(petalGLTF);
    
    // ── 粒子 ──
    this._setupParticles();
  }

  /* ─── 花茎 ─── */
  
  _setupStem(gltf) {
    const stemScene = gltf.scene;
    stemScene.scale.set(0.8, 0.8, 0.8);
    stemScene.position.set(0, -3.3, -0.03);
    
    stemScene.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        const mat = new THREE.MeshStandardMaterial({
          roughness: 0.5,
          color: '#ffffff',
        });
        child.material = mat;
      }
    });
    
    this._group.add(stemScene);
    this._stemMesh = stemScene;
  }

  /* ─── 花瓣 (128 InstancedMesh + 自定义 Shader) ─── */
  
  _setupPetals(gltf) {
    // 从 GLB 中提取花瓣几何体和材质纹理
    let petalGeometry = null;
    let petalMaterial = null;
    
    gltf.scene.traverse(child => {
      if (child.isMesh && !petalGeometry) {
        petalGeometry = child.geometry;
        petalMaterial = child.material;
      }
    });
    
    if (!petalGeometry) {
      console.error('Bloom: 未找到花瓣几何体');
      return;
    }
    
    // 提取纹理
    if (petalMaterial) {
      this._petalUniforms.map.value = petalMaterial.map;
      this._petalUniforms.normalMap.value = petalMaterial.normalMap;
      this._petalUniforms.roughnessMap.value = petalMaterial.roughnessMap;
      this._petalUniforms.metalnessMap.value = petalMaterial.metalnessMap;
      this._petalUniforms.emissiveMap.value = petalMaterial.emissiveMap;
    }
    
    // 创建自定义 Shader 材质
    const material = new THREE.ShaderMaterial({
      uniforms: {
        ...this._petalUniforms,
        envMap: { value: this._scene.environment },
        envMapIntensity: { value: 0.5 },
      },
      vertexShader: this._petalVertexShader(),
      fragmentShader: this._petalFragmentShader(),
      side: THREE.DoubleSide,
      transparent: false,
    });
    
    // 创建 InstancedMesh
    const instanceCount = 128;
    this._petalMesh = new THREE.InstancedMesh(petalGeometry, material, instanceCount);
    
    // 初始化实例矩阵 — 每瓣旋转 140°
    const dummy = new THREE.Object3D();
    for (let i = 0; i < instanceCount; i++) {
      dummy.rotation.set(0, THREE.MathUtils.degToRad(140 * i), 0);
      dummy.updateMatrix();
      this._petalMesh.setMatrixAt(i, dummy.matrix);
    }
    this._petalMesh.instanceMatrix.needsUpdate = true;
    
    this._group.add(this._petalMesh);
  }

  /* ─── 花瓣顶点 Shader ─── */
  
  _petalVertexShader() {
    return /* glsl */`
      uniform float uProgress;
      uniform float uStartProgress;
      uniform float uTime;
      
      attribute vec3 instanceColor;
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying float vInstanceId;
      
      // 缩放函数
      vec3 scalePos(vec3 pos, vec3 scaleFactor) {
        mat3 sm = mat3(
          scaleFactor.x, 0.0, 0.0,
          0.0, scaleFactor.y, 0.0,
          0.0, 0.0, scaleFactor.z
        );
        return sm * pos;
      }
      
      // 绕任意轴旋转
      vec3 rotateAroundAxis(vec3 pos, vec3 axis, float angle) {
        axis = normalize(axis);
        float s = sin(angle);
        float c = cos(angle);
        float oc = 1.0 - c;
        mat3 rm = mat3(
          oc * axis.x * axis.x + c,       oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s,
          oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c,       oc * axis.y * axis.z - axis.x * s,
          oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c
        );
        return rm * pos;
      }
      
      // 弯曲函数 (围绕Z轴弯曲)
      vec3 bend(vec3 pos, float curvature, vec3 center) {
        if (abs(curvature) < 1e-5) return pos;
        pos -= center;
        float x = pos.x;
        float y = pos.y;
        float z = pos.z;
        
        float bendAngle = x * curvature;
        float cosA = cos(bendAngle);
        float sinA = sin(bendAngle);
        
        // 绕 Z 轴弯曲
        pos.x = x;
        pos.y = y * cosA + (1.0 - cosA) / curvature;
        pos.z = y * sinA + z;
        
        pos += center;
        return pos;
      }
      
      void main() {
        vUv = uv;
        
        // 每瓣的偏移 (原版: instanceID / 64 * 6)
        float instanceId = float(gl_InstanceID);
        vInstanceId = instanceId;
        float phaseOffset = instanceId / 64.0 * 6.0;
        
        // 时间归一化 (原版: mod(time + phaseOffset, 6) / 6)
        float normalizedTime = mod(uTime + phaseOffset, 6.0) / 6.0;
        
        // 弯曲角度随进度变化 (原版: mix(uStartProgress, 0, 1, 1, -2))
        float bendStrength = mix(1.0, -2.0, uStartProgress);
        
        // 弯曲角度 (原版: mix(n, 0, 1, PI*2, bendStrength*PI))
        float curvature = mix(6.28318, bendStrength * 3.14159, normalizedTime);
        
        // 缩放随进度变化 (原版: mix(uStartProgress, 0, 1, (0.8,0.01,0.3), (0.8,0.7,0.4)))
        vec3 scaleFactor = mix(vec3(0.8, 0.01, 0.3), vec3(0.8, 0.7, 0.4), uStartProgress);
        
        // 应用变形
        vec3 pos = position;
        
        // 1. 缩放
        pos = scalePos(pos, scaleFactor);
        
        // 2. 弯曲
        pos = bend(pos, curvature, vec3(0.0));
        
        // 3. 缩放(绽放阶段)
        float bloomScale = mix(0.0, 1.0, smoothstep(0.0, 0.5, normalizedTime));
        pos = scalePos(pos, vec3(bloomScale));
        
        // 4. 收缩阶段
        float shrinkScale = mix(0.8, 0.2, smoothstep(0.5, 1.0, normalizedTime));
        pos = scalePos(pos, vec3(shrinkScale));
        
        // 5. 绕 Y 轴旋转 (原版: rotate around Y by PI*-0.3 + uStartProgress)
        float yRotation = 3.14159 * (-0.3) + uStartProgress * 3.14159;
        pos = rotateAroundAxis(pos, vec3(0.0, 1.0, 0.0), yRotation);
        
        // 法线计算 (近似)
        vec3 tangent1 = pos + vec3(0.01, 0.0, 0.0);
        tangent1 = scalePos(tangent1, scaleFactor);
        vec3 tangent2 = pos + vec3(0.0, 0.01, 0.0);
        tangent2 = scalePos(tangent2, scaleFactor);
        vNormal = normalize(cross(tangent1 - pos, tangent2 - pos));
        vNormal = normalMatrix * vNormal;
        
        // 应用实例矩阵
        vec4 worldPos = instanceMatrix * vec4(pos, 1.0);
        vec4 mvPosition = modelViewMatrix * worldPos;
        vViewPosition = -mvPosition.xyz;
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `;
  }

  /* ─── 花瓣片元 Shader ─── */
  
  _petalFragmentShader() {
    return /* glsl */`
      uniform sampler2D map;
      uniform sampler2D normalMap;
      uniform sampler2D roughnessMap;
      uniform sampler2D emissiveMap;
      uniform float uStartProgress;
      uniform float uTime;
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying float vInstanceId;
      
      void main() {
        // 纹理采样
        vec4 texColor = texture2D(map, vUv);
        
        // 淡入: 随 uStartProgress 从黑色过渡到纹理色
        float fadeIn = smoothstep(0.0, 1.0, uStartProgress * 2.0);
        vec3 color = mix(vec3(0.0), texColor.rgb, fadeIn);
        
        // 正面/背面处理 (原版: gl_FrontFacing)
        vec3 norm = gl_FrontFacing ? vNormal : -vNormal;
        
        // 简单光照
        vec3 lightDir = normalize(vec3(0.5, 1.0, 0.5));
        float diffuse = max(dot(norm, lightDir), 0.0) * 0.6 + 0.4;
        
        // 自发光
        vec4 emissive = texture2D(emissiveMap, vUv);
        color += emissive.rgb * 0.3;
        
        color *= diffuse;
        
        // 伽马校正
        color = pow(color, vec3(1.0 / 2.2));
        
        gl_FragColor = vec4(color, texColor.a);
      }
    `;
  }

  /* ─── 更新花瓣 ─── */
  
  _updatePetals(time) {
    if (!this._petalMesh) return;
    this._petalMesh.material.uniforms.uTime.value = time;
    this._petalMesh.material.uniforms.uStartProgress.value = this._startProgress.value;
  }

  /* ─── 粒子系统 ─── */
  
  _setupParticles() {
    const count = 400;  // 20x20
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    
    const spread = { x: 20, y: 20, z: 20 };
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread.x;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread.y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread.z;
      velocities[i * 3] = 0;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = 0;
      phases[i] = Math.random();
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    this._particleVelocities = velocities;
    this._particlePhases = phases;
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 3.0 },
      },
      vertexShader: /* glsl */`
        uniform float uTime;
        uniform float uSize;
        attribute float phase;
        varying float vAlpha;
        
        void main() {
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = uSize * (100.0 / -mvPos.z);
          gl_Position = projectionMatrix * mvPos;
          vAlpha = abs(sin(uTime + phase * 6.28));
        }
      `,
      fragmentShader: /* glsl */`
        varying float vAlpha;
        
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          if (d > 1.0) discard;
          float alpha = (1.0 - d * d) * vAlpha * 0.6;
          gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    
    // 添加 phase 属性
    geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
    
    this._particles = new THREE.Points(geometry, material);
    this._scene.add(this._particles);
  }

  _updateParticles(time, delta) {
    if (!this._particles) return;
    
    this._particles.material.uniforms.uTime.value = time;
    
    const posAttr = this._particles.geometry.getAttribute('position');
    const arr = posAttr.array;
    const vel = this._particleVelocities;
    
    for (let i = 0; i < posAttr.count; i++) {
      const i3 = i * 3;
      // 重力
      vel[i3 + 1] -= 0.0098;
      // 应用速度
      arr[i3] += vel[i3];
      arr[i3 + 1] += vel[i3 + 1];
      arr[i3 + 2] += vel[i3 + 2];
      // 地板反弹
      if (arr[i3 + 1] < 0) {
        arr[i3 + 1] = 0;
        vel[i3 + 1] = -vel[i3 + 1] * 0.5;
      }
    }
    posAttr.needsUpdate = true;
  }

  /* ─── 后处理 ─── */
  
  _setupPostProcessing(renderer) {
    this._composer = new EffectComposer(renderer);
    
    const renderPass = new RenderPass(this._scene, this._camera);
    this._composer.addPass(renderPass);
    
    // Bloom 辉光
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.8,   // strength
      0.5,   // radius
      0.3    // threshold
    );
    this._composer.addPass(bloomPass);
    this._bloomPass = bloomPass;
    
    // 鼠标扭曲后处理
    const distortShader = {
      uniforms: {
        tDiffuse: { value: null },
        tDistort: { value: null },
        uStrength: { value: 0.05 },
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDistort;
        uniform float uStrength;
        varying vec2 vUv;
        
        void main() {
          vec4 distort = texture2D(tDistort, vUv);
          vec2 offset = distort.rg * uStrength;
          vec2 uv = vec2(vUv.x + offset.x, 1.0 - vUv.y);
          uv.y = 1.0 - uv.y; // flip correction
          gl_FragColor = texture2D(tDiffuse, vUv + offset);
        }
      `,
    };
    
    this._distortPass = new ShaderPass(distortShader);
    this._distortPass.renderToScreen = true;
    this._composer.addPass(this._distortPass);
  }

  /* ─── 鼠标扭曲纹理 (Ping-Pong) ─── */
  
  _setupDistortion(renderer) {
    const w = Math.floor(window.innerWidth);
    const h = Math.floor(window.innerHeight);
    
    const opts = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    };
    
    this._distortRT1 = new THREE.WebGLRenderTarget(w, h, opts);
    this._distortRT2 = new THREE.WebGLRenderTarget(w, h, opts);
    
    // Ping-pong compute 用全屏 quad 模拟
    this._distortScene = new THREE.Scene();
    this._distortCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    this._distortMaterial = new THREE.ShaderMaterial({
      uniforms: {
        tPrev: { value: null },
        uPointer: { value: new THREE.Vector2(0.5, 0.5) },
        uLastPointer: { value: new THREE.Vector2(0.5, 0.5) },
        uBrushSize: { value: 0.05 },
        uFadingRate: { value: 0.95 },
        uIsPointerEnter: { value: 0 },
        uDiff: { value: 0 },
        uAspect: { value: w / h },
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */`
        uniform sampler2D tPrev;
        uniform vec2 uPointer;
        uniform vec2 uLastPointer;
        uniform float uBrushSize;
        uniform float uFadingRate;
        uniform float uIsPointerEnter;
        uniform float uDiff;
        uniform float uAspect;
        
        varying vec2 vUv;
        
        // 点到线段的距离
        float distToSegment(vec2 p, vec2 a, vec2 b) {
          vec2 pa = p - a;
          vec2 ba = b - a;
          float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
          return length(pa - ba * h);
        }
        
        void main() {
          vec2 uv = vUv;
          vec2 aspect = vec2(uAspect, 1.0);
          vec2 p = uv * aspect;
          vec2 a = uLastPointer * aspect;
          vec2 b = uPointer * aspect;
          
          float dist = distToSegment(p, a, b);
          float brush = 1.0 - smoothstep(0.0, uBrushSize, dist);
          
          vec4 prev = texture2D(tPrev, uv) * uFadingRate;
          
          float influence = uIsPointerEnter * smoothstep(0.001, 0.01, uDiff);
          
          gl_FragColor = mix(prev, vec4(uIsPointerEnter, 0.0, 0.0, 1.0), brush * influence);
        }
      `,
    });
    
    const quad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      this._distortMaterial
    );
    this._distortScene.add(quad);
  }

  _updateDistortion() {
    if (!this._renderer || !this._distortMaterial) return;
    
    const readRT = this._distortPhase ? this._distortRT2 : this._distortRT1;
    const writeRT = this._distortPhase ? this._distortRT1 : this._distortRT2;
    
    this._distortMaterial.uniforms.tPrev.value = readRT.texture;
    this._distortMaterial.uniforms.uPointer.value.set(
      this._pointer.x * 0.5 + 0.5,
      this._pointer.y * 0.5 + 0.5
    );
    this._distortMaterial.uniforms.uLastPointer.value.set(
      this._lastPointer.x * 0.5 + 0.5,
      this._lastPointer.y * 0.5 + 0.5
    );
    this._distortMaterial.uniforms.uDiff.value = this._pointerDiff;
    this._distortMaterial.uniforms.uIsPointerEnter.value = this._isPointerEnter ? 1 : 0;
    
    // Render ping-pong
    const renderer = this._renderer;
    renderer.setRenderTarget(writeRT);
    renderer.render(this._distortScene, this._distortCamera);
    renderer.setRenderTarget(null);
    
    // 更新后处理的扭曲纹理
    if (this._distortPass) {
      this._distortPass.uniforms.tDistort.value = writeRT.texture;
    }
    
    this._distortPhase = !this._distortPhase;
    this._lastPointer.copy(this._pointer);
    this._pointerDiff *= 0.95;
  }

  /* ─── 鼠标事件 ─── */
  
  _setupPointerEvents(renderer) {
    const canvas = renderer.domElement;
    
    this._onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const newX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const newY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      const dx = newX - this._pointer.x;
      const dy = newY - this._pointer.y;
      this._pointerDiff = Math.sqrt(dx * dx + dy * dy);
      
      this._pointer.set(newX, newY);
    };
    
    this._onPointerEnter = () => { this._isPointerEnter = true; };
    this._onPointerLeave = () => { this._isPointerEnter = false; };
    
    canvas.addEventListener('pointermove', this._onPointerMove);
    canvas.addEventListener('pointerenter', this._onPointerEnter);
    canvas.addEventListener('pointerleave', this._onPointerLeave);
  }

  /* ─── 窗口大小变化 ─── */
  
  onResize(width, height) {
    if (this._camera) {
      this._camera.aspect = width / height;
      this._camera.updateProjectionMatrix();
    }
    if (this._composer) {
      this._composer.setSize(width, height);
    }
    if (this._bloomPass) {
      this._bloomPass.resolution.set(width, height);
    }
    if (this._distortMaterial) {
      this._distortMaterial.uniforms.uAspect.value = width / height;
    }
  }
}
