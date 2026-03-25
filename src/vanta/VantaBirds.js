import * as THREE from 'three';
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js';
import { Vanta3DEffect, rn } from './Vanta3DEffect.js';

/**
 * VantaBirds — 精确还原 vantajs/src/vanta.birds.js (GPGPU 路径)
 * 使用 GPUComputationRenderer 在 GPU 上运行 Boids 模拟
 */

const BOUNDS = 800;
const BOUNDS_HALF = BOUNDS / 2;

export class VantaBirds extends Vanta3DEffect {
  getDefaults() {
    return {
      backgroundColor: 0x07192F,
      color1: 0xff0000,
      color2: 0x00d1ff,
      colorMode: 'varianceGradient',
      birdSize: 1,
      wingSpan: 30,
      speedLimit: 5,
      separation: 20,
      alignment: 20,
      cohesion: 20,
      quantity: 5,
    };
  }

  onInit() {
    const scene = this._ownScene;
    const o = this.options;

    this.WIDTH = Math.pow(2, o.quantity);
    this.BIRDS = this.WIDTH * this.WIDTH;

    this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 1, 3000);
    this.camera.position.z = 350;
    scene.add(this.camera);

    scene.fog = new THREE.Fog(0xffffff, 100, 1000);

    this.mouseX = 10000;
    this.mouseY = 10000;
    this.last = performance.now();

