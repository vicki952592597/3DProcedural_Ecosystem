import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { UniformsManager, GarbageCollector, BionicButterfly, MandelbulbFractal, AuroraBorealis, TroisFlower, Dahlia, Tulip, Bloom, VantaHalo, VantaFog, VantaCells, VantaClouds, VantaRipple, VantaBirds, VantaNet, VantaWaves, VantaDots, VantaRings, VantaGlobe, VantaClouds2, VantaTopology, VantaTrunk } from './src/index.js';

// ── 场景配置元数据 ──
const SC = {
  butterfly: {
    title:'BionicButterfly', desc:'薄膜干涉 Thin-film Iridescence 结构色 + 各向异性高光 + GPU Vertex Kinematics',
    tags:[['Iridescence','green'],['Anisotropic','purple'],['Kinematics','pink']],
    cam:[0,2,4], look:[0,1.5,0],
    defs:{ seed:123,wingSpan:2,flapFrequency:6,flapAmplitude:0.7,baseColor:[0.05,0.02,0.15],filmThickness:380,ior:1.5,iridescenceIntensity:0.9 },
    sl:[{s:'Wing'},{k:'wingSpan',l:'翅展',mn:0.5,mx:4,st:0.05},{s:'Animation'},{k:'flapFrequency',l:'频率',mn:1,mx:20,st:0.1},{k:'flapAmplitude',l:'振幅',mn:0.1,mx:1.5,st:0.01},{s:'Optics'},{k:'filmThickness',l:'薄膜nm',mn:200,mx:600,st:1},{k:'ior',l:'折射率',mn:1,mx:2.5,st:0.01},{k:'iridescenceIntensity',l:'干涉色',mn:0,mx:1,st:0.01},{k:'seed',l:'种子',mn:1,mx:9999,st:1}],
    pal:[{n:'紫夜蝶',c:[0.05,0.02,0.15]},{n:'蓝闪蝶',c:[0.02,0.05,0.2]},{n:'翠凤蝶',c:[0.02,0.1,0.05]},{n:'金斑蝶',c:[0.15,0.08,0.02]}]
  },
  flock: {
    title:'Boids Swarm', desc:'Reynolds Boids 集群 (分离/对齐/聚合) + InstancedMesh + GPU 相位差振翅',
    tags:[['Boids','green'],['Instanced','purple'],['Phase Shift','pink']],
    cam:[0,8,20], look:[0,5,0],
    defs:{ seed:77,wingSpan:0.6,flapFrequency:10,flapAmplitude:0.6,baseColor:[0.08,0.03,0.2],filmThickness:350,iridescenceIntensity:0.85,flockCount:80 },
    sl:[{s:'Flock'},{k:'flockCount',l:'数量',mn:10,mx:200,st:1},{s:'Individual'},{k:'wingSpan',l:'翅展',mn:0.2,mx:1.5,st:0.05},{k:'flapFrequency',l:'频率',mn:3,mx:20,st:0.1},{k:'flapAmplitude',l:'振幅',mn:0.1,mx:1.2,st:0.01},{s:'Optics'},{k:'filmThickness',l:'薄膜nm',mn:200,mx:600,st:1},{k:'iridescenceIntensity',l:'干涉色',mn:0,mx:1,st:0.01},{k:'seed',l:'种子',mn:1,mx:9999,st:1}],
    pal:[{n:'紫群',c:[0.08,0.03,0.2]},{n:'蓝群',c:[0.03,0.05,0.18]},{n:'金群',c:[0.12,0.08,0.02]}]
  },
  mandelbulb: {
    title:'Mandelbulb', desc:'3D 分形 · Raymarching SDF + 4D Simplex Noise + 轨道陷阱着色',
    tags:[['Raymarching','green'],['SDF','purple'],['4D Noise','pink']],
    cam:null, look:null,
    defs:{ power:8,iterations:12,bailout:2,scale:2,glowIntensity:0.5,animate:true,colorA:[0.1,0.2,0.6],colorB:[0.9,0.3,0.1] },
    sl:[{s:'Fractal'},{k:'power',l:'幂次',mn:2,mx:16,st:0.1},{k:'iterations',l:'迭代',mn:4,mx:20,st:1},{k:'bailout',l:'逃逸',mn:1,mx:4,st:0.1},{k:'scale',l:'缩放',mn:0.5,mx:4,st:0.05},{s:'Visual'},{k:'glowIntensity',l:'辉光',mn:0,mx:2,st:0.01}],
    pal:[{n:'深海',cA:[0.1,0.2,0.6],cB:[0.9,0.3,0.1]},{n:'岩浆',cA:[0.5,0.05,0],cB:[1,0.8,0.1]},{n:'极光',cA:[0,0.3,0.2],cB:[0.2,0.8,0.6]},{n:'紫晶',cA:[0.2,0.05,0.3],cB:[0.8,0.3,0.9]}]
  },
  'trois-flower': {
    title:'TroisFlower', desc:'LD 原版 TroisJS 花效果 · ExtrudeGeometry + InstancedMesh + onBeforeCompile Shader 卷曲/脉络/碗形变形',
    tags:[['InstancedMesh','green'],['Physical Material','purple'],['Shader Vein','pink']],
    cam:[0,-4,5], look:[0,0,0],
    defs:{ seed:42, preset:'rose', rings:14, petals:7, size:0.75, dx:0.40, dy:0.80, maxRadius:0.1, maxScale:2.2, startRx:2.42, zOffsetCoef:0.50, bowlDepth:0.35, taperPow:0.75, baseCurl:1.5, curlVar:0.15, baseTwist:0.4, twistVar:0.0, metalness:0.0, roughness:0.43, transmission:0.17, sheen:0.47, clearcoat:0.1, veinStr:0.6, edgeLight:0.2, hueShift:0 },
    sl:[
      {s:'🌹 Preset 花型'},{k:'rings',l:'花环层数',mn:5,mx:60,st:1},{k:'petals',l:'每层花瓣',mn:3,mx:16,st:1},
      {s:'🍃 Petal 花瓣'},{k:'size',l:'花瓣长度',mn:0.3,mx:2.5,st:0.05},{k:'dx',l:'横向弧度',mn:0.05,mx:2,st:0.05},{k:'dy',l:'纵向弧度',mn:0,mx:2,st:0.05},{k:'bowlDepth',l:'碗形深度',mn:0,mx:2,st:0.05},{k:'taperPow',l:'尖端锥度',mn:0.3,mx:2,st:0.05},
      {s:'🌺 Flower 形态'},{k:'maxRadius',l:'散开半径',mn:0,mx:5,st:0.1},{k:'maxScale',l:'最大缩放',mn:0.5,mx:5,st:0.1},{k:'startRx',l:'展开角度',mn:0.1,mx:3.14,st:0.01},{k:'zOffsetCoef',l:'螺旋扭转',mn:0,mx:10,st:0.05},
      {s:'🌀 Curl 卷曲'},{k:'baseCurl',l:'基础卷曲',mn:0,mx:4,st:0.1},{k:'curlVar',l:'卷曲随机',mn:0,mx:2,st:0.05},{k:'baseTwist',l:'基础扭转',mn:0,mx:3,st:0.1},{k:'twistVar',l:'扭转随机',mn:0,mx:2,st:0.05},
      {s:'✨ Material 材质'},{k:'metalness',l:'金属度',mn:0,mx:1,st:0.01},{k:'roughness',l:'粗糙度',mn:0,mx:1,st:0.01},{k:'transmission',l:'透光度',mn:0,mx:1,st:0.01},{k:'sheen',l:'丝绒光泽',mn:0,mx:1,st:0.01},{k:'clearcoat',l:'清漆',mn:0,mx:1,st:0.01},
      {s:'🖌 Shader 脉络'},{k:'veinStr',l:'脉络强度',mn:0,mx:2,st:0.05},{k:'edgeLight',l:'边缘透光',mn:0,mx:1,st:0.05},{k:'hueShift',l:'色相偏移',mn:0,mx:1,st:0.005},
      {k:'seed',l:'种子',mn:1,mx:9999,st:1}
    ],
    pal:[{n:'🌹 玫瑰',c:[1,0,0]},{n:'🪷 荷花',c:[1,0.41,0.71]},{n:'🌼 菊花',c:[1,0.84,0]},{n:'🌸 樱花',c:[1,0.72,0.77]},{n:'🌷 郁金香',c:[1,0.2,0]},{n:'💮 百合',c:[1,0.8,0]}]
  },
  dahlia: {
    title:'Dahlia 大丽花', desc:'程序化多层花瓣 InstancedMesh · 7 层 74 瓣 + wrap lighting + SSS + 星空背景',
    tags:[['InstancedMesh','green'],['SSS','purple'],['Bézier Petal','pink']],
    cam:null, look:null,
    defs:{ petalScale:1, petalLength:1, petalWidth:1, openAngleScale:1, bloomWaveAmp:0.14, cycleDuration:5, breatheAmp:0.004, energyWaveSpeed:0.4, energyWaveStrength:0.22, fresnelStrength:0.38, coreGlow:0.55, specularStr:0.14, sssStrength:0.25, autoRotateSpeed:0.015 },
    sl:[
      {s:'🌸 花瓣形态'},{k:'petalScale',l:'整体缩放',mn:0.5,mx:2,st:0.05},{k:'openAngleScale',l:'展开角度',mn:0.5,mx:2,st:0.05},
      {s:'💓 动画'},{k:'bloomWaveAmp',l:'波浪幅度',mn:0,mx:0.4,st:0.01},{k:'cycleDuration',l:'周期(秒)',mn:2,mx:12,st:0.5},{k:'breatheAmp',l:'呼吸幅度',mn:0,mx:0.02,st:0.001},
      {s:'✨ 光效'},{k:'energyWaveSpeed',l:'能量波速',mn:0.1,mx:1.5,st:0.05},{k:'energyWaveStrength',l:'能量波强度',mn:0,mx:0.5,st:0.01},{k:'fresnelStrength',l:'菲涅尔',mn:0,mx:1,st:0.02},{k:'coreGlow',l:'花心辉光',mn:0,mx:1.5,st:0.05},{k:'specularStr',l:'高光',mn:0,mx:0.5,st:0.01},{k:'sssStrength',l:'SSS 强度',mn:0,mx:1,st:0.02},
      {s:'📷 交互'},{k:'autoRotateSpeed',l:'自转速度',mn:0,mx:0.1,st:0.005}
    ],
    pal:[]
  },
  bloom: {
    title:'Bloom 绽放', desc:'Deadrabbit 花朵绽放 1:1 复刻 · 128 花瓣 InstancedMesh + HDR 环境光 + 鼠标交互扭曲',
    tags:[['InstancedMesh','green'],['HDR Env','purple'],['Distortion','pink']],
    cam:null, look:null,
    defs:{
      envIntensity:0.5, envRotation:-2.094, cameraZoom:2.5, cameraFov:75,
      startProgress:1, cycleDuration:6, petalRotStep:140,
      scaleMinY:0.01, scaleMaxY:0.7, scaleMinZ:0.3, scaleMaxZ:0.4,
      bendMin:1, bendMax:-2,
      distortStrength:0.05, distortBrush:0.08, distortFade:0.9,
      particleSize:0.01, particleGravity:0.0098, particleSpread:20,
      stemRoughness:0.5, stemPosY:-3.3,
      bgColorTop:'#000000', bgColorBot:'#8386ff'
    },
    sl:[
      {s:'📷 相机'},{k:'cameraZoom',l:'缩放',mn:0.5,mx:5,st:0.1},{k:'cameraFov',l:'视角FOV',mn:20,mx:120,st:1},
      {s:'🌸 花瓣动画'},{k:'startProgress',l:'绽放进度',mn:0,mx:1,st:0.01},{k:'cycleDuration',l:'循环周期(秒)',mn:2,mx:12,st:0.5},{k:'petalRotStep',l:'花瓣旋转角度',mn:90,mx:180,st:1},
      {s:'🌿 花瓣形态'},{k:'scaleMinY',l:'初始Y缩放',mn:0.001,mx:0.5,st:0.01},{k:'scaleMaxY',l:'目标Y缩放',mn:0.1,mx:1.5,st:0.05},{k:'scaleMinZ',l:'初始Z缩放',mn:0.05,mx:1,st:0.05},{k:'scaleMaxZ',l:'目标Z缩放',mn:0.1,mx:1,st:0.05},
      {s:'🔄 弯曲'},{k:'bendMin',l:'弯曲起始',mn:-3,mx:3,st:0.1},{k:'bendMax',l:'弯曲结束',mn:-5,mx:3,st:0.1},
      {s:'💡 环境光'},{k:'envIntensity',l:'HDR强度',mn:0,mx:2,st:0.05},{k:'envRotation',l:'HDR旋转',mn:-3.14,mx:3.14,st:0.05},
      {s:'🌀 鼠标扭曲'},{k:'distortStrength',l:'扭曲强度',mn:0,mx:0.3,st:0.005},{k:'distortBrush',l:'笔刷大小',mn:0.01,mx:0.3,st:0.01},{k:'distortFade',l:'衰减速率',mn:0.5,mx:0.99,st:0.01},
      {s:'✨ 粒子'},{k:'particleSize',l:'粒子大小',mn:0.001,mx:0.05,st:0.001},{k:'particleGravity',l:'重力',mn:0,mx:0.05,st:0.001},{k:'particleSpread',l:'分布范围',mn:5,mx:50,st:1},
      {s:'🌿 花茎'},{k:'stemRoughness',l:'粗糙度',mn:0,mx:1,st:0.05},{k:'stemPosY',l:'Y偏移',mn:-5,mx:0,st:0.1}
    ],
    pal:[{k:'bgColorTop',l:'背景顶部'},{k:'bgColorBot',l:'背景底部'}]
  },
  tulip: {
    title:'Tulip 郁金香', desc:'GLB 模型生长动画 · 贴图材质 + 阶段式生长 + easeOutBack + 风力摇摆',
    tags:[['GLB Model','green'],['Growth Anim','purple'],['Wind Sim','pink']],
    cam:null, look:null,
    defs:{ growthDuration:8, petalOpenAngle:0.3, petalScale:1, windStrength:1, windSpeed:0.5, cameraDistance:3.5, autoRotateSpeed:0.01 },
    sl:[
      {s:'🌱 生长'},{k:'growthDuration',l:'生长周期(秒)',mn:3,mx:25,st:0.5},
      {s:'🌷 花瓣'},{k:'petalOpenAngle',l:'展开角度',mn:0,mx:1.5,st:0.05},{k:'petalScale',l:'缩放',mn:0.3,mx:2,st:0.05},
      {s:'�️ 风力'},{k:'windStrength',l:'风力强度',mn:0,mx:4,st:0.1},{k:'windSpeed',l:'风速',mn:0,mx:3,st:0.05},
      {s:'📷 相机'},{k:'cameraDistance',l:'相机距离',mn:0.8,mx:6,st:0.1},{k:'autoRotateSpeed',l:'自转速度',mn:0,mx:0.05,st:0.002}
    ],
    pal:[]
  },
  aurora: {
    title:'Aurora Borealis', desc:'程序化极光 · Volume Raymarching + FBM 分数布朗运动 + Beer-Lambert + 星空',
    tags:[['Volume','green'],['FBM','purple'],['Beer-Lambert','pink']],
    cam:null, look:null,
    defs:{ colorTop:[0.1,0.8,0.3],colorBottom:[0.3,0.1,0.6],colorAccent:[0.1,0.3,0.9],height:5,curtainWidth:15,speed:0.3,intensity:1.5,turbulence:1,raySteps:48 },
    sl:[{s:'Aurora'},{k:'height',l:'高度 Height',mn:2,mx:12,st:0.1},{k:'curtainWidth',l:'宽度 Width',mn:5,mx:30,st:0.5},{k:'speed',l:'速度 Speed',mn:0.05,mx:1,st:0.01},{k:'intensity',l:'强度 Intensity',mn:0.3,mx:3,st:0.05},{k:'turbulence',l:'湍流 Turbulence',mn:0,mx:2,st:0.05},{s:'Quality 品质'},{k:'raySteps',l:'采样 Samples',mn:16,mx:96,st:1}],
    pal:[{n:'经典绿',t:[0.1,0.8,0.3],b:[0.3,0.1,0.6],a:[0.1,0.3,0.9]},{n:'烈焰',t:[0.9,0.2,0.1],b:[0.5,0.05,0.1],a:[1,0.6,0.1]},{n:'冰蓝',t:[0.2,0.6,0.9],b:[0.1,0.1,0.4],a:[0.5,0.8,1]},{n:'粉紫',t:[0.9,0.3,0.6],b:[0.3,0.1,0.5],a:[0.7,0.4,0.9]}]
  },
  // ── Vanta Shader 效果集 ──
  'vanta-halo': {
    title:'Halo 光环', desc:'双缓冲反馈 Shader · Perlin 3D Noise + 花瓣状波形 + 彩虹色相旋转',
    tags:[['Double Buffer','green'],['Perlin 3D','purple'],['Feedback','pink']],
    cam:null, look:null, isVanta:true,
    defs:{ baseColor:0x001a59, color2:0xf2e735, backgroundColor:0x131a43, amplitudeFactor:1.0, ringFactor:1.0, rotationFactor:1.0, xOffset:0, yOffset:0, size:1.0, speed:1.0 },
    sl:[
      {s:'🔆 Halo 光环'},{k:'size',l:'尺寸 Size',mn:0.1,mx:3,st:0.05},{k:'speed',l:'速度 Speed',mn:0.1,mx:3,st:0.05},{k:'amplitudeFactor',l:'振幅 Amplitude',mn:0.1,mx:3,st:0.05},{k:'ringFactor',l:'环纹 Ring',mn:0.1,mx:3,st:0.05},{k:'rotationFactor',l:'旋转 Rotation',mn:0.1,mx:3,st:0.05},
      {s:'📐 Position 位置'},{k:'xOffset',l:'X 偏移',mn:-1,mx:1,st:0.01},{k:'yOffset',l:'Y 偏移',mn:-1,mx:1,st:0.01}
    ],
    pal:[{n:'深蓝金',c:[0,0.1,0.35]},{n:'暗紫',c:[0.2,0,0.3]},{n:'暗红',c:[0.3,0,0.05]}]
  },
  'vanta-fog': {
    title:'Fog 迷雾', desc:'FBM 分形布朗运动雾气 · 6 层 Octave 噪声叠加 + 多色层混合',
    tags:[['FBM','green'],['Noise','purple'],['Multi-layer','pink']],
    cam:null, look:null, isVanta:true,
    defs:{ highlightColor:0xffc300, midtoneColor:0xff1f00, lowlightColor:0x2d00ff, baseColor:0xffebeb, blurFactor:0.6, speed:1.0, zoom:1.0 },
    sl:[
      {s:'🌫️ Fog 雾气'},{k:'blurFactor',l:'模糊度 Blur',mn:0.1,mx:0.9,st:0.01},{k:'speed',l:'速度 Speed',mn:0.1,mx:3,st:0.05},{k:'zoom',l:'缩放 Zoom',mn:0.3,mx:3,st:0.05}
    ],
    pal:[{n:'🔥 火焰',c:[1,0.76,0]},{n:'🧊 冰蓝',c:[0.1,0.4,0.8]},{n:'🍇 紫雾',c:[0.5,0.1,0.7]}]
  },
  'vanta-cells': {
    title:'Cells 细胞', desc:'Worley Noise 沃罗诺伊细胞 · 有机纹理生成 + 时间偏移动画',
    tags:[['Worley','green'],['Voronoi','purple'],['Organic','pink']],
    cam:null, look:null, isVanta:true,
    defs:{ color1:0x8c8c, color2:0xf2e735, backgroundColor:0xd7ff8f, amplitudeFactor:1.0, size:1.5, speed:1.0 },
    sl:[
      {s:'🧬 Cells 细胞'},{k:'size',l:'尺寸 Size',mn:0.3,mx:5,st:0.05},{k:'speed',l:'速度 Speed',mn:0.1,mx:3,st:0.05},{k:'amplitudeFactor',l:'振幅 Amplitude',mn:0.1,mx:3,st:0.05}
    ],
    pal:[{n:'🌿 绿黄',c:[0,0.55,0]},{n:'🔮 紫蓝',c:[0.3,0,0.7]},{n:'🌅 暖橙',c:[0.9,0.4,0]}]
  },
  'vanta-clouds': {
    title:'Clouds 体积云', desc:'体积云 Raymarching · 多级 LOD 噪声密度场 + 太阳光散射',
    tags:[['Volume','green'],['Raymarching','purple'],['LOD','pink']],
    cam:null, look:null, isVanta:true,
    defs:{ backgroundColor:0xffffff, skyColor:0x68b8d7, cloudColor:0xadc1de, cloudShadowColor:0x183550, sunColor:0xff9919, sunGlareColor:0xff6633, sunlightColor:0xff9933, speed:1 },
    sl:[
      {s:'☁️ Clouds 云'},{k:'speed',l:'速度 Speed',mn:0.1,mx:3,st:0.05}
    ],
    pal:[{n:'☀️ 晴天',c:[0.41,0.72,0.84]},{n:'🌅 黄昏',c:[0.8,0.4,0.1]},{n:'🌑 暗夜',c:[0.1,0.12,0.2]}]
  },
  'vanta-ripple': {
    title:'Ripple 涟漪', desc:'光点涟漪 · 400 点光源矩阵 + 正弦波叠加 + 辉光累积',
    tags:[['Light Array','green'],['Sine Wave','purple'],['Glow','pink']],
    cam:null, look:null, isVanta:true,
    defs:{ color1:0x60b25, color2:0xffffff, backgroundColor:0xf6f6f6, amplitudeFactor:1.0, ringFactor:4.0, rotationFactor:0.1, speed:1.0 },
    sl:[
      {s:'💫 Ripple 涟漪'},{k:'amplitudeFactor',l:'振幅 Amplitude',mn:0.1,mx:3,st:0.05},{k:'ringFactor',l:'环密度 Rings',mn:0.5,mx:10,st:0.1},{k:'rotationFactor',l:'旋转 Rotation',mn:0,mx:1,st:0.01},{k:'speed',l:'速度 Speed',mn:0.1,mx:3,st:0.05}
    ],
    pal:[{n:'🌿 绿光',c:[0.02,0.42,0.09]},{n:'🔵 蓝光',c:[0,0.2,0.8]},{n:'🟣 紫光',c:[0.5,0,0.6]}]
  },
  // ── Vanta 3D Mesh 效果 ──
  'vanta-birds': {
    title:'Birds 飞鸟', desc:'CPU Boids 集群飞鸟 · Reynolds 规则 + 振翅动画 + 渐变着色',
    tags:[['Boids','green'],['Flocking','purple'],['CPU Sim','pink']],
    cam:null, look:null, is3DVanta:true,
    defs:{ backgroundColor:0x07192F, color1:0xff0000, color2:0x00d1ff, birdSize:1, wingSpan:30, speedLimit:5, separation:20, alignment:20, cohesion:20, quantity:5 },
    sl:[
      {s:'🐦 Birds 飞鸟'},{k:'quantity',l:'密度 Quantity',mn:2,mx:5,st:1},{k:'birdSize',l:'体型 Size',mn:0.5,mx:3,st:0.1},{k:'speedLimit',l:'速度 Speed',mn:1,mx:15,st:0.5},
      {s:'🧠 Boids 行为'},{k:'separation',l:'分离 Separation',mn:5,mx:50,st:1},{k:'alignment',l:'对齐 Alignment',mn:5,mx:50,st:1},{k:'cohesion',l:'聚合 Cohesion',mn:5,mx:50,st:1}
    ],
    pal:[{n:'🔴 红蓝',c:[1,0,0]},{n:'🟢 绿黄',c:[0,1,0]},{n:'🟣 紫青',c:[0.5,0,1]}]
  },
  'vanta-net': {
    title:'Net 网络', desc:'3D 粒子连线网络 · 距离阈值动态连接 + 旋转漂移 + 亮度混合',
    tags:[['Particles','green'],['Lines','purple'],['Dynamic','pink']],
    cam:null, look:null, is3DVanta:true,
    defs:{ color:0xff3f81, backgroundColor:0x23153c, points:10, maxDistance:20, spacing:15, showDots:true },
    sl:[
      {s:'🕸️ Net 网络'},{k:'points',l:'密度 Points',mn:3,mx:20,st:1},{k:'maxDistance',l:'连接距离',mn:5,mx:50,st:1},{k:'spacing',l:'间距 Spacing',mn:5,mx:30,st:1}
    ],
    pal:[{n:'🩷 粉紫',c:[1,0.25,0.5]},{n:'🩵 蓝绿',c:[0,0.8,0.8]},{n:'🧡 橙黄',c:[1,0.6,0]}]
  },
  'vanta-waves': {
    title:'Waves 波浪', desc:'动态波浪网格 · Trochoid 波形叠加 + FlatShading + Phong 材质',
    tags:[['Trochoid','green'],['FlatShading','purple'],['Animated','pink']],
    cam:null, look:null, is3DVanta:true,
    defs:{ color:0x005588, shininess:30, waveHeight:15, waveSpeed:1, zoom:1 },
    sl:[
      {s:'🌊 Waves 波浪'},{k:'waveHeight',l:'浪高 Height',mn:1,mx:40,st:1},{k:'waveSpeed',l:'速度 Speed',mn:0.1,mx:3,st:0.1},{k:'zoom',l:'缩放 Zoom',mn:0.3,mx:3,st:0.1},{k:'shininess',l:'光泽 Shininess',mn:1,mx:100,st:1}
    ],
    pal:[{n:'🔵 深蓝',c:[0,0.33,0.53]},{n:'🌊 青碧',c:[0,0.6,0.5]},{n:'🌑 暗夜',c:[0.05,0.1,0.2]}]
  },
  'vanta-dots': {
    title:'Dots 星点', desc:'星点矩阵 + 旋转线球 · PointsMaterial + 正弦波振荡',
    tags:[['Points','green'],['Sine','purple'],['LineSphere','pink']],
    cam:null, look:null, is3DVanta:true,
    defs:{ color:0xff8820, color2:0xff8820, backgroundColor:0x222222, size:3, spacing:35, showLines:true },
    sl:[
      {s:'✨ Dots 星点'},{k:'size',l:'粒径 Size',mn:0.5,mx:10,st:0.5},{k:'spacing',l:'间距 Spacing',mn:10,mx:80,st:1}
    ],
    pal:[{n:'🟠 暖橙',c:[1,0.53,0.13]},{n:'🔵 冰蓝',c:[0.2,0.6,1]},{n:'🟢 翠绿',c:[0.2,0.8,0.3]}]
  },
  'vanta-rings': {
    title:'Rings 光环', desc:'彩色环形阵列 · ExtrudeGeometry 弧形 + 多色分层 + 旋转',
    tags:[['Extrude','green'],['Multi-color','purple'],['Rotation','pink']],
    cam:null, look:null, is3DVanta:true,
    defs:{ backgroundColor:0x202428, color:0x88ff00 },
    sl:[],
    pal:[{n:'🟢 荧绿',c:[0.53,1,0]},{n:'🔵 蓝光',c:[0.07,0.53,0.87]},{n:'🟡 暖金',c:[1,0.87,0.13]}]
  },
  'vanta-globe': {
    title:'Globe 地球', desc:'线框地球 + 极轴 + 网格波动连线 · 球面磁力线',
    tags:[['Wireframe','green'],['Poles','purple'],['Grid','pink']],
    cam:null, look:null, is3DVanta:true,
    defs:{ color:0xff3f81, color2:0xffffff, size:1, backgroundColor:0x23153c, points:10, maxDistance:20, spacing:15, showDots:true },
    sl:[
      {s:'🌍 Globe 地球'},{k:'size',l:'球径 Size',mn:0.3,mx:3,st:0.1},{k:'points',l:'网格密度',mn:3,mx:20,st:1},{k:'maxDistance',l:'连接距离',mn:5,mx:50,st:1}
    ],
    pal:[{n:'🩷 粉紫',c:[1,0.25,0.5]},{n:'🩵 蓝白',c:[0.3,0.6,1]},{n:'🟢 绿光',c:[0.2,0.8,0.3]}]
  },
  'vanta-clouds2': {
    title:'Clouds2 程序云', desc:'程序化噪声体积云 · 噪声密度采样 + 光照渐变',
    tags:[['Procedural','green'],['Noise','purple'],['Volume','pink']],
    cam:null, look:null, isVanta:true,
    defs:{ backgroundColor:0x000000, skyColor:0x5ca6ca, cloudColor:0x334d80, lightColor:0xffffff, speed:1.0 },
    sl:[{s:'☁️ Clouds2 云'},{k:'speed',l:'速度 Speed',mn:0.1,mx:3,st:0.05}],
    pal:[{n:'🩵 晴空',c:[0.36,0.67,0.79]},{n:'🌅 暮色',c:[0.5,0.2,0.1]},{n:'🌑 深夜',c:[0.05,0.08,0.15]}]
  },
  'vanta-topology': {
    title:'Topology 拓扑', desc:'流场粒子系统 · Perlin 噪声流向 + 4500 粒子描迹',
    tags:[['Flow Field','green'],['Particles','purple'],['Canvas 2D','pink']],
    cam:null, look:null, isCanvas:true,
    defs:{ color:0x89964e, backgroundColor:0x002222, speed:1 },
    sl:[],
    pal:[{n:'🟢 苔绿',c:[0.54,0.58,0.31]},{n:'🔵 靛蓝',c:[0.1,0.2,0.6]},{n:'🟡 琥珀',c:[0.8,0.6,0.1]}]
  },
  'vanta-trunk': {
    title:'Trunk 年轮', desc:'噪声同心环 · 极坐标噪声径向偏移 + 动态呼吸',
    tags:[['Polar','green'],['Noise Ring','purple'],['Canvas 2D','pink']],
    cam:null, look:null, isCanvas:true,
    defs:{ color:0x98465f, backgroundColor:0x222426, spacing:0, chaos:1 },
    sl:[{s:'🪵 Trunk 年轮'},{k:'chaos',l:'混乱度 Chaos',mn:0.1,mx:3,st:0.1},{k:'spacing',l:'间距 Spacing',mn:0,mx:5,st:0.1}],
    pal:[{n:'🩷 紫粉',c:[0.6,0.27,0.37]},{n:'🩵 蓝灰',c:[0.3,0.4,0.5]},{n:'🟢 森绿',c:[0.2,0.5,0.2]}]
  }
};

