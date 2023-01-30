import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $auth: resolve('./src/auth'),
      $components: resolve('./src/components'),
      $db: resolve('./src/db'),
      $icons: resolve('./src/icons'),
      $lib: resolve('./src/lib'),
      $routes: resolve('./src/routes'),
      $src: resolve('./src')
    }
  }
};

export default config;
