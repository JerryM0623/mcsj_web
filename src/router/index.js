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
        path: '/about',
        name: 'about',
        component: () => import('@/views/About/index.vue'),
        meta: {
            title: '关于星百汇'
        }
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('@/views/Product/index.vue'),
        meta: {
            title: '产品展示'
        },
        children: [
            {
                path: 'window',
                name: 'window',
                component: () => import('@/views/Product/Window/index.vue'),
                meta:{
                    title:'窗系列'
                },
                children: [
                    {
                        path: 'window-goods/:id',
                        name: 'windowGoods',
                        component: () => import('@/views/Product/Window/WindowGoods/index.vue'),
                        meta:{
                            title:'商品详情'
                        }
                    }
                ]
            },
            {
                path: 'door',
                name: 'door',
                component: () => import('@/views/Product/Door/index.vue'),
                meta:{
                    title:'门系列'
                },
                children: [
                    {
                        path: 'door-goods/:id',
                        name: 'doorGoods',
                        component: () => import('@/views/Product/Door/DoorGoods/index.vue'),
                        meta:{
                            title:'商品详情'
                        }
                    }
                ]
            },
            {
                path: 'house',
                name: 'house',
                component: () => import('@/views/Product/House/index.vue'),
                meta:{
                    title:'房系列'
                },
                children: [
                    {
                        path: 'house-goods/:id',
                        name: 'HouseGoods',
                        component: () => import('@/views/Product/House/HouseGoods/index.vue'),
                        meta:{
                            title:'商品详情'
                        }
                    }
                ]
            },
        ]
    },
    {
        path: '/business',
        name: 'business',
        component: () => import('@/views/Business/index.vue'),
        meta: {
            title: '商学院'
        }
    },
    {
        path: '/consult',
        name: 'consult',
        component: () => import('@/views/Consult/index.vue'),
        meta: {
            title: '媒体资讯'
        },
        children: [
            {
                path: 'news/:id',
                name: 'newsDetail',
                component: () => import('@/views/Consult/News/index.vue')
            }
        ]
    },
    {
        path: '/VRshow',
        name: 'VRshow',
        component: () => import('@/views/VRshow/index.vue'),
        meta: {
            title: 'VR展厅'
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact/index.vue'),
        meta: {
            title: '联系我们'
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
