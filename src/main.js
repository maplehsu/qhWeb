// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import '@/assets/css/normalize.css'
import '@/assets/css/style.css'
import API from '../config/api'

Vue.config.productionTip = false

Vue.prototype.axios = Axios

Vue.prototype.api = API

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})