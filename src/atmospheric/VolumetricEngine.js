/**
 * VolumetricEngine - 体积渲染引擎
 * 提供体积光线步进 (Volume Ray Marching) 的 GLSL 工具集
 * 用于云、雾、极光等大气效果
 */
export class VolumetricEngine {
  /**
   * 体积渲染核心 GLSL 函数集
   * @returns {string}
   */
  static glsl() {
    return /* glsl */`
      // 体积密度采样 (需外部定义 densityFunction)
      // float densityFunction(vec3 p);

      /**
       * 体积光线步进
       * @param ro - 光线起点
       * @param rd - 光线方向
       * @param tMin - 最小步进距离
       * @param tMax - 最大步进距离
       * @param steps - 步进次数
       * @param lightDir - 光线方向
       * @param lightColor - 光线颜色
       * @param extinctionCoeff - 消光系数
       * @param scatterCoeff - 散射系数
       */
      vec4 volumeRayMarch(
        vec3 ro, vec3 rd, float tMin, float tMax, int steps,
        vec3 lightDir, vec3 lightColor,
        float extinctionCoeff, float scatterCoeff
      ) {
        float stepSize = (tMax - tMin) / float(steps);
        float t = tMin;

        vec3 accumColor = vec3(0.0);
        float transmittance = 1.0;

        for (int i = 0; i < 128; i++) {
          if (i >= steps) break;
          if (transmittance < 0.01) break;

          vec3 p = ro + rd * t;
          float density = densityFunction(p);

          if (density > 0.001) {
            // Beer-Lambert 光学衰减
            float extinction = density * extinctionCoeff * stepSize;
            float localTransmittance = exp(-extinction);

            // 光照采样（简化版 - 向光源方向少量步进）
            float lightDensity = 0.0;
            vec3 lp = p;
            float lStepSize = 0.5;
            for (int j = 0; j < 6; j++) {
              lp += lightDir * lStepSize;
              lightDensity += densityFunction(lp) * lStepSize;
            }
            float lightTransmittance = exp(-lightDensity * extinctionCoeff);

            // Henyey-Greenstein 相函数 (前向散射)
            float cosTheta = dot(rd, lightDir);
            float g = 0.7; // 各向异性参数
            float phase = (1.0 - g*g) / (4.0*3.14159 * pow(1.0 + g*g - 2.0*g*cosTheta, 1.5));

            // 散射贡献
            vec3 scattering = scatterCoeff * density * lightColor * lightTransmittance * phase;

            // 能量积分
            vec3 integScatter = (scattering - scattering * localTransmittance) / max(extinction, 0.0001);
            accumColor += transmittance * integScatter;
            transmittance *= localTransmittance;
          }

          t += stepSize;
        }

        return vec4(accumColor, 1.0 - transmittance);
      }

      // 球体-射线相交测试
      vec2 intersectSphere(vec3 ro, vec3 rd, vec3 center, float radius) {
        vec3 oc = ro - center;
        float b = dot(oc, rd);
        float c = dot(oc, oc) - radius*radius;
        float h = b*b - c;
        if (h < 0.0) return vec2(-1.0);
        h = sqrt(h);
        return vec2(-b - h, -b + h);
      }

      // AABB 相交
      vec2 intersectAABB(vec3 ro, vec3 rd, vec3 boxMin, vec3 boxMax) {
        vec3 invRd = 1.0 / rd;
        vec3 t0 = (boxMin - ro) * invRd;
        vec3 t1 = (boxMax - ro) * invRd;
        vec3 tMin = min(t0, t1);
        vec3 tMax = max(t0, t1);
        float enter = max(max(tMin.x, tMin.y), tMin.z);
        float exit = min(min(tMax.x, tMax.y), tMax.z);
        return vec2(max(enter, 0.0), exit);
      }
    `;
  }
}
