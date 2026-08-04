import Vue from 'vue'
import AlertComponent from './alert.vue'
import { pageScroll } from '../../../utils/utils'

let instance
const AlertConstructor = Vue.extend(AlertComponent)
const initInstance = () => {
  instance = new AlertConstructor({
    el: document.createElement('div')
  })
  // instance.$mount();
  document.body.appendChild(instance.$el)
}

AlertConstructor.prototype.closeAlert = () => {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
  pageScroll.unlock()
  instance.resolve()
}

const Alert = (options = {}) => {
  return new Promise((resolve, reject) => {
    pageScroll.lock()
    initInstance()

    // instance.$props.msg = options.msg || ''
    // instance.$props.title = options.title || ''
    // instance.$props.buttonText = options.buttonText || '确定'
    Object.assign(instance, options, { resolve, reject })
  })
}

export default Alert
