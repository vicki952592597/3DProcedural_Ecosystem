/**
 * DeterministicRNG - 确定性伪随机数生成器
 * 基于 Mulberry32 PRNG 算法，确保参数化生成的拓扑具备可复现性
 */
export class DeterministicRNG {
  /** @param {number} seed - 随机种子 */
  constructor(seed = 42) {
    this._initialSeed = seed;
    this._state = seed;
  }

  /** 重置到初始种子 */
  reset() {
    this._state = this._initialSeed;
    return this;
  }

  /** 设置新种子 */
  seed(s) {
    this._initialSeed = s;
    this._state = s;
    return this;
  }

  /** 获取当前种子 */
  get currentSeed() {
    return this._initialSeed;
  }

  /**
   * Mulberry32 核心算法 - 返回 [0, 1) 的浮点数
   * @returns {number}
   */
  next() {
    this._state |= 0;
    this._state = (this._state + 0x6D2B79F5) | 0;
    let t = Math.imul(this._state ^ (this._state >>> 15), 1 | this._state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /** 返回 [min, max) 的浮点数 */
  range(min, max) {
    return min + this.next() * (max - min);
  }

  /** 返回 [min, max] 的整数 */
  intRange(min, max) {
    return Math.floor(this.range(min, max + 1));
  }

  /** 从数组中随机选取一个元素 */
  pick(arr) {
    return arr[this.intRange(0, arr.length - 1)];
  }

  /** 高斯分布 (Box-Muller 变换) */
  gaussian(mean = 0, stdDev = 1) {
    const u1 = this.next();
    const u2 = this.next();
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return z0 * stdDev + mean;
  }

  /** 返回 3D 向量 [x, y, z]，各分量在 [min, max) */
  vec3(min = 0, max = 1) {
    return [this.range(min, max), this.range(min, max), this.range(min, max)];
  }

  /** 球面均匀分布采样 */
  onSphere(radius = 1) {
    const theta = this.range(0, Math.PI * 2);
    const phi = Math.acos(this.range(-1, 1));
    return [
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    ];
  }
}
