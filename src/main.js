import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers.js'
import App from './App.vue'

import './assets/styles/reset.css'
import './assets/styles/index.styl'
import './style/index.styl'
import './assets/iconfont/iconfont.css'
import './style/iconfont/iconfont.css'
import DemoItem from './components/demo-item'
import Dialog from './components/dialog'
import Switch from './components/switch'
import Icon from './components/icon'
import Button from './components/button'
import Picker from './components/picker'
import Page from './components/page'
import Tabbar from './components/tabbar'
import Navbar from './components/navbar'
import Subnavbar from './components/subnavbar'
import Toolbar from './components/toolbar'
import { Checkbox, CheckboxGroup } from './components/checkbox'
import { Radio, RadioGroup } from './components/radio'
import ButtonGroup from './components/button-group'
import { Cell, CellItem } from './components/cell'
import { Swipe, SwipeItem } from './components/swipe'
import Uploader from './components/uploader'

Vue.component(DemoItem.name, DemoItem)
Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch)
Vue.component(Picker.name, Picker)
Vue.component(Page.name, Page)
Vue.component(Tabbar.name, Tabbar)
Vue.component(Navbar.name, Navbar)
Vue.component(Subnavbar.name, Subnavbar)
Vue.component(Toolbar.name, Toolbar)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(Cell.name, Cell)
Vue.component(CellItem.name, CellItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Uploader.name, Uploader)
Vue.use(Dialog)
Vue.use(VueRouter)
const router = new VueRouter({
  // mode: 'history',
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
