import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '',
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      widgets: '/src/widgets',
      features: '/src/features',
      shared: '/src/shared',
      styles: '/src/styles',
      assets: '/src/assets',
    },
  },
});