    try {
      this._initGPGPU();
      this._initGpgpuBirds();
      this._useGPGPU = true;
    } catch (err) {
      console.warn('[VantaBirds] GPGPU init failed, falling back to CPU:', err);
      this._useGPGPU = false;
      this._initCPUBirds();
    }
  }

  /* ===== GPGPU 路径 ===== */

  _initGPGPU() {
    const r = this._renderer;
    if (!r) throw new Error('No renderer');

    this.gpuCompute = new GPUComputationRenderer(this.WIDTH, this.WIDTH, r);

    const dtPosition = this.gpuCompute.createTexture();
    const dtVelocity = this.gpuCompute.createTexture();
    _fillPositionTexture(dtPosition);
    _fillVelocityTexture(dtVelocity);

    this.velocityVariable = this.gpuCompute.addVariable('textureVelocity', FRAG_VELOCITY, dtVelocity);
    this.positionVariable = this.gpuCompute.addVariable('texturePosition', FRAG_POSITION, dtPosition);

    this.gpuCompute.setVariableDependencies(this.velocityVariable, [this.positionVariable, this.velocityVariable]);
    this.gpuCompute.setVariableDependencies(this.positionVariable, [this.positionVariable, this.velocityVariable]);

    this.positionUniforms = this.positionVariable.material.uniforms;
    this.velocityUniforms = this.velocityVariable.material.uniforms;

    this.positionUniforms.time = { value: 0.0 };
    this.positionUniforms.delta = { value: 0.0 };
    this.velocityUniforms.time = { value: 1.0 };
    this.velocityUniforms.delta = { value: 0.0 };
    this.velocityUniforms.testing = { value: 1.0 };
    this.velocityUniforms.separationDistance = { value: 1.0 };
    this.velocityUniforms.alignmentDistance = { value: 1.0 };
    this.velocityUniforms.cohesionDistance = { value: 1.0 };
    this.velocityUniforms.speedLimit = { value: 1.0 };
    this.velocityUniforms.freedomFactor = { value: 1.0 };
    this.velocityUniforms.predator = { value: new THREE.Vector3() };

    this.velocityVariable.material.defines.BOUNDS = BOUNDS.toFixed(2);
    this.velocityVariable.wrapS = THREE.RepeatWrapping;
    this.velocityVariable.wrapT = THREE.RepeatWrapping;
    this.positionVariable.wrapS = THREE.RepeatWrapping;
    this.positionVariable.wrapT = THREE.RepeatWrapping;

    const error = this.gpuCompute.init();
    if (error !== null) throw new Error(error);

    this._updateVelocityUniforms();
  }

  _updateVelocityUniforms() {
    if (!this.velocityUniforms) return;
    const o = this.options;
    this.velocityUniforms.separationDistance.value = o.separation;
    this.velocityUniforms.alignmentDistance.value = o.alignment;
    this.velocityUniforms.speedLimit.value = o.speedLimit;
    this.velocityUniforms.cohesionDistance.value = o.cohesion;
  }

  _initGpgpuBirds() {
    const o = this.options;
    const geo = _getGPGPUBirdGeometry(o, this);

    this.birdUniforms = {
      color: { value: new THREE.Color(0xff2200) },
      texturePosition: { value: null },
      textureVelocity: { value: null },
      time: { value: 1.0 },
      delta: { value: 0.0 },
      birdSize: { value: o.birdSize },
    };

    const material = new THREE.ShaderMaterial({
      uniforms: this.birdUniforms,
      vertexShader: BIRD_VS,
      fragmentShader: BIRD_FS,
      side: THREE.DoubleSide,
    });

    const birdMesh = new THREE.Mesh(geo, material);
    birdMesh.rotation.y = Math.PI / 2;
    birdMesh.matrixAutoUpdate = false;
    birdMesh.updateMatrix();
    this._ownScene.add(birdMesh);
  }

  /* ===== CPU 降级路径 ===== */

  _initCPUBirds() {
    const o = this.options;
    const numBirds = this.BIRDS;
    this.boids = [];
    this.cpuBirds = [];

    for (let i = 0; i < numBirds; i++) {
      const boid = new Boid(o);
      boid.position.set(rn(-200,200), rn(-200,200), rn(-200,200));
      boid.velocity.set(rn(-1,1), rn(-1,1), rn(-1,1));
      boid.setWorldSize(500, 500, 300);
      this.boids.push(boid);

      const geo = _getNewBirdGeoBasic(o);
      const order = i / numBirds;
      const c = this._getNewCol(order);
      const arr = geo.attributes.position.array;
      const colors = new Float32Array(arr.length);
      for (let j = 0; j < colors.length; j += 3) {
        colors[j] = c.r; colors[j+1] = c.g; colors[j+2] = c.b;
      }
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const bird = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
        color: 0xffffff, side: THREE.DoubleSide, vertexColors: true,
      }));
      bird.phase = Math.floor(Math.random() * 62.83);
      bird.position.copy(boid.position);
      this._ownScene.add(bird);
      this.cpuBirds.push(bird);
    }
  }

  _getNewCol(order) {
    const o = this.options;
    const c1 = new THREE.Color(o.color1 != null ? o.color1 : 0x440000);
    const c2 = new THREE.Color(o.color2 != null ? o.color2 : 0x660000);
    const gradient = (o.colorMode||'').indexOf('Gradient') !== -1;
    let dist = gradient ? Math.random() : order;
    if ((o.colorMode||'').indexOf('variance') === 0) {
      return new THREE.Color(
        Math.min(1, Math.max(0, c1.r + Math.random() * c2.r)),
        Math.min(1, Math.max(0, c1.g + Math.random() * c2.g)),
        Math.min(1, Math.max(0, c1.b + Math.random() * c2.b))
      );
    } else if ((o.colorMode||'').indexOf('mix') === 0) {
      return new THREE.Color(o.color1 + dist * o.color2);
    }
    return c1.clone().lerp(c2, dist);
  }

  /* ===== onUpdate ===== */

  onUpdate() {
    const now = performance.now();
    let delta = (now - this.last) / 1000;
    if (delta > 1) delta = 1;
    this.last = now;

    if (this._useGPGPU) {
      this._updateGPGPU(delta, now);
    } else {
      this._updateCPU();
    }
  }

  _updateGPGPU(delta, now) {
    this.positionUniforms.time.value = now;
    this.positionUniforms.delta.value = delta;
    this.velocityUniforms.time.value = now;
    this.velocityUniforms.delta.value = delta;
    this.birdUniforms.time.value = now;
    this.birdUniforms.delta.value = delta;

    this.velocityUniforms.predator.value.set(this.mouseX, -this.mouseY, 0);
    // 原版行为：读完鼠标后重置到远处
    this.mouseX = 10000;
    this.mouseY = 10000;

    this.gpuCompute.compute();
    this.birdUniforms.texturePosition.value = this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture;
    this.birdUniforms.textureVelocity.value = this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;
  }

  _updateCPU() {
    const o = this.options;
    for (let i = 0; i < this.cpuBirds.length; i++) {
      const boid = this.boids[i];
      boid.run(this.boids);
      const bird = this.cpuBirds[i];
      bird.rotation.y = Math.atan2(-boid.velocity.z, boid.velocity.x);
      bird.rotation.z = Math.asin(boid.velocity.y / (boid.velocity.length()||1));
      bird.phase = (bird.phase + (Math.max(0, bird.rotation.z) + 0.1)) % 62.83;
      bird.geometry.attributes.position.array[5*3+1] =
        bird.geometry.attributes.position.array[4*3+1] =
          Math.sin(bird.phase) * 5 * o.birdSize;
      bird.geometry.attributes.position.needsUpdate = true;
      bird.position.copy(boid.position);
    }
  }

  onMouseMove(x, y) {
    // x, y: 0~1 归一化
    this.mouseX = x - 0.5;
    this.mouseY = y - 0.5;

    if (!this._useGPGPU && this.boids) {
      const vector = new THREE.Vector3(this.mouseX * this.width, -this.mouseY * this.height, 0);
      for (const boid of this.boids) {
        vector.z = boid.position.z;
        boid.repulse(vector);
      }
    }
    // GPGPU 路径：mouseX/mouseY 在 _updateGPGPU 中作为 predator 传入 shader
  }
}


