import Vue from 'vue'
import App from './App.vue'
import router from '../scripts/router'

require('./styles/designx.scss')

new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
