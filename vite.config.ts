import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import WindiCSS from 'vite-plugin-windicss'
import Markdown from 'vite-plugin-vue-markdown'
// import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hasaki-ui/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),
    Markdown()
  ],
  build: {
    outDir: 'hasaki-ui', //输出文件名称
    lib: {
      entry: fileURLToPath(new URL('./src/components/hasaki-ui/index.ts', import.meta.url)), //指定组件编译入口文件
      name: 'hasaki-ui',
      fileName: 'hasaki-ui'
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vue-router'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }, // rollup打包配置
    terserOptions: {
      // 在打包代码时移除 console、debugger 和 注释
      compress: {
        /* (default: false) -- Pass true to discard calls to console.* functions.
          If you wish to drop a specific function call such as console.info and/or
          retain side effects from function arguments after dropping the function
          call then use pure_funcs instead
        */
        drop_console: true, // 生产环境时移除console
        drop_debugger: true // 生产环境时移除debugger
      },
      format: {
        comments: false // 删除注释comments
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
