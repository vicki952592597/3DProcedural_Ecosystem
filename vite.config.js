import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  // GitHub Pages 部署路径
  base: '/3DProcedural_Ecosystem/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
