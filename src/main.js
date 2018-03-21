import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import Modal from './components/Modals'

require('./styles/designx.scss')

Vue.directive('modal' ,{
  bind(el,binding,vnode){
    el.addEventListener('click', () => {
      document.getElementById(binding.arg).style.display = 'block'
    })
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
