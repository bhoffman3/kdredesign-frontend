import { createRouter, createWebHistory } from 'vue-router'

import KDHome from '../views/KDHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: KDHome
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
