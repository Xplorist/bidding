import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 axios
// import axios from 'axios'
// 引入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入 md5
import md5 from 'js-md5'

Vue.config.productionTip = false

// Vue.prototype.axios = axios
Vue.prototype.$md5 = md5

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
