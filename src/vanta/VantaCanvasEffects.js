import { VantaEffect } from './VantaEffect.js';

/* ================================================================
   VantaClouds2 — 纹理驱动体积云（程序化噪声代替纹理）
   原版: vanta.clouds2.js (依赖 noise.png → 改为程序化生成)
   ================================================================ */
export class VantaClouds2 extends VantaEffect {
  getDefaults() {
    return {
      backgroundColor: 0x000000,
      skyColor: 0x5ca6ca,
      cloudColor: 0x334d80,
      lightColor: 0xffffff,
      speed: 1.0,
    };
  }
  static get fragmentShader() { return FRAG_CLOUDS2; }
}

/* ================================================================
   VantaTopology — 流场粒子（原 p5.js → 纯 Canvas 2D）
   ================================================================ */
export class VantaTopology {
  constructor(params = {}) {
    const defs = { color: 0x89964e, backgroundColor: 0x002222, speed: 1 };
    this._params = { ...defs, ...params };
    this._canvas = null;
    this._ctx = null;
    this._particles = [];
    this._flowGrid = [];
    this._tick = 0;
    this._raf = 0;
  }

  getDefaults() { return this._params; }

  build() {
    this._canvas = document.createElement('canvas');
    this._canvas.style.cssText = 'position:fixed;inset:0;z-index:-1;pointer-events:none;';
    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight;
    this._ctx = this._canvas.getContext('2d');
    this._initFlow();
    this._initParticles();
    return this;
  }

  addTo() {
    document.getElementById('canvas-container').appendChild(this._canvas);
    this._draw();
    return this;
  }

