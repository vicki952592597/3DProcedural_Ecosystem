import * as THREE from 'three';
import { DeterministicRNG } from './DeterministicRNG.js';
import { UniformsManager } from './UniformsManager.js';
import { GarbageCollector } from './GarbageCollector.js';

/**
 * ProceduralEntity - 程序化实体抽象基类
 * 所有生态实体（Flora/Fauna/Abstract/Atmospheric）的公共祖先
 * 强制子类实现 _buildGeometry(), _buildMaterial(), _buildMesh() 生命周期
 * 支持链式调用 API
 */
export class ProceduralEntity {
  /**
   * @param {Object} params - 参数化构造配置
   * @param {number} [params.seed=42] - 随机种子
   */
  constructor(params = {}) {
    if (new.target === ProceduralEntity) {
      throw new Error('[ProceduralEntity] Cannot instantiate abstract class directly');
    }

    /** @type {string} 实体唯一标识 */
    this.uuid = THREE.MathUtils.generateUUID();

    /** @type {string} 实体类型标签 */
    this.type = this.constructor.name;

    /** @type {Object} 参数快照 */
    this._params = { seed: 42, ...params };

    /** @type {DeterministicRNG} 确定性随机数引擎 */
    this.rng = new DeterministicRNG(this._params.seed);

    /** @type {UniformsManager} 全局 Uniform 管理器 */
    this.uniforms = UniformsManager.getInstance();

    /** @type {GarbageCollector} 全局 GC */
    this.gc = GarbageCollector.getInstance();

    /** @type {THREE.BufferGeometry|null} */
    this._geometry = null;

    /** @type {THREE.Material|null} */
    this._material = null;

    /** @type {THREE.Object3D|null} */
    this._mesh = null;

    /** @type {boolean} 是否已构建 */
    this._built = false;

    /** @type {Map<string, *>} 自定义 uniform 存储 */
    this._localUniforms = new Map();
  }

  // =============================================
  // 抽象方法 - 子类必须实现
  // =============================================

  /**
   * 构建几何体 - 子类必须实现
   * @abstract
   * @returns {THREE.BufferGeometry}
   */
  _buildGeometry() {
    throw new Error(`[${this.type}] _buildGeometry() must be implemented`);
  }

  /**
   * 构建材质 - 子类必须实现
   * @abstract
   * @returns {THREE.Material}
   */
  _buildMaterial() {
    throw new Error(`[${this.type}] _buildMaterial() must be implemented`);
  }

  /**
   * 构建网格 - 子类可覆写（默认创建 THREE.Mesh）
   * @returns {THREE.Object3D}
   */
  _buildMesh() {
    return new THREE.Mesh(this._geometry, this._material);
  }

  // =============================================
  // 生命周期管线
  // =============================================

  /**
   * 构建实体 - 执行完整的构建管线
   * @returns {this} 链式调用
   */
  build() {
    if (this._built) this.dispose();

    // 重置 RNG 确保可复现
    this.rng.reset();

    // 构建管线
    this._geometry = this._buildGeometry();
    this.gc.trackGeometry(this._geometry, this.uuid);

    this._material = this._buildMaterial();
    this.gc.trackMaterial(this._material, this.uuid);

    this._mesh = this._buildMesh();
    this._mesh.userData.proceduralEntity = this;
    this._mesh.userData.entityType = this.type;
    this.gc.trackObject(this._mesh, this.uuid);

    this._built = true;
    return this;
  }

  /**
   * 获取构建好的 Three.js 对象
   * @returns {THREE.Object3D}
   */
  getObject3D() {
    if (!this._built) this.build();
    return this._mesh;
  }

  /**
   * 添加到场景
   * @param {THREE.Scene|THREE.Object3D} parent
   * @returns {this}
   */
  addTo(parent) {
    parent.add(this.getObject3D());
    return this;
  }

  // =============================================
  // 链式参数设置
  // =============================================

  /**
   * 设置位置
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {this}
   */
  setPosition(x, y, z) {
    this.getObject3D().position.set(x, y, z);
    return this;
  }

  /**
   * 设置旋转 (弧度)
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {this}
   */
  setRotation(x, y, z) {
    this.getObject3D().rotation.set(x, y, z);
    return this;
  }

  /**
   * 设置缩放
   * @param {number|number[]} s
   * @returns {this}
   */
  setScale(s) {
    const obj = this.getObject3D();
    if (typeof s === 'number') {
      obj.scale.setScalar(s);
    } else {
      obj.scale.set(s[0], s[1], s[2]);
    }
    return this;
  }

  /**
   * 更新参数并重建
   * @param {Object} newParams
   * @returns {this}
   */
  updateParams(newParams) {
    Object.assign(this._params, newParams);
    if (newParams.seed !== undefined) {
      this.rng.seed(newParams.seed);
    }
    return this.rebuild();
  }

  /**
   * 以当前参数重建
   * @returns {this}
   */
  rebuild() {
    const parent = this._mesh?.parent;
    const pos = this._mesh?.position.clone();
    const rot = this._mesh?.rotation.clone();
    const scl = this._mesh?.scale.clone();

    this.dispose();
    this.build();

    if (parent) parent.add(this._mesh);
    if (pos) this._mesh.position.copy(pos);
    if (rot) this._mesh.rotation.copy(rot);
    if (scl) this._mesh.scale.copy(scl);

    return this;
  }

  // =============================================
  // 资源管理
  // =============================================

  /**
   * 销毁实体及所有 GPU 资源
   */
  dispose() {
    if (this._mesh) {
      this.gc.disposeObject(this._mesh);
    }
    this._geometry = null;
    this._material = null;
    this._mesh = null;
    this._built = false;
  }

  /**
   * 克隆实体（使用相同参数创建新实例）
   * @param {Object} [overrides] - 覆盖参数
   * @returns {ProceduralEntity}
   */
  clone(overrides = {}) {
    const CloneCtor = this.constructor;
    return new CloneCtor({ ...this._params, ...overrides }).build();
  }

  /**
   * 序列化参数（用于持久化/复现）
   * @returns {Object}
   */
  serialize() {
    return {
      type: this.type,
      params: { ...this._params },
      position: this._mesh ? this._mesh.position.toArray() : [0, 0, 0],
      rotation: this._mesh ? [this._mesh.rotation.x, this._mesh.rotation.y, this._mesh.rotation.z] : [0, 0, 0],
      scale: this._mesh ? this._mesh.scale.toArray() : [1, 1, 1]
    };
  }
}