// ── Three.js ──
const container = document.getElementById('canvas-container');
const renderer = new THREE.WebGLRenderer({ antialias:true });
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x030712);
const camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,10000);
camera.position.set(0,2,5);
const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping=true; controls.dampingFactor=0.06;

// ── 默认灯光 (非 TroisFlower 模式) ──
const defaultAmbient = new THREE.AmbientLight(0x334466, 0.5);
const dL = new THREE.DirectionalLight(0xffeedd, 1.2); dL.position.set(5, 8, 3);
const pL = new THREE.PointLight(0xff8866, 0.5, 20); pL.position.set(-3, 4, -2);
scene.add(defaultAmbient, dL, pL);

// ── TroisFlower 专用灯光 (与原版一致) ──
const tfAmbient = new THREE.AmbientLight(0x808080, 4);
const tfSpot1 = new THREE.SpotLight(0x6090ff, 80);
tfSpot1.position.set(0, -1, 7.8); tfSpot1.angle = Math.PI / 6; tfSpot1.penumbra = 0.5;
tfSpot1.castShadow = true; tfSpot1.shadow.mapSize.set(1024, 1024);
const tfSpot2 = new THREE.SpotLight(0xff9060, 80);
tfSpot2.position.set(0, 1, -3); tfSpot2.angle = Math.PI / 6; tfSpot2.penumbra = 0.5;
tfSpot2.castShadow = true; tfSpot2.shadow.mapSize.set(1024, 1024);
// 不立即添加, build 时按需切换

// ── 后处理 (Bloom — TroisFlower 专用) ──
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight), 0.85, 0.4, 0.85
);
composer.addPass(bloomPass);

// ── 灯光/渲染模式切换 ──
let useBloom = false;
const defaultToneMapping = THREE.NoToneMapping;
const defaultExposure = 1;

function setLightingMode(mode) {
  if (mode === 'trois-flower') {
    // 移除默认灯光
    scene.remove(defaultAmbient, dL, pL);
    // 添加 TroisFlower 专用灯光
    scene.add(tfAmbient, tfSpot1, tfSpot1.target, tfSpot2, tfSpot2.target);
    // 渲染器配置：与原版一致
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.1;
    scene.background = new THREE.Color(0x0a0a0a);
    useBloom = true;
  } else {
    // 移除 TroisFlower 灯光
    scene.remove(tfAmbient, tfSpot1, tfSpot1.target, tfSpot2, tfSpot2.target);
    // 恢复默认灯光
    scene.add(defaultAmbient, dL, pL);
    renderer.shadowMap.enabled = false;
    renderer.toneMapping = defaultToneMapping;
    renderer.toneMappingExposure = defaultExposure;
    scene.background = new THREE.Color(0x030712);
    useBloom = false;
  }
}

const uniformsMgr = UniformsManager.getInstance();
uniformsMgr.set('uResolution',new THREE.Vector2(window.innerWidth,window.innerHeight));
const gc = GarbageCollector.getInstance();

