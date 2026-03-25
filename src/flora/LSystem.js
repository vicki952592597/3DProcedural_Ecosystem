import { DeterministicRNG } from '../core/DeterministicRNG.js';

/**
 * LSystem - 林氏系统 (Lindenmayer System) 分形算法引擎
 * 用于程序化生成植物枝干、花朵茎杆的分形拓扑结构
 *
 * 支持:
 * - 随机上下文无关文法 (Stochastic Context-Free)
 * - 参数化 L-System
 * - 3D 空间 Turtle Graphics 解释器
 */
export class LSystem {
  /**
   * @param {Object} config
   * @param {string} config.axiom - 起始公理
   * @param {Object} config.rules - 产生式规则 { 'F': 'F[+F]F[-F]F', ... }
   * @param {number} [config.iterations=4] - 迭代次数
   * @param {number} [config.angle=25.7] - 默认旋转角度 (度)
   * @param {number} [config.length=1.0] - 默认步进长度
   * @param {number} [config.lengthScale=0.8] - 每级长度衰减系数
   * @param {number} [config.widthScale=0.7] - 每级宽度衰减系数
   * @param {number} [config.seed=42] - 随机种子
   */
  constructor(config = {}) {
    this.axiom = config.axiom || 'F';
    this.rules = config.rules || { 'F': 'FF+[+F-F-F]-[-F+F+F]' };
    this.iterations = config.iterations ?? 4;
    this.angle = (config.angle ?? 25.7) * Math.PI / 180;
    this.length = config.length ?? 1.0;
    this.lengthScale = config.lengthScale ?? 0.8;
    this.widthScale = config.widthScale ?? 0.7;
    this.rng = new DeterministicRNG(config.seed ?? 42);

    /** @type {string} 生成的字符串 */
    this._generated = '';

    /** @type {Array<{position: number[], direction: number[], up: number[], depth: number}>} */
    this._segments = [];
  }

  /**
   * 执行 L-System 字符串迭代
   * @returns {string} 生成的字符串
   */
  generate() {
    this.rng.reset();
    let current = this.axiom;

    for (let i = 0; i < this.iterations; i++) {
      let next = '';
      for (const char of current) {
        const rule = this.rules[char];
        if (rule) {
          // 支持随机规则 (数组形式)
          if (Array.isArray(rule)) {
            next += this.rng.pick(rule);
          } else {
            next += rule;
          }
        } else {
          next += char;
        }
      }
      current = next;
    }

    this._generated = current;
    return current;
  }

