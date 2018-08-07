// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import '@/assets/font/font-icon/font-awesome/css/font-awesome.css'
import '@/assets/font/font-icon/font-flaticon/flaticon.css'
import '@/assets/libs/bootstrap/css/bootstrap.min.css'
import '@/assets/libs/animate/animate.css'
import '@/assets/libs/slick-slider/slick.css'
import '@/assets/libs/slick-slider/slick-theme.css'
import '@/assets/libs/selectbox/css/jquery.selectbox.css'
import '@/assets/libs/please-wait/please-wait.css'
import '@/assets/libs/fancybox/css/jquery.fancybox.css'
import '@/assets/libs/fancybox/css/jquery.fancybox-buttons.css'
import '@/assets/libs/fancybox/css/jquery.fancybox-thumbs.css'
import '@/assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css'
import '@/assets/css/layout.css'
import '@/assets/css/components.css'
import '@/assets/css/responsive.css'
import '@/assets/css/color.css'

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
