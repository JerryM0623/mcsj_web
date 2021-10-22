import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/about',
    name:'about',
    component:() => import('@/views/About')
  },
  {
    path:'/product',
    name:'product',
    component:() => import('@/views/Product')
  },
  {
    path:'/business',
    name:'business',
    component:() => import('@/views/Business')
  },
  {
    path:'/consult',
    name:'consult',
    component:() => import('@/views/Consult')
  },
  {
    path:'/VRshow',
    name:'VRshow',
    component:() => import('@/views/VRshow')
  },
  {
    path: '/contact',
    name:'contact',
    component:() => import('@/views/Contact')
  }
]

const router = new VueRouter({
  routes
})

export default router
