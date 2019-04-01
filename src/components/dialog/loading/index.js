import Vue from 'vue'
import LoadingComponent from './loading.vue'
import { pageScroll } from '../common/utils'

var LoadingConstructor = Vue.extend(LoadingComponent)
var instance = new LoadingConstructor()

LoadingConstructor.prototype.close = () => {
  pageScroll.unlock()
  var el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
}

LoadingConstructor.prototype.open = (options = {}) => {
  pageScroll.lock()
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.$props.msg = options.msg || ''
  instance.$props.timeout = options.timeout || 2000
}

export default {
  open: instance.open,
  close: instance.close
}
