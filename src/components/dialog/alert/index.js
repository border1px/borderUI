import Vue from 'vue'
import AlertComponent from './alert.vue'
import { pageScroll } from '../common/utils'

var instance
var AlertConstructor = Vue.extend(AlertComponent)
let initInstance = () => {
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

var Alert = (options = {}) => {
  return new Promise((resolve, reject) => {
    pageScroll.lock()
    initInstance()
    Object.assign(instance, options, { resolve, reject })
  })
}

export default Alert
