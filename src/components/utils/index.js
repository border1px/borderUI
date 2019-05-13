import Vue from 'vue'
const isServer = Vue.prototype.$isServer

function isDef (value) {
  return value !== undefined && value !== null
}
function isObj (x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}
function get (object, path) {
  const keys = path.split('.')
  let result = object
  keys.forEach(key => {
    result = this.isDef(result[key]) ? result[key] : ''
  })
  return result
}
function camelize (str) {
  return str.replace(/-(\w)/g, (_, c) => c.toUpperCase())
}
function isAndroid () {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase())
}
function range (num, min, max) {
  return Math.min(Math.max(num, min), max)
}

export {
  isDef,
  isObj,
  get,
  camelize,
  isAndroid,
  range
}
