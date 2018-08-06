import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Info from '@/view/info'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})

export default router