/* ======== GPGPU Bird Geometry ======== */

function _getGPGPUBirdGeometry(options, effect) {
  const WIDTH = effect.WIDTH;
  const BIRDS = effect.BIRDS;
  const scope = new THREE.BufferGeometry();

  const trianglesPerBird = 3;
  const triangles = BIRDS * trianglesPerBird;
  const points = triangles * 3;

  const vertices = new THREE.BufferAttribute(new Float32Array(points * 3), 3);
  const birdColors = new THREE.BufferAttribute(new Float32Array(points * 3), 3);
  const references = new THREE.BufferAttribute(new Float32Array(points * 2), 2);
  const birdVertex = new THREE.BufferAttribute(new Float32Array(points), 1);

  scope.setAttribute('position', vertices);
  scope.setAttribute('birdColor', birdColors);
  scope.setAttribute('reference', references);
  scope.setAttribute('birdVertex', birdVertex);

  let v = 0;
  const verts_push = function() {
    for (let i = 0; i < arguments.length; i++) vertices.array[v++] = arguments[i];
  };

  const wingSpan = options.wingSpan || 20;
  const s = options.birdSize || 1;

  for (let f = 0; f < BIRDS; f++) {
    verts_push(0, -0, -20*s,  0, 4*s, -20*s,  0, 0, 30*s);    // Body
    verts_push(0, 0, -15*s,  -wingSpan*s, 0, 0,  0, 0, 15*s);  // Left Wing
    verts_push(0, 0, 15*s,   wingSpan*s, 0, 0,   0, 0, -15*s); // Right Wing
  }

  const colorCache = {};
  for (v = 0; v < triangles * 3; v++) {
    const birdIndex = ~~(~~(v / 3) / trianglesPerBird);
    const x = (birdIndex % WIDTH) / WIDTH;
    const y = ~~(birdIndex / WIDTH) / WIDTH;
    const order = ~~(v / 9) / BIRDS;
    const key = order.toString();
    const gradient = (options.colorMode||'').indexOf('Gradient') !== -1;
    let c;
    if (!gradient && colorCache[key]) {
      c = colorCache[key];
    } else {
      c = effect._getNewCol(order);
    }
    if (!gradient && !colorCache[key]) colorCache[key] = c;

    birdColors.array[v*3] = c.r;
    birdColors.array[v*3+1] = c.g;
    birdColors.array[v*3+2] = c.b;
    references.array[v*2] = x;
    references.array[v*2+1] = y;
    birdVertex.array[v] = v % 9;
  }
  return scope.scale(0.2, 0.2, 0.2);
}

function _fillPositionTexture(texture) {
  const a = texture.image.data;
  for (let k = 0; k < a.length; k += 4) {
    a[k]   = (Math.random() * BOUNDS) - BOUNDS_HALF;
    a[k+1] = (Math.random() * BOUNDS) - BOUNDS_HALF;
    a[k+2] = (Math.random() * BOUNDS) - BOUNDS_HALF;
    a[k+3] = 1;
  }
}
function _fillVelocityTexture(texture) {
  const a = texture.image.data;
  for (let k = 0; k < a.length; k += 4) {
    a[k]   = (Math.random() - 0.5) * 10;
    a[k+1] = (Math.random() - 0.5) * 10;
    a[k+2] = (Math.random() - 0.5) * 10;
    a[k+3] = 1;
  }
}


/* ======== GPGPU Shaders (原版 1:1) ======== */

