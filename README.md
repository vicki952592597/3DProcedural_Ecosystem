# 🌿 Procedural 3D Ecosystem

> **全维度数字资产基建 (Procedural Infrastructure)**
>
> 史诗级零外部资产依赖的程序化 3D 生态核心库，基于 Three.js (WebGL2)

## ✨ 核心特性

- **100% Zero-Asset** — 所有几何体、材质、纹理、动画完全由代码生成，零贴图/模型文件
- **确定性可复现** — 基于 Mulberry32 PRNG，相同 seed 参数永远生成相同结果
- **GPU 硬件加速** — 所有动画在 Vertex/Fragment Shader 中执行，零 CPU 顶点遍历
- **OOP 架构** — 抽象基类 `ProceduralEntity`，强制模块化解耦
- **Tree-shaking 友好** — 按需引入 `import { BionicFlower } from './flora'`
- **统一工厂模式** — `ProceduralFactory` 注册-创建解耦调度
- **自动资源回收** — `GarbageCollector` 防止 WebGL 上下文泄漏

## 📦 四大命名空间

### 🌸 Flora (植物生态系)
| 模块 | 描述 |
|------|------|
| `LSystem` | L-System 林氏系统分形算法 (3D Turtle Graphics) |
| `PhyllotaxisEngine` | 斐波那契极坐标系 (黄金角叶序排列) |
| `BionicFlower` | 程序化花卉 (Bézier 曲面花瓣 + SSS 次表面散射) |

### 🦋 Fauna (仿生动力系)
| 模块 | 描述 |
|------|------|
| `VertexKinematics` | 顶点流体动力学 (GPU 翅膀扇动/鱼体波动) |
| `BoidsFlocking` | Reynolds Boids 群集模拟 (CPU + GPGPU DataTexture) |
| `BionicButterfly` | 程序化蝴蝶 (薄膜干涉 + 各向异性高光 + Boids 群体) |

### 🔮 Abstract (高阶数学场)
| 模块 | 描述 |
|------|------|
| `SimplexNoise4D` | 4D Simplex Noise (GLSL) |
| `SDFPrimitives` | SDF 有向距离场原语 + Raymarching 工具集 |
| `MandelbulbFractal` | Mandelbulb 3D 分形 (实时 Raymarching) |

### 🌌 Atmospheric (环境体积系)
| 模块 | 描述 |
|------|------|
| `FBMNoise` | 分数布朗运动 (标准/山脊/湍流/Domain Warping) |
| `VolumetricEngine` | 体积渲染引擎 (Beer-Lambert + Henyey-Greenstein) |
| `AuroraBorealis` | 程序化极光 (体积 Raymarching + FBM 帷幕) |

## 🚀 快速开始

```bash
npm install
npm run dev
```

### 按需引入

```js
// 只引入花卉
import { BionicFlower } from './src/flora/index.js';

const flower = new BionicFlower({
  seed: 42,
  petalCount: 8,
  whorls: 3,
  color: [1.0, 0.4, 0.6],
  bloomPhase: 0.8
}).build();

flower.addTo(scene);
```

### 工厂模式

```js
import { ProceduralFactory } from './src/core/index.js';
import './src/flora/BionicFlower.js'; // 触发自动注册

const flower = ProceduralFactory.build('BionicFlower', { seed: 123 });
flower.addTo(scene).setPosition(0, 1, 0).setScale(2);
```

### Boids 蝴蝶群

```js
import { BionicButterfly } from './src/fauna/index.js';

const swarm = new BionicButterfly({
  flockCount: 100,
  wingSpan: 0.5,
  flapFrequency: 10.0
}).build();

swarm.addTo(scene);

// 每帧更新
function animate() {
  swarm.updateFlock(deltaTime);
}
```

## 🏗️ 架构概览

```
ProceduralEntity (抽象基类)
├── _buildGeometry()  → BufferGeometry
├── _buildMaterial()  → ProceduralMaterial (ShaderMaterial)
├── _buildMesh()      → Mesh / InstancedMesh
├── build()           → 完整构建管线
├── addTo(scene)      → 链式添加到场景
├── setPosition/setRotation/setScale → 链式变换
├── serialize()       → 参数序列化
└── dispose()         → 自动 GPU 资源回收
```

## 📐 光学模型

| 模型 | 应用 |
|------|------|
| SSS (Subsurface Scattering) | 花瓣透光率模拟 |
| Thin-film Iridescence | 蝴蝶翅膀结构色/偏振光 |
| Anisotropic Specular (Ward) | 蝴蝶翅膀各向异性高光 |
| Fresnel-Schlick | 边缘反射增强 |
| Beer-Lambert | 体积衰减 |
| Henyey-Greenstein | 体积散射相函数 |

## 📄 License

MIT
