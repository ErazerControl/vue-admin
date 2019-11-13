import Vue from 'vue'
import App from './App.vue'
import routers from './router/index'
import Router from "vue-router"
Vue.config.productionTip = false
Vue.use(Router)
new Vue({
  router:routers,
  render: h => h(App),
}).$mount('#app')
