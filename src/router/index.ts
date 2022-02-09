import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './router-components'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
