import { createRouter, createWebHistory } from 'vue-router'
import UserList from '@/views/User/List/Index.vue'

const routes = [
    {
        path: '/',
        name: 'UserList',
        component: UserList
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