// ── 状态 ──
let currentEntity=null, gardenEntities=[], currentMode='trois-flower', currentParams={}, palIdx=0;
let activeCamera=camera; // 当前激活的相机（可能是主 camera 或 Vanta 自建 camera）
let useVantaCamera=false; // 是否使用 Vanta 效果自带的相机

// ── 视角模式：'showcase'（展示视角）vs 'free'（自由视角） ──
let viewMode = 'showcase';
// 每个模式对应的已固定展示视角（用户在 free 模式下按 📌 固定）
const pinnedViews = {}; // { mode: { pos:Vector3, target:Vector3 } }
// 保存 Vanta 效果的展示视角相机原始参数，供恢复
let _showcaseCamSnapshot = null;

// ── 场景构建 ──
function clearAll(){
  if(currentEntity){currentEntity.dispose();currentEntity=null;}
  gardenEntities.forEach(e=>e.dispose()); gardenEntities=[];
  const rm=[]; scene.traverse(c=>{if(c.isMesh||c.isLineSegments||c.isPoints||c.isLine)rm.push(c);}); rm.forEach(o=>scene.remove(o));
  // 重置为主相机
  activeCamera=camera;
  useVantaCamera=false;
  controls.enabled=true;
  _showcaseCamSnapshot=null;
}

