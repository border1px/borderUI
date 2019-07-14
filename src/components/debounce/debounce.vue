<script>
function debounce (func, delay, context, event) {
  func.timer && clearTimeout(func.timer)
  func.timer = setTimeout(function () {
    func.call(context, event)
  }, delay)
}
// 导出新组件
export default {
  props: {},
  name: 'bo-debounce',
  data () {
    return {}
  },
  mounted () {
    console.log('HOC succeed')
  },
  methods: {
    handleClickLink (event) {
      let that = this
      console.log('debounce')
      // that.$listeners.click为绑定在新组件上的click函数
      debounce(that.$listeners.click, 300, that, event)
    }
  },
  render (h) {
    const slots = Object.keys(this.$slots)
      .reduce((arr, key) => arr.concat(this.$slots[key]), [])
      .map(vnode => {
        vnode.context = this._self
        return vnode
      })
    return h('div', {
      abstract: true,
      on: {
        click: this.handleClickLink // 新组件绑定click事件
      },
      props: this.$props,
      // 透传 scopedSlots
      scopedSlots: this.$scopedSlots,
      attrs: this.$attrs
    }, slots)
  }
}
</script>
