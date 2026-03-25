import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  root: '.',
  // 仅生产构建时设置 GitHub Pages 路径，开发时保持 /
  base: command === 'build' ? '/3DProcedural_Ecosystem/' : '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}));
