import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: () => import('@/views/a.vue') },
    { path: '/b', component: () => import('@/views/b.vue') },
    { path: '/c', component: () => import('@/views/c.vue') },
    { path: '/des', component: () => import('@/views/des.vue') },
    { path: '/teleport', component: () => import('@/views/teleport.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router