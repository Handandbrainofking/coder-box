import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/canIUse',
            name: 'canIUse',
            component: () => import(/* webpackChunkName: "canIUse" */ '@views/base/canIUse.vue')
        },
        {
            path: '/getSystemInfo',
            name: 'getSystemInfo',
            component: () => import(/* webpackChunkName: "getSystemInfo" */ '@views/base/getSystemInfo.vue')
        },
        {
            path: '/goTo',
            name: 'goTo',
            component: () => import(/* webpackChunkName: "goTo" */ '@views/base/goTo.vue')
        },
        {
            path: '/log',
            name: 'log',
            component: () => import(/* webpackChunkName: "log" */ '@views/base/log.vue')
        },
        {
            path: '/router',
            name: 'router',
            component: () => import(/* webpackChunkName: "router" */ '@views/base/router.vue')
        },
        {
            path: '/getBatteryInfo',
            name: 'getBatteryInfo',
            component: () => import(/* webpackChunkName: "getBatteryInfo" */ '@views/device/getBatteryInfo.vue')
        },
    ]
})