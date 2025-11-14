import { pa } from 'element-plus/es/locales.mjs'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/pages/404.vue'),
  },
  {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
  },

  ],
})

export default router
