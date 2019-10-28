import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import list from '@/pages/list'
import login from '@/pages/login'
import reg from '@/pages/reg'
import shopcar from '@/pages/shopcar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
     {
      path: '/list',
      name: 'list',
      component: list
    },
     {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component:reg
    },
     {
      path: '/shopcar',
      name: 'shopcar',
      component:shopcar
    },
    
    
  ]
})
