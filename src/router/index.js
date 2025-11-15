import { pa } from 'element-plus/es/locales.mjs'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home/recommend'
    },
    {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '稀土掘金' },
    children: [
      {
        path: 'recommend',
        name: 'Recommend',
        component: () => import('@/components/Recommend.vue'),
        meta: { title: '推荐' }
      },
      {
        path: 'latest',
        name: 'Latest',
        component: () => import('@/components/Latest.vue'),
        meta: { title: '最新' }
      }
    ]
  },
  {
    path: '/ai-coding',
    name: 'AI_Coding',
    component: () => import('@/views/AI_Coding.vue'),
  },
  {
    path: '/hotpoint',
    name: 'Hotpoint',
    component: () => import('@/views/Hotpoint.vue'),
    meta: { title: '沸点' }
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

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router
