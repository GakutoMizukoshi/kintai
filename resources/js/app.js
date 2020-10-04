// require('./bootstrap');

import Vue from 'vue'
// ルーティング
import router from './router'
// ルートコンポーネント
import App from './App.vue'

new Vue({
  el: '#app',
  router, // ルーティング
  components: { App }, // ルートコンポーネントの使用を宣言
  template: '<App />' // ルートコンポーネントを描画
})
