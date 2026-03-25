import * as THREE from 'three';
import { Vanta3DEffect, rn, ri, sample } from './Vanta3DEffect.js';

/* ================================================================
   VantaNet — 粒子连线网络
   ================================================================ */
export class VantaNet extends Vanta3DEffect {
  getDefaults() {
    return {
      color: 0xff3f81, backgroundColor: 0x23153c,
      points: 10, maxDistance: 20, spacing: 15, showDots: true,
    };
  }
  onInit() {
    const scene = this._ownScene, o = this.options;
    this.cont = new THREE.Group();
    scene.add(this.cont);
    this.points = [];
    const n = o.points, sp = o.spacing;

    // Line segments buffer
    const numP = n * n * 2;
    this.linePositions = new Float32Array(numP * numP * 3);
    this.lineColors = new Float32Array(numP * numP * 3);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(this.linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(this.lineColors, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.computeBoundingSphere();
    lineGeo.setDrawRange(0, 0);
    const lineMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true });
    this.linesMesh = new THREE.LineSegments(lineGeo, lineMat);
    this.cont.add(this.linesMesh);

    // Generate points
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        const y1 = ri(-3, 3), x = (i - n / 2) * sp + ri(-5, 5);
        let z = (j - n / 2) * sp + ri(-5, 5);
        if (i % 2) z += sp * 0.5;
        this._genPoint(x, y1 - ri(5, 15), z);
        this._genPoint(x + ri(-5, 5), y1 + ri(5, 15), z + ri(-5, 5));
      }
    }

    // Camera
    this.camera = new THREE.PerspectiveCamera(25, this.width / this.height, 0.01, 10000);
    this.camera.position.set(50, 100, 150);
    this.camera.tx = 50; this.camera.ty = 100;
    scene.add(this.camera);

    const amb = new THREE.AmbientLight(0xffffff, 0.75); scene.add(amb);
    const spot = new THREE.SpotLight(0xffffff, 1);
    spot.position.set(0, 200, 0); spot.distance = 400; spot.target = this.cont;
    scene.add(spot);
  }

  _genPoint(x, y, z) {
    let sphere;
    if (this.options.showDots) {
      const geo = new THREE.SphereGeometry(0.25, 8, 8);
      const mat = new THREE.MeshLambertMaterial({ color: this.options.color });
      sphere = new THREE.Mesh(geo, mat);
    } else {
      sphere = new THREE.Object3D();
    }
    this.cont.add(sphere);
    sphere.ox = x; sphere.oy = y; sphere.oz = z;
    sphere.position.set(x, y, z);
    sphere.r = rn(-2, 2);
    this.points.push(sphere);
  }

  onUpdate() {
    const c = this.camera;
    if (c.tx !== undefined) {
      if (Math.abs(c.tx - c.position.x) > 0.01) c.position.x += (c.tx - c.position.x) * 0.02;
      if (Math.abs(c.ty - c.position.y) > 0.01) c.position.y += (c.ty - c.position.y) * 0.02;
    }
    c.lookAt(0, 0, 0);

    let vp = 0, cp = 0, nc = 0;
    const bgC = new THREE.Color(this.options.backgroundColor);
    const fgC = new THREE.Color(this.options.color);
    const diffC = fgC.clone().sub(bgC);

    for (let i = 0; i < this.points.length; i++) {
      const p = this.points[i];
      if (p.r !== 0) {
        let ang = Math.atan2(p.position.z, p.position.x);
        const dist = Math.sqrt(p.position.z ** 2 + p.position.x ** 2);
        ang += 0.00025 * p.r;
        p.position.x = dist * Math.cos(ang);
        p.position.z = dist * Math.sin(ang);
      }
      for (let j = i + 1; j < this.points.length; j++) {
        const p2 = this.points[j];
        const dx = p.position.x - p2.position.x, dy = p.position.y - p2.position.y, dz = p.position.z - p2.position.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < this.options.maxDistance) {
          const alpha = Math.min(1, (1 - dist / this.options.maxDistance) * 2);
          const lc = new THREE.Color(0).lerp(diffC, alpha);
          this.linePositions[vp++] = p.position.x; this.linePositions[vp++] = p.position.y; this.linePositions[vp++] = p.position.z;
          this.linePositions[vp++] = p2.position.x; this.linePositions[vp++] = p2.position.y; this.linePositions[vp++] = p2.position.z;
          this.lineColors[cp++] = lc.r; this.lineColors[cp++] = lc.g; this.lineColors[cp++] = lc.b;
          this.lineColors[cp++] = lc.r; this.lineColors[cp++] = lc.g; this.lineColors[cp++] = lc.b;
          nc++;
        }
      }
    }
    this.linesMesh.geometry.setDrawRange(0, nc * 2);
    this.linesMesh.geometry.attributes.position.needsUpdate = true;
    this.linesMesh.geometry.attributes.color.needsUpdate = true;
  }

  onMouseMove(x, y) {
    const c = this.camera;
    if (!c.ox) { c.ox = c.position.x; c.oy = c.position.y; c.oz = c.position.z; }
    const ang = Math.atan2(c.oz, c.ox);
    const dist = Math.sqrt(c.oz ** 2 + c.ox ** 2);
    const tAng = ang + (x - 0.5) * 2;
    c.tx = dist * Math.cos(tAng);
    c.ty = c.oy + (y - 0.5) * 50;
  }
}