const FRAG_POSITION = `\
uniform float time;
uniform float delta;
void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 tmpPos = texture2D( texturePosition, uv );
  vec3 position = tmpPos.xyz;
  vec3 velocity = texture2D( textureVelocity, uv ).xyz;
  float phase = tmpPos.w;
  phase = mod( ( phase + delta +
    length( velocity.xz ) * delta * 3. +
    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );
  gl_FragColor = vec4( position + velocity * delta * 15. , phase );
}`;

const FRAG_VELOCITY = `\
uniform float time;
uniform float testing;
uniform float delta;
uniform float separationDistance;
uniform float alignmentDistance;
uniform float cohesionDistance;
uniform float speedLimit;
uniform float freedomFactor;
uniform vec3 predator;
const float width = resolution.x;
const float height = resolution.y;
const float PI = 3.141592653589793;
const float PI_2 = PI * 2.0;
float zoneRadius = 40.0;
float zoneRadiusSquared = 1600.0;
float separationThresh = 0.45;
float alignmentThresh = 0.65;
const float UPPER_BOUNDS = BOUNDS;
const float LOWER_BOUNDS = -UPPER_BOUNDS;
float rand(vec2 co){ return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453); }
void main() {
  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
  separationThresh = separationDistance / zoneRadius;
  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;
  zoneRadiusSquared = zoneRadius * zoneRadius;
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 birdPosition, birdVelocity;
  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;
  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;
  float dist;
  vec3 dir;
  float distSquared;
  float separationSquared = separationDistance * separationDistance;
  float cohesionSquared = cohesionDistance * cohesionDistance;
  float f;
  float percent;
  vec3 velocity = selfVelocity;
  float limit = speedLimit;
  dir = predator * UPPER_BOUNDS - selfPosition;
  dir.z = 0.;
  dist = length( dir );
  distSquared = dist * dist;
  float preyRadius = 150.0;
  float preyRadiusSq = preyRadius * preyRadius;
  if (dist < preyRadius) {
    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;
    velocity += normalize( dir ) * f;
    limit += 5.0;
  }
  vec3 central = vec3( 0., 0., 0. );
  dir = selfPosition - central;
  dist = length( dir );
  dir.y *= 2.5;
  velocity -= normalize( dir ) * delta * 5.;
  for (float y=0.0;y<height;y++) {
    for (float x=0.0;x<width;x++) {
      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;
      birdPosition = texture2D( texturePosition, ref ).xyz;
      dir = birdPosition - selfPosition;
      dist = length(dir);
      if (dist < 0.0001) continue;
      distSquared = dist * dist;
      if (distSquared > zoneRadiusSquared ) continue;
      percent = distSquared / zoneRadiusSquared;
      if ( percent < separationThresh ) {
        f = (separationThresh / percent - 1.0) * delta;
        velocity -= normalize(dir) * f;
      } else if ( percent < alignmentThresh ) {
        float threshDelta = alignmentThresh - separationThresh;
        float adjustedPercent = ( percent - separationThresh ) / threshDelta;
        birdVelocity = texture2D( textureVelocity, ref ).xyz;
        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;
        velocity += normalize(birdVelocity) * f;
      } else {
        float threshDelta = 1.0 - alignmentThresh;
        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;
        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;
        velocity += normalize(dir) * f;
      }
    }
  }
  if ( length( velocity ) > limit ) {
    velocity = normalize( velocity ) * limit;
  }
  gl_FragColor = vec4( velocity, 1.0 );
}`;

const BIRD_VS = `\
attribute vec2 reference;
attribute float birdVertex;
attribute vec3 birdColor;
uniform sampler2D texturePosition;
uniform sampler2D textureVelocity;
varying vec4 vColor;
varying float z;
uniform float time;
uniform float birdSize;
void main() {
  vec4 tmpPos = texture2D( texturePosition, reference );
  vec3 pos = tmpPos.xyz;
  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);
  vec3 newPosition = position;
  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {
    newPosition.y = sin( tmpPos.w ) * 5. * birdSize;
  }
  newPosition = mat3( modelMatrix ) * newPosition;
  velocity.z *= -1.;
  float xz = length( velocity.xz );
  float xyz = 1.;
  float x = sqrt( 1. - velocity.y * velocity.y );
  float cosry = velocity.x / xz;
  float sinry = velocity.z / xz;
  float cosrz = x / xyz;
  float sinrz = velocity.y / xyz;
  mat3 maty = mat3(
    cosry, 0, -sinry,
    0    , 1, 0     ,
    sinry, 0, cosry
  );
  mat3 matz = mat3(
    cosrz , sinrz, 0,
    -sinrz, cosrz, 0,
    0     , 0    , 1
  );
  newPosition = maty * matz * newPosition;
  newPosition += pos;
  z = newPosition.z;
  vColor = vec4( birdColor, 1.0 );
  gl_Position = projectionMatrix * viewMatrix * vec4( newPosition, 1.0 );
}`;

