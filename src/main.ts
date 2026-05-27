import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import HasakiUI from './components/hasaki-ui'

import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css'

import '@/style/base.scss'

const app = createApp(App)

app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

app.use(router)
app.use(ElementPlus)
app.use(HasakiUI)
app.mount('#app')
