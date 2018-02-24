import Vue from 'vue'
import Router from 'vue-router'
import Module from '../custom/Module'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Module
    },
    {
      path: '/:moduleId/',
      name: 'module',
      component: Module
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
