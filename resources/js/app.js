require('./bootstrap');

import Vue from 'vue'
// vue-router ルーティングの定義をインポートする
import router from './router'
// vuex ストア
import store from './store'
// ルートコンポーネントをインポートする
import App from './App.vue'
// bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

const createApp = async () => {
  // currentuserを取得して、stateにセットしてからアプリを生成する
  await store.dispatch('auth/currentUser')

  new Vue({
    el: '#app',
    router, // ルーティングの定義を読み込む
    store, // ストアを読み込む
    components: { App }, // ルートコンポーネントの使用を宣言する
    template: '<App />' // ルートコンポーネントを描画する
  })
}

createApp()
