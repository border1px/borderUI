import Vue from 'vue'
import ToastComponent from './toast.vue'
import { pageScroll } from '../../../utils/utils'

let instance
const ToastConstructor = Vue.extend(ToastComponent)

ToastConstructor.prototype.closeToast = () => {
  pageScroll.unlock()
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
}

const initInstance = () => {
  instance = new ToastConstructor()
  instance.$mount()
  document.body.appendChild(instance.$el)
}

const Toast = (options = {}) => {
  pageScroll.lock()
  initInstance()
  if (typeof options === 'string' || typeof options === 'number') {
    instance.$props.msg = options
  } else {
    instance.$props.msg = options.msg || ''
  }
  instance.$props.timeout = options.timeout || 2000

  const timer = setTimeout(() => {
    clearTimeout(timer)
    instance.closeToast()
  }, instance.timeout + 100)
}

export default Toast
