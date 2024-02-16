import { createRouter, createWebHistory } from 'vue-router'

import HomeLayout from '@/layout/HomeLayout.vue'

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '', name: 'home', component: () => import('@/views/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router