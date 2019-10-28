import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'

Vue.use(BootstrapVue)
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
