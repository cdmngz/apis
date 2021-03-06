import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/SpaceX.vue')
  },
  {
    path: '/cl',
    name: 'Cl',
    component: () => import('../views/cl.vue')
  },
  {
    path: '/ar',
    name: 'Ar',
    component: () => import('../views/ar.vue')
  },
  {
    path: '/spacex',
    name: 'SpaceX',
    component: () => import('../views/SpaceX.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
