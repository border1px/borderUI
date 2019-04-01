import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.css'
import './assets/styles/index.css'
import './assets/iconfont/iconfont.css'
import Dialog from './components/dialog/'
Vue.config.productionTip = false
Vue.use(Dialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
