# hasaki-ui

一款基于 Element-Plus 开发的 UI 组件库,适用于 vue3,大多为 PC 端后台管理系统常用组件.

---

## 技术栈

> vue3+vite+ts+ElementPlus

## 启动方式

- cd hasaki-ui
- pnpm install
- pnpm run dev  
  项目启动后即可查阅相关组件使用示例.

---

## 安装使用

本项目支持全局安装和按需导入,因为项目依赖于 Element-Plus,所以使用前需要对其进行安装.

- pnpm install element-plus
- pnpm install hasaki-ui

### 全局安装

```
import { createApp } from 'vue'
import App from './App.vue'
// 引入Element-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入HasakiUI
import HasakiUI from 'hasaki-ui'
import 'hasaki-ui/hasaki-ui/style.css' // 引入组件样式

const app = createApp(App)
app.use(HasakiUI)
app.use(ElementPlus)

app.mount('#app')
```

### 按需导入示例

`import { ElTablePagination } from 'hasaki-ui'`
