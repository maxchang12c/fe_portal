import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './router-components.ts'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