const BIRD_FS = `\
varying vec4 vColor;
varying float z;
uniform vec3 color;
void main() {
  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;
  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;
  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;
  gl_FragColor = vec4( rr, gg, bb, 1. );
}`;


/* ======== CPU Boid 降级 ======== */

function _getNewBirdGeoBasic(options = {}) {
  const s = 1.5 * (options.birdSize || 1);
  const pts = [
    new THREE.Vector3(5*s,0,0), new THREE.Vector3(-5*s,-1*s,1*s),
    new THREE.Vector3(-5*s,0,0), new THREE.Vector3(-5*s,-2*s,-1*s),
    new THREE.Vector3(0,2*s,-6*s), new THREE.Vector3(0,2*s,6*s),
    new THREE.Vector3(2*s,0,0), new THREE.Vector3(-3*s,0,0),
  ];
  const geo = new THREE.BufferGeometry().setFromPoints(pts);
  geo.setIndex([0,2,1, 4,7,6, 5,6,7]);
  return geo;
}

class Boid {
  constructor(o) {
    this._o = o; this.position = new THREE.Vector3(); this.velocity = new THREE.Vector3();
    this._acc = new THREE.Vector3(); this._w=500; this._h=500; this._d=200;
    this._nr=100; this._ms=2.5; this._mf=0.1;
  }
  setWorldSize(w,h,d){this._w=w;this._h=h;this._d=d;}
  run(boids){
    const v=new THREE.Vector3();
    const walls=[[-this._w,this.position.y,this.position.z],[this._w,this.position.y,this.position.z],
      [this.position.x,-this._h,this.position.z],[this.position.x,this._h,this.position.z],
      [this.position.x,this.position.y,-this._d],[this.position.x,this.position.y,this._d]];
    for(const w of walls){v.set(w[0],w[1],w[2]);this._acc.add(this._avoid(v).multiplyScalar(5));}
    if(Math.random()>0.5){this._acc.add(this._alignment(boids));this._acc.add(this._cohesion(boids));this._acc.add(this._separation(boids));}
    this.velocity.add(this._acc);const l=this.velocity.length();
    if(l>this._ms)this.velocity.divideScalar(l/this._ms);
    this.position.add(this.velocity);this._acc.set(0,0,0);
  }
  _avoid(t){const s=new THREE.Vector3();s.copy(this.position).sub(t);s.multiplyScalar(1/this.position.distanceToSquared(t));return s;}
  repulse(t){const d=this.position.distanceTo(t);if(d<150){const s=new THREE.Vector3();s.subVectors(this.position,t).multiplyScalar(0.5/d);this._acc.add(s);}}
  _alignment(boids){const v=new THREE.Vector3();let c=0;const r=this._nr*this._o.alignment/20;
    for(let i=0;i<boids.length;i++){if(Math.random()>0.6)continue;const d=boids[i].position.distanceTo(this.position);if(d>0&&d<=r){v.add(boids[i].velocity);c++;}}
    if(c>0){v.divideScalar(c);const l=v.length();if(l>this._mf)v.divideScalar(l/this._mf);}return v;}
  _cohesion(boids){const p=new THREE.Vector3(),s=new THREE.Vector3();let c=0;const r=this._nr*this._o.cohesion/20;
    for(let i=0;i<boids.length;i++){if(Math.random()>0.6)continue;const d=boids[i].position.distanceTo(this.position);if(d>0&&d<=r){p.add(boids[i].position);c++;}}
    if(c>0)p.divideScalar(c);s.subVectors(p,this.position);const l=s.length();if(l>this._mf)s.divideScalar(l/this._mf);return s;}
  _separation(boids){const p=new THREE.Vector3(),rp=new THREE.Vector3();const r=this._nr*this._o.separation/20;
    for(let i=0;i<boids.length;i++){if(Math.random()>0.6)continue;const d=boids[i].position.distanceTo(this.position);if(d>0&&d<=r){rp.subVectors(this.position,boids[i].position).normalize().divideScalar(d);p.add(rp);}}return p;}
}