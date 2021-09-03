import { createRouter, createWebHashHistory } from 'vue-router'

// 1. 创建路由规则
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/layout/index.vue'),
    // 子路由
    children: [
      // 首页：默认子路由
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/index.vue'),
      },
      // 问答页
      {
        path: '/qa',
        name: 'qa',
        component: () => import('../views/qa/index.vue'),
      },
      // 视频页
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/video/index.vue'),
      },
      // 我的个人页
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my/index.vue'),
      },
    ],
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
