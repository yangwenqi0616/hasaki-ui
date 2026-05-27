import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import WindiCSS from 'vite-plugin-windicss'
import Markdown from 'vite-plugin-vue-markdown'
// import Markdown from 'vite-plugin-md'

export default defineConfig({
  base: '/hasaki-ui/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),
    Markdown()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // 不需要指定入口，使用 index.html
    outDir: 'dist',
    // 如果不需要 Terser，删除相关配置
    minify: 'esbuild' // Vite 默认使用 esbuild
  }
})