function build(mode,params){
  clearAll(); currentMode=mode; currentParams={...params};
  const cfg=SC[mode]; if(!cfg)return;
  // 切换灯光/渲染模式
  setLightingMode(mode);
  document.querySelectorAll('.entity-btn').forEach(b=>b.classList.remove('active'));
  const btn=document.querySelector(`[data-mode="${mode}"]`); if(btn)btn.classList.add('active');
  if(cfg.cam){camera.position.set(...cfg.cam);controls.target.set(...cfg.look);}
  switch(mode){
    case 'butterfly':
      currentEntity=new BionicButterfly(params).build(); currentEntity.addTo(scene).setPosition(0,1.5,0); break;
    case 'flock':
      currentEntity=new BionicButterfly(params).build(); currentEntity.addTo(scene); break;
    case 'mandelbulb':
      currentEntity=new MandelbulbFractal(params).build(); currentEntity.addTo(scene); break;
    case 'trois-flower':
      currentEntity=new TroisFlower(params).build(); currentEntity.addTo(scene); break;
    case 'dahlia':
      currentEntity=new Dahlia(params).build(); currentEntity.addTo(scene);
      // Dahlia 自带相机和背景，shader 自照明不需要外部灯光
      if(currentEntity.camera){ activeCamera=currentEntity.camera; useVantaCamera=true; controls.enabled=(viewMode==='free'); }
      scene.remove(defaultAmbient, dL, pL);
      scene.background=null;
      break;
    case 'bloom':
      currentEntity = new Bloom();
      currentEntity.init(scene, renderer).then(() => {
        // Bloom 自带相机、场景、后处理
        if(currentEntity._camera){ activeCamera=currentEntity._camera; useVantaCamera=true; controls.enabled=false; }
        scene.remove(defaultAmbient, dL, pL);
        scene.background=null;
      });
      break;
    case 'tulip':
      currentEntity=new Tulip(params).build(); currentEntity.addTo(scene);
      // Tulip 自带相机、灯光和背景
      if(currentEntity.camera){ activeCamera=currentEntity.camera; useVantaCamera=true; controls.enabled=(viewMode==='free'); }
      // 移除默认灯光（Tulip 自带专用灯光）
      scene.remove(defaultAmbient, dL, pL);
      scene.background=null;
      break;
    case 'aurora':
      currentEntity=new AuroraBorealis(params).build(); currentEntity.addTo(scene); break;
    // ── Vanta 全屏 Shader 效果 ──
    case 'vanta-halo':
      currentEntity=new VantaHalo(params).build(); currentEntity.setRenderer(renderer); currentEntity.addTo(scene); break;
    case 'vanta-fog':
      currentEntity=new VantaFog(params).build(); currentEntity.addTo(scene); break;
    case 'vanta-cells':
      currentEntity=new VantaCells(params).build(); currentEntity.addTo(scene); break;
    case 'vanta-clouds':
      currentEntity=new VantaClouds(params).build(); currentEntity.addTo(scene); break;
    case 'vanta-ripple':
      currentEntity=new VantaRipple(params).build(); currentEntity.addTo(scene); break;
    case 'vanta-clouds2':
      currentEntity=new VantaClouds2(params).build(); currentEntity.addTo(scene); break;
    // ── Vanta 3D Mesh 效果（使用 Vanta 自建相机 + 禁用 OrbitControls） ──
    case 'vanta-birds':
      currentEntity=new VantaBirds(params).build(); currentEntity.setRenderer(renderer); currentEntity.addTo(scene);
      _activateVantaCamera(currentEntity); break;
    case 'vanta-net':
      currentEntity=new VantaNet(params).build(); currentEntity.setRenderer(renderer); currentEntity.addTo(scene);
      _activateVantaCamera(currentEntity); break;
    case 'vanta-waves':
      currentEntity=new VantaWaves(params).build(); currentEntity.setRenderer(renderer); currentEntity.addTo(scene);
      _activateVantaCamera(currentEntity); break;
    case 'vanta-dots':
      currentEntity=new VantaDots(params).build(); currentEntity.setRenderer(renderer); currentEntity.addTo(scene);
      _activateVantaCamera(currentEntity); break;
    case 'vanta-rings':
      currentEntity=new VantaRings(params).build(); currentEntity.setRenderer(renderer); currentEntity.addTo(scene);
      _activateVantaCamera(currentEntity); break;
    case 'vanta-globe':
      currentEntity=new VantaGlobe(params).build(); currentEntity.setRenderer(renderer); currentEntity.addTo(scene);
      _activateVantaCamera(currentEntity); break;
    // ── Canvas 2D 效果 ──
    case 'vanta-topology':
      currentEntity=new VantaTopology(params).build(); currentEntity.addTo(); break;
    case 'vanta-trunk':
      currentEntity=new VantaTrunk(params).build(); currentEntity.addTo(); break;
  }
  // 视角模式重置为 showcase（每次切换效果）
  viewMode = 'showcase';
  controls.update(); updateOverlay(mode); updateStats();
}

/** 激活 Vanta 3D 效果的自建相机 */
function _activateVantaCamera(entity) {
  if (entity && entity.camera) {
    activeCamera = entity.camera;
    useVantaCamera = true;
    // 展示视角下禁用 OrbitControls（鼠标跟随由 Vanta 的 onMouseMove 控制）
    controls.enabled = (viewMode === 'free');
    // 同步 aspect
    entity.camera.aspect = window.innerWidth / window.innerHeight;
    entity.camera.updateProjectionMatrix();
    // 快照展示视角的初始相机位置（用于从 free 切回 showcase）
    _showcaseCamSnapshot = {
      pos: entity.camera.position.clone(),
      target: entity.camera.tx !== undefined
        ? new THREE.Vector3(entity.camera.tx, entity.camera.ty, entity.camera.tz || entity.camera.position.z)
        : new THREE.Vector3(0, 0, 0),
    };
    // 如果有已固定的展示视角，应用它
    if (pinnedViews[currentMode]) {
      const pv = pinnedViews[currentMode];
      entity.camera.position.copy(pv.pos);
      if (entity.camera.tx !== undefined) {
        entity.camera.tx = pv.pos.x; entity.camera.ty = pv.pos.y; entity.camera.tz = pv.pos.z;
      }
    }
    // 如果是自由视角模式，将 Vanta 相机参数拷贝到 OrbitControls
    if (viewMode === 'free') {
      _syncOrbitToVantaCam(entity.camera);
    }
  }
}

/** 切换到自由视角：把当前 activeCamera 的 pos/target 同步到 OrbitControls */
function _syncOrbitToVantaCam(cam) {
  camera.position.copy(cam.position);
  camera.fov = cam.fov || 60;
  camera.near = cam.near || 0.1;
  camera.far = cam.far || 10000;
  camera.updateProjectionMatrix();
  // lookAt 方向估算
  const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion);
  controls.target.copy(cam.position).add(dir.multiplyScalar(100));
  controls.update();
  activeCamera = camera;
  controls.enabled = true;
}

