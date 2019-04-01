
import Alert from './alert'
import Confirm from './confirm'
import Toast from './toast'
import Loading from './loading'
import Notify from './notify'

const Dialog = {
  install (Vue, options) {
    Vue.prototype.$alert = Alert
    Vue.prototype.$confirm = Confirm
    Vue.prototype.$toast = Toast
    Vue.prototype.$loading = Loading
    Vue.prototype.$notify = Notify
  }
}

export default Dialog
