/**
 * FBMNoise - 分数布朗运动 (Fractional Brownian Motion) 噪声引擎
 * 提供多种 FBM 变种的 GLSL 实现
 */
export class FBMNoise {
  /**
   * 标准 FBM + 基础 3D Simplex Noise GLSL
   * @returns {string}
   */
  static glsl() {
    return /* glsl */`
      // 3D Simplex Noise (内联版)
      vec3 mod289_fbm(vec3 x){ return x - floor(x*(1.0/289.0))*289.0; }
      vec4 mod289_fbm4(vec4 x){ return x - floor(x*(1.0/289.0))*289.0; }
      vec4 perm_fbm(vec4 x){ return mod289_fbm4(((x*34.0)+10.0)*x); }
      vec4 tis_fbm(vec4 r){ return 1.79284291400159 - 0.85373472095314*r; }

      float snoise_fbm(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g, l.zxy);
        vec3 i2 = max(g, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - 0.5;
        i = mod289_fbm(i);
        vec4 p = perm_fbm(perm_fbm(perm_fbm(
          i.z+vec4(0.0,i1.z,i2.z,1.0))+
          i.y+vec4(0.0,i1.y,i2.y,1.0))+
          i.x+vec4(0.0,i1.x,i2.x,1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_*vec3(2.0,1.0,0.0)-vec3(1.0,1.0,0.0);
        vec4 j = p - 49.0*floor(p*ns.z*ns.z);
        vec4 x_ = floor(j*ns.z);
        vec4 y_ = floor(j - 7.0*x_);
        vec4 x2_ = x_*ns.x + ns.yyyy;
        vec4 y2_ = y_*ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x2_) - abs(y2_);
        vec4 b0 = vec4(x2_.xy, y2_.xy);
        vec4 b1 = vec4(x2_.zw, y2_.zw);
        vec4 s0 = floor(b0)*2.0+1.0;
        vec4 s1 = floor(b1)*2.0+1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        vec4 norm = tis_fbm(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
        p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
        vec4 m = max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
        m = m*m;
        return 105.0*dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
      }

      // 标准 FBM
      float fbm_standard(vec3 p, int octaves, float lacunarity, float gain) {
        float value = 0.0, amplitude = 0.5, frequency = 1.0;
        for (int i = 0; i < 8; i++) {
          if (i >= octaves) break;
          value += amplitude * snoise_fbm(p * frequency);
          frequency *= lacunarity;
          amplitude *= gain;
        }
        return value;
      }

      // Ridged FBM (山脊型)
      float fbm_ridged(vec3 p, int octaves, float lacunarity, float gain) {
        float value = 0.0, amplitude = 0.5, frequency = 1.0;
        float prev = 1.0;
        for (int i = 0; i < 8; i++) {
          if (i >= octaves) break;
          float n = abs(snoise_fbm(p * frequency));
          n = 1.0 - n;
          n = n * n;
          value += n * amplitude * prev;
          prev = n;
          frequency *= lacunarity;
          amplitude *= gain;
        }
        return value;
      }

      // Turbulence FBM (湍流型)
      float fbm_turbulence(vec3 p, int octaves, float lacunarity, float gain) {
        float value = 0.0, amplitude = 0.5, frequency = 1.0;
        for (int i = 0; i < 8; i++) {
          if (i >= octaves) break;
          value += amplitude * abs(snoise_fbm(p * frequency));
          frequency *= lacunarity;
          amplitude *= gain;
        }
        return value;
      }

      // Domain Warping FBM
      float fbm_warped(vec3 p, int octaves) {
        vec3 q = vec3(
          fbm_standard(p, octaves, 2.0, 0.5),
          fbm_standard(p + vec3(5.2, 1.3, 2.8), octaves, 2.0, 0.5),
          fbm_standard(p + vec3(1.7, 9.2, 3.4), octaves, 2.0, 0.5)
        );
        return fbm_standard(p + 4.0 * q, octaves, 2.0, 0.5);
      }
    `;
  }
}
