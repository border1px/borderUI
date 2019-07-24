<script>

function ClosureFactory (child, delay, context) {
  return function boDebounce (params) {
    child.timer && clearTimeout(child.timer)
    child.timer = setTimeout(function () {
      child.call(context, params)
    }, delay)
  }
}

// 导出新组件
export default {
  props: {
    events: {
      type: String,
      default: ''
    },
    delay: {
      type: Number,
      default: 500
    }
  },
  name: 'bo-debounce',
  data () {
    return {}
  },
  mounted () {
    console.log('HOC succeed')
  },
  render (h) {
    var slots = Object.keys(this.$slots)
      .reduce((arr, key) => arr.concat(this.$slots[key]), [])
      .map(vnode => {
        vnode.context = this
        return vnode
      })
    var vNode = slots[0]
    if (slots.length > 1) {
      console.warn('<bo-debounce> 内部只能包含单个组件')
      return
    }

    // 判断内部是组件/原生组件
    var isComp = vNode.componentOptions
    var eventList = []
    var eventProp = []
    var eventBind = isComp
      ? Object.keys(vNode.componentOptions.listeners)
      : Object.keys(vNode.data.on);
    (this.events) && (eventProp = this.events.split(','))

    // 找到prop中与实际绑定共同存在的事件
    eventProp.forEach((event, index) => {
      if (eventBind.some(resolve => resolve.number === event.number)) {
        eventList.push(event)
      }
    })

    if (eventList.length === 0) { eventList = eventBind }
    console.log(eventList)
    eventList.forEach(event => {
      const defaultFun = isComp
        ? vNode.componentOptions.listeners[event]
        : vNode.data.on[event]

      const debounceFun = ClosureFactory(defaultFun, this.delay, this) // 获取节流函数
      isComp
        ? vNode.componentOptions.listeners[event] = debounceFun
        : vNode.data.on[event] = debounceFun
    })
    return slots
  }
}
</script>
