
<script>
import Utils from '../utils/utils'
import Mixins from '../utils/mixins'
import BoNavLeft from './nav-left.vue'
import BoNavTitle from './nav-title.vue'
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
    BoNavLeft,
    BoNavTitle
  },
  render (c) {
    const self = this
    let innerEl
    let leftEl
    let titleEl
    if (self.inner) {
      if (self.backLink) {
        leftEl = c('bo-nav-left', {
          props: {
            backLink: self.backLink
          },
          on: {
            'back-click': self.onBackClick
          }
        })
      }
      if (self.title || self.subtitle) {
        titleEl = c('bo-nav-title', {
          props: {
            title: self.title,
            subtitle: self.subtitle
          }
        })
      }
      innerEl = c('div', { ref: 'inner', staticClass: 'navbar-inner' }, [leftEl, titleEl, self.$slots.default])

      // 自定义的
      let slotsDeault = this.$slots.default
      if (slotsDeault) {
        for (let i = 0; i < slotsDeault.length; i++) {
          var tag = slotsDeault[i].tag
          if (tag && tag.indexOf('subnavbar') >= 0) self.withSubnavbar = true
        }
      }
    }
    return c('div', {
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
  .navbar-inner
    height 44px
    padding 0 8px
    display flex
    align-items center
    justify-content: space-between
  .title
    text-align: center
    position: relative
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    flex-shrink: 10
    font-weight: $navbar-title-font-weight
    display: inline-block
    line-height: $navbar-title-line-height
    text-align: $navbar-title-text-align
    margin-left: $navbar-title-margin-left
    margin-right: $f7-navbar-title-margin-left
  .left,
  .right
    flex-shrink: 0
    display: flex
    justify-content: flex-start
    align-items: center
    transform: translate3d(0, 0, 0)
  .right:first-child
    position: absolute
    height: 100%
</style>
