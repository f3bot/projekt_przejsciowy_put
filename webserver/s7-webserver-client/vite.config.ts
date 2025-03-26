import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/views/index/index.html'),
      },
    },
  },
  server: {
    watch:{
      
      usePolling: true,
    },
    hmr: {
      port:3000
    },
    proxy: {
      '/api': "http://localhost:3000",
    },
  },
});
