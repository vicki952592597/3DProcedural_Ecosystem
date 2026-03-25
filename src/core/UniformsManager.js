import * as THREE from 'three';

/**
 * UniformsManager - 全局 Uniform 统一调度器
 * 管理所有 Shader 中共享的 uniform 变量（如 uTime, uResolution 等）
 * 单例模式，确保全局唯一性
 */
export class UniformsManager {
  static _instance = null;

  /** @returns {UniformsManager} */
  static getInstance() {
    if (!UniformsManager._instance) {
      UniformsManager._instance = new UniformsManager();
    }
    return UniformsManager._instance;
  }

  constructor() {
    if (UniformsManager._instance) {
      throw new Error('[UniformsManager] Use getInstance() - Singleton violation');
    }

    /** @type {Map<string, THREE.IUniform>} */
    this._globals = new Map();
    /** @type {Map<string, Set<THREE.ShaderMaterial>>} */
    this._subscribers = new Map();

    // 注册内置全局 uniforms
    this.register('uTime', { value: 0.0 });
    this.register('uDeltaTime', { value: 0.016 });
    this.register('uResolution', { value: new THREE.Vector2(1920, 1080) });
    this.register('uMouse', { value: new THREE.Vector2(0, 0) });
    this.register('uFrame', { value: 0 });

    this._clock = new THREE.Clock();
  }

  /**
   * 注册一个全局 uniform
   * @param {string} name
   * @param {THREE.IUniform} uniform
   */
  register(name, uniform) {
    this._globals.set(name, uniform);
    if (!this._subscribers.has(name)) {
      this._subscribers.set(name, new Set());
    }
    return this;
  }

  /**
   * 获取全局 uniform
   * @param {string} name
   * @returns {THREE.IUniform|undefined}
   */
  get(name) {
    return this._globals.get(name);
  }

  /**
   * 将一个材质订阅到指定的全局 uniform
   * @param {THREE.ShaderMaterial} material
   * @param {string[]} uniformNames
   */
  subscribe(material, uniformNames) {
    for (const name of uniformNames) {
      if (!this._globals.has(name)) {
        console.warn(`[UniformsManager] Unknown uniform: ${name}`);
        continue;
      }
      material.uniforms[name] = this._globals.get(name);
      this._subscribers.get(name).add(material);
    }
    return this;
  }

  /**
   * 取消订阅
   * @param {THREE.ShaderMaterial} material
   */
  unsubscribe(material) {
    for (const [, subs] of this._subscribers) {
      subs.delete(material);
    }
  }

  /**
   * 更新全局 uniform 值
   * @param {string} name
   * @param {*} value
   */
  set(name, value) {
    const u = this._globals.get(name);
    if (u) u.value = value;
    return this;
  }

  /**
   * 每帧调用 - 更新时间相关 uniform
   */
  tick() {
    const delta = this._clock.getDelta();
    const elapsed = this._clock.getElapsedTime();

    this.set('uTime', elapsed);
    this.set('uDeltaTime', delta);
    this.set('uFrame', this.get('uFrame').value + 1);
  }

  /**
   * 获取所有全局 uniforms 的浅拷贝 (用于创建新材质)
   * @returns {Object}
   */
  getGlobalUniformsClone() {
    const out = {};
    for (const [name, uniform] of this._globals) {
      out[name] = uniform; // 共享引用，这样更新会同步到所有材质
    }
    return out;
  }

  /**
   * 销毁单例
   */
  dispose() {
    this._globals.clear();
    this._subscribers.clear();
    UniformsManager._instance = null;
  }
}