/** 切换视角模式 */
function switchViewMode(mode) {
  if (mode === viewMode) return;
  viewMode = mode;
  const cfg = SC[currentMode];

  if (mode === 'free') {
    // ── 切换到自由视角 ──
    if (useVantaCamera && currentEntity && currentEntity.camera) {
      // Vanta 3D 效果：把 Vanta 相机参数同步到 OrbitControls 主相机
      _syncOrbitToVantaCam(currentEntity.camera);
    }
    // 所有情况都启用 OrbitControls
    controls.enabled = true;
  } else {
    // ── 切换回展示视角 ──
    if (useVantaCamera && currentEntity && currentEntity.camera) {
      // Vanta 3D 效果：恢复 Vanta 自建相机，禁用 OrbitControls
      activeCamera = currentEntity.camera;
      controls.enabled = false;
      // 如果有已固定的视角，应用
      if (pinnedViews[currentMode]) {
        const pv = pinnedViews[currentMode];
        currentEntity.camera.position.copy(pv.pos);
        if (currentEntity.camera.tx !== undefined) {
          currentEntity.camera.tx = pv.pos.x; currentEntity.camera.ty = pv.pos.y;
          if (pv.pos.z !== undefined) currentEntity.camera.tz = pv.pos.z;
        }
      } else if (_showcaseCamSnapshot) {
        currentEntity.camera.position.copy(_showcaseCamSnapshot.pos);
      }
    } else if (cfg && cfg.cam) {
      // 普通 3D 效果：恢复预设视角，OrbitControls 依然启用（支持滚轮缩放/拖拽）
      if (pinnedViews[currentMode]) {
        camera.position.copy(pinnedViews[currentMode].pos);
        controls.target.copy(pinnedViews[currentMode].target);
      } else {
        camera.position.set(...cfg.cam);
        controls.target.set(...cfg.look);
      }
      controls.enabled = true;
      controls.update();
    }
  }
  _updateViewModeUI();
}

