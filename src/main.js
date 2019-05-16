import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers.js'
import App from './App.vue'

import './assets/styles/reset.css'
import './assets/styles/index.styl'
import './assets/iconfont/iconfont.css'
import './style/iconfont/iconfont.css'
import Dialog from './components/dialog'
import Icon from './components/icon'
import Button from './components/button'
import Picker from './components/picker'
import Page from './components/page'
import Tabbar from './components/tabbar'
import Navbar from './components/navbar'
import Subnavbar from './components/subnavbar'
import Toolbar from './components/toolbar'
import ButtonGroup from './components/button_group'
Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
Vue.component(Picker.name, Picker)
Vue.component(Page.name, Page)
Vue.component(Tabbar.name, Tabbar)
Vue.component(Navbar.name, Navbar)
Vue.component(Subnavbar.name, Subnavbar)
Vue.component(Toolbar.name, Toolbar)
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