/* ================================================================
   VantaWaves — 动态波浪网格
   ================================================================ */
export class VantaWaves extends Vanta3DEffect {
  getDefaults() {
    return {
      color: 0x005588, shininess: 30, waveHeight: 15, waveSpeed: 1, zoom: 1,
    };
  }
  onInit() {
    const scene = this._ownScene, o = this.options;
    const WW = 100, HH = 80, CELL = 18;
    const points = [];
    this.gg = [];
    this.oy = {};

    for (let i = 0; i <= WW; i++) {
      this.gg[i] = [];
      for (let j = 0; j <= HH; j++) {
        const id = points.length;
        points.push(new THREE.Vector3((i - WW * 0.5) * CELL, rn(0, 4) - 10, (HH * 0.5 - j) * CELL));
        this.gg[i][j] = id;
      }
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const indices = [];
    for (let i = 1; i <= WW; i++) {
      for (let j = 1; j <= HH; j++) {
        const d = this.gg[i][j], b = this.gg[i][j - 1], c2 = this.gg[i - 1][j], a = this.gg[i - 1][j - 1];
        if (ri(0, 1)) { indices.push(a, b, c2, b, c2, d); } else { indices.push(a, b, d, a, c2, d); }
      }
    }
    geo.setIndex(indices);
    const mat = new THREE.MeshPhongMaterial({ color: o.color, shininess: o.shininess, flatShading: true, side: THREE.DoubleSide });
    this.plane = new THREE.Mesh(geo, mat);
    scene.add(this.plane);

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const pL = new THREE.PointLight(0xffffff, 0.9); pL.position.set(-100, 250, -100); scene.add(pL);

    this.camera = new THREE.PerspectiveCamera(35, this.width / this.height, 50, 10000);
    this.cameraPosition = new THREE.Vector3(240, 200, 390);
    this.cameraTarget = new THREE.Vector3(140, -30, 190);
    this.camera.position.copy(this.cameraPosition);
    this.camera.tx = this.cameraPosition.x; this.camera.ty = this.cameraPosition.y; this.camera.tz = this.cameraPosition.z;
    scene.add(this.camera);
  }

  onUpdate() {
    const o = this.options, c = this.camera;
    this.plane.material.color.set(o.color);
    this.plane.material.shininess = o.shininess;
    c.ox = this.cameraPosition.x / o.zoom; c.oy = this.cameraPosition.y / o.zoom; c.oz = this.cameraPosition.z / o.zoom;

    if (Math.abs(c.tx - c.position.x) > 0.01) c.position.x += (c.tx - c.position.x) * 0.02;
    if (Math.abs(c.ty - c.position.y) > 0.01) c.position.y += (c.ty - c.position.y) * 0.02;
    if (Math.abs(c.tz - c.position.z) > 0.01) c.position.z += (c.tz - c.position.z) * 0.02;
    c.lookAt(this.cameraTarget);

    const arr = this.plane.geometry.attributes.position.array;
    const s = o.waveSpeed;
    for (let i = 0; i < arr.length; i += 3) {
      const x = arr[i], z = arr[i + 2];
      if (!this.oy[i]) { this.oy[i] = arr[i + 1]; continue; }
      const crossChop = Math.sqrt(s) * Math.cos(-x - z * 0.7);
      const delta = Math.sin((s * this.t * 0.00002) - (s * x * 0.025) + (s * z * 0.015) + crossChop);
      arr[i + 1] = this.oy[i] + Math.pow(delta + 1, 2) / 4 * o.waveHeight;
    }
    this.plane.geometry.attributes.position.setUsage(THREE.DynamicDrawUsage);
    this.plane.geometry.computeVertexNormals();
    this.plane.geometry.attributes.position.needsUpdate = true;
  }

  onMouseMove(x, y) {
    const c = this.camera, o = this.options;
    if (!c.ox) { c.ox = c.position.x; c.oy = c.position.y; c.oz = c.position.z; }
    c.tx = c.ox + (x - 0.5) * 100 / o.zoom;
    c.ty = c.oy + (y - 0.5) * -100 / o.zoom;
    c.tz = c.oz + (x - 0.5) * -50 / o.zoom;
  }
}

/* ================================================================
   VantaDots — 星点场 + 旋转线球
   ================================================================ */
export class VantaDots extends Vanta3DEffect {
  getDefaults() {
    return {
      color: 0xff8820, color2: 0xff8820, backgroundColor: 0x222222,
      size: 3, spacing: 35, showLines: true,
    };
  }
  onInit() {
    const scene = this._ownScene, o = this.options;
    this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 0.1, 5000);
    this.camera.position.set(0, 250, 50);
    this.camera.tx = 0; this.camera.ty = 50; this.camera.tz = 350;
    scene.add(this.camera);

