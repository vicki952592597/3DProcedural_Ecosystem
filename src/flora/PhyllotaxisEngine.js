/**
 * PhyllotaxisEngine - 斐波那契极坐标系引擎
 * 实现 Fibonacci Phyllotaxis (叶序排列) 算法
 * 用于花瓣、种子、叶片的自然螺旋分布
 *
 * 基于黄金角 (Golden Angle) ≈ 137.508°
 */
export class PhyllotaxisEngine {
  /** 黄金角 (弧度) */
  static GOLDEN_ANGLE = Math.PI * (3.0 - Math.sqrt(5.0)); // ≈ 2.39996...

  /** 黄金比例 */
  static PHI = (1.0 + Math.sqrt(5.0)) / 2.0;

  /**
   * 生成 2D 斐波那契螺旋分布点
   * (经典 Vogel 螺旋)
   *
   * @param {number} count - 点的数量
   * @param {number} [radius=1] - 最大半径
   * @param {number} [angleMult=1] - 角度乘数 (可用于旋转变种)
   * @returns {Array<{x: number, y: number, angle: number, r: number, index: number}>}
   */
  static sunflowerSpiral(count, radius = 1, angleMult = 1) {
    const points = [];
    for (let i = 0; i < count; i++) {
      const angle = i * PhyllotaxisEngine.GOLDEN_ANGLE * angleMult;
      const r = radius * Math.sqrt(i / count);
      points.push({
        x: r * Math.cos(angle),
        y: r * Math.sin(angle),
        angle,
        r,
        index: i
      });
    }
    return points;
  }

  /**
   * 生成 3D 球面斐波那契分布
   * (球面等分布 - Fibonacci Sphere)
   *
   * @param {number} count - 点的数量
   * @param {number} [radius=1] - 球半径
   * @returns {Array<{x: number, y: number, z: number, theta: number, phi: number}>}
   */
  static fibonacciSphere(count, radius = 1) {
    const points = [];
    for (let i = 0; i < count; i++) {
      const theta = PhyllotaxisEngine.GOLDEN_ANGLE * i;
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);

      points.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        theta,
        phi
      });
    }
    return points;
  }

  /**
   * 生成花瓣排列
   * 基于黄金角的花瓣螺旋分布，支持花瓣层级 (whorls)
   *
   * @param {Object} config
   * @param {number} config.petalCount - 花瓣数量
   * @param {number} [config.whorls=3] - 花瓣层数
   * @param {number} [config.innerRadius=0.2] - 内圆半径
   * @param {number} [config.outerRadius=1.0] - 外圆半径
   * @param {number} [config.heightSpread=0.3] - 高度展开
   * @param {number} [config.curlFactor=0.5] - 花瓣卷曲系数
   * @returns {Array<Object>} 花瓣数据
   */
  static petalArrangement(config = {}) {
    const {
      petalCount = 8,
      whorls = 3,
      innerRadius = 0.2,
      outerRadius = 1.0,
      heightSpread = 0.3,
      curlFactor = 0.5
    } = config;

    const petals = [];
    const totalPetals = petalCount * whorls;

    for (let w = 0; w < whorls; w++) {
      const whorlRadius = innerRadius + (outerRadius - innerRadius) * (w / Math.max(whorls - 1, 1));
      const whorlAngleOffset = w * PhyllotaxisEngine.GOLDEN_ANGLE;
      const whorlHeight = w * heightSpread / whorls;
      const whorlScale = 0.6 + 0.4 * (w / Math.max(whorls - 1, 1));

      for (let p = 0; p < petalCount; p++) {
        const baseAngle = (p / petalCount) * Math.PI * 2 + whorlAngleOffset;

        petals.push({
          angle: baseAngle,
          radius: whorlRadius,
          height: whorlHeight,
          scale: whorlScale,
          curl: curlFactor * (1.0 - w / whorls),
          whorl: w,
          index: w * petalCount + p,
          // 花瓣的方向向量 (指向外侧)
          direction: [Math.cos(baseAngle), whorlHeight, Math.sin(baseAngle)],
          // 花瓣法线 (近似向上)
          normal: [
            Math.cos(baseAngle) * curlFactor,
            1.0 - curlFactor,
            Math.sin(baseAngle) * curlFactor
          ]
        });
      }
    }

    return petals;
  }

  /**
   * 生成叶序 (Phyllotaxis) 螺旋线
   * 返回沿螺旋线的连续点序列（用于生成叶片排列）
   *
   * @param {number} count - 叶片数量
   * @param {number} [rise=0.3] - 每片叶子沿 Y 轴上升的高度
   * @param {number} [radius=1.0] - 旋转半径
   * @returns {Array<Object>}
   */
  static helicalPhyllotaxis(count, rise = 0.3, radius = 1.0) {
    const points = [];
    for (let i = 0; i < count; i++) {
      const angle = i * PhyllotaxisEngine.GOLDEN_ANGLE;
      const y = i * rise;
      const r = radius * (1.0 - i / (count * 2)); // 逐渐收窄

      points.push({
        x: r * Math.cos(angle),
        y,
        z: r * Math.sin(angle),
        angle,
        index: i,
        normalizedIndex: i / (count - 1)
      });
    }
    return points;
  }

  /**
   * 计算贝塞尔花瓣曲面控制点
   * 用于单个花瓣的参数化曲面定义
   *
   * @param {Object} config
   * @param {number} config.width - 花瓣宽度
   * @param {number} config.length - 花瓣长度
   * @param {number} config.curl - 卷曲度 [0, 1]
   * @param {number} config.twist - 扭转度
   * @param {number} [config.tipSharpness=0.3] - 尖端锐度
   * @returns {Array<Array<number[]>>} 4x4 控制点网格 (每个点 [x, y, z])
   */
  static petalBezierControlPoints(config = {}) {
    const {
      width = 0.3,
      length = 1.0,
      curl = 0.3,
      twist = 0.0,
      tipSharpness = 0.3
    } = config;

    const w = width;
    const l = length;
    const c = curl;
    const ts = tipSharpness;

    // 4x4 双三次贝塞尔控制点
    // U 方向: 从左到右 (宽度)
    // V 方向: 从基部到尖端 (长度)
    return [
      // V=0 (基部)
      [
        [0, 0, 0],
        [w * 0.3, 0, 0],
        [w * 0.7, 0, 0],
        [w, 0, 0]
      ],
      // V=1/3
      [
        [-w * 0.1, l * 0.33, c * 0.2],
        [w * 0.4, l * 0.33, c * 0.3],
        [w * 0.8, l * 0.33, c * 0.3],
        [w * 1.1, l * 0.33, c * 0.2]
      ],
      // V=2/3
      [
        [w * 0.1, l * 0.66, c * 0.6],
        [w * 0.35, l * 0.66, c * 0.8],
        [w * 0.65, l * 0.66, c * 0.8],
        [w * 0.9, l * 0.66, c * 0.6]
      ],
      // V=1 (尖端)
      [
        [w * (0.5 - ts * 0.3), l, c * 1.0 + 0.1],
        [w * (0.5 - ts * 0.1), l * (1 + ts * 0.1), c * 1.2],
        [w * (0.5 + ts * 0.1), l * (1 + ts * 0.1), c * 1.2],
        [w * (0.5 + ts * 0.3), l, c * 1.0 + 0.1]
      ]
    ];
  }
}
