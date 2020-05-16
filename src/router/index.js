import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/cl.vue')
  },
  {
    path: '/cl',
    name: 'CL',
    component: () => import('../views/cl.vue')
  },
  {
    path: '/ar',
    name: 'AR',
    component: () => import('../views/ar.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