  _initFlow() {
    const w = this._canvas.width, h = this._canvas.height;
    const offset = 100, cellSize = 10, noiseSize = 0.003, noiseR = 0.1;
    const cols = Math.ceil((w + offset * 2) / cellSize);
    const rows = Math.ceil((h + offset * 2) / cellSize);
    this._flowCols = cols; this._flowRows = rows; this._cellSize = cellSize; this._offset = offset;
    this._flowGrid = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        const x = j * noiseSize, y = i * noiseSize;
        // Simplified flow calculation using sin/cos approximation of Perlin noise
        let hx = 0, hy = 0, lx = 0, ly = 0, hv = -1, lv = 2;
        for (let k = 0; k < 50; k++) {
          const a = k / 50 * Math.PI * 2;
          const px = x + Math.cos(a) * noiseR, py = y + Math.sin(a) * noiseR;
          const val = (Math.sin(px * 127.1 + py * 311.7) * 43758.5453) % 1;
          const v = Math.abs(val);
          if (v > hv) { hv = v; hx = px; hy = py; }
          if (v < lv) { lv = v; lx = px; ly = py; }
        }
        const dx = lx - hx, dy = ly - hy;
        const mag = Math.sqrt(dx * dx + dy * dy) || 1;
        row.push({ x: dx / mag * (hv - lv), y: dy / mag * (hv - lv) });
      }
      this._flowGrid.push(row);
    }
  }

  _initParticles() {
    const w = this._canvas.width + this._offset * 2;
    const h = this._canvas.height + this._offset * 2;
    this._particles = [];
    for (let i = 0; i < 4500; i++) {
      const px = Math.random() * w, py = Math.random() * h;
      this._particles.push({ x: px, y: py, px: px, py: py, vx: 0, vy: 0 });
    }
  }

  _draw() {
    const ctx = this._ctx;
    const o = this._params;
    const c = new THREE_Color_Lite(o.color);
    ctx.translate(-this._offset, -this._offset);
    ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},0.05)`;
    ctx.lineWidth = 1;

    const loop = () => {
      this._raf = requestAnimationFrame(loop);
      const w = this._canvas.width + this._offset * 2;
      const h = this._canvas.height + this._offset * 2;

      for (const p of this._particles) {
        const col = Math.min(this._flowCols - 1, Math.max(0, Math.floor(p.x / this._cellSize)));
        const row = Math.min(this._flowRows - 1, Math.max(0, Math.floor(p.y / this._cellSize)));
        const flow = this._flowGrid[row]?.[col] || { x: 0, y: 0 };

        p.px = p.x; p.py = p.y;
        p.x = ((p.x + p.vx) % w + w) % w;
        p.y = ((p.y + p.vy) % h + h) % h;
        p.vx = (p.vx + flow.x * 3) * 0.95;
        p.vy = (p.vy + flow.y * 3) * 0.95;
        const mag = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (mag > 2.2) { p.vx *= 2.2 / mag; p.vy *= 2.2 / mag; }
      }

      ctx.beginPath();
      for (const p of this._particles) {
        const dx = p.x - p.px, dy = p.y - p.py;
        if (Math.sqrt(dx * dx + dy * dy) < 10) {
          ctx.moveTo(p.px, p.py);
          ctx.lineTo(p.x, p.y);
        }
      }
      ctx.stroke();
      this._tick += 0.002;
    };
    loop();
  }

  setMouse() {} setPosition() { return this; } setScale() { return this; }
  resize(w, h) {
    if (this._canvas) { this._canvas.width = w; this._canvas.height = h; }
  }
  update() { return this; }
  dispose() {
    cancelAnimationFrame(this._raf);
    if (this._canvas && this._canvas.parentNode) this._canvas.parentNode.removeChild(this._canvas);
  }
}

/* ================================================================
   VantaTrunk — 噪声同心环（原 p5.js → 纯 Canvas 2D）
   ================================================================ */
export class VantaTrunk {
  constructor(params = {}) {
    const defs = { color: 0x98465f, backgroundColor: 0x222426, spacing: 0, chaos: 1 };
    this._params = { ...defs, ...params };
    this._canvas = null; this._ctx = null; this._raf = 0;
    this._ox = Math.random() * 10000; this._oy = Math.random() * 10000; this._oz = Math.random() * 10000;
  }

  getDefaults() { return this._params; }

  build() {
    this._canvas = document.createElement('canvas');
    this._canvas.style.cssText = 'position:fixed;inset:0;z-index:-1;pointer-events:none;';
    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight;
    this._ctx = this._canvas.getContext('2d');
    return this;
  }

  addTo() {
    document.getElementById('canvas-container').appendChild(this._canvas);
    this._draw();
    return this;
  }

  _noise(x, y, z) {
    // Simple value noise approximation
    const p = x * 12.9898 + y * 78.233 + (z || 0) * 43.1234;
    return (Math.sin(p) * 43758.5453) % 1 * 0.5 + 0.5;
  }

  _draw() {
    const loop = () => {
      this._raf = requestAnimationFrame(loop);
      const ctx = this._ctx, w = this._canvas.width, h = this._canvas.height;
      const o = this._params;
      const c = new THREE_Color_Lite(o.backgroundColor);
      ctx.fillStyle = `rgb(${c.r},${c.g},${c.b})`;
      ctx.fillRect(0, 0, w, h);

      const cc = new THREE_Color_Lite(o.color);
      ctx.strokeStyle = `rgb(${cc.r},${cc.g},${cc.b})`;
      ctx.lineWidth = 1;
      ctx.translate(w / 2, h / 2);

      const rings = 55;
      const dimInit = 50, dimDelta = 4, chaosInit = 0.2, chaosDelta = 0.12, chaosMag = 20;
      this._oy -= 0.02;
      this._oz += 0.00005;

      for (let i = 0; i < rings; i++) {
        ctx.beginPath();
        for (let angle = 0; angle < 360; angle++) {
          const rad = angle * Math.PI / 180;
          const dim = chaosDelta * i + chaosInit;
          const nv = this._noise(this._ox + Math.cos(rad) * dim, this._oy + Math.sin(rad) * dim, this._oz);
          const radius = (o.chaos * chaosMag * nv) + (dimDelta * i + dimInit) + (i * (o.spacing || 0));
          const x = radius * Math.cos(rad), y = radius * Math.sin(rad);
          if (angle === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
    };
    loop();
  }

  setMouse() {} setPosition() { return this; } setScale() { return this; }
  resize(w, h) { if (this._canvas) { this._canvas.width = w; this._canvas.height = h; } }
  update() { return this; }
  dispose() {
    cancelAnimationFrame(this._raf);
    if (this._canvas && this._canvas.parentNode) this._canvas.parentNode.removeChild(this._canvas);
  }
}

/* ── 简易颜色工具（避免 Canvas 效果依赖 THREE） ── */
class THREE_Color_Lite {
  constructor(hex) {
    if (typeof hex === 'number') {
      this.r = (hex >> 16) & 0xff;
      this.g = (hex >> 8) & 0xff;
      this.b = hex & 0xff;
    } else {
      this.r = this.g = this.b = 128;
    }
  }
}

/* ================================================================
   CLOUDS2 Fragment Shader（程序化噪声代替纹理采样）
   ================================================================ */
const FRAG_CLOUDS2 = `
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform float speed;
uniform vec3 skyColor;
uniform vec3 cloudColor;
uniform vec3 lightColor;

// 程序化噪声代替 texture lookup
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
float noise2d(vec2 p){
  vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),
             mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);
}
float texNoise(vec4 p){
  return noise2d(fract((0.5*p.zw+ceil(0.5*p.x))/200.0)*200.0);
}

void main(){
  vec2 coord=gl_FragCoord.xy;
  vec4 p,d=vec4(0.8,0,coord/iResolution.y-0.65);
  vec3 out1=skyColor-d.w;
  float s,f,t=200.0+sin(dot(coord,coord));
  for(float i=1.;i<=100.;i+=1.){
    t-=2.; if(t<0.)break;
    p=0.05*t*d;
    p.xz+=iTime*0.5*speed;
    p.x+=sin(iTime*0.25*speed)*0.25;
    s=2.;
    float n1=texNoise(s*p)/s;s*=2.;
    float n2=texNoise(s*p)/s;s*=2.;
    float n3=texNoise(s*p)/s;s*=2.;
    float n4=texNoise(s*p)/s;
    f=p.w+1.-n1-n2-n3-n4;
    if(f<0.){
      vec3 shading=mix(lightColor,cloudColor,-f);
      out1=mix(out1,shading,-f*0.4);
    }
  }
  gl_FragColor=vec4(out1,1.);
}`;
