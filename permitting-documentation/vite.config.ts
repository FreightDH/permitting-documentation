import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '',
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      components: '/src/components',
      sections: '/src/sections',
      styles: '/src/styles',
      assets: '/src/assets',
    },
  },
});
