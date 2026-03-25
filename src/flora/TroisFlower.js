import * as THREE from 'three';
import { ProceduralEntity } from '../core/ProceduralEntity.js';
import { ProceduralFactory } from '../core/ProceduralFactory.js';

/**
 * TroisFlower - LD 原版 TroisJS 风格花效果移植
 *
 * 基于 ExtrudeGeometry + InstancedMesh + onBeforeCompile Shader 注入
 * 包含: 花瓣卷曲/扭转/碗形变形, 脉络着色器, 花型预设系统
 *
 * @extends ProceduralEntity
 */

/* ── 花型预设 ── */
const SHAPE_PRESETS = {
  rose:          { size:0.75, dx:0.40, dy:0.80, petals:7,  rings:14, startRx:2.42, zOff:0.50, maxScale:2.2, maxR:0.1,  bowl:0.35, taper:0.75, curl:1.5, curlV:0.15, twist:0.4, twistV:0,   c1:'#ffffff', c2:'#ff0000' },
  lotus:         { size:1.20, dx:0.55, dy:1.00, petals:6,  rings:18, startRx:1.80, zOff:0.30, maxScale:2.5, maxR:0.15, bowl:1.20, taper:0.75, curl:0.8, curlV:0.10, twist:0.1, twistV:0,   c1:'#fff0f5', c2:'#ff69b4' },
  chrysanthemum: { size:1.60, dx:0.15, dy:0.50, petals:12, rings:20, startRx:2.80, zOff:0.15, maxScale:1.8, maxR:0.05, bowl:0.15, taper:0.25, curl:2.0, curlV:0.30, twist:0.2, twistV:0.1, c1:'#fffff0', c2:'#ffd700' },
  cherry:        { size:0.55, dx:0.35, dy:0.55, petals:5,  rings:10, startRx:2.00, zOff:0.40, maxScale:2.0, maxR:0.08, bowl:0.20, taper:0.60, curl:0.6, curlV:0.10, twist:0.1, twistV:0,   c1:'#fff5f5', c2:'#ffb7c5' },
  tulip:         { size:1.00, dx:0.50, dy:0.90, petals:6,  rings:8,  startRx:1.60, zOff:0.20, maxScale:2.8, maxR:0.02, bowl:0.80, taper:1.00, curl:0.4, curlV:0.05, twist:0.0, twistV:0,   c1:'#ff3333', c2:'#ff6600' },
  lily:          { size:1.40, dx:0.60, dy:1.20, petals:6,  rings:12, startRx:2.20, zOff:0.35, maxScale:2.4, maxR:0.12, bowl:0.60, taper:0.55, curl:1.8, curlV:0.20, twist:0.3, twistV:0.1, c1:'#ffffff', c2:'#ffcc00' },
};

/* ── 工具 ── */
function hexToRgb(hex) {
  const h = hex.replace('#','');
  return [parseInt(h.substring(0,2),16)/255, parseInt(h.substring(2,4),16)/255, parseInt(h.substring(4,6),16)/255];
}
function lerpColor(h1,h2,t) {
  const a=hexToRgb(h1), b=hexToRgb(h2);
  return [a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t, a[2]+(b[2]-a[2])*t];
}
function colorScale(h1,h2,t) {
  return t<0.5 ? lerpColor(h1,h2,t*2) : lerpColor(h2,h1,(t-0.5)*2);
}
function hexToVec3(hex) {
  const rgb = hexToRgb(hex);
  return new THREE.Vector3(rgb[0],rgb[1],rgb[2]);
}

/* ── 花瓣几何体 ── */
function createPetalGeo(size, dx, dy) {
  const shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.quadraticCurveTo(dx, dy, 0, size);
  shape.quadraticCurveTo(-dx, dy, 0, 0);
  return new THREE.ExtrudeGeometry(shape, {
    curveSegments:24, steps:1, depth:0.005,
    bevelEnabled:true, bevelThickness:0.005, bevelSize:0.01, bevelSegments:10
  });
}

