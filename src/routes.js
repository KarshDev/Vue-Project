import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Profile from './components/profile.vue'

Vue.use(Router)

const router = new Router({
    routes: [
    {
        path: "/login",
        component: Login
    },

    {
        path: "/register",
        component: Register
    },

    {
        path: "/profile",
        component: Profile
    }

    ]
    
})

export default router
