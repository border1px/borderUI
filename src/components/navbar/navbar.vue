<script>
import Utils from '../utils/utils'
import Mixins from '../utils/mixins'
import Icon from '../icon'
const NavbarProps = Utils.extend({
  backLink: [Boolean, String],
  title: String,
  inner: {
    type: Boolean,
    default: true
  }
}, Mixins.colorProps)
export default {
  name: 'bo-navbar',
  components: {

  },
  render (h) {
    const self = this
    const slots = self.$slots
    let innerEl
    let leftEl
    let titleEl
    let rightEl
    if (self.inner) {
      // 布尔值，只显示返回icon
      if (self.backLink && typeof self.backLink === 'boolean') {
        leftEl = h('div', {
          staticClass: 'left',
          on: {
            click: this.onBackClick
          }
        }, [
          h(Icon, {
            props: {
              name: 'fanhui'
            }
          })
        ])
      } else if (self.backLink && typeof self.backLink === 'string') {
        // string, 返回icon + 文字
        leftEl = h('div', {
          staticClass: 'left'
        }, [
          h(Icon, {
            props: {
              name: 'fanhui'
            }
          }), self.backLink])
      } else if (slots['nav-left']) {
        // [slot]nav-left, 显示自定义left
        leftEl = h('div', { staticClass: 'left' }, slots['nav-left'])
      } else {
        // 如果只有nav-right，保证位置正确
        leftEl = h('div', { staticClass: 'left' })
      }

      if (self.title || slots.title) {
        titleEl = h('div', { staticClass: 'title' }, self.title || slots.title)
      }

      if (slots['nav-right']) {
        rightEl = h('div', { staticClass: 'right' }, slots['nav-right'])
      }

      // 是否包含subnavar，有的话加class: navbar-with-subnavbar,用于控制page-content的padding
      let slotsDeault = this.$slots.default
      if (slotsDeault) {
        for (let i = 0; i < slotsDeault.length; i++) {
          var tag = slotsDeault[i].tag
          if (tag && tag.indexOf('subnavbar') >= 0) self.withSubnavbar = true
        }
      }

      innerEl = h('div', {
        ref: 'inner',
        staticClass: 'navbar-inner'
      }, [leftEl, titleEl, rightEl, this.$slots['default']])
    }
    return h('div', {
      staticClass: 'navbar',
      class: self.classes
    }, [self.$slots['before-inner'], innerEl, self.$slots['after-inner']])
  },
  props: NavbarProps,
  data () {
    return {
      withSubnavbar: false
    }
  },
  computed: {
    classes () {
      const self = this
      return Utils.extend({
        'navbar-with-subnavbar': self.withSubnavbar
      }, Mixins.colorClasses(self))
    }
  },
  methods: {
    onBackClick (e) {
      this.$emit('back-click', e)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../style/var';
.navbar
  background-color #FFF
  .navbar-inner
    position relative
    z-index 2
    height $navbar-height
    padding 0 $navbar-padding
    display flex
    align-items center
    justify-content: space-between
  .title
    position absolute
    z-index -1
    top 0
    left 0
    right 0
    bottom 0
    display flex
    justify-content center
    align-items center
    font-weight bold
    color $theme-textcolor
  .left,
  .right
    color $theme-color
    height $navbar-height
    line-height $navbar-height
    display: flex
    justify-content: flex-start
    align-items: center
  .right
    > div > *
      margin-left 10px

</style>
