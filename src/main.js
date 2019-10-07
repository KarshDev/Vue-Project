import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')