import * as THREE from 'three';

/**
 * VantaEffect — 所有 Vanta 效果的统一适配层
 * 
 * 不直接继承 ProceduralEntity，而是提供与其兼容的 API：
 *   build() → this
 *   addTo(scene) → this
 *   dispose()
 *   update()
 *   setRenderer(renderer)
 *   resize(w,h)
 *   setMouse(x,y)
 * 
 * 子类只需实现：
 *   static get fragmentShader() → GLSL string
 *   getDefaults() → object
 *   (可选) onInit(), onUpdate(), onDestroy()
 */
export class VantaEffect {
  constructor(params = {}) {
    const defs = this.getDefaults ? this.getDefaults() : {};
    this._params = { ...defs, ...params };
    this._uniforms = null;
    this._material = null;
    this._mesh = null;
    this._scene = null;
    this._renderer = null;
    this._camera = new THREE.Camera();
    this._camera.position.z = 1;
    this._startTime = Date.now();
    this._innerScene = new THREE.Scene();
    // 双缓冲支持
    this._bufferTarget = null;
    this._bufferFeedback = null;
  }

  getDefaults() { return {}; }

  /** 构建 uniforms：自动将颜色→vec3，数字→float */
  _buildUniforms() {
    const u = {
      iTime:       { value: 0.0 },
      iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      iDpr:        { value: window.devicePixelRatio || 1 },
      iMouse:      { value: new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2) },
    };
    for (const k in this._params) {
      const v = this._params[k];
      if (k === 'seed' || k === 'texturePath') continue;
      if (k.toLowerCase().includes('color')) {
        const c = new THREE.Color(v);
        u[k] = { value: new THREE.Vector3(c.r, c.g, c.b) };
      } else if (typeof v === 'number') {
        u[k] = { value: v };
      }
    }
    return u;
  }

  build() {
    this._uniforms = this._buildUniforms();
    if (typeof this.onInit === 'function') this.onInit();

    this._material = new THREE.ShaderMaterial({
      uniforms: this._uniforms,
      vertexShader: `void main(){ gl_Position = vec4(position, 1.0); }`,
      fragmentShader: this.constructor.fragmentShader || 'void main(){ gl_FragColor=vec4(0.); }',
      depthWrite: false,
      depthTest: false,
    });

    this._mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this._material);
    this._mesh.frustumCulled = false;
    this._innerScene.add(this._mesh);
    return this;
  }

  addTo(scene) {
    this._scene = scene;
    scene.add(this._mesh);
    return this;
  }

  setRenderer(renderer) {
    this._renderer = renderer;
    return this;
  }

  update() {
    if (!this._uniforms) return this;
    this._uniforms.iTime.value = (Date.now() - this._startTime) * 0.001;
    if (typeof this.onUpdate === 'function') this.onUpdate();
    return this;
  }

  setMouse(x, y) {
    if (this._uniforms) this._uniforms.iMouse.value.set(x, y);
  }

  resize(w, h) {
    if (this._uniforms) this._uniforms.iResolution.value.set(w, h);
    if (typeof this.onResize === 'function') this.onResize(w, h);
  }

  setPosition() { return this; }
  setScale() { return this; }

  dispose() {
    if (typeof this.onDestroy === 'function') this.onDestroy();
    if (this._mesh) {
      if (this._scene) this._scene.remove(this._mesh);
      else if (this._mesh.parent) this._mesh.parent.remove(this._mesh);
    }
    if (this._material) this._material.dispose();
    if (this._mesh?.geometry) this._mesh.geometry.dispose();
    if (this._bufferTarget) this._bufferTarget.dispose();
    if (this._bufferFeedback) this._bufferFeedback.dispose();
    this._mesh = null;
    this._material = null;
    this._uniforms = null;
  }

  /** 工具：用于双缓冲效果 */
  _initDoubleBuffer(w, h) {
    const pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter };
    this._bufferTarget = new THREE.WebGLRenderTarget(w, h, pars);
    this._bufferFeedback = new THREE.WebGLRenderTarget(w, h, pars);
  }

  _swapBuffers() {
    const t = this._bufferTarget;
    this._bufferTarget = this._bufferFeedback;
    this._bufferFeedback = t;
  }
}
