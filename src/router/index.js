import { pa } from 'element-plus/es/locales.mjs'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/ai-coding',
    name: 'AI_Coding',
    component: () => import('@/views/AI_Coding.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
  },
  {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
  },

  ],
})

export default router