/** 📌 固定当前视角为展示视角 */
function pinCurrentView() {
  const pos = activeCamera.position.clone();
  const target = controls.enabled ? controls.target.clone() : new THREE.Vector3(0, 0, 0);
  pinnedViews[currentMode] = { pos, target };

  // 同时更新 Vanta 展示快照
  if (useVantaCamera && currentEntity && currentEntity.camera) {
    _showcaseCamSnapshot = { pos: pos.clone(), target: target.clone() };
  }

  // Toast 反馈
  const toast = document.getElementById('pin-toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

/** 刷新视角模式按钮 UI 状态 */
function _updateViewModeUI() {
  document.querySelectorAll('.view-mode-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.vm === viewMode);
  });
  const pinBtn = document.getElementById('btn-pin-cam');
  if (pinBtn) {
    pinBtn.classList.toggle('visible', viewMode === 'free');
  }
}

// ── 参数面板 ──
function renderPanel(mode){
  const cfg=SC[mode]; if(!cfg)return;
  const el=document.getElementById('params-content');
  // 判断该效果是否支持 3D 视角切换（排除 2D 全屏 shader 和 Canvas 效果）
  const is3DScene = !cfg.isVanta && !cfg.isCanvas; // 普通 3D 效果
  const is3DVanta = cfg.is3DVanta === true; // Vanta 3D Mesh 效果
  const hasViewToggle = is3DScene || is3DVanta;

  let h=`<div class="panel-title">⚙️ ${cfg.title}</div><div class="panel-subtitle">修改即时重建</div>`;

  // 视角切换栏（仅 3D 场景效果显示）
  if(hasViewToggle){
    const pinned = pinnedViews[mode];
    const pinnedLabel = pinned ? ' · <span style="color:#fbbf24;font-size:9px">📌 已固定</span>' : '';
    h+=`<div class="view-mode-bar">`;
    h+=`<button class="view-mode-btn${viewMode==='showcase'?' active':''}" data-vm="showcase"><span class="vm-icon">🎬</span>展示视角</button>`;
    h+=`<button class="view-mode-btn${viewMode==='free'?' active':''}" data-vm="free"><span class="vm-icon">🎮</span>自由视角</button>`;
    h+=`</div>`;
    h+=`<button class="pin-cam-btn${viewMode==='free'?' visible':''}" id="btn-pin-cam">📌 固定当前视角为展示视角</button>`;
  }

  if(cfg.pal?.length){
    h+=`<div class="param-section"><div class="param-section-label">Color Presets</div><div class="color-row">`;
    cfg.pal.forEach((p,i)=>{const rgb=p.c||p.t||p.cA||[.5,.5,.5];h+=`<div class="color-swatch${i===palIdx?' active':''}" data-ci="${i}" style="background:rgb(${Math.round(rgb[0]*255)},${Math.round(rgb[1]*255)},${Math.round(rgb[2]*255)})" title="${p.n}"></div>`;});
    h+=`</div></div>`;
  }
  for(const p of cfg.sl){
    if(p.s){h+=`<div class="param-section"><div class="param-section-label">${p.s}</div>`;continue;}
    const v=currentParams[p.k]??cfg.defs[p.k]; const d=p.st>=1?v:Number(v).toFixed(2);
    h+=`<div class="param-row"><span class="param-label">${p.l}</span><span class="param-value" id="pv-${p.k}">${d}</span></div>`;
    h+=`<input type="range" class="param-slider" data-key="${p.k}" min="${p.mn}" max="${p.mx}" step="${p.st}" value="${v}">`;
  }
  h+=`<button class="action-btn" id="btn-rand">🎲 随机种子</button>`;
  h+=`<button class="action-btn secondary" id="btn-rebuild">🔄 重新生成</button>`;
  el.innerHTML=h;
  el.querySelectorAll('.param-slider').forEach(s=>{
    s.addEventListener('input',e=>{const k=e.target.dataset.key,v=parseFloat(e.target.value);currentParams[k]=v;document.getElementById(`pv-${k}`).textContent=parseFloat(e.target.step)>=1?v:v.toFixed(2);});
    s.addEventListener('change',()=>build(currentMode,currentParams));
  });
  el.querySelectorAll('.color-swatch').forEach(s=>{
    s.addEventListener('click',e=>{palIdx=parseInt(e.target.dataset.ci);applyPal(mode,palIdx);el.querySelectorAll('.color-swatch').forEach(x=>x.classList.remove('active'));e.target.classList.add('active');});
  });
  document.getElementById('btn-rand')?.addEventListener('click',randSeed);
  document.getElementById('btn-rebuild')?.addEventListener('click',()=>build(currentMode,currentParams));
  // 视角模式按钮事件
  el.querySelectorAll('.view-mode-btn').forEach(b=>{
    b.addEventListener('click',()=>switchViewMode(b.dataset.vm));
  });
  document.getElementById('btn-pin-cam')?.addEventListener('click',pinCurrentView);
}

function applyPal(mode,idx){
  const p=SC[mode]?.pal?.[idx]; if(!p)return;
  if(p.c&&(mode==='butterfly'||mode==='flock'))currentParams.baseColor=p.c;
  else if(p.c){currentParams.color=p.c;if(p.ic)currentParams.innerColor=p.ic;}
  if(p.cA)currentParams.colorA=p.cA; if(p.cB)currentParams.colorB=p.cB;
  if(p.t)currentParams.colorTop=p.t; if(p.b)currentParams.colorBottom=p.b; if(p.a)currentParams.colorAccent=p.a;
  build(currentMode,currentParams);
}

// ── 覆盖层 & 统计 ──
function updateOverlay(mode){
  const cfg=SC[mode]; if(!cfg)return;
  document.getElementById('overlay-title').textContent=cfg.title;
  document.getElementById('overlay-desc').textContent=cfg.desc;
  document.getElementById('overlay-tags').innerHTML=cfg.tags.map(([t,c])=>`<span class="overlay-tag tag-${c}">${t}</span>`).join('');
  const ol=document.getElementById('entity-overlay');
  ol.classList.remove('visible'); requestAnimationFrame(()=>requestAnimationFrame(()=>ol.classList.add('visible')));
}
function updateStats(){
  document.getElementById('stat-seed').textContent=`Seed: ${currentParams.seed||currentParams.baseSeed||42}`;
  let v=0,g=0; scene.traverse(c=>{if(c.isMesh&&c.geometry){g++;const p=c.geometry.getAttribute('position');if(p)v+=p.count;}});
  document.getElementById('stat-geo').textContent=`Geo: ${g}`;
  document.getElementById('stat-verts').textContent=`Verts: ${v.toLocaleString()}`;
}

// ── 全局 API ──
function randSeed(){
  const s=Math.floor(Math.random()*9999)+1;
  if('seed' in currentParams)currentParams.seed=s;
  if('baseSeed' in currentParams)currentParams.baseSeed=s;
  renderPanel(currentMode); build(currentMode,currentParams);
}
window.appSwitch=function(mode){palIdx=0;viewMode='showcase';currentParams={...SC[mode].defs};renderPanel(mode);build(mode,currentParams);};
document.addEventListener('keydown',e=>{
  if(e.key==='r'||e.key==='R') randSeed();
  // V 键切换视角模式
  if(e.key==='v'||e.key==='V'){
    const cfg=SC[currentMode];
    const has3D=(!cfg?.isVanta&&!cfg?.isCanvas)||cfg?.is3DVanta;
    if(has3D) switchViewMode(viewMode==='showcase'?'free':'showcase');
  }
  // P 键固定视角
  if((e.key==='p'||e.key==='P')&&viewMode==='free'){
    pinCurrentView();
  }
});

// ── 动画循环 ──
const clock=new THREE.Clock(); let fc=0,ft=0;
function animate(){
  requestAnimationFrame(animate); const dt=clock.getDelta();
  uniformsMgr.tick();
  // 每帧更新：TroisFlower / Vanta / Flock
  if(currentEntity&&currentEntity.update) currentEntity.update(undefined, dt);
  if(currentMode==='flock'&&currentEntity)currentEntity.updateFlock(dt);
  if(controls.enabled) controls.update();
  // 根据模式选择渲染管线 + 激活相机
  if(currentMode==='bloom' && currentEntity && currentEntity._loaded) {
    // Bloom 自带完整渲染管线 (scene + camera + composer)
    currentEntity.render(renderer);
  } else if(useBloom){ 
    // Bloom 模式下需要更新 RenderPass 的相机
    composer.passes[0].camera = activeCamera;
    composer.render(); 
  } else { 
    renderer.render(scene, activeCamera); 
  }
  fc++;ft+=dt; if(ft>=.5){document.getElementById('stat-fps').textContent=Math.round(fc/ft)+' FPS';fc=0;ft=0;}
}

window.addEventListener('resize',()=>{
  const w=window.innerWidth, h=window.innerHeight;
  camera.aspect=w/h; camera.updateProjectionMatrix();
  // 如果当前激活的是 Vanta 自建相机，也需要同步 aspect
  if(useVantaCamera && activeCamera !== camera) {
    activeCamera.aspect=w/h; activeCamera.updateProjectionMatrix();
  }
  renderer.setSize(w,h);
  composer.setSize(w,h);
  uniformsMgr.set('uResolution',new THREE.Vector2(w,h));
  // Vanta 效果尺寸同步
  if(currentEntity&&currentEntity.resize) currentEntity.resize(w,h);
  // Bloom 效果尺寸同步
  if(currentEntity&&currentEntity.onResize) currentEntity.onResize(w,h);
});

// ── 鼠标交互（Vanta 效果需要 iMouse + 3D 效果鼠标跟随） ──
window.addEventListener('mousemove',e=>{
  if(!currentEntity||!currentEntity.setMouse) return;
  const cfg = SC[currentMode];
  // 自由视角下，Vanta 3D 效果不传鼠标事件（由 OrbitControls 接管）
  if(viewMode==='free' && cfg && cfg.is3DVanta) return;
  currentEntity.setMouse(e.clientX, e.clientY);
});

// ── 触摸交互支持（移动端） ──
function _handleTouch(e){
  if(!currentEntity||!currentEntity.setMouse||!e.touches.length) return;
  const cfg = SC[currentMode];
  if(viewMode==='free' && cfg && cfg.is3DVanta) return;
  currentEntity.setMouse(e.touches[0].clientX, e.touches[0].clientY);
}
window.addEventListener('touchstart',_handleTouch,{ passive:true });
window.addEventListener('touchmove',_handleTouch,{ passive:true });

// ── 侧边栏按钮事件委托 ──
document.getElementById('sidebar').addEventListener('click', e => {
  const btn = e.target.closest('.entity-btn');
  if (!btn) return;
  const mode = btn.dataset.mode;
  if (mode && SC[mode]) window.appSwitch(mode);
});

// ── 启动 ──
window.appSwitch('trois-flower');
animate();

/* ========================================================================
 * >>> 3D 控制面板脚本 — 删除此区块不影响 3D 主体 <<<
 * 真正联动到每个效果的 uniform / options / _params
 * ======================================================================== */
(function TC_init() {
  'use strict';
  const panel   = document.getElementById('tcPanel');
  const toggleBtn = document.getElementById('tcToggleBtn');
  const minBtn  = document.getElementById('tcMinBtn');
  const header  = document.getElementById('tcHeader');
  const body    = document.getElementById('tcBody');
  const copyBtn = document.getElementById('tcCopyBtn');
  const resetBtn= document.getElementById('tcResetBtn');
  const saveBtn = document.getElementById('tcSaveBtn');
  const exportBtn = document.getElementById('tcExportBtn');

  if (!panel || !toggleBtn) return; // 安全检查

  /* ===== 显示 / 隐藏 ===== */
  toggleBtn.addEventListener('click', () => {
    panel.classList.add('tc-visible'); toggleBtn.style.display = 'none';
  });
  minBtn.addEventListener('click', () => {
    panel.classList.remove('tc-visible'); toggleBtn.style.display = 'flex';
  });

  /* ===== 拖拽 ===== */
  let dragging = false, dx = 0, dy = 0;
  header.addEventListener('mousedown', e => {
    if (e.target.closest('.tc-header-btn')) return;
    dragging = true;
    const r = panel.getBoundingClientRect();
    dx = e.clientX - r.left; dy = e.clientY - r.top;
    e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    const x = Math.max(0, Math.min(window.innerWidth - panel.offsetWidth, e.clientX - dx));
    const y = Math.max(0, Math.min(window.innerHeight - 50, e.clientY - dy));
    panel.style.left = x + 'px'; panel.style.top = y + 'px'; panel.style.right = 'auto';
    toggleBtn.style.left = x + 'px'; toggleBtn.style.top = y + 'px'; toggleBtn.style.right = 'auto';
  });
  document.addEventListener('mouseup', () => { dragging = false; });

  /* ===== 快捷键 ` 切换面板 ===== */
  document.addEventListener('keydown', e => {
    if (e.key === '`') {
      if (panel.classList.contains('tc-visible')) {
        panel.classList.remove('tc-visible'); toggleBtn.style.display = 'flex';
      } else {
        panel.classList.add('tc-visible'); toggleBtn.style.display = 'none';
      }
    }
  });

  /* ===== 状态 ===== */
  let _tcMode = null;
  let _tcDefaults = {};

  /* ===== Toast ===== */
  function tcToast(msg) {
    let t = document.querySelector('.tc-toast');
    if (!t) { t = document.createElement('div'); t.className = 'tc-toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('tc-show');
    setTimeout(() => t.classList.remove('tc-show'), 1800);
  }

  /* ===== 格式化数值 ===== */
  function fmtVal(v, step) {
    if (step >= 1) return String(Math.round(v));
    if (Math.abs(v) < 0.001) return v.toExponential(1);
    return v.toFixed(Math.abs(v) < 1 ? 3 : 2);
  }

  /* ====================================================================
   * 核心：根据 SC[mode] 的 sl 定义 + 实体实例，生成真正联动的控制面板
   * ==================================================================== */
  function tcBuild(mode) {
    _tcMode = mode;
    body.innerHTML = '';
    const cfg = SC[mode];
    if (!cfg || !cfg.sl || cfg.sl.length === 0) {
      body.innerHTML = '<div style="padding:16px;color:#555;font-size:11px;text-align:center">该效果暂无可调参数</div>';
      return;
    }

    // 深拷贝默认值
    _tcDefaults = JSON.parse(JSON.stringify(cfg.defs));

    // 创建实体分组
    const group = document.createElement('div');
    group.className = 'tc-entity-group';
    const headerEl = document.createElement('div');
    headerEl.className = 'tc-entity-header tc-open';
    headerEl.innerHTML = `<span class="tc-entity-arrow">▶</span><span class="tc-entity-name">${cfg.title}</span>`;
    headerEl.addEventListener('click', () => headerEl.classList.toggle('tc-open'));
    group.appendChild(headerEl);

    const content = document.createElement('div');
    content.className = 'tc-entity-content';

    let currentGroup = null;

    for (const item of cfg.sl) {
      // 分组标题
      if (item.s) {
        currentGroup = document.createElement('div');
        currentGroup.className = 'tc-group';
        currentGroup.innerHTML = `<div class="tc-group-title">${item.s}</div>`;
        content.appendChild(currentGroup);
        continue;
      }

      const key = item.k;
      const label = item.l || key;
      const min = item.mn; const max = item.mx; const step = item.st;
      const initVal = currentParams[key] ?? cfg.defs[key];

      // 判断是颜色参数还是数值参数
      const isColor = /color|background|tint|hue/i.test(key) && typeof initVal === 'number' && initVal > 0xFFF;

      const row = document.createElement('div');
      row.className = 'tc-row';

      if (isColor) {
        // ===== 颜色控件 =====
        const hex = '#' + (initVal & 0xFFFFFF).toString(16).padStart(6, '0');
        row.innerHTML = `
          <span class="tc-label" title="${key}">${label}</span>
          <input type="color" class="tc-color" value="${hex}">
          <span class="tc-value">${hex}</span>
        `;
        const picker = row.querySelector('.tc-color');
        const display = row.querySelector('.tc-value');
        picker.addEventListener('input', () => {
          const v = parseInt(picker.value.slice(1), 16);
          display.textContent = picker.value;
          _tcApplyParam(key, v, false);
        });
      } else {
        // ===== 滑块控件 =====
        row.innerHTML = `
          <span class="tc-label" title="${key}">${label}</span>
          <input type="range" class="tc-slider" min="${min}" max="${max}" step="${step}" value="${initVal}">
          <span class="tc-value">${fmtVal(initVal, step)}</span>
        `;
        const slider = row.querySelector('.tc-slider');
        const display = row.querySelector('.tc-value');
        const st = step;

        // input 事件 → 实时更新（不重建）
        slider.addEventListener('input', () => {
          const v = parseFloat(slider.value);
          display.textContent = fmtVal(v, st);
          _tcApplyParam(key, v, false);
        });

        // change 事件 → 对需要重建的参数执行 rebuild
        slider.addEventListener('change', () => {
          const v = parseFloat(slider.value);
          _tcApplyParam(key, v, true);
        });
      }

      (currentGroup || content).appendChild(row);
    }

    // === 额外：相机控制 (所有3D效果) ===
    if (!cfg.isCanvas) {
      const camGroup = document.createElement('div');
      camGroup.className = 'tc-group';
      camGroup.innerHTML = `<div class="tc-group-title">📷 相机</div>`;

      // FOV
      const fovRow = _tcMakeSlider('FOV', 10, 150, 1, activeCamera.fov, v => {
        activeCamera.fov = v; activeCamera.updateProjectionMatrix();
      });
      camGroup.appendChild(fovRow);

      // 相机 Z（距离）
      const zRow = _tcMakeSlider('Z 距离', -500, 500, 1, activeCamera.position.z, v => {
        activeCamera.position.z = v;
      });
      camGroup.appendChild(zRow);

      content.appendChild(camGroup);
    }

    group.appendChild(content);
    body.appendChild(group);
  }

  /* ===== 工厂：创建通用滑块行 ===== */
  function _tcMakeSlider(label, min, max, step, initVal, onChange) {
    const row = document.createElement('div');
    row.className = 'tc-row';
    row.innerHTML = `
      <span class="tc-label">${label}</span>
      <input type="range" class="tc-slider" min="${min}" max="${max}" step="${step}" value="${initVal}">
      <span class="tc-value">${fmtVal(initVal, step)}</span>
    `;
    const slider = row.querySelector('.tc-slider');
    const display = row.querySelector('.tc-value');
    slider.addEventListener('input', () => {
      const v = parseFloat(slider.value);
      display.textContent = fmtVal(v, step);
      onChange(v);
    });
    return row;
  }

  /* ====================================================================
   * _tcApplyParam — 将参数变更实时推送到实体
   *
   * 策略：
   * 1. VantaEffect (Shader): 直接修改 _uniforms[key].value (颜色→vec3)
   * 2. Vanta3DEffect (3D Mesh): 修改 options[key], onUpdate 每帧自动读取
   * 3. ProceduralEntity / Flora: 修改 currentParams + rebuild (仅 change 时)
   * ==================================================================== */
  function _tcApplyParam(key, value, isFinal) {
    const entity = currentEntity;
    const cfg = SC[currentMode];
    if (!entity || !cfg) return;

    // 同步到 currentParams（右侧参数面板也保持一致）
    currentParams[key] = value;

    // ---- A. VantaEffect (全屏 Shader) ----
    if (cfg.isVanta && entity._uniforms) {
      const u = entity._uniforms;
      if (u[key]) {
        if (/color|background|tint|hue/i.test(key) && typeof value === 'number') {
          // 颜色 → vec3
          const c = new THREE.Color(value);
          u[key].value.set(c.r, c.g, c.b);
        } else {
          u[key].value = value;
        }
      }
      // 同步 _params
      if (entity._params) entity._params[key] = value;
      return; // 无需重建
    }

    // ---- B. Vanta3DEffect (3D Mesh) ----
    if (cfg.is3DVanta && entity.options) {
      entity.options[key] = value;
      // 颜色参数需要特殊处理：某些效果在 onUpdate 中读 options 并转换
      return; // onUpdate 每帧自动使用新值
    }

    // ---- C. Canvas 2D 效果 ----
    if (cfg.isCanvas && entity._params) {
      entity._params[key] = value;
      return;
    }

    // ---- D. Bloom (自定义渲染管线) ----
    if (currentMode === 'bloom' && entity.applyParam) {
      entity.applyParam(key, value);
      return;
    }

    // ---- E. ProceduralEntity / Flora ----
    // 实时修改内部参数
    if (entity._params) entity._params[key] = value;
    if (entity.options) entity.options[key] = value;

    // 对于 uniform 直通的参数（如 Dahlia/Tulip 的 shader uniform），尝试实时推送
    if (entity._mesh) {
      _tcPushUniformsToMesh(entity._mesh, key, value);
    }
    if (entity._group) {
      entity._group.traverse(child => {
        if (child.isMesh && child.material && child.material.uniforms) {
          _tcPushUniformsToMesh(child, key, value);
        }
      });
    }

    // 最终释放（鼠标松手）时重建
    if (isFinal) {
      build(currentMode, currentParams);
      // 重建后重新生成控制面板内容（因为 entity 实例变了）
      setTimeout(() => tcBuild(currentMode), 50);
    }
  }

  /* 尝试将值推送到 mesh 的 shader uniform */
  function _tcPushUniformsToMesh(mesh, key, value) {
    if (!mesh.material) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const mat of mats) {
      if (!mat.uniforms) continue;
      // 直接匹配 uniform 名称
      if (mat.uniforms[key]) {
        if (/color/i.test(key) && typeof value === 'number') {
          const c = new THREE.Color(value);
          if (mat.uniforms[key].value && mat.uniforms[key].value.isVector3) {
            mat.uniforms[key].value.set(c.r, c.g, c.b);
          } else {
            mat.uniforms[key].value = c;
          }
        } else if (typeof value === 'number') {
          mat.uniforms[key].value = value;
        }
      }
      // 尝试 'u' + 首字母大写 的映射 (如 speed → uSpeed)
      const uKey = 'u' + key.charAt(0).toUpperCase() + key.slice(1);
      if (mat.uniforms[uKey]) {
        if (typeof value === 'number') {
          mat.uniforms[uKey].value = value;
        }
      }
    }
  }

  /* ===== 底部按钮 ===== */
  copyBtn.addEventListener('click', () => {
    const snapshot = { mode: currentMode, params: { ...currentParams } };
    navigator.clipboard.writeText(JSON.stringify(snapshot, null, 2)).then(() => {
      tcToast('✅ 参数已复制到剪贴板');
    });
  });
  exportBtn.addEventListener('click', () => {
    const snapshot = { mode: currentMode, params: { ...currentParams } };
    navigator.clipboard.writeText(JSON.stringify(snapshot, null, 2)).then(() => {
      tcToast('📋 JSON 已复制');
    });
  });
  resetBtn.addEventListener('click', () => {
    if (!_tcMode || !SC[_tcMode]) return;
    currentParams = { ...SC[_tcMode].defs };
    build(currentMode, currentParams);
    renderPanel(currentMode);
    setTimeout(() => tcBuild(currentMode), 50);
    tcToast('↩ 已重置为默认值');
  });
  saveBtn.addEventListener('click', () => {
    const data = { mode: currentMode, params: { ...currentParams } };
    localStorage.setItem('tc-3d-saved-' + currentMode, JSON.stringify(data));
    tcToast('💾 已保存到本地');
  });

  /* ===== 拦截 appSwitch，同步控制面板 ===== */
  const _origSwitch = window.appSwitch;
  window.appSwitch = function(mode) {
    _origSwitch(mode);
    // 尝试恢复保存的参数
    const saved = localStorage.getItem('tc-3d-saved-' + mode);
    if (saved) {
      try {
        const { params } = JSON.parse(saved);
        if (params) {
          // 不自动恢复，但可手动加载
        }
      } catch (e) {}
    }
    setTimeout(() => tcBuild(mode), 80);
  };

  // 初始化第一个效果的控制面板
  setTimeout(() => tcBuild(currentMode), 200);
})();
/* >>> 3D 控制面板脚本结束 <<< */
