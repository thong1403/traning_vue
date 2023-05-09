// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'
import store from './store'

Vue.use(Vuex)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
