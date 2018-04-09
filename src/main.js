import Vue from 'vue'
import App from './App.vue'
import router from './router'

require('normalize.css/normalize.css')
require('./styles/designx.css')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