export class TroisFlower extends ProceduralEntity {
  /**
   * @param {Object} params
   * @param {number} [params.seed=42]
   * @param {string} [params.preset='rose'] - 花型预设
   * @param {number} [params.rings=14]
   * @param {number} [params.petals=7]
   * @param {string} [params.color1='#ffffff']
   * @param {string} [params.color2='#ff0000']
   * @param {number} [params.size=0.75]
   * @param {number} [params.dx=0.40]
   * @param {number} [params.dy=0.80]
   * @param {number} [params.maxRadius=0.1]
   * @param {number} [params.maxScale=2.2]
   * @param {number} [params.startRx=2.42]
   * @param {number} [params.zOffsetCoef=0.50]
   * @param {number} [params.bowlDepth=0.35]
   * @param {number} [params.taperPow=0.75]
   * @param {number} [params.baseCurl=1.5]
   * @param {number} [params.curlVar=0.15]
   * @param {number} [params.baseTwist=0.4]
   * @param {number} [params.twistVar=0.0]
   * @param {number} [params.metalness=0.0]
   * @param {number} [params.roughness=0.43]
   * @param {number} [params.transmission=0.17]
   * @param {number} [params.sheen=0.47]
   * @param {number} [params.clearcoat=0.1]
   * @param {number} [params.veinStr=0.6]
   * @param {number} [params.edgeLight=0.2]
   */
  constructor(params = {}) {
    // 如果指定了预设，先合并预设参数
    const preset = SHAPE_PRESETS[params.preset || 'rose'] || SHAPE_PRESETS.rose;
    super({
      preset: 'rose',
      rings: preset.rings,
      petals: preset.petals,
      color1: preset.c1,
      color2: preset.c2,
      size: preset.size,
      dx: preset.dx,
      dy: preset.dy,
      maxRadius: preset.maxR,
      maxScale: preset.maxScale,
      startRx: preset.startRx,
      zOffsetCoef: preset.zOff,
      bowlDepth: preset.bowl,
      taperPow: preset.taper,
      baseCurl: preset.curl,
      curlVar: preset.curlV,
      baseTwist: preset.twist,
      twistVar: preset.twistV,
      // 材质
      metalness: 0.0,
      roughness: 0.43,
      transmission: 0.17,
      sheen: 0.47,
      sheenColor: '#ff8899',
      sheenRoughness: 0.48,
      clearcoat: 0.1,
      // 脉络
      veinStr: 0.6,
      veinWidth: 3000,
      veinColor: '#2d5a1e',
      midribStr: 0.7,
      lateralStr: 0.5,
      edgeLight: 0.2,
      hueShift: 0,
      // 防穿模
      layerGap: 0.005,
      scaleDecay: 0.40,
      innerShrink: 0.90,
      ...params
    });

    this._shaderUniforms = null;
    this._curlAttr = null;
    this._twistAttr = null;
    this._randCurl = null;
    this._randTwist = null;
  }

  _buildGeometry() {
    const p = this._params;
    return createPetalGeo(p.size, p.dx, p.dy);
  }

  _buildMaterial() {
    const p = this._params;
    this._shaderUniforms = {
      uBowlDepth:  { value: p.bowlDepth },
      uVeinStr:    { value: p.veinStr },
      uVeinWidth:  { value: p.veinWidth },
      uVeinColor:  { value: hexToVec3(p.veinColor) },
      uMidribStr:  { value: p.midribStr },
      uLateralStr: { value: p.lateralStr },
      uSecStr:     { value: 0.2 },
      uMicroStr:   { value: 0.06 },
      uTaperPow:   { value: p.taperPow },
      uEdgeLight:  { value: p.edgeLight },
      uHueShift:   { value: p.hueShift },
      uPetalSize:  { value: p.size },
      uPetalDx:    { value: p.dx },
    };

    const mat = new THREE.MeshPhysicalMaterial({
      metalness: p.metalness,
      roughness: p.roughness,
      transmission: p.transmission,
      thickness: 0.5,
      sheen: p.sheen,
      sheenColor: new THREE.Color(p.sheenColor),
      sheenRoughness: p.sheenRoughness,
      clearcoat: p.clearcoat,
      side: THREE.DoubleSide,
    });

    const uniforms = this._shaderUniforms;
    mat.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, uniforms);

