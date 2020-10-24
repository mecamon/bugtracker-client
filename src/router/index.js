import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Superuser from '../views/Superuser.vue'
import Companies from '../views/Companies.vue'
import Usersmenu from '../views/UsersMenu.vue'
import TechsMenu from '../views/TechsMenu.vue'
import SupervisorsMenu from '../views/SupervisorsMenu.vue'
import PendingUsers from '../views/PendingUsers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/superuser',
    name: 'Superuser',
    component: Superuser,
    beforeEnter: (to, from, next) => {
      if (to.path === '/superuser/companies' && localStorage.getItem('token')) {
        next()
      }else {
        next(false)
      }
    },
    children: [
      {
        path: 'companies',
        component: Companies,
      }
    ]
  },
  {
    path: '/users-menu',
    name: 'UsersMenu',
    component: Usersmenu,
    beforeEnter: (to, from, next) => {
      if (to.path === '/users-menu/pending' && localStorage.getItem('token')) {
        next()
      }else {
        next(false)
      }
    },
    children: [
      {
        path: 'pending',
        component: PendingUsers
      }
    ]
  },
  {
    path: '/techs-menu',
    name: 'TechsMenu',
    component: TechsMenu,
    beforeEnter: (to, from, next) => {
      if (to.path === '/techs-menu' && localStorage.getItem('token')) {
        next()
      }else {
        next(false)
      }
    },
  },
  {
    path: '/supervisors-menu',
    name: 'SupervisorsMenu',
    component: SupervisorsMenu,
    beforeEnter: (to, from, next) => {
      if (to.path === '/supervisors-menu' && localStorage.getItem('token')) {
        next()
      }else {
        next(false)
      }
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
