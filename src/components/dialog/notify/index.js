import Vue from 'vue'
import NotifyComponent from './notify.vue'

let instance = null
let timer = null
let flag = false

const NotifyConstructor = Vue.extend(NotifyComponent)

NotifyConstructor.prototype.closeNotify = () => {
  instance.$el.classList.add('pf-notify-out')

  timer = setTimeout(() => {
    const el = instance.$el
    el.parentNode && el.parentNode.removeChild(el)
    flag = false
  }, 20)
}

const Notify = (options = {}) => {
  // 同时只能有一个notify
  if (flag) return
  flag = true

  // 创建挂载点并初始化
  instance = new NotifyConstructor({
    el: document.createElement('div'),
    propsData: options
  })
  document.body.appendChild(instance.$el)

  // 单机关闭通知
  instance.$el.addEventListener('click', () => {
    clearTimeout(timer)
    instance.closeNotify()
  })

  timer = setTimeout(() => {
    clearTimeout(timer)
    instance.closeNotify()
  }, instance.timeout)
}

export default Notify
