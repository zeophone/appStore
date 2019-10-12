import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Commission from './views/Commission.vue'
import Login from './views/Login.vue'
import Money from './views/Money.vue'
import Income from './views/Income.vue'
import Record from './views/Record.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: { requiresAuth: true }
        },
        {
            path: '/',
            name: 'commission',
            component: Commission,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/money',
            name: 'money',
            component: Money,
            meta: { requiresAuth: true }
        },
        {
            path: '/income',
            name: 'income',
            component: Income,
            meta: { requiresAuth: true }
        },
        {
            path: '/record',
            name: 'record',
            component: Record,
            meta: { requiresAuth: true }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem('wfx_token')) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    }else{
        if (localStorage.getItem('wfx_token')) {
            next({
                path: '/'
            })
        } else {
            next()
        }
    }
})

export default router;