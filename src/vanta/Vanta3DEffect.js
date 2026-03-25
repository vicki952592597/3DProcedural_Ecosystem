import * as THREE from 'three';

/**
 * Vanta3DEffect — 3D Mesh Vanta 效果的基类
 * 
 * 与 VantaEffect（全屏 Shader）不同，这类效果自带 Camera、Light，
 * 使用 Three.js 几何体（Mesh/Points/LineSegments）构建场景。
 * 
 * 子类需实现：
 *   getDefaults() → 默认参数
 *   onInit() → 创建几何体、灯光、相机
 *   onUpdate(dt) → 每帧动画
 *   onMouseMove(x, y) → 鼠标交互  [0~1 归一化]
 *   (可选) onDestroy(), onResize(w, h)
 */
export class Vanta3DEffect {
  constructor(params = {}) {
    const defs = this.getDefaults ? this.getDefaults() : {};
    this._params = { ...defs, ...params };
    this.options = this._params;
    this.t = 0;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.mouseX = 0.5;
    this.mouseY = 0.5;
    this._scene = null; // 外部 scene 引用
    this._ownScene = new THREE.Scene(); // 自己的 scene（包含自己的灯光和几何体）
    this.camera = null;
    this._renderer = null;
    this._children = []; // 跟踪自己添加到外部 scene 的对象
    this._clock = new THREE.Clock();
  }

  getDefaults() { return {}; }

  build() {
    if (typeof this.onInit === 'function') this.onInit();
    return this;
  }

  addTo(scene) {
    this._scene = scene;
    // 把所有自建的子对象添加到外部 scene（包括灯光、相机）
    this._ownScene.children.slice().forEach(child => {
      this._ownScene.remove(child);
      scene.add(child);
      this._children.push(child);
    });
    // 同步背景色
    if (this.options.backgroundColor !== undefined) {
      scene.background = new THREE.Color(this.options.backgroundColor);
    }
    // 同步 fog（如 Birds 效果需要）
    if (this._ownScene.fog) {
      scene.fog = this._ownScene.fog;
      this._hadFog = true;
    }
    return this;
  }

  setRenderer(renderer) {
    this._renderer = renderer;
    return this;
  }

  update() {
    const dt = this._clock.getDelta();
    this.t += dt * 1000; // 兼容 vanta 的 this.t (毫秒)
    if (typeof this.onUpdate === 'function') this.onUpdate(dt);
    return this;
  }

  setMouse(x, y) {
    this.mouseX = x / window.innerWidth;
    this.mouseY = y / window.innerHeight;
    if (typeof this.onMouseMove === 'function') this.onMouseMove(this.mouseX, this.mouseY);
  }

  resize(w, h) {
    this.width = w;
    this.height = h;
    if (this.camera) {
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    }
    if (typeof this.onResize === 'function') this.onResize(w, h);
  }

  setPosition() { return this; }
  setScale() { return this; }

  dispose() {
    if (typeof this.onDestroy === 'function') this.onDestroy();
    // 清理所有添加到外部 scene 的对象
    this._children.forEach(child => {
      if (this._scene) this._scene.remove(child);
      _clearObject(child);
    });
    this._children = [];
    // 移除 fog
    if (this._hadFog && this._scene) {
      this._scene.fog = null;
      this._hadFog = false;
    }
  }
}

/** 递归销毁 Three.js 对象 */
function _clearObject(obj) {
  while (obj.children && obj.children.length > 0) {
    _clearObject(obj.children[0]);
    obj.remove(obj.children[0]);
  }
  if (obj.geometry) obj.geometry.dispose();
  if (obj.material) {
    if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
    else obj.material.dispose();
  }
}

/* ── 辅助工具函数（替代 helpers.js） ── */
export function rn(start = 0, end = 1) {
  return start + Math.random() * (end - start);
}
export function ri(start = 0, end = 1) {
  return Math.floor(start + Math.random() * (end - start + 1));
}
export function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}
