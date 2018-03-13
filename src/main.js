import Vue from 'vue'
import App from './App.vue'
import router from './router'

require('./styles/designx.scss')



new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
