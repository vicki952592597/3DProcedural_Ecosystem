/**
 * ShaderChunk - Shader 代码片段注入机制
 * 提供统一的 ShaderChunk 注册、注入与 onBeforeCompile 劫持管线
 * 在 Vertex/Fragment Shader 层实现 GPU 级动画
 */
export class ShaderChunk {
  /** @type {Map<string, string>} 注册的 chunk 片段 */
  static _chunks = new Map();

  /**
   * 注册一个 Shader 代码片段
   * @param {string} name - chunk 名称
   * @param {string} code - GLSL 代码
   */
  static register(name, code) {
    ShaderChunk._chunks.set(name, code);
  }

  /**
   * 获取已注册的 chunk
   * @param {string} name
   * @returns {string}
   */
  static get(name) {
    return ShaderChunk._chunks.get(name) || '';
  }

  /**
   * 将多个 chunk 拼接为完整代码块
   * @param {string[]} names
   * @returns {string}
   */
  static combine(...names) {
    return names.map(n => ShaderChunk.get(n)).join('\n');
  }

  /**
   * 劫持 THREE.Material 的 onBeforeCompile
   * 注入自定义 ShaderChunk 到指定位置
   * @param {THREE.Material} material
   * @param {Object} injections - { vertexPrepend, vertexAppend, fragmentPrepend, fragmentAppend }
   */
  static inject(material, injections = {}) {
    const {
      vertexPrepend = '',
      vertexAppend = '',
      fragmentPrepend = '',
      fragmentAppend = '',
      vertexReplace = {},
      fragmentReplace = {}
    } = injections;

    const origCallback = material.onBeforeCompile;

    material.onBeforeCompile = (shader) => {
      // 先执行原有的回调
      if (origCallback) origCallback(shader);

      // Vertex Shader 注入
      if (vertexPrepend) {
        shader.vertexShader = vertexPrepend + '\n' + shader.vertexShader;
      }
      if (vertexAppend) {
        shader.vertexShader = shader.vertexShader.replace(
          '}', // 替换最后一个 }
          vertexAppend + '\n}'
        );
      }
      for (const [search, replace] of Object.entries(vertexReplace)) {
        shader.vertexShader = shader.vertexShader.replace(search, replace);
      }

      // Fragment Shader 注入
      if (fragmentPrepend) {
        shader.fragmentShader = fragmentPrepend + '\n' + shader.fragmentShader;
      }
      if (fragmentAppend) {
        shader.fragmentShader = shader.fragmentShader.replace(
          '}',
          fragmentAppend + '\n}'
        );
      }
      for (const [search, replace] of Object.entries(fragmentReplace)) {
        shader.fragmentShader = shader.fragmentShader.replace(search, replace);
      }
    };

    // 标记需要重新编译
    material.needsUpdate = true;
    return material;
  }

  /**
   * 创建完整的自定义 ShaderMaterial 的 vertex shader
   * @param {Object} options
   * @returns {string}
   */
  static buildVertexShader({ uniforms = '', attributes = '', varyings = '', mainBody = '' }) {
    return /* glsl */`
      precision highp float;

      // Three.js 内置
      // uniform mat4 modelViewMatrix;
      // uniform mat4 projectionMatrix;
      // attribute vec3 position;
      // attribute vec3 normal;
      // attribute vec2 uv;

      ${uniforms}
      ${attributes}
      ${varyings}

      void main() {
        vec3 transformed = position;
        vec3 transformedNormal = normal;
        vec2 vUv = uv;

        ${mainBody}

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;
  }

  /**
   * 创建完整的自定义 ShaderMaterial 的 fragment shader
   * @param {Object} options
   * @returns {string}
   */
  static buildFragmentShader({ uniforms = '', varyings = '', functions = '', mainBody = '' }) {
    return /* glsl */`
      precision highp float;

      ${uniforms}
      ${varyings}
      ${functions}

      void main() {
        vec4 fragColor = vec4(1.0);

        ${mainBody}

        gl_FragColor = fragColor;
      }
    `;
  }
}

// ========================================
// 预注册常用 Shader Chunks
// ========================================

// 通用噪声函数
ShaderChunk.register('simplex3d', /* glsl */`
  vec3 mod289_v3(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289_v4(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289_v4(((x * 34.0) + 10.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289_v3(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 105.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`);

// FBM 分数布朗运动
ShaderChunk.register('fbm', /* glsl */`
  float fbm(vec3 p, int octaves, float lacunarity, float gain) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 8; i++) {
      if (i >= octaves) break;
      value += amplitude * snoise(p * frequency);
      frequency *= lacunarity;
      amplitude *= gain;
    }
    return value;
  }
`);

// 旋转矩阵工具
ShaderChunk.register('rotation', /* glsl */`
  mat3 rotateX(float angle) {
    float s = sin(angle), c = cos(angle);
    return mat3(1,0,0, 0,c,-s, 0,s,c);
  }
  mat3 rotateY(float angle) {
    float s = sin(angle), c = cos(angle);
    return mat3(c,0,s, 0,1,0, -s,0,c);
  }
  mat3 rotateZ(float angle) {
    float s = sin(angle), c = cos(angle);
    return mat3(c,-s,0, s,c,0, 0,0,1);
  }
  mat3 rotateAxis(vec3 axis, float angle) {
    float s = sin(angle), c = cos(angle);
    float oc = 1.0 - c;
    return mat3(
      oc*axis.x*axis.x+c,       oc*axis.x*axis.y-axis.z*s, oc*axis.z*axis.x+axis.y*s,
      oc*axis.x*axis.y+axis.z*s, oc*axis.y*axis.y+c,       oc*axis.y*axis.z-axis.x*s,
      oc*axis.z*axis.x-axis.y*s, oc*axis.y*axis.z+axis.x*s, oc*axis.z*axis.z+c
    );
  }
`);

// Hash 函数
ShaderChunk.register('hash', /* glsl */`
  float hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
  }
  vec2 hash22(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xx + p3.yz) * p3.zy);
  }
  vec3 hash33(vec3 p3) {
    p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yxz + 33.33);
    return fract((p3.xxy + p3.yxx) * p3.zyx);
  }
`);

// SDF 基元
ShaderChunk.register('sdf', /* glsl */`
  float sdSphere(vec3 p, float r) { return length(p) - r; }
  float sdBox(vec3 p, vec3 b) {
    vec3 q = abs(p) - b;
    return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
  }
  float sdTorus(vec3 p, vec2 t) {
    vec2 q = vec2(length(p.xz) - t.x, p.y);
    return length(q) - t.y;
  }
  float opSmoothUnion(float d1, float d2, float k) {
    float h = clamp(0.5 + 0.5*(d2-d1)/k, 0.0, 1.0);
    return mix(d2, d1, h) - k*h*(1.0-h);
  }
  float opSmoothSubtraction(float d1, float d2, float k) {
    float h = clamp(0.5 - 0.5*(d2+d1)/k, 0.0, 1.0);
    return mix(d2, -d1, h) + k*h*(1.0-h);
  }
`);
