import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', 'd3'],
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  // server: {
  //   port: 3000,
  //   open: true,
  // }
});