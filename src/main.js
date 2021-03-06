import Vue from 'vue'
import App from './App.vue'
import routers from './router/index'
import Router from "vue-router"
import Element from "element-ui"
import store from "./store/index"
// 全局导入element样式和自定义样式
import 'element-ui/lib/theme-chalk/index.css';
import './styles/global.css'
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(Element)
new Vue({
  router:routers,
  store,
  render: h => h(App),
}).$mount('#app')
