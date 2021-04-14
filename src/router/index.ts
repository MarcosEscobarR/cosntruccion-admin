import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/construction/ConstructionIndex.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/construccion/nuevo',
    name: 'newContruction',
    component: () => import('../views/construction/NewContruction.vue')
  },
  {
    path: '/construccion/:id/movimientos',
    name: 'movements',
    component: () => import('../views/construction/Movements.vue')
  },
  {
    path: '/usuarios',
    name: 'users',
    component: () => import('../views/user/index.vue')
  },
  {
    path: '/usuarios/nuevo',
    name: 'newUser',
    component: () => import('../views/user/NewUser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
