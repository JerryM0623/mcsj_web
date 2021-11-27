import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/index.vue'

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
    component:() => import('@/views/About/index.vue'),
    meta:{
      title:'关于星百汇'
    }
  },
  {
    path:'/product',
    name:'product',
    component:() => import('@/views/Product/index.vue'),
    meta:{
      title:'产品展示'
    }
  },
  {
    path:'/business',
    name:'business',
    component:() => import('@/views/Business/index.vue'),
    meta:{
      title:'商学院'
    }
  },
  {
    path:'/consult',
    name:'consult',
    component:() => import('@/views/Consult/index.vue'),
    meta:{
      title:'媒体资讯'
    },
    children:[
      {
        path:'news',
        name:'newsDetail',
        component:() => import('@/views/Consult/News/index.vue')
      }
    ]
  },
  {
    path:'/VRshow',
    name:'VRshow',
    component:() => import('@/views/VRshow/index.vue'),
    meta:{
      title:'VR展厅'
    }
  },
  {
    path: '/contact',
    name:'contact',
    component:() => import('@/views/Contact/index.vue'),
    meta:{
      title:'联系我们'
    }
  },
  {
    path:'/join',
    name:'join',
    component: () => import('@/views/Join/index.vue'),
    meta:{
      title:'加入我们'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
