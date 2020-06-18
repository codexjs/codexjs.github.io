import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/Components.vue')
  }, {
    path: "*",
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router