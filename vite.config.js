import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    open: true
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ProceduralEcosystem',
      formats: ['es', 'umd'],
      fileName: (format) => `procedural-ecosystem.${format}.js`
    },
    rollupOptions: {
      external: ['three'],
      output: {
        globals: {
          three: 'THREE'
        }
      }
    }
  }
});
