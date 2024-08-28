import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    // base: '/Local_Helper_App/',
	plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Example: import { employees, imageDirectory } from '@/_assets/employees'
	  '@assets': fileURLToPath(new URL('./src/_assets', import.meta.url)), // Example: import { employees, imageDirectory } from '@assets/employees'
	  '@models': fileURLToPath(new URL('./src/_models', import.meta.url)), // Example: import { employees, imageDirectory } from '@models/employees'
	  '@services': fileURLToPath(new URL('./src/_services', import.meta.url)), // Example: import { employees, imageDirectory } from '@services/employees'
    }
  }
})
