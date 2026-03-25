/**
 * ProceduralFactory - 统一的工厂调度器
 * 彻底剥离杂乱的实例化过程，提供注册-创建的解耦架构
 * 支持按需引入与 Tree-shaking 友好导出
 */
export class ProceduralFactory {
  /** @type {Map<string, typeof import('./ProceduralEntity.js').ProceduralEntity>} */
  static _registry = new Map();

  /** @type {Map<string, Object>} 预设参数配置 */
  static _presets = new Map();

  /**
   * 注册一个程序化实体类
   * @param {string} name - 实体名称 (如 'BionicFlower', 'BionicButterfly')
   * @param {Function} EntityClass - 实体类构造函数
   * @param {Object} [defaultParams] - 默认参数预设
   */
  static register(name, EntityClass, defaultParams = {}) {
    ProceduralFactory._registry.set(name, EntityClass);
    if (Object.keys(defaultParams).length > 0) {
      ProceduralFactory._presets.set(name, defaultParams);
    }
    return ProceduralFactory;
  }

  /**
   * 创建实体实例
   * @param {string} name - 已注册的实体名称
   * @param {Object} [params] - 构造参数 (会与预设合并)
   * @returns {import('./ProceduralEntity.js').ProceduralEntity}
   */
  static create(name, params = {}) {
    const EntityClass = ProceduralFactory._registry.get(name);
    if (!EntityClass) {
      throw new Error(`[ProceduralFactory] Unknown entity: '${name}'. Did you forget to register it?`);
    }

    const preset = ProceduralFactory._presets.get(name) || {};
    const mergedParams = { ...preset, ...params };

    return new EntityClass(mergedParams);
  }

  /**
   * 创建并立即构建
   * @param {string} name
   * @param {Object} [params]
   * @returns {import('./ProceduralEntity.js').ProceduralEntity}
   */
  static build(name, params = {}) {
    return ProceduralFactory.create(name, params).build();
  }

  /**
   * 批量创建实体
   * @param {string} name
   * @param {number} count
   * @param {Function} paramsFn - (index, rng) => Object
   * @param {number} [baseSeed=42]
   * @returns {import('./ProceduralEntity.js').ProceduralEntity[]}
   */
  static createBatch(name, count, paramsFn, baseSeed = 42) {
    // 使用简单的 PRNG 内联避免循环引用
    let state = baseSeed;
    const rng = {
      next() {
        state |= 0;
        state = (state + 0x6D2B79F5) | 0;
        let t = Math.imul(state ^ (state >>> 15), 1 | state);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      },
      range(min, max) { return min + this.next() * (max - min); }
    };
    const entities = [];

    for (let i = 0; i < count; i++) {
      const params = paramsFn(i, rng);
      entities.push(ProceduralFactory.create(name, { seed: baseSeed + i, ...params }));
    }

    return entities;
  }

  /**
   * 注册预设参数
   * @param {string} entityName
   * @param {string} presetName
   * @param {Object} params
   */
  static registerPreset(entityName, presetName, params) {
    const key = `${entityName}::${presetName}`;
    ProceduralFactory._presets.set(key, params);
    return ProceduralFactory;
  }

  /**
   * 使用预设创建
   * @param {string} entityName
   * @param {string} presetName
   * @param {Object} [overrides]
   */
  static createFromPreset(entityName, presetName, overrides = {}) {
    const key = `${entityName}::${presetName}`;
    const preset = ProceduralFactory._presets.get(key) || {};
    return ProceduralFactory.create(entityName, { ...preset, ...overrides });
  }

  /**
   * 获取所有已注册的实体名称
   * @returns {string[]}
   */
  static listRegistered() {
    return [...ProceduralFactory._registry.keys()];
  }

  /**
   * 检查实体是否已注册
   * @param {string} name
   * @returns {boolean}
   */
  static has(name) {
    return ProceduralFactory._registry.has(name);
  }

  /**
   * 清除所有注册
   */
  static clear() {
    ProceduralFactory._registry.clear();
    ProceduralFactory._presets.clear();
  }
}
