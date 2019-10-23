import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Profile from './components/profile.vue'
import punchBag from './components/punchbag.vue'
import Canvass from './components/canvas.vue'

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
    ,

    {
        path: "/canvas",
        component: Canvass
    },

    {
        path: "/punchbag",
        component: punchBag
    }
    ]
    
})

export default router
