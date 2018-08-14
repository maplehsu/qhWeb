import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import About from '@/view/about'
import Strategy from '@/view/strategy'
import StrategyInfo from '@/view/strategyInfo'
import Path from '@/view/path'
import PathInfo from '@/view/pathInfo'
import Loop from '@/view/loop'
import LoopInfo from '@/view/loopInfo'
import Info from '@/view/info'
import Car from '@/view/car'
import CarInfo from '@/view/carInfo'
import Contact from '@/view/contact'

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
    },
    {
      path: '/path',
      name: 'path',
      component: Path
    },
    {
      path: '/pathInfo',
      name: 'pathInfo',
      component: PathInfo
    },
    {
      path: '/loopInfo',
      name: 'loopInfo',
      component: LoopInfo
    },
    {
      path: '/loop',
      name: 'loop',
      component: Loop
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/carInfo',
      name: 'carInfo',
      component: CarInfo
    }
  ]
})

export default router