      // Vertex Shader: 卷曲 + 扭转 + 碗形
      shader.vertexShader = shader.vertexShader.replace('#include <common>',
        `#include <common>
        attribute float aCurl;
        attribute float aTwist;
        uniform float uBowlDepth;
        uniform float uTaperPow;
        uniform float uPetalSize;
        uniform float uPetalDx;
        varying vec2 vPetalUv;
        varying float vNY;`
      );
      shader.vertexShader = shader.vertexShader.replace('#include <defaultnormal_vertex>',
        `{
          float yN=position.y; float caN=aCurl*yN*yN; float ccN=cos(caN),ssN=sin(caN);
          objectNormal.yz=vec2(objectNormal.y*ccN-objectNormal.z*ssN,objectNormal.y*ssN+objectNormal.z*ccN);
          float taN=aTwist*yN; float tcN=cos(taN),tsN=sin(taN);
          objectNormal.xz=vec2(objectNormal.x*tcN-objectNormal.z*tsN,objectNormal.x*tsN+objectNormal.z*tcN);
        }
        #include <defaultnormal_vertex>`
      );
      shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>',
        `#include <begin_vertex>
        {
          float petalH=max(position.y,0.0);
          float nY=clamp(petalH/max(uPetalSize,0.1),0.0,1.0);
          float nX=clamp(position.x/max(uPetalDx,0.05)*0.5+0.5,0.0,1.0);
          vNY=nY; vPetalUv=vec2(nX,nY);
          float sinNY=sin(nY*3.14159265);
          float taper=pow(max(sinNY,0.001),uTaperPow);
          transformed.x*=mix(1.0,taper,0.5);
          float bowlX=transformed.x;
          transformed.z+=bowlX*bowlX*uBowlDepth*max(sinNY,0.0);
          transformed.z+=sin(transformed.x*15.0)*0.015*nY;
          float y=transformed.y;
          float curlAng=aCurl*y*y; float cc=cos(curlAng),ss=sin(curlAng);
          float ny2=y*cc-transformed.z*ss; float nz2=y*ss+transformed.z*cc;
          transformed.y=ny2; transformed.z=nz2;
          float twistAng=aTwist*y; float tc=cos(twistAng),ts=sin(twistAng);
          float ox=transformed.x;
          transformed.x=ox*tc-transformed.z*ts; transformed.z=ox*ts+transformed.z*tc;
        }`
      );

      // Fragment Shader: 脉络 + 边缘透光 + 色相偏移
      shader.fragmentShader = shader.fragmentShader.replace('#include <common>',
        `#include <common>
        uniform float uVeinStr; uniform float uVeinWidth; uniform vec3 uVeinColor;
        uniform float uMidribStr; uniform float uLateralStr; uniform float uSecStr; uniform float uMicroStr;
        uniform float uEdgeLight; uniform float uHueShift;
        varying vec2 vPetalUv; varying float vNY;
        vec3 hueRotate(vec3 c,float h){float a=h*6.2831853;float co=cos(a),si=sin(a);vec3 k=vec3(0.57735);return clamp(c*co+cross(k,c)*si+k*dot(k,c)*(1.0-co),0.0,1.0);}
        float veinLine(float d,float w){return exp(-d*d*w);}
        float petalVein(float vx,float vy,float w){
          float cx=vx-0.5;float absCx=abs(cx);
          float midrib=veinLine(absCx,w*3.0)*uMidribStr;
          float lat=0.0;
          for(float i=1.0;i<=10.0;i+=1.0){float vyS=i/11.0;float prog=max(vy-vyS,0.0);float slope=0.6+i*0.04;float dL=abs(absCx-prog*slope);float fade=exp(-prog*3.0)*smoothstep(vyS-0.02,vyS+0.02,vy);lat+=veinLine(dL,w*0.8)*fade*uLateralStr;}
          float sec=0.0;
          for(float i=0.5;i<=10.5;i+=1.0){float vyS=i/11.0;float prog=max(vy-vyS,0.0);float slope=0.8+i*0.03;float dL=abs(absCx-prog*slope);float fade=exp(-prog*4.5)*smoothstep(vyS-0.01,vyS+0.01,vy);sec+=veinLine(dL,w*0.5)*fade*uSecStr;}
          float micro=veinLine(mod(cx*40.0,1.0)-0.5,w*0.02)*uMicroStr;
          float yFade=smoothstep(0.0,0.08,vy)*smoothstep(1.0,0.65,vy);
          float xFade=smoothstep(0.0,0.08,0.5-absCx);
          return (midrib+lat+sec+micro)*yFade*xFade;
        }`
      );
      shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>',
        `#include <color_fragment>
        {
          float vy=clamp(vPetalUv.y,0.0,1.0);float vx=clamp(vPetalUv.x,0.0,1.0);
          float vein=petalVein(vx,vy,uVeinWidth)*uVeinStr;
          diffuseColor.rgb=mix(diffuseColor.rgb,uVeinColor,clamp(vein*0.8,0.0,0.7));
          float edgeDist=min(vx,1.0-vx);float edgeFade=smoothstep(0.0,0.15,edgeDist);
          diffuseColor.rgb*=mix(1.0+uEdgeLight*0.4,1.0,edgeFade);
          diffuseColor.rgb=mix(diffuseColor.rgb*0.92,diffuseColor.rgb*1.05+0.02,vy);
          if(uHueShift>0.001){diffuseColor.rgb=hueRotate(diffuseColor.rgb,uHueShift);}
        }`
      );
    };

    return mat;
  }

  _buildMesh() {
    const p = this._params;
    const maxCount = 100 * 20;
    const count = p.rings * p.petals;

    // InstancedMesh
    const mesh = new THREE.InstancedMesh(this._geometry, this._material, maxCount);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.count = count;

    // 卷曲/扭转 instanced 属性
    const curlArr = new Float32Array(maxCount);
    const twistArr = new Float32Array(maxCount);
    this._randCurl = new Float32Array(maxCount);
    this._randTwist = new Float32Array(maxCount);
    for (let i = 0; i < maxCount; i++) {
      this._randCurl[i] = (this.rng.next() - 0.5) * 2;
      this._randTwist[i] = (this.rng.next() - 0.5) * 2;
    }
    this._curlAttr = new THREE.InstancedBufferAttribute(curlArr, 1).setUsage(THREE.DynamicDrawUsage);
    this._twistAttr = new THREE.InstancedBufferAttribute(twistArr, 1).setUsage(THREE.DynamicDrawUsage);
    mesh.geometry.setAttribute('aCurl', this._curlAttr);
    mesh.geometry.setAttribute('aTwist', this._twistAttr);

    // 初始布局 + 颜色
    this._updateLayout(mesh);
    this._updateColors(mesh);

    return mesh;
  }

  _updateLayout(mesh) {
    const p = this._params;
    const N1 = p.rings, N2 = p.petals;
    const dummy = new THREE.Object3D();
    const t = (Date.now() * 0.00005) % 1;
    const da = 2 * Math.PI / N2;
    const drx = 2 * p.startRx / N1;
    const curlArr = this._curlAttr.array;
    const twistArr = this._twistAttr.array;

    for (let i = 0; i < N1; i++) {
      const k = (i + t * N1) % N1;
      const tc = Math.sin(Math.PI * k / N1);
      const zOff = i * p.zOffsetCoef * Math.PI / N1;
      const r = tc * p.maxRadius;
      const zLift = i * p.layerGap;
      const decay = 1 - p.scaleDecay * (1 - tc);
      const shrink = tc < 0.15 ? THREE.MathUtils.lerp(1 - p.innerShrink, 1, tc / 0.15) : 1;
      const scale = tc * p.maxScale * decay * shrink;

      for (let j = 0; j < N2; j++) {
        const n = i * N2 + j;
        const a = da * j + zOff;
        dummy.position.set(r * Math.cos(a), r * Math.sin(a), zLift);
        dummy.rotation.set(p.startRx - k * drx, 0, a - Math.PI / 2, 'ZXY');
        dummy.scale.setScalar(scale);
        dummy.updateMatrix();
        mesh.setMatrixAt(n, dummy.matrix);
        curlArr[n] = p.baseCurl * (1 - tc * 0.6) + this._randCurl[n] * p.curlVar;
        twistArr[n] = p.baseTwist * tc * 0.8 + this._randTwist[n] * p.twistVar;
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    this._curlAttr.needsUpdate = true;
    this._twistAttr.needsUpdate = true;
  }

  _updateColors(mesh) {
    const p = this._params;
    const N1 = p.rings, N2 = p.petals;
    const tmp = new THREE.Color();
    for (let i = 0; i < N1; i++) {
      for (let j = 0; j < N2; j++) {
        const n = i * N2 + j;
        const rgb = colorScale(p.color1, p.color2, j / N2);
        tmp.setRGB(rgb[0], rgb[1], rgb[2]);
        mesh.setColorAt(n, tmp);
      }
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }

  /** 每帧更新矩阵动画 */
  update() {
    if (this._mesh) {
      this._mesh.count = this._params.rings * this._params.petals;
      this._updateLayout(this._mesh);
    }
    return this;
  }

  /** 切换花型预设 */
  setPreset(presetName) {
    const pr = SHAPE_PRESETS[presetName];
    if (!pr) return this;
    this._params.preset = presetName;
    Object.assign(this._params, {
      size:pr.size, dx:pr.dx, dy:pr.dy, petals:pr.petals, rings:pr.rings,
      startRx:pr.startRx, zOffsetCoef:pr.zOff, maxScale:pr.maxScale, maxRadius:pr.maxR,
      bowlDepth:pr.bowl, taperPow:pr.taper, baseCurl:pr.curl, curlVar:pr.curlV,
      baseTwist:pr.twist, twistVar:pr.twistV, color1:pr.c1, color2:pr.c2
    });
    return this.rebuild();
  }

  static get PRESETS() { return SHAPE_PRESETS; }
}

ProceduralFactory.register('TroisFlower', TroisFlower, { preset: 'rose' });
