import Vue from 'vue'
import { pageScroll } from '../../../utils/utils'
import ConfirmComponent from './confirm.vue'

var instance
var ConfirmConstructor = Vue.extend(ConfirmComponent)

var initInstance = () => {
  instance = new ConfirmConstructor()
  instance.$mount()
  document.body.appendChild(instance.$el)
}

ConfirmConstructor.prototype.closeConfirm = (index) => {
  pageScroll.unlock()
  var el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
  instance.resolve(index)
}

export default (options = {}) => {
  return new Promise((resolve, reject) => {
    pageScroll.lock()
    initInstance()
    Object.assign(instance, options, { resolve, reject })
  })
}

// export default confirm
