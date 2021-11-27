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
    component:() => import('@/views/About'),
    meta:{
      title:'关于星百汇'
    }
  },
  {
    path:'/product',
    name:'product',
    component:() => import('@/views/Product'),
    meta:{
      title:'产品展示'
    }
  },
  {
    path:'/business',
    name:'business',
    component:() => import('@/views/Business'),
    meta:{
      title:'商学院'
    }
  },
  {
    path:'/consult',
    name:'consult',
    component:() => import('@/views/Consult'),
    meta:{
      title:'媒体资讯'
    }
  },
  {
    path:'/VRshow',
    name:'VRshow',
    component:() => import('@/views/VRshow'),
    meta:{
      title:'VR展厅'
    }
  },
  {
    path: '/contact',
    name:'contact',
    component:() => import('@/views/Contact'),
    meta:{
      title:'联系我们'
    }
  },
  {
    path:'/join',
    name:'join',
    component: () => import('@/views/Join'),
    meta:{
      title:'加入我们'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
