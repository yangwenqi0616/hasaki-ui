import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: '组件页面',
    component: () => import('@/views/home-page.vue'),
    redirect: '/el-table-pagination',
    children: [
      {
        path: '/el-table-pagination',
        name: '分页表格',
        // @ts-ignore
        component: () => import('@/components/hasaki-ui/ElTablePagination/doc/doc.md')
      },
      {
        path: '/select-tree',
        name: '树选择器',
        // @ts-ignore
        component: () => import('@/components/hasaki-ui/SelectTree/doc/doc.md')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
