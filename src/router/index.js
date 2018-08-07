import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import About from '@/view/about'
import Strategy from '@/view/strategy'
import StrategyInfo from '@/view/strategyInfo'
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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: Strategy
    },
    {
      path: '/strategyInfo',
      name: 'strategyInfo',
      component: StrategyInfo
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})

export default router
