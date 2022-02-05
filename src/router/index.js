import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CodeOfConduct from '../views/CodeOfConduct.vue'
import Vote from '../views/vote.vue'
import AnonymousConcerns from "../views/AnonymousConcerns.vue"
import About from '../views/About.vue'

import MainEvent from '../views/main-event/MainEvent.vue'
import ServerApplication from '../views/main-event/ServerApplication.vue'
import Rules from '../views/main-event/Rules.vue'
import EpUpload from "../views/main-event/EpUpload.vue"

import ServerProfile from '../views/server/ServerProfile.vue'

import Admin from '../views/admin/Admin.vue'
import Dashboard from '../views/admin/Dashboard.vue'

import PageNotFound from '../views/PageNotFound.vue'

/* ===== Test vues ===== */

import MainTest from '../views/test-views/MainTest.vue'
import TractTest from '../views/test-views/TrackTest.vue'
import ValidatorTest from '../views/test-views/ValidatorTest.vue'

Vue.use(VueRouter)

// TODO: Should be done in an auth plugin
const isAdmin = false

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vote',
    component: Vote
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/code-of-conduct',
    component: CodeOfConduct
  },
  {
    path: '/server/:id',
    name: 'ServerProfile',
    component: ServerProfile
  },
  {
    path: '/main-event',
    name: 'MainEvent',
    component: MainEvent,
    children: [
      {
        path: 'server-application',
        component: ServerApplication
      },
      {
        path: 'rules',
        component: Rules
      },
      {
        path: 'ep-upload',
        name: 'EpUpload',
        component: EpUpload
      }
    ]
  },
  {
    path: '/server-application',
    name: 'ServerApplication',
    component: ServerApplication
  },
  {
    path: '/admin',
    name: 'Admin',
    redirect: '/admin/dashboard',
    component: Admin,
    beforeEnter: (to, from, next) => {
      if (!isAdmin) {
        next('home')
      } else {
        next()
      }
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: MainTest,
    children: [
      {
        path: 'track',
        name: 'Track',
        component: TractTest
      },
      {
        path: 'validator',
        name: 'Validator',
        component: ValidatorTest
      }
    ]
  },
  {
    path: '/anonymous-concerns',
    name: 'AnonymousConcerns',
    component: AnonymousConcerns
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: '404',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
      behavior: 'smooth'
    }
  }
})

export default router
