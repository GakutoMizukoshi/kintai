import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './pages/Main.vue'
import Login from './pages/Login.vue'

import store from './store'

import SystemError from './pages/errors/System.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/loginForm',
    component: Login,
    // コンポーネントが切り替わる直前に呼ばれる
    beforeEnter (to, from, next) {
      // ログイン状態の場合、
      if (store.getters['auth/check']) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/500',
    component: SystemError
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// App.vueで使用するためexport
export default router
