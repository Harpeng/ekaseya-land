import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[hash:8].${new Date().getTime()}.[ext]`,
        chunkFileNames: `assets/[name].[hash:8].${new Date().getTime()}.js`,
        entryFileNames: `assets/[name].[hash:8].${new Date().getTime()}.js`,
      }
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
