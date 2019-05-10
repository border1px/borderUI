import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers.js'
import App from './App.vue'

import './assets/styles/reset.css'
import './assets/styles/index.css'
import './assets/iconfont/iconfont.css'
import Dialog from './components/dialog'
import Button from './components/button'
import Picker from './components/picker'
import Layout from './components/layout'
import Navbar from './components/navbar'
import ButtonGroup from './components/button_group'
Vue.component(Button.name, Button)
Vue.component(Picker.name, Picker)
Vue.component(Layout.name, Layout)
Vue.component(Navbar.name, Navbar)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.use(Dialog)
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: routers
})

var APP_HANDLER = new Vue({
  router,
  data () {
    return {
      direction: ''
    }
  },
  render: h => h(App)
}).$mount('#app')

// 路由切换动画
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
router.beforeEach(function (to, from, next) {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      APP_HANDLER.direction = 'forward'
    } else {
      APP_HANDLER.direction = 'reverse'
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    APP_HANDLER.direction = 'forward'
  }
  next()
})
