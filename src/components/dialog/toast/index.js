import Vue from 'vue'
import ToastComponent from './toast.vue'
import { pageScroll } from '../common/utils'

var instance
var ToastConstructor = Vue.extend(ToastComponent)

ToastConstructor.prototype.closeToast = () => {
  pageScroll.unlock()
  var el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
}

var initInstance = () => {
  instance = new ToastConstructor()
  instance.$mount()
  document.body.appendChild(instance.$el)
}

var Toast = (options = {}) => {
  pageScroll.lock()
  initInstance()
  instance.$props.msg = options.msg || ''
  instance.$props.timeout = options.timeout || 2000

  const timer = setTimeout(() => {
    clearTimeout(timer)
    instance.closeToast()
  }, instance.timeout + 100)
}

export default Toast
