import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import list from '@/pages/list/list'
import stats from '@/pages/stats/stats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/stats',
      name: 'stats',
      component: stats
    }
  ]
})
