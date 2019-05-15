
<script>
import Utils from '../utils/utils'
import Mixins from '../utils/mixins'
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
  render (h) {
    const self = this
    let innerEl
    let leftEl
    let titleEl
    if (self.inner) {
      if (self.backLink) {
        if (typeof self.backLink === 'boolean') {
          leftEl = h('div', { staticClass: 'left' }, '《')
        } else {
          leftEl = h('div', { staticClass: 'left' }, '《' + this.backLink)
        }
      }
      if (self.title) {
        titleEl = h('div', { staticClass: 'title' }, this.title)
      }
      innerEl = h('div', { ref: 'inner', staticClass: 'navbar-inner' }, [leftEl, titleEl, self.$slots.default])

      // 是否包含subnavar，有的话加class: navbar-with-subnavbar,用于控制page-content的padding
      let slotsDeault = this.$slots.default
      if (slotsDeault) {
        for (let i = 0; i < slotsDeault.length; i++) {
          var tag = slotsDeault[i].tag
          if (tag && tag.indexOf('subnavbar') >= 0) self.withSubnavbar = true
        }
      }
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
      this.$emit('click:back', e)
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
  .left,
  .right
    color $theme-color
    flex 0 1 auto
    height $navbar-height
    line-height $navbar-height
    flex-shrink: 0
    display: flex
    justify-content: flex-start
    align-items: center
    transform: translate3d(0, 0, 0)
  .right:first-child
    position: absolute
    height: 100%
</style>
