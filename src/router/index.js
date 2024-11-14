import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'test',
      component: () => import('../views/Test.vue')
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('../views/Pokemon.vue')
    },
  ]
})

export default router