  /**
   * 3D Turtle Graphics 解释器
   * 将 L-System 字符串转化为 3D 线段数据
   *
   * 符号约定:
   *   F - 前进并画线
   *   f - 前进但不画线
   *   + - 绕 Y 轴正旋转 (yaw)
   *   - - 绕 Y 轴负旋转 (yaw)
   *   ^ - 绕 X 轴正旋转 (pitch up)
   *   & - 绕 X 轴负旋转 (pitch down)
   *   < - 绕 Z 轴正旋转 (roll left)
   *   > - 绕 Z 轴负旋转 (roll right)
   *   [ - 压栈 (分支开始)
   *   ] - 出栈 (分支结束)
   *   ! - 减小宽度
   *   ' - 增加颜色索引
   *
   * @returns {Array<Object>} 线段数据 [{start, end, depth, width}, ...]
   */
  interpret() {
    if (!this._generated) this.generate();

    const segments = [];
    const stack = [];

    // Turtle 状态
    let pos = [0, 0, 0];
    let heading = [0, 1, 0];  // Y up
    let left = [-1, 0, 0];
    let up = [0, 0, 1];
    let depth = 0;
    let currentLength = this.length;
    let currentWidth = 1.0;

    const rotateVec = (v, axis, angle) => {
      const c = Math.cos(angle), s = Math.sin(angle);
      const dot = v[0]*axis[0] + v[1]*axis[1] + v[2]*axis[2];
      return [
        v[0]*c + (axis[1]*v[2]-axis[2]*v[1])*s + axis[0]*dot*(1-c),
        v[1]*c + (axis[2]*v[0]-axis[0]*v[2])*s + axis[1]*dot*(1-c),
        v[2]*c + (axis[0]*v[1]-axis[1]*v[0])*s + axis[2]*dot*(1-c)
      ];
    };

    for (const char of this._generated) {
      const jitter = 1.0 + (this.rng.next() - 0.5) * 0.1; // 微小随机抖动

      switch (char) {
        case 'F': {
          const start = [...pos];
          pos = [
            pos[0] + heading[0] * currentLength * jitter,
            pos[1] + heading[1] * currentLength * jitter,
            pos[2] + heading[2] * currentLength * jitter
          ];
          segments.push({
            start,
            end: [...pos],
            depth,
            width: currentWidth,
            length: currentLength
          });
          break;
        }
        case 'f': {
          pos = [
            pos[0] + heading[0] * currentLength,
            pos[1] + heading[1] * currentLength,
            pos[2] + heading[2] * currentLength
          ];
          break;
        }
        case '+': {
          const a = this.angle * jitter;
          heading = rotateVec(heading, up, a);
          left = rotateVec(left, up, a);
          break;
        }
        case '-': {
          const a = this.angle * jitter;
          heading = rotateVec(heading, up, -a);
          left = rotateVec(left, up, -a);
          break;
        }
        case '^': {
          const a = this.angle * jitter;
          heading = rotateVec(heading, left, a);
          up = rotateVec(up, left, a);
          break;
        }
        case '&': {
          const a = this.angle * jitter;
          heading = rotateVec(heading, left, -a);
          up = rotateVec(up, left, -a);
          break;
        }
        case '<': {
          const a = this.angle * jitter;
          left = rotateVec(left, heading, a);
          up = rotateVec(up, heading, a);
          break;
        }
        case '>': {
          const a = this.angle * jitter;
          left = rotateVec(left, heading, -a);
          up = rotateVec(up, heading, -a);
          break;
        }
        case '[':
          stack.push({
            pos: [...pos],
            heading: [...heading],
            left: [...left],
            up: [...up],
            depth,
            length: currentLength,
            width: currentWidth
          });
          depth++;
          currentLength *= this.lengthScale;
          currentWidth *= this.widthScale;
          break;
        case ']':
          if (stack.length > 0) {
            const state = stack.pop();
            pos = state.pos;
            heading = state.heading;
            left = state.left;
            up = state.up;
            depth = state.depth;
            currentLength = state.length;
            currentWidth = state.width;
          }
          break;
        case '!':
          currentWidth *= this.widthScale;
          break;
      }
    }

    this._segments = segments;
    return segments;
  }

  /**
   * 获取所有叶节点位置（分支末端）
   * 用于在枝干末端放置花朵/叶片
   * @returns {Array<{position: number[], direction: number[], depth: number}>}
   */
  getLeafNodes() {
    if (this._segments.length === 0) this.interpret();

    const endPoints = new Map();
    const startPoints = new Set();

    for (const seg of this._segments) {
      const key = seg.end.map(v => v.toFixed(4)).join(',');
      endPoints.set(key, seg);
      startPoints.add(seg.start.map(v => v.toFixed(4)).join(','));
    }

    const leaves = [];
    for (const [key, seg] of endPoints) {
      if (!startPoints.has(key)) {
        const dir = [
          seg.end[0] - seg.start[0],
          seg.end[1] - seg.start[1],
          seg.end[2] - seg.start[2]
        ];
        const len = Math.sqrt(dir[0]**2 + dir[1]**2 + dir[2]**2);
        leaves.push({
          position: seg.end,
          direction: len > 0 ? dir.map(v => v / len) : [0, 1, 0],
          depth: seg.depth
        });
      }
    }

    return leaves;
  }
}
