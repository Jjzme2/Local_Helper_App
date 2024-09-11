import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', // Set root to the client directory
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('../server/_assets', import.meta.url)),
      '@models': fileURLToPath(new URL('../server/_models', import.meta.url)),
      '@services': fileURLToPath(new URL('../server/_services', import.meta.url))
    }
  }
})
