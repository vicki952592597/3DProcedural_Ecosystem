/**
 * SDFPrimitives - 有向距离场 (Signed Distance Field) 原语库
 * 提供 Raymarching 所需的 SDF 基元和组合操作符
 */
export class SDFPrimitives {
  /**
   * 完整的 SDF 基元库 GLSL 代码
   * @returns {string}
   */
  static glsl() {
    return /* glsl */`
      // ===== 基本图元 =====
      float sdSphere(vec3 p, float r) {
        return length(p) - r;
      }

      float sdBox(vec3 p, vec3 b) {
        vec3 q = abs(p) - b;
        return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
      }

      float sdTorus(vec3 p, vec2 t) {
        vec2 q = vec2(length(p.xz) - t.x, p.y);
        return length(q) - t.y;
      }

      float sdCylinder(vec3 p, float h, float r) {
        vec2 d = abs(vec2(length(p.xz), p.y)) - vec2(r, h);
        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
      }

      float sdCone(vec3 p, vec2 c, float h) {
        vec2 q = h * vec2(c.x / c.y, -1.0);
        vec2 w = vec2(length(p.xz), p.y);
        vec2 a = w - q * clamp(dot(w, q) / dot(q, q), 0.0, 1.0);
        vec2 b = w - q * vec2(clamp(w.x / q.x, 0.0, 1.0), 1.0);
        float k = sign(q.y);
        float d = min(dot(a, a), dot(b, b));
        float s = max(k * (w.x * q.y - w.y * q.x), k * (w.y - q.y));
        return sqrt(d) * sign(s);
      }

      float sdPlane(vec3 p, vec3 n, float h) {
        return dot(p, n) + h;
      }

      float sdCapsule(vec3 p, vec3 a, vec3 b, float r) {
        vec3 pa = p - a, ba = b - a;
        float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
        return length(pa - ba * h) - r;
      }

      float sdOctahedron(vec3 p, float s) {
        p = abs(p);
        return (p.x + p.y + p.z - s) * 0.57735027;
      }

      // ===== 组合操作符 =====
      float opUnion(float d1, float d2) { return min(d1, d2); }
      float opSubtraction(float d1, float d2) { return max(-d1, d2); }
      float opIntersection(float d1, float d2) { return max(d1, d2); }

      float opSmoothUnion(float d1, float d2, float k) {
        float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
        return mix(d2, d1, h) - k * h * (1.0 - h);
      }

      float opSmoothSubtraction(float d1, float d2, float k) {
        float h = clamp(0.5 - 0.5 * (d2 + d1) / k, 0.0, 1.0);
        return mix(d2, -d1, h) + k * h * (1.0 - h);
      }

      float opSmoothIntersection(float d1, float d2, float k) {
        float h = clamp(0.5 - 0.5 * (d2 - d1) / k, 0.0, 1.0);
        return mix(d2, d1, h) + k * h * (1.0 - h);
      }

      // ===== 变换操作符 =====
      float opRound(float d, float r) { return d - r; }

      float opOnion(float d, float thickness) {
        return abs(d) - thickness;
      }

      vec3 opRep(vec3 p, vec3 c) {
        return mod(p + 0.5 * c, c) - 0.5 * c;
      }

      vec3 opRepLimited(vec3 p, float c, vec3 l) {
        return p - c * clamp(round(p / c), -l, l);
      }

      // ===== 空间扭曲 =====
      vec3 opTwist(vec3 p, float k) {
        float c = cos(k * p.y);
        float s = sin(k * p.y);
        mat2 m = mat2(c, -s, s, c);
        return vec3(m * p.xz, p.y);
      }

      vec3 opBend(vec3 p, float k) {
        float c = cos(k * p.x);
        float s = sin(k * p.x);
        mat2 m = mat2(c, -s, s, c);
        return vec3(p.x, m * p.yz);
      }

      // ===== Raymarching 工具 =====
      vec3 calcNormal(vec3 p, float eps) {
        // 需要外部定义 map() 函数
        vec2 e = vec2(1.0, -1.0) * 0.5773 * eps;
        return normalize(
          e.xyy * map(p + e.xyy) +
          e.yyx * map(p + e.yyx) +
          e.yxy * map(p + e.yxy) +
          e.xxx * map(p + e.xxx)
        );
      }

      float raymarch(vec3 ro, vec3 rd, float maxDist, int maxSteps) {
        float t = 0.0;
        for (int i = 0; i < 256; i++) {
          if (i >= maxSteps) break;
          vec3 p = ro + rd * t;
          float d = map(p);
          if (abs(d) < 0.001 || t > maxDist) break;
          t += d;
        }
        return t;
      }

      float softShadow(vec3 ro, vec3 rd, float mint, float maxt, float k) {
        float res = 1.0;
        float t = mint;
        for (int i = 0; i < 64; i++) {
          float h = map(ro + rd * t);
          res = min(res, k * h / t);
          t += clamp(h, 0.02, 0.1);
          if (res < 0.001 || t > maxt) break;
        }
        return clamp(res, 0.0, 1.0);
      }

      float ambientOcclusion(vec3 p, vec3 n) {
        float occ = 0.0;
        float sca = 1.0;
        for (int i = 0; i < 5; i++) {
          float h = 0.01 + 0.12 * float(i) / 4.0;
          float d = map(p + h * n);
          occ += (h - d) * sca;
          sca *= 0.95;
        }
        return clamp(1.0 - 3.0 * occ, 0.0, 1.0);
      }
    `;
  }
}