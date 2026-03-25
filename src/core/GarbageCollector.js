import * as THREE from 'three';

/**
 * GarbageCollector - GPU 资源自动回收器
 * 跟踪所有 ProceduralEntity 创建的 Geometry/Material/Texture
 * 提供统一的 dispose 管线，防止 WebGL 上下文资源泄漏
 */
export class GarbageCollector {
  static _instance = null;

  /** @returns {GarbageCollector} */
  static getInstance() {
    if (!GarbageCollector._instance) {
      GarbageCollector._instance = new GarbageCollector();
    }
    return GarbageCollector._instance;
  }

  constructor() {
    if (GarbageCollector._instance) {
      throw new Error('[GarbageCollector] Use getInstance() - Singleton violation');
    }
    /** @type {Set<THREE.BufferGeometry>} */
    this._geometries = new Set();
    /** @type {Set<THREE.Material>} */
    this._materials = new Set();
    /** @type {Set<THREE.Texture>} */
    this._textures = new Set();
    /** @type {Set<THREE.Object3D>} */
    this._objects = new Set();
    /** @type {Map<string, Set<*>>} */
    this._tags = new Map();
  }

  /**
   * 注册几何体
   * @param {THREE.BufferGeometry} geometry
   * @param {string} [tag]
   */
  trackGeometry(geometry, tag) {
    this._geometries.add(geometry);
    if (tag) this._addTag(tag, geometry);
    return geometry;
  }

  /**
   * 注册材质
   * @param {THREE.Material} material
   * @param {string} [tag]
   */
  trackMaterial(material, tag) {
    this._materials.add(material);
    if (tag) this._addTag(tag, material);
    return material;
  }

  /**
   * 注册纹理
   * @param {THREE.Texture} texture
   * @param {string} [tag]
   */
  trackTexture(texture, tag) {
    this._textures.add(texture);
    if (tag) this._addTag(tag, texture);
    return texture;
  }

  /**
   * 注册 Object3D
   * @param {THREE.Object3D} obj
   * @param {string} [tag]
   */
  trackObject(obj, tag) {
    this._objects.add(obj);
    if (tag) this._addTag(tag, obj);
    return obj;
  }

  /**
   * 递归销毁一个 Object3D 及其所有子资源
   * @param {THREE.Object3D} obj
   */
  disposeObject(obj) {
    obj.traverse((child) => {
      if (child.geometry) {
        child.geometry.dispose();
        this._geometries.delete(child.geometry);
      }
      if (child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        for (const mat of materials) {
          // 清理材质上的纹理
          for (const key of Object.keys(mat)) {
            const value = mat[key];
            if (value && value.isTexture) {
              value.dispose();
              this._textures.delete(value);
            }
          }
          mat.dispose();
          this._materials.delete(mat);
        }
      }
    });

    if (obj.parent) obj.parent.remove(obj);
    this._objects.delete(obj);
  }

  /**
   * 按标签销毁所有资源
   * @param {string} tag
   */
  disposeByTag(tag) {
    const set = this._tags.get(tag);
    if (!set) return;
    for (const res of set) {
      if (res.isBufferGeometry) {
        res.dispose();
        this._geometries.delete(res);
      } else if (res.isMaterial) {
        res.dispose();
        this._materials.delete(res);
      } else if (res.isTexture) {
        res.dispose();
        this._textures.delete(res);
      } else if (res.isObject3D) {
        this.disposeObject(res);
      }
    }
    this._tags.delete(tag);
  }

  /**
   * 销毁所有已跟踪资源
   */
  disposeAll() {
    for (const g of this._geometries) g.dispose();
    for (const m of this._materials) m.dispose();
    for (const t of this._textures) t.dispose();
    for (const o of this._objects) {
      if (o.parent) o.parent.remove(o);
    }
    this._geometries.clear();
    this._materials.clear();
    this._textures.clear();
    this._objects.clear();
    this._tags.clear();
  }

  /** 获取统计信息 */
  get stats() {
    return {
      geometries: this._geometries.size,
      materials: this._materials.size,
      textures: this._textures.size,
      objects: this._objects.size
    };
  }

  /** @private */
  _addTag(tag, resource) {
    if (!this._tags.has(tag)) this._tags.set(tag, new Set());
    this._tags.get(tag).add(resource);
  }

  dispose() {
    this.disposeAll();
    GarbageCollector._instance = null;
  }
}
