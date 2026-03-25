/**
 * VertexKinematics - 顶点流体动力学引擎
 * 弃用骨骼绑定，通过 Vertex Shader 直接控制顶点位移
 * 实现翅膀扇动、鱼鳍摆动等 GPU 级运动学
 */
export class VertexKinematics {
  /**
   * 翅膀扇动 GLSL 函数
   * 基于非线性正弦波偏导数方程
   *
   * @param {Object} [options]
   * @param {string} [options.timeUniform='uTime']
   * @param {string} [options.frequencyUniform='uFlapFrequency']
   * @param {string} [options.amplitudeUniform='uFlapAmplitude']
   * @returns {string} GLSL 代码
   */
  static wingFlapFunction(options = {}) {
    const {
      timeUniform = 'uTime',
      frequencyUniform = 'uFlapFrequency',
      amplitudeUniform = 'uFlapAmplitude'
    } = options;

    return /* glsl */`
      /**
       * 计算翅膀扇动的顶点偏移
       * @param pos - 顶点原始位置
       * @param wingSpan - 翅膀展幅（沿 X 轴的距离比）
       * @param phase - 相位偏移 (用于区分不同实例)
       * @param time - 当前时间
       * @param frequency - 扇动频率
       * @param amplitude - 扇动振幅
       * @return 位移后的位置
       */
      vec3 wingFlap(vec3 pos, float wingSpan, float phase, float time, float frequency, float amplitude) {
        // 翅膀根到翅尖的比率 [0, 1]
        float wingRatio = abs(pos.x) / max(wingSpan, 0.001);
        float wingSign = sign(pos.x);

        // 非线性扇动方程：三角波 + 正弦叠加
        // 下扇快、上扇慢（仿生学真实模拟）
        float rawFlap = sin(time * frequency + phase);
        float asymmetry = 0.3 * sin(time * frequency * 2.0 + phase); // 二次谐波
        float flapAngle = (rawFlap + asymmetry) * amplitude;

        // 翅尖偏移更大 (二次衰减)
        float flapMask = wingRatio * wingRatio;

        // 扇动垂直位移
        pos.y += flapMask * sin(flapAngle) * wingSpan;

        // 翅膀弯曲 (翅尖略向内收)
        pos.z += flapMask * flapMask * cos(flapAngle) * wingSpan * 0.15;

        // 翅膀扭转 (前缘先动)
        float twistPhase = pos.z * 0.5;
        float twist = flapMask * sin(flapAngle + twistPhase) * 0.1;
        pos.y += twist;

        return pos;
      }
    `;
  }

  /**
   * 鱼类游泳波动 GLSL 函数
   * 基于行波方程的体侧正弦波
   *
   * @returns {string} GLSL 代码
   */
  static fishSwimFunction() {
    return /* glsl */`
      vec3 fishSwim(vec3 pos, float bodyLength, float phase, float time, float frequency, float amplitude) {
        // 沿体轴的波动
        float bodyRatio = (pos.z + bodyLength * 0.5) / bodyLength;

        // 行波方程: sin(kx - ωt)
        // 尾部振幅更大
        float envelopeAmp = bodyRatio * bodyRatio * amplitude;

        // 横向摆动
        float wave = sin(bodyRatio * 6.2831 * 1.5 - time * frequency + phase);
        pos.x += wave * envelopeAmp;

        // 轻微的垂直起伏
        pos.y += sin(time * frequency * 0.5 + phase) * amplitude * 0.1;

        return pos;
      }
    `;
  }

  /**
   * 群体实例 ID 解码 GLSL 函数
   * 用于从 InstancedMesh 的实例矩阵中提取随机种子
   *
   * @returns {string} GLSL 代码
   */
  static instanceDecodeFunction() {
    return /* glsl */`
      float instanceSeed(int instanceID) {
        return fract(float(instanceID) * 0.6180339887498949); // 黄金比例分数
      }

      vec3 instanceOffset(int instanceID, float spread) {
        float seed = instanceSeed(instanceID);
        float angle = seed * 6.2831853;
        float radius = sqrt(fract(seed * 7.37)) * spread;
        return vec3(cos(angle) * radius, fract(seed * 13.17) * spread * 0.3, sin(angle) * radius);
      }
    `;
  }
}
