import Vue from 'vue'
import App from './App.vue'
import create from "./utils/create";
import router from './krouter'
// import store from './store'
import store from './kstore'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// Vue.prototype.$create = create
Vue.use(create)

new Vue({
  // Vue.prototype.$router = router
  router,
  store,
  render: h => h(App)
}).$mount('#app')

