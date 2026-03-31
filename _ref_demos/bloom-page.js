(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [530],
  {
    11402: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => E }));
      var i = s(54190),
        n = s(19475),
        r = s(1119),
        a = s(14621),
        l = s(52108),
        o = s(72864),
        u = s(90567),
        d = s(39137),
        c = s(2910),
        m = s(36526),
        h = s(51759),
        g = s(27204);
      let x = (0, m.Fn)((e) => {
          let [t, s] = e,
            i = (0, m.eR5)(s).toVar(),
            n = (0, m.eR5)(t).toVar(),
            r = (0, m.pBV)(1).toVar();
          return (
            r
              .element((0, m.Whr)(0))
              .element((0, m.Whr)(0))
              .assign(i.x),
            r
              .element((0, m.Whr)(1))
              .element((0, m.Whr)(1))
              .assign(i.y),
            r
              .element((0, m.Whr)(2))
              .element((0, m.Whr)(2))
              .assign(i.z),
            r.mul((0, m.lnd)(n, 1))
          );
        }).setLayout({
          name: "scale",
          type: "vec4",
          inputs: [
            { name: "position", type: "vec3" },
            { name: "scaleFactor", type: "vec3" },
          ],
        }),
        p = (0, m.Fn)((e) => {
          let [t, s, i] = e,
            n = (0, m.fVC)(i).toVar(),
            r = (0, m.eR5)(s).toVar(),
            a = (0, m.eR5)(t).toVar();
          r.assign((0, m.S86)(r));
          let l = (0, m.fVC)((0, m.F8e)(n)).toVar(),
            o = (0, m.fVC)((0, m.gnS)(n)).toVar(),
            u = (0, m.fVC)((0, m.jbE)(1, o)).toVar();
          return (0, m.w00)(
            u.mul(r.x).mul(r.x).add(o),
            u.mul(r.x).mul(r.y).sub(r.z.mul(l)),
            u.mul(r.z).mul(r.x).add(r.y.mul(l)),
            u.mul(r.x).mul(r.y).add(r.z.mul(l)),
            u.mul(r.y).mul(r.y).add(o),
            u.mul(r.y).mul(r.z).sub(r.x.mul(l)),
            u.mul(r.z).mul(r.x).sub(r.y.mul(l)),
            u.mul(r.y).mul(r.z).add(r.x.mul(l)),
            u.mul(r.z).mul(r.z).add(o),
          )
            .toVar()
            .mul(a);
        }).setLayout({
          name: "rotate",
          type: "vec3",
          inputs: [
            { name: "position", type: "vec3" },
            { name: "axis", type: "vec3" },
            { name: "angle", type: "float" },
          ],
        }),
        f = (0, m.Fn)((e) => {
          let [t, s, i, n, r] = e,
            a = (0, m.eR5)(r).toVar(),
            l = (0, m.eR5)(n).toVar(),
            o = (0, m.Whr)(i).toVar(),
            u = (0, m.fVC)(s).toVar(),
            d = (0, m.eR5)(t).toVar(),
            c = (0, m.fVC)(d.x).toVar(),
            h = (0, m.fVC)(d.y).toVar(),
            g = (0, m.fVC)(d.z).toVar(),
            x = (0, m.fVC)().toVar(),
            p = (0, m.fVC)().toVar(),
            f = (0, m.fVC)().toVar();
          return (
            (0, m.If)((0, m.tnl)(u).lessThan(1e-5), () => d),
            d.subAssign(a),
            c.assign(d.x),
            h.assign(d.y),
            g.assign(d.z),
            (0, m.If)(o.equal((0, m.Whr)(0)).or(o.equal((0, m.Whr)(1))), () => {
              x.assign(g.mul(u));
            }).Else(() => {
              x.assign(c.mul(u));
            }),
            p.assign((0, m.F8e)(x)),
            f.assign((0, m.gnS)(x)),
            (0, m.If)(o.equal((0, m.Whr)(0)), () => {
              (d.x.assign(c),
                d.y.assign(h.mul(f).add((0, m.jbE)(1, f).div(u))),
                d.z.assign(
                  h
                    .sub((0, m.y4m)(1, u))
                    .negate()
                    .mul(p),
                ),
                d.x.addAssign(l.x),
                d.y.addAssign(p.mul(l.z)),
                d.z.addAssign(f.mul(l.z)));
            })
              .ElseIf(o.equal((0, m.Whr)(1)), () => {
                (d.x.assign(c.mul(f).add((0, m.jbE)(1, f).div(u))),
                  d.y.assign(h),
                  d.z.assign(
                    c
                      .sub((0, m.y4m)(1, u))
                      .negate()
                      .mul(p),
                  ),
                  d.x.addAssign(p.mul(l.z)),
                  d.y.addAssign(l.y),
                  d.z.addAssign(f.mul(l.z)));
              })
              .Else(() => {
                (d.x.assign(
                  h
                    .sub((0, m.y4m)(1, u))
                    .negate()
                    .mul(p),
                ),
                  d.y.assign(h.mul(f).add((0, m.jbE)(1, f).div(u))),
                  d.z.assign(g),
                  d.x.addAssign(f.mul(l.x)),
                  d.y.addAssign(p.mul(l.x)),
                  d.z.addAssign(l.z));
              }),
            d.addAssign(a),
            d
          );
        }).setLayout({
          name: "bend",
          type: "vec3",
          inputs: [
            { name: "r_co", type: "vec3" },
            { name: "factor", type: "float" },
            { name: "axis", type: "int" },
            { name: "dcut", type: "vec3" },
            { name: "origin", type: "vec3" },
          ],
        }),
        v = (0, m.Fn)((e) => {
          let [t, s, i, n, r] = e,
            a = (0, m.fVC)(r).toVar(),
            l = (0, m.fVC)(n).toVar(),
            o = (0, m.fVC)(i).toVar(),
            u = (0, m.fVC)(s).toVar();
          return (0, m.fVC)(t)
            .toVar()
            .sub(u)
            .div(o.sub(u).mul(a.sub(l)))
            .add(l);
        }).setLayout({
          name: "remap",
          type: "float",
          inputs: [
            { name: "value", type: "float" },
            { name: "in_min", type: "float" },
            { name: "in_max", type: "float" },
            { name: "out_min", type: "float" },
            { name: "out_max", type: "float" },
          ],
        });
      ((0, m.Fn)(() => {
        let e = (0, m.fVC)(m.cGD).div(64).mul(6),
          t = (0, m.ziu)(m.kBw.add(e), 6).div(6),
          s = (0, m.fVC)(
            v(t, 0, 1, (0, m.lKK)(2, 3.14159), (0, m.fVC)(-2).mul(3.14159)),
          ).toVar(),
          i = m.pot;
        return (
          i.assign(x(i, (0, m.eR5)(1, 1, 0.9)).xyz),
          i.assign(
            f(
              i,
              s,
              (0, m.Whr)(2),
              (0, m.eR5)((0, m.Whr)(0), 0, 0),
              (0, m.eR5)(0, 0, (0, m.Whr)(0)),
            ),
          ),
          i.assign(x(i, (0, m.eR5)(v(t, 0, 0.5, 0, 1))).xyz),
          i.assign(x(i, (0, m.eR5)(v(t, 0.5, 1, 0.8, 0.2))).xyz),
          i
        );
      }),
        (0, m.Fn)((e) => {
          let [t] = e,
            s = (0, m.eR5)(t).toVar(),
            i = (0, m.fVC)(0.001).toVar(),
            n = (0, m.eR5)(
              f(s.add((0, m.eR5)(i, 0, 0))).sub(f(s.sub((0, m.eR5)(i, 0, 0)))),
            ).toVar(),
            r = (0, m.eR5)(
              f(s.add((0, m.eR5)(0, 0, i))).sub(f(s.sub((0, m.eR5)(0, 0, i)))),
            ).toVar();
          return (0, m.eR5)((0, m.S86)((0, m.$An)(r, n))).toVar();
        }).setLayout({
          name: "computeNormal",
          type: "vec3",
          inputs: [{ name: "pos", type: "vec3" }],
        }));
      let y = function () {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        let { scene: i } = (0, u.A)();
        return (
          (0, c.useEffect)(() => {
            if (t && t.length) {
              let e = t.filter((e) => null !== e);
              if (0 !== e.length)
                return (
                  i.add(...e),
                  () => {
                    i.remove(...e);
                  }
                );
            }
          }, [t, i]),
          null
        );
      };
      var w = s(5962),
        j = s(76156),
        b = s(22103);
      let T = (0, s(70913).v)((e) => ({
        isLoading: !1,
        setIsLoading: (t) => e({ isLoading: t }),
      }));
      var V = s(19369),
        P = s(42342),
        N = s(78943);
      let C = (0, m.Fn)((e) => {
          let { p: t, a: s, b: i } = e,
            n = t.sub(s),
            r = i.sub(s),
            a = (0, m.qE8)((0, m.Omf)(n, r).div((0, m.Omf)(r, r)));
          return n.sub(r.mul(a)).length();
        }),
        z = (0, m.Fn)((e) => {
          let { index: t, width: s } = e,
            i = (0, m.Whr)(t).mod((0, m.Whr)(s)),
            n = (0, m.Whr)(t).div((0, m.Whr)(s));
          return (0, m.ZcS)(i, n);
        }),
        R = (0, m.Fn)((e) => {
          let { st: t, width: s, height: i } = e;
          return (0, m.ZcS)(
            (0, m.fVC)(t.x).div((0, m.fVC)(s)),
            (0, m.fVC)(t.y).div((0, m.fVC)(i)),
          );
        });
      class S {
        resize(e, t) {
          if (e === this.width && t === this.height) return;
          (this.pingTexture.dispose(),
            this.pongTexture.dispose(),
            (this.width = e),
            (this.height = t),
            (this.pingTexture = new h.StorageTexture(e, t)),
            (this.pongTexture = new h.StorageTexture(e, t)),
            (this.pingTexture = new h.StorageTexture(e, t)),
            (this.pongTexture = new h.StorageTexture(e, t)),
            (this.pingTexture.type = g.ix0),
            (this.pongTexture.type = g.ix0),
            (this.computeToPong = this.computePingPongTSL({
              readTex: this.pingTexture,
              writeTex: this.pongTexture,
              index: m.cGD,
            }).compute(e * t)),
            (this.computeToPing = this.computePingPongTSL({
              readTex: this.pongTexture,
              writeTex: this.pingTexture,
              index: m.cGD,
            }).compute(e * t)));
          let s = (0, m.Fn)((t) => {
            let { writeTex: s, index: i } = t,
              n = z({ index: i, width: e });
            (0, m.TJz)(s, n, (0, m.lnd)(0, 0, 0, 1));
          })({ writeTex: this.pingTexture, index: m.cGD }).compute(e * t);
          this.renderer.computeAsync(s);
        }
        get resultTexture() {
          return this.uniforms.resultTexture;
        }
        constructor(e, t, s) {
          ((this.brushSize = 0.08),
            (this.fadingRate = 0.9),
            (this.phase = !0),
            (this.uniforms = {
              resultTexture: this.pongTexture,
              pointerPosition: (0, m.PiW)((0, m.ZcS)(0)),
              lastPointerPosition: (0, m.PiW)((0, m.ZcS)(0)),
              isPointerEnter: (0, m.PiW)(0),
              lastIsPointerEnter: (0, m.PiW)(0),
              diff: (0, m.PiW)(0),
            }),
            (this.computePingPongTSL = (0, m.Fn)((e) => {
              let { readTex: t, writeTex: s, index: i } = e,
                n = z({ index: i, width: this.width }),
                r = R({
                  st: n.add((0, m.ZcS)((0, m.fVC)(0.5), (0, m.fVC)(0.5))),
                  width: this.width,
                  height: this.height,
                }),
                a = (0, m.wHr)(t, r),
                l = this.uniforms.lastPointerPosition,
                o = this.uniforms.pointerPosition,
                u = (0, m.fVC)(this.width).div(this.height),
                d = (0, m.ZcS)(r.x.mul(u), r.y),
                c = (0, m.ZcS)(o.x.mul(u), o.y),
                h = (0, m.ZcS)(l.x.mul(u), l.y),
                g = (0, m.PMw)(this.brushSize, (0, m.IoC)(d, c)).oneMinus(),
                x = C({ p: d, a: h, b: c }),
                p = c.sub(h),
                f = (0, m.Ihs)((0, m.Omf)(d.sub(h), p).div((0, m.Omf)(p, p))),
                v = (0, m.PMw)(this.brushSize, x).oneMinus(),
                y = (0, m.lnd)(0).toVar(),
                w = (0, m.fVC)(this.uniforms.lastIsPointerEnter).sub(
                  this.uniforms.isPointerEnter,
                ),
                j = v.mul(
                  f
                    .mul((0, m.fVC)(this.fadingRate).oneMinus())
                    .add(this.fadingRate),
                ),
                b = a.mul(this.fadingRate);
              (0, m.If)(
                w.lessThan(-0.1),
                (0, m.Fn)(() => {
                  y.assign(
                    (0, m.jhA)(
                      b,
                      (0, m.lnd)(this.uniforms.isPointerEnter, 0, 0, 1),
                      g,
                    ),
                  );
                }),
              ).Else(
                (0, m.Fn)(() => {
                  y.assign(
                    (0, m.jhA)(
                      b,
                      (0, m.lnd)(this.uniforms.isPointerEnter, 0, 0, 1),
                      j,
                    ),
                  );
                }),
              );
              let T = (0, m.fVC)(this.uniforms.diff),
                V = (0, m.fVC)(this.uniforms.isPointerEnter).mul(
                  (0, m.PMw)(0.001, T),
                ),
                P = (0, m.jhA)(b, y, V);
              (0, m.TJz)(s, n, (0, m.lnd)((0, m.eR5)(P), 1));
            })),
            (this.updatePointer = (e) => {
              this.uniforms.pointerPosition.value.copy(e);
              let t = e.clone().sub(this.uniforms.lastPointerPosition.value);
              ((this.uniforms.diff.value = t.length()),
                console.log(this.uniforms.diff.value));
            }),
            (this.setIsPointerEnter = (e) => {
              this.uniforms.isPointerEnter.value = +!!e;
            }),
            (this.update = () => {
              (this.computeToPing &&
                this.computeToPong &&
                (this.renderer.computeAsync(
                  this.phase ? this.computeToPong : this.computeToPing,
                ),
                (this.uniforms.resultTexture = this.phase
                  ? this.pongTexture
                  : this.pingTexture),
                (this.phase = !this.phase)),
                (this.uniforms.lastPointerPosition.value =
                  this.uniforms.pointerPosition.value.clone()),
                (this.uniforms.lastIsPointerEnter.value = 1));
            }),
            (this.width = t),
            (this.height = s),
            (this.renderer = e),
            (this.pingTexture = new h.StorageTexture(t, s)),
            (this.pongTexture = new h.StorageTexture(t, s)),
            (this.pingTexture.type = g.ix0),
            (this.pongTexture.type = g.ix0),
            (this.computeToPong = this.computePingPongTSL({
              readTex: this.pingTexture,
              writeTex: this.pongTexture,
              index: m.cGD,
            }).compute(t * s)),
            (this.computeToPing = this.computePingPongTSL({
              readTex: this.pongTexture,
              writeTex: this.pingTexture,
              index: m.cGD,
            }).compute(t * s)));
          let i = (0, m.Fn)((e) => {
            let { writeTex: s, index: i } = e,
              n = z({ index: i, width: t });
            (0, m.TJz)(s, n, (0, m.lnd)(0, 0, 0, 1));
          })({ writeTex: this.pingTexture, index: m.cGD }).compute(t * s);
          e.computeAsync(i);
        }
      }
      function k(e) {
        let { nodes: t, materials: s } = (0, n.p)("/stem.glb");
        return (
          (0, c.useMemo)(
            () =>
              new h.MeshStandardNodeMaterial({
                roughness: 0.5,
                color: "#ffffff",
              }),
            [],
          ),
          (0, i.jsx)("group", {
            ...e,
            dispose: null,
            name: "stem",
            children: (0, i.jsx)("group", {
              scale: 0.01,
              children: (0, i.jsx)("mesh", {
                castShadow: !0,
                receiveShadow: !0,
                geometry: t.Stem2_Material005_0.geometry,
                material: t.Stem2_Material005_0.material,
                position: [-3.315, 389.017, -1.631],
                rotation: [-1.396, 0.041, -0.126],
                scale: [11.36, 11.36, 6.635],
              }),
            }),
          })
        );
      }
      P.os.registerPlugin(N.E);
      let M = () => {
          let { scene: e, camera: t, gl: s } = (0, u.A)(),
            { isLoading: i, setIsLoading: a } = T(),
            { nodes: l, materials: o } = (0, n.p)("/pp.glb"),
            d = o["Iris and blye.002"],
            { active: v } = (0, r.p)();
          (0, c.useEffect)(() => {
            v || a(!1);
          }, [v]);
          let {
            material: w,
            instancedMesh: j,
            uniforms: b,
          } = (0, c.useMemo)(() => {
            let e = d.map;
            e && (e.colorSpace = g.er$);
            let t = (0, m.PiW)((0, m.fVC)(0)),
              s = (0, m.PiW)((0, m.fVC)(0)),
              i = (0, m.Fn)((e) => {
                let [t] = e,
                  i = (0, m.fVC)(m.cGD).div(64).mul(6),
                  n = (0, m.ziu)(m.kBw.add(i), 6).div(6),
                  r = (0, m.Ew7)(s, 0, 1, 1, -2),
                  a = (0, m.fVC)(
                    (0, m.Ew7)(
                      n,
                      0,
                      1,
                      (0, m.lKK)(2, 3.14159),
                      (0, m.lKK)(r, 3.14159),
                    ),
                  ).toVar(),
                  l = (0, m.Ew7)(
                    s,
                    0,
                    1,
                    (0, m.eR5)(0.8, 0.01, 0.3),
                    (0, m.eR5)(0.8, 0.7, 0.4),
                  );
                return (
                  t.assign(x(t, (0, m.eR5)(l)).xyz),
                  t.assign(
                    f(
                      t,
                      a,
                      (0, m.Whr)(2),
                      (0, m.eR5)((0, m.Whr)(0), 0, 0),
                      (0, m.eR5)(0, 0, (0, m.Whr)(0)),
                    ),
                  ),
                  t.assign(x(t, (0, m.eR5)((0, m.Ew7)(n, 0, 0.5, 0, 1))).xyz),
                  t.assign(
                    x(t, (0, m.eR5)((0, m.Ew7)(n, 0.5, 1, 0.8, 0.2))).xyz,
                  ),
                  t.assign(
                    p(
                      t,
                      (0, m.eR5)(0, 1, 0),
                      (0, m.lKK)((0, m.lKK)(3.14159, -0.3), s),
                    ).xyz,
                  ),
                  t
                );
              }),
              n = new h.MeshStandardNodeMaterial({
                side: g.$EB,
                normalMap: d.normalMap,
                roughnessMap: d.roughnessMap,
                metalnessMap: d.metalnessMap,
                map: d.map,
                emissiveMap: d.emissiveMap,
                colorNode: (0, m.Fn)(() => {
                  let e = (0, m.yWT)("#000"),
                    t = (0, m.fVC)(
                      (0, m.qE8)((0, m.uv)().x.mul((0, m.Bw9)(m.pot))),
                    );
                  return (
                    (0, m.eR5)((0, m.jhA)(e, (0, m.eR5)(1), (0, m.qE8)(t))),
                    (0, m.If)(m.kMH, () => {
                      m.j87.assign((0, m.zed)(m.j87));
                    }).Else(() => {
                      m.j87.assign(m.j87);
                    }),
                    (0, m.jhA)(0, (0, m.wHr)(n.map), (0, m.qE8)(0, 1, s.mul(2)))
                  );
                })(),
                positionNode: (0, m.Fn)(() => {
                  let e = i(m.pot).toVar("pos"),
                    t = (0, m.ZcS)(0.01, 0).toVar("shift"),
                    s = (0, m.eR5)(i(m.pot.add(t.yyx))).toVar("pos2"),
                    n = (0, m.eR5)(i(m.pot.add(t.xyy))).toVar("pos3"),
                    r = (0, m.S86)(
                      (0, m.$An)((0, m.S86)(s.sub(e)), (0, m.S86)(n.sub(e))),
                    ).toVar("objectNormal");
                  return (m.xgo.assign(r), e);
                })(),
              }),
              r = new g.ZLX(l.Circle003.geometry, n, 128);
            return {
              material: n,
              instancedMesh: r,
              uniforms: { uProgress: t, uStartProgess: s },
            };
          }, []);
          return (
            (0, V.L)(() => {
              if (i) return;
              let s = e.getObjectByName("group");
              P.os
                .timeline()
                .to(s.rotation, { y: -Math.PI / 2, duration: 1.5 })
                .to(b.uStartProgess, { value: 1, delay: 0.5, duration: 5.5 }, 0)
                .from(t.position, { z: 0, duration: 2 }, 0)
                .to("[data-layout]", { opacity: 1, duration: 2 }, 0);
            }, [i, b.uProgress]),
            y(j, j),
            (0, c.useMemo)(() => {
              let e = new g.B69();
              Array.from({ length: 128 }).forEach((t, s) => {
                (e.rotation.set(0, g.cj9.degToRad(140 * s), 0),
                  e.updateMatrix(),
                  null == j || j.setMatrixAt(s, e.matrix));
              });
            }, [j]),
            (0, u.C)((e) => {
              e.camera.position.lerp(
                { x: -(0.3 * e.pointer.x), y: 2, z: 2 },
                0.05,
              );
            }),
            null
          );
        },
        W = () => {
          let e = (0, a.j)(),
            { gl: t, size: s } = (0, u.A)(),
            i = (0, c.useMemo)(
              () => new S(t, window.innerWidth, window.innerHeight),
              [t],
            );
          (0, c.useEffect)(() => {
            i.resize(s.width, s.height);
          }, [s.width, s.height]);
          let n = (0, c.useMemo)(
            () =>
              new w.F(
                new h.MeshBasicNodeMaterial({
                  transparent: !0,
                  colorNode: (0, m.Fn)(() => {
                    let t = (0, m.wHr)(i.resultTexture);
                    return (0, m.wHr)(
                      e.texture,
                      (0, m.ZcS)(
                        (0, m.uv)().x.add(t.x.mul(0.05)),
                        (0, m.zbg)((0, m.uv)().y),
                      ),
                    );
                  })(),
                }),
              ),
            [i.resultTexture],
          );
          return (
            (0, u.C)((t) => {
              let { camera: s, gl: r, scene: a, pointer: l } = t,
                o = new g.I9Y(0.5 * l.x + 0.5, 0.5 * l.y + 0.5);
              (i.updatePointer(o),
                i.update(),
                i.setIsPointerEnter(!0),
                r.setRenderTarget(e),
                r.render(a, s),
                r.setRenderTarget(null),
                n.render(r));
            }, 1),
            null
          );
        };
      function E() {
        return (0, i.jsxs)("div", {
          className:
            "relative h-screen select-none  overflow-hidden from-black to-[#8386ff] bg-gradient-to-b",
          children: [
            (0, i.jsx)(l.a, {}),
            (0, i.jsx)(d.Z, {
              className: "absolute inset-0 top-0 left-0 h-screen",
              camera: { position: [0, 2, 2], zoom: 2.5 },
              children: (0, i.jsxs)(c.Suspense, {
                fallback: null,
                children: [
                  (0, i.jsx)(W, {}),
                  (0, i.jsx)(o.OH, {
                    environmentRotation: [0, -Math.PI / 1.5, 0],
                    blur: 2,
                    environmentIntensity: 0.5,
                    files: "/dawn.hdr",
                  }),
                  (0, i.jsx)(b.w, {}),
                  (0, i.jsxs)("group", {
                    name: "group",
                    children: [
                      (0, i.jsx)(k, {
                        position: [-0, -3.3, -0.03],
                        scale: [0.8, 0.8, 0.8],
                      }),
                      (0, i.jsx)(M, {}),
                    ],
                  }),
                ],
              }),
            }),
            (0, i.jsx)(j.P, { author: "DeadRabbit" }),
          ],
        });
      }
    },
    22103: (e, t, s) => {
      "use strict";
      s.d(t, { w: () => o });
      var i = s(54190),
        n = s(90567),
        r = s(2910),
        a = s(36526),
        l = s(51759);
      let o = (e) => {
        let {
            x: t = 20,
            y: s = 20,
            z: o = 20,
            width: u = 20,
            height: d = 20,
            flashTime: c = 1,
            particleSize: m = 0.01,
          } = e,
          { gl: h } = (0, n.A)(),
          g = u * d,
          { computeUpdate: x, particleMaterial: p } = (0, r.useMemo)(() => {
            let e = (0, a.$_z)(g, "vec3"),
              i = (0, a.$_z)(g, "vec3"),
              n = (0, a.$_z)(g, "vec3"),
              r = (0, a.$_z)(g, "float"),
              u = (0, a.Fn)(() => {
                let i = e.element(a.cGD),
                  l = n.element(a.cGD);
                r.element(a.cGD).assign((0, a.tWU)(a.cGD));
                let u = (0, a.tWU)(a.cGD),
                  d = (0, a.tWU)(a.cGD.add(2)),
                  c = (0, a.tWU)(a.cGD.add(3));
                ((i.x = u.mul(t).add(-t / 2)),
                  (i.y = d.mul(s).add(-s / 2)),
                  (i.z = c.mul(o).add(-o / 2)),
                  l.assign((0, a.eR5)(u, d, c)));
              })().compute(g);
            h.computeAsync(u);
            let d = (0, a.Fn)(() => {
                let t = e.element(a.cGD),
                  s = i.element(a.cGD);
                (s.addAssign((0, a.eR5)(0, -0.0098, 0)),
                  t.addAssign(s),
                  (0, a.If)(t.y.lessThan(0), () => {
                    ((t.y = (0, a.fVC)(0)), (s.y = s.y.negate().mul(1)));
                  }));
              }),
              m = new l.SpriteNodeMaterial();
            return (
              (m.colorNode = (0, a.Fn)(() =>
                (0, a.r$6)(a.kBw.mul(r.element(a.cGD)).mul(c)),
              )()),
              (m.positionNode = e.element(a.cGD)),
              { computeUpdate: d, particleMaterial: m }
            );
          }, [h]);
        return (0, i.jsx)("mesh", {
          count: g,
          material: p,
          children: (0, i.jsx)("circleGeometry", { args: [m] }),
        });
      };
    },
    39137: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => l });
      var i = s(54190),
        n = s(90567),
        r = s(67857),
        a = s(51759);
      (0, n.e)(a);
      let l = (e) => {
        let { children: t, ...s } = e;
        return (0, i.jsx)(r.Hl, {
          ...s,
          flat: !0,
          gl: async (e) => {
            let t = new a.WebGPURenderer(e);
            return (await t.init(), t);
          },
          children: t,
        });
      };
    },
    51919: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 11402));
    },
    76156: (e, t, s) => {
      "use strict";
      s.d(t, { i: () => v, P: () => y });
      var i = s(54190),
        n = s(19369),
        r = s(4347),
        a = s.n(r),
        l = s(2910),
        o = s(42342),
        u = s(10391),
        d = s(36905),
        c = s(34433),
        m = s(50337);
      function h() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, m.QP)((0, c.$)(t));
      }
      function g(e) {
        let { className: t, children: s, ...n } = e;
        return (0, i.jsxs)(d.bL, {
          "data-slot": "scroll-area",
          className: h("relative", t),
          ...n,
          children: [
            (0, i.jsx)(d.LM, {
              "data-slot": "scroll-area-viewport",
              className:
                "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
              children: s,
            }),
            (0, i.jsx)(x, {}),
            (0, i.jsx)(d.OK, {}),
          ],
        });
      }
      function x(e) {
        let { className: t, orientation: s = "vertical", ...n } = e;
        return (0, i.jsx)(d.VM, {
          "data-slot": "scroll-area-scrollbar",
          orientation: s,
          className: h(
            "flex touch-none p-px transition-colors select-none",
            "vertical" === s && "h-full w-2.5 border-l border-l-transparent",
            "horizontal" === s &&
              "h-2.5 flex-col border-t border-t-transparent",
            t,
          ),
          ...n,
          children: (0, i.jsx)(d.lr, {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full",
          }),
        });
      }
      var p = s(79216);
      new Date().getFullYear();
      let f = [
          {
            title: "Bloom",
            image: "/work/bloom.png",
            link: "/bloom",
            Tags: ["Three.js", "TSL", "WebGPU"],
          },
          {
            title: "Mimic",
            image: "/work/mimic.png",
            link: "/mimic",
            Tags: ["Three.js", "TSL", "WebGPU"],
          },
          {
            title: "The Moon",
            image: "/work/the-moon.jpeg",
            link: "/the-moon",
            Tags: ["Three.js", "Vibe Coding"],
          },
          {
            title: "Momo",
            image: "/work/mono.jpeg",
            link: "/momo",
            Tags: ["Three.js", "TSL", "SDF"],
          },
          {
            title: "Baby Track",
            image: "/work/baby-track.jpeg",
            link: "https://fx.collax.app/baby-track",
            Tags: ["Canvas", "Video"],
          },
          {
            title: "Demo 52",
            image: "/work/demo52.png",
            link: "/new-spring-collection",
            Tags: ["Three.js", "TSL"],
          },
          {
            title: "Gaussian Splatting",
            image: "/work/gaussian-splatting.png",
            link: "/gs-transition",
            Tags: ["Three.js", "WebGL"],
          },
        ],
        v = () =>
          (0, i.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className:
              "lucide lucide-arrow-up-right-icon lucide-arrow-up-right",
            children: [
              (0, i.jsx)("path", { d: "M7 7h10v10" }),
              (0, i.jsx)("path", { d: "M7 17 17 7" }),
            ],
          }),
        y = (e) => {
          let {
              className: t,
              background: s,
              author: r,
              itemClassname: d,
              children: c,
            } = e,
            m = (0, l.useRef)(null),
            { contextSafe: h } = (0, n.L)(() => {
              m.current = o.os
                .timeline({ paused: !0 })
                .set("[data-container]", { opacity: 1 })
                .to("[data-container]", { y: "0vh" })
                .to("[data-mask]", {
                  duration: 0.5,
                  scaleX: 0,
                  ease: "power2.inOut",
                  stagger: 0.05,
                })
                .to("[data-layout]", { background: "rgba(0,0,0,0.3)" }, 0);
            }, []);
          return (0, i.jsxs)("div", {
            "data-layout": !0,
            className: (0, p.cn)(
              "absolute opacity-0 text-white inset-0 pointer-events-none overflow-hidden h-dvh w-full p-5 text-xs md:p-10 md:text-sm",
              t,
            ),
            children: [
              (0, i.jsx)("div", {
                className: (0, p.cn)(
                  "z-90 opacity-0 text-black  bg-white overflow-hidden absolute top-0 left-0 h-dvh  w-full pointer-events-auto translate-y-full",
                ),
                "data-container": !0,
                children: (0, i.jsx)(g, {
                  className: "h-full",
                  children: (0, i.jsx)("div", {
                    className: "md:p-10 p-5",
                    children: (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsxs)("div", {
                          className: "uppercase",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "flex justify-between ",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "text-4xl",
                                  children: "Showcase",
                                }),
                                (0, i.jsx)("div", {
                                  className: "cursor-pointer hover:underline",
                                  onClick: h(() => {
                                    var e;
                                    null == (e = m.current) ||
                                      e.reversed(!m.current.reversed());
                                  }),
                                  children: "CLOSE",
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: "opacity-50 mt-2",
                              children: "Where technology meets aesthetics",
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "grid  md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10",
                          children: f.map((e) => {
                            var t;
                            return (0, i.jsxs)(
                              "div",
                              {
                                className: "group",
                                children: [
                                  (0, i.jsxs)(a(), {
                                    href: e.link,
                                    target: "_blank",
                                    "data-image": !0,
                                    className:
                                      "relative rounded-sm overflow-hidden w-full h-[0] pb-[75%] block",
                                    children: [
                                      (0, i.jsx)(u.default, {
                                        src: e.image,
                                        alt: e.title,
                                        fill: !0,
                                        className:
                                          "absolute  group-hover:scale-[1.02] ease-in transition-transform inset-0 bg-center bg-cover",
                                      }),
                                      (0, i.jsx)("div", {
                                        className: (0, p.cn)(
                                          "absolute inset-0  pointer-events-none",
                                          d || "bg-neutral-50",
                                        ),
                                        "data-mask": !0,
                                        style: {
                                          transformOrigin: "right center",
                                          transform: "scaleX(1)",
                                        },
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "mt-3 flex justify-between items-center text-sm",
                                    children: [
                                      (0, i.jsx)("div", {
                                        className: "font-medium text-gray-900",
                                        children: e.title,
                                      }),
                                      (0, i.jsx)("div", {
                                        className: "flex flex-wrap gap-1 ",
                                        children:
                                          null == (t = e.Tags)
                                            ? void 0
                                            : t.map((e, t) =>
                                                (0, i.jsx)(
                                                  "span",
                                                  {
                                                    className:
                                                      "px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full",
                                                    children: e,
                                                  },
                                                  t,
                                                ),
                                              ),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.title,
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "grid h-full w-full grid-cols-6 grid-rows-6 uppercase",
                children: [
                  (0, i.jsx)("div", {
                    className: "h-10 w-full",
                    style: { gridColumn: "1/8" },
                    children: (0, i.jsxs)("div", {
                      className: "grid grid-cols-3",
                      children: [
                        (0, i.jsx)(a(), {
                          className: " hover:underline  pointer-events-auto",
                          href: "/",
                          children: "( Home )",
                        }),
                        (0, i.jsx)("div", {
                          className: "text-center",
                          children: "( About )",
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "text-right cursor-pointer  pointer-events-auto hover:underline",
                          onClick: h(() => {
                            var e;
                            null == (e = m.current) || e.play();
                          }),
                          children: "( Projects )",
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "hidden flex-col justify-end sm:flex",
                    style: { gridColumn: "2/3", gridRow: "7/8" },
                    children: [
                      (0, i.jsx)("div", { children: "Created By" }),
                      (0, i.jsx)("div", { children: r }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex flex-col justify-end sm:hidden",
                    style: { gridColumn: "3/5", gridRow: "7/8" },
                    children: [
                      (0, i.jsx)("div", { children: "Created By" }),
                      (0, i.jsx)("div", { children: r }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex flex-col justify-end",
                    style: { gridRow: "7/8", gridColumn: "1/3" },
                    children: [
                      (0, i.jsx)("div", {
                        className: "flex items-center",
                        children: (0, i.jsx)("span", { children: "LINKS" }),
                      }),
                      (0, i.jsxs)(a(), {
                        href: "https://x.com/deadrabbbbit",
                        target: "_blank",
                        className: "flex items-center w-full",
                        children: [
                          (0, i.jsx)("div", {
                            className: " hover:underline  pointer-events-auto",
                            children: "X / Twitter",
                          }),
                          (0, i.jsx)(v, {}),
                        ],
                      }),
                      (0, i.jsxs)(a(), {
                        href: "https://www.behance.net/d3adrabbit",
                        target: "_blank",
                        className: "flex items-center",
                        children: [
                          (0, i.jsx)("div", {
                            className: " hover:underline  pointer-events-auto",
                            children: "Behance",
                          }),
                          (0, i.jsx)(v, {}),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "flex flex-col justify-end",
                    style: { gridRow: "7/8", gridColumn: "7/8" },
                    children: (0, i.jsx)("div", {
                      className: "flex items-center space-x-2",
                      children: (0, i.jsx)("div", {
                        className: "",
                        children: "\xa9 2025",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    79216: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => r });
      var i = s(34433),
        n = s(50337);
      function r() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, n.QP)((0, i.A)(t));
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(
      0,
      [
        3852, 4789, 8255, 8800, 7223, 7857, 2342, 6526, 5647, 2529, 1787, 9475,
        2864, 4871, 3428, 2053, 7358,
      ],
      () => t(51919),
    ),
      (_N_E = e.O()));
  },
]);
