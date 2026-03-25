/**
 * procedural-3d-ecosystem
 * 全维度数字资产基建 (Procedural Infrastructure)
 *
 * 史诗级零外部资产依赖的程序化 3D 生态核心库
 * 基于 Three.js (WebGL2) | OOP 范式 | Tree-shaking 友好
 */

// === Core 核心基建 ===
export { DeterministicRNG } from './core/DeterministicRNG.js';
export { UniformsManager } from './core/UniformsManager.js';
export { GarbageCollector } from './core/GarbageCollector.js';
export { ShaderChunk } from './core/ShaderChunk.js';
export { ProceduralEntity } from './core/ProceduralEntity.js';
export { ProceduralMaterial } from './core/ProceduralMaterial.js';
export { ProceduralFactory } from './core/ProceduralFactory.js';

// === Flora 植物生态系 ===
export { LSystem } from './flora/LSystem.js';
export { PhyllotaxisEngine } from './flora/PhyllotaxisEngine.js';
export { BionicFlower } from './flora/BionicFlower.js';
export { TroisFlower } from './flora/TroisFlower.js';
export { Dahlia } from './flora/Dahlia.js';
export { Tulip } from './flora/Tulip.js';

// === Fauna 仿生动力系 ===
export { VertexKinematics } from './fauna/VertexKinematics.js';
export { BoidsFlocking } from './fauna/BoidsFlocking.js';
export { BionicButterfly } from './fauna/BionicButterfly.js';

// === Abstract 高阶数学场 ===
export { SimplexNoise4D } from './abstract/SimplexNoise4D.js';
export { SDFPrimitives } from './abstract/SDFPrimitives.js';
export { MandelbulbFractal } from './abstract/MandelbulbFractal.js';

// === Atmospheric 环境体积系 ===
export { FBMNoise } from './atmospheric/FBMNoise.js';
export { VolumetricEngine } from './atmospheric/VolumetricEngine.js';
export { AuroraBorealis } from './atmospheric/AuroraBorealis.js';

// === Vanta 视觉效果集 (移植自 vantajs.com) ===
export { VantaEffect } from './vanta/VantaEffect.js';
export { Vanta3DEffect } from './vanta/Vanta3DEffect.js';
export { VantaHalo } from './vanta/VantaHalo.js';
export { VantaFog, VantaCells, VantaClouds, VantaRipple } from './vanta/VantaShaderEffects.js';
export { VantaBirds } from './vanta/VantaBirds.js';
export { VantaNet, VantaWaves, VantaDots, VantaRings, VantaGlobe } from './vanta/Vanta3DEffects.js';
export { VantaClouds2, VantaTopology, VantaTrunk } from './vanta/VantaCanvasEffects.js';
