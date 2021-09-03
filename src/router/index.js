import { createRouter, createWebHashHistory } from 'vue-router'

// 1. 创建路由规则
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
  },
]

// 2. 创建路由实例
const router = createRouter({
  // 创建哈希路由模式
  history: createWebHashHistory(),
  // 指定路由配置规则
  routes,
})

// 3. 导出路由实例
export default router
