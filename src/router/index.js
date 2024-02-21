import { createRouter, createWebHistory } from 'vue-router'

import HomeLayout from '@/layout/HomeLayout.vue'

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      { path: '', name: 'home', component: () => import('@/views/landingpage/Home.vue') },
      { path: "aboutus", name: "aboutus", component: () => import('@/views/landingpage/Aboutus.vue') },
      { path: "contact", name: "contact", component: () => import('@/views/landingpage/Contact.vue') },
      { path: "cookies", name: "cookies", component: () => import ('@/views/landingpage/Cookies.vue') },
      { path: "decalogue", name: "decalogue", component: () => import ('@/views/landingpage/Decalogue.vue') },
      { path: "faq", name: "faq", component: () => import ('@/views/landingpage/Faq.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router