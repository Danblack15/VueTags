import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage/HomePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
