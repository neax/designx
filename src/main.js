import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

require('./styles/designx.scss')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
