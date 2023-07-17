import { createRouter, createWebHistory } from 'vue-router'
import UserList from '@/views/User/List/Index.vue'
import UserDetails from '@/views/User/Details/Index.vue'

const routes = [
    {
        path: '/',
        name: 'UserList',
        component: UserList
    },
    {
        path: '/user/:login',
        name: 'UserDetails',
        component: UserDetails,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