    const points = [];
    const sp = o.spacing;
    for (let i = -30; i <= 30; i++) {
      for (let j = -30; j <= 30; j++) {
        points.push(new THREE.Vector3(i * sp + sp / 2, rn(0, 5) - 150, j * sp + sp / 2));
      }
    }
    this.starsGeo = new THREE.BufferGeometry().setFromPoints(points);
    const starMat = new THREE.PointsMaterial({ color: o.color, size: o.size });
    this.starField = new THREE.Points(this.starsGeo, starMat);
    scene.add(this.starField);

    if (o.showLines) {
      const lp = [];
      for (let i = 0; i < 200; i++) {
        const f1 = rn(40, 60), f2 = f1 + rn(12, 20);
        const z = rn(-1, 1), r = Math.sqrt(1 - z * z), th = rn(0, Math.PI * 2);
        const yy = Math.sin(th) * r, xx = Math.cos(th) * r;
        lp.push(new THREE.Vector3(xx * f1, yy * f1, z * f1), new THREE.Vector3(xx * f2, yy * f2, z * f2));
      }
      const lGeo = new THREE.BufferGeometry().setFromPoints(lp);
      this.linesMesh = new THREE.LineSegments(lGeo, new THREE.LineBasicMaterial({ color: o.color2 }));
      scene.add(this.linesMesh);
    }
  }

  onUpdate() {
    const arr = this.starsGeo.attributes.position.array;
    for (let j = 0; j < arr.length; j += 3) {
      arr[j + 1] += 0.1 * Math.sin(arr[j + 2] * 0.02 + arr[j] * 0.015 + this.t * 0.00002);
    }
    this.starsGeo.attributes.position.setUsage(THREE.DynamicDrawUsage);
    this.starsGeo.attributes.position.needsUpdate = true;

    const c = this.camera;
    c.position.x += (c.tx - c.position.x) * 0.003;
    c.position.y += (c.ty - c.position.y) * 0.003;
    c.position.z += (c.tz - c.position.z) * 0.003;
    c.lookAt(0, 0, 0);

    if (this.linesMesh) {
      this.linesMesh.rotation.z += 0.002;
      this.linesMesh.rotation.x += 0.0008;
      this.linesMesh.rotation.y += 0.0005;
    }
  }

  onMouseMove(x, y) {
    this.camera.tx = (x - 0.5) * 100;
    this.camera.ty = 50 + y * 50;
  }
}

/* ================================================================
   VantaRings — 彩色环形阵列
   ================================================================ */
const RING_COLORS = [0xff2255, 0xff1199, 0xff66cc, 0x88ff00, 0x77cc11, 0xffff00, 0xff7733, 0x11ffff, 0x1188dd, 0xffdd22, 0x2255cc, 0x79B0BC, 0x53707B];

export class VantaRings extends Vanta3DEffect {
  getDefaults() {
    return { backgroundColor: 0x202428, color: 0x88ff00 };
  }
  onInit() {
    const scene = this._ownScene;
    this.rings = [];
    this.cont = new THREE.Group();
    this.cont.position.set(30, 0, 0);
    this.cont.rotation.x = 0.067; this.cont.rotation.z = 0.167;
    scene.add(this.cont);

    for (let i = 0; i < 60; i++) {
      let radius, width;
      if (ri(0, 3)) {
        radius = rn(2, 4) + rn(1, 30) * rn(1, 2) * rn(1, 2) * rn(1, 2);
        width = rn(0, 3.5) + rn(0, 3.5) - ri(0, Math.floor(radius / 4)) - radius / 50;
      } else {
        radius = rn(1, 3) * rn(2, 4);
        width = rn(1, 2) * rn(1, 2) * rn(1.1, 1.5);
      }
      const minW = Math.pow(2, ri(0, 4)) * 0.05;
      if (width < minW) width = minW;
      if (radius < 1) radius = 1;

      this._genRing(sample(RING_COLORS), radius, width, rn(0, 1000), rn(1, 6),
        rn(0, 50 / (radius + 1) + 5) + 5 / width / (radius + 0.5),
        Math.max(-rn(0.5, 2), rn(1, 50 - radius / 2) - radius / 2) * 0.25);
    }

    this.camera = new THREE.PerspectiveCamera(25, this.width / this.height, 10, 10000);
    this.camera.position.set(0, 150, 200);
    this.camera.tx = 0; this.camera.ty = 150;
    scene.add(this.camera);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const pL = new THREE.PointLight(0xffffff, 0.5); pL.position.set(0, 150, 200); scene.add(pL);
    const spot = new THREE.SpotLight(0xffffff, 1);
    spot.position.set(-15, 50, 100); spot.penumbra = 1; spot.angle = 0.5; spot.decay = 1; spot.distance = 300;
    spot.target = this.cont; scene.add(spot);
  }

  _genRing(color, radius, width, startAng, ang, y, speed) {
    const shape = new THREE.Shape();
    shape.absarc(0, 0, radius + width, 0, ang, false);
    shape.lineTo(radius * Math.cos(ang), radius * Math.sin(ang));
    shape.absarc(0, 0, radius, ang, 0, true);
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.4, bevelEnabled: false, steps: 1, curveSegments: Math.max(4, ~~(64 * ang / 6.14)) });
    const mat = new THREE.MeshLambertMaterial({ color });
    if (ri(0, 1) === 0 || radius > 60) { mat.transparent = true; mat.opacity = Math.max(50 / radius + rn(-0.3, 0.3), 0.1); }
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = Math.PI / 2; mesh.rotation.z = startAng; mesh.position.y = y;
    mesh.speed = speed * 0.001;
    this.rings.push(mesh);
    this.cont.add(mesh);
  }

  onUpdate() {
    const c = this.camera;
    if (c.tx !== undefined) {
      if (Math.abs(c.tx - c.position.x) > 0.01) c.position.x += (c.tx - c.position.x) * 0.02;
      if (Math.abs(c.ty - c.position.y) > 0.01) c.position.y += (c.ty - c.position.y) * 0.02;
    }
    c.lookAt(0, 25, 7);
    for (const r of this.rings) r.rotation.z += r.speed;
    const t2 = this.t * 0.001;
    this.cont.rotation.x += Math.sin(t2) * 0.0001;
    this.cont.rotation.z += Math.cos(t2) * 0.00007;
  }

  onMouseMove(x, y) {
    const c = this.camera;
    if (!c.ox) { c.ox = c.position.x; c.oy = c.position.y; }
    c.tx = c.ox + (x - 0.5) * 50;
    c.ty = c.oy - y * 50;
  }
}

/* ================================================================
   VantaGlobe — 线框地球 + 网格连线
   ================================================================ */
export class VantaGlobe extends Vanta3DEffect {
  getDefaults() {
    return {
      color: 0xff3f81, color2: 0xffffff, size: 1,
      backgroundColor: 0x23153c, points: 10, maxDistance: 20, spacing: 15, showDots: true,
    };
  }
  onInit() {
    const scene = this._ownScene, o = this.options;
    this.cont = new THREE.Group(); this.cont.position.set(-50, -20, 0); scene.add(this.cont);
    this.points = [];
    const n = o.points, sp = o.spacing;
    const numP = n * n * 2;
    this.linePositions = new Float32Array(numP * numP * 3);
    this.lineColors = new Float32Array(numP * numP * 3);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(this.linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.setAttribute('color', new THREE.BufferAttribute(this.lineColors, 3).setUsage(THREE.DynamicDrawUsage));
    lineGeo.computeBoundingSphere(); lineGeo.setDrawRange(0, 0);
    this.linesMesh = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true }));
    this.cont.add(this.linesMesh);

    for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) {
      const x = (i - n / 2) * sp, z = (j - n / 2) * sp;
      this._genDot(x, 0, z);
    }

    // Globe wireframe
    this.cont2 = new THREE.Group(); this.cont2.position.set(0, 15, 0); scene.add(this.cont2);
    const wireMat = new THREE.LineBasicMaterial({ color: o.color });
    const sphereGeo = new THREE.SphereGeometry(18 * o.size, 18, 14);
    const edges = new THREE.EdgesGeometry(sphereGeo);
    this.sphere = new THREE.LineSegments(edges, wireMat);
    this.cont2.add(this.sphere);

    // Lines ball
    const mat2 = new THREE.LineBasicMaterial({ color: o.color2 });
    const lp = [];
    for (let i = 0; i < 80; i++) {
      const f1 = rn(18, 24), f2 = f1 + rn(1, 6);
      const z = rn(-1, 1), r = Math.sqrt(1 - z * z), th = rn(0, Math.PI * 2);
      lp.push(new THREE.Vector3(Math.cos(th) * r * f1, Math.sin(th) * r * f1, z * f1));
      lp.push(new THREE.Vector3(Math.cos(th) * r * f2, Math.sin(th) * r * f2, z * f2));
    }
    this.linesMesh2 = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(lp), mat2);
    this.cont2.add(this.linesMesh2);

    // Poles
    const mat3 = new THREE.LineBasicMaterial({ color: o.color2 });
    const plp = [new THREE.Vector3(0, 30, 0), new THREE.Vector3(0, -30, 0)];
    const heights = [17.9, 12, 8, 5, 3, 2, 1.5, 1.1, 0.8, 0.6, 0.45, 0.3, 0.2, 0.1, 0.05, 0.03, 0.02, 0.01];
    for (let i = 0; i < 4; i++) {
      const xx = 0.15 * Math.cos(i / 4 * Math.PI * 2), zz = 0.15 * Math.sin(i / 4 * Math.PI * 2);
      for (let j = 0; j < heights.length; j++) {
        const r2 = 6 * (j + 1);
        plp.push(new THREE.Vector3(xx * r2, heights[j], zz * r2), new THREE.Vector3(xx * r2, -heights[j], zz * r2));
      }
    }
    this.linesMesh3 = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(plp), mat3);
    this.cont2.add(this.linesMesh3);
    this.cont2.rotation.x = -0.25;

    this.camera = new THREE.PerspectiveCamera(20, this.width / this.height, 0.01, 10000);
    this.camera.position.set(50, 100, 150);
    this.camera.tx = 50; this.camera.ty = 100;
    scene.add(this.camera);
    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const spot = new THREE.SpotLight(0xffffff, 1); spot.position.set(0, 200, 0); spot.distance = 400; spot.target = this.cont; scene.add(spot);
  }

  _genDot(x, y, z) {
    let sphere;
    if (this.options.showDots) {
      sphere = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 8), new THREE.MeshLambertMaterial({ color: this.options.color }));
    } else { sphere = new THREE.Object3D(); }
    this.cont.add(sphere);
    sphere.ox = x; sphere.oy = y; sphere.oz = z;
    sphere.position.set(x, y, z);
    this.points.push(sphere);
  }

  onUpdate() {
    const c = this.camera;
    if (c.tx !== undefined) {
      if (Math.abs(c.tx - c.position.x) > 0.01) c.position.x += (c.tx - c.position.x) * 0.02;
      if (Math.abs(c.ty - c.position.y) > 0.01) c.position.y += (c.ty - c.position.y) * 0.02;
    }
    c.lookAt(-40, 0, 0);

    if (this.linesMesh2) { this.linesMesh2.rotation.z += 0.002; this.linesMesh2.rotation.x += 0.0008; this.linesMesh2.rotation.y += 0.0005; }
    if (this.sphere) { this.sphere.rotation.y += 0.002; this.linesMesh3.rotation.y -= 0.004; }

    // Animate grid points
    let vp = 0, cp2 = 0, nc = 0;
    const bgC = new THREE.Color(this.options.backgroundColor), fgC = new THREE.Color(this.options.color);
    const diffC = fgC.clone().sub(bgC);
    for (let i = 0; i < this.points.length; i++) {
      const p = this.points[i];
      p.position.y = 2 * Math.sin(p.position.x / 10 + this.t * 0.00001 + p.position.z / 10 * 0.5);
      for (let j = i + 1; j < this.points.length; j++) {
        const p2 = this.points[j];
        const dx = p.position.x - p2.position.x, dy = p.position.y - p2.position.y, dz = p.position.z - p2.position.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < this.options.maxDistance) {
          const alpha = Math.min(1, (1 - dist / this.options.maxDistance) * 2);
          const lc = new THREE.Color(0).lerp(diffC, alpha);
          this.linePositions[vp++] = p.position.x; this.linePositions[vp++] = p.position.y; this.linePositions[vp++] = p.position.z;
          this.linePositions[vp++] = p2.position.x; this.linePositions[vp++] = p2.position.y; this.linePositions[vp++] = p2.position.z;
          this.lineColors[cp2++] = lc.r; this.lineColors[cp2++] = lc.g; this.lineColors[cp2++] = lc.b;
          this.lineColors[cp2++] = lc.r; this.lineColors[cp2++] = lc.g; this.lineColors[cp2++] = lc.b;
          nc++;
        }
      }
    }
    this.linesMesh.geometry.setDrawRange(0, nc * 2);
    this.linesMesh.geometry.attributes.position.needsUpdate = true;
    this.linesMesh.geometry.attributes.color.needsUpdate = true;
  }

  onMouseMove(x, y) {
    const c = this.camera;
    if (!c.ox) { c.ox = c.position.x; c.oy = c.position.y; c.oz = c.position.z; }
    const ang = Math.atan2(c.oz, c.ox), dist = Math.sqrt(c.oz ** 2 + c.ox ** 2);
    const tAng = ang + (x - 0.5) * 1.5;
    c.tx = dist * Math.cos(tAng);
    c.ty = c.oy + (y - 0.5) * 80;
  }
}
