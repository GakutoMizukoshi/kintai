import Vue from 'vue'
import VueRouter from 'vue-router'

import PhotoList from './pages/Main.vue'
import Login from './pages/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: PhotoList
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// App.vueで使用するためexport
export default router
