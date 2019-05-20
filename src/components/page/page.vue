<script>
import Utils from '../utils/utils'
import Mixins from '../utils/mixins'
import pageContent from './page-content.vue'

const PageProps = Utils.extend({
  subnavbar: Boolean,
  noNavbar: Boolean,
  noToolbar: Boolean,
  pageContent: {
    type: Boolean,
    default: true
  }
}, Mixins.colorProps)

export default {
  name: 'bo-page',
  components: {
    pageContent
  },
  render (h) {
    const fixedList = []
    const staticList = []
    // -- 分割线
    var self = this
    let child = null
    let tag = null
    let pageContentEl
    let withSubnavbar
    let withSearchbar
    let withMessages

    const fixedTags = ('navbar toolbar tabbar subnavbar searchbar messagebar fab list-index').split(' ')
    if (self.$slots.default) {
      for (let i = 0; i < self.$slots.default.length; i += 1) {
        child = self.$slots.default[i]
        tag = child.tag
        if (!tag) {
          staticList.push(child)
          continue; // eslint-disable-line
        }
        let isFixed = false
        // 只找page下的一级子组件，不再深挖(Vue组件找child，原生找chidlren)
        if (tag.indexOf('subnavbar') >= 0) withSubnavbar = true
        if (tag.indexOf('searchbar') >= 0) withSearchbar = true

        if (typeof withMessages === 'undefined' && tag.indexOf('messages') >= 0) withMessages = true
        for (let j = 0; j < fixedTags.length; j += 1) {
          if (tag.indexOf(fixedTags[j]) >= 0) {
            isFixed = true
          }
        }
        if (isFixed) fixedList.push(child)
        else staticList.push(child)
      }
    }

    if (self.pageContent) {
      pageContentEl = h('page-content', [self.$slots.static, staticList])
    } else {
      pageContentEl = []
      if (self.$slots.default && fixedList.length > 0) {
        for (let i = 0; i < self.$slots.default.length; i += 1) {
          if (fixedList.indexOf(self.$slots.default[i]) < 0) {
            pageContentEl.push(self.$slots.default[i])
          }
        }
      } else {
        pageContentEl = [self.$slots.default]
      }
    }

    const pageEl = h('div', {
      staticClass: 'page',
      class: self.classes,
      attrs: {
        'data-name': self.name
      }
    }, [fixedList, pageContentEl])
    return pageEl
  },
  props: PageProps,
  computed: {
    classes () {
      return {
        'page-with-subnavbar': this.subnavbar || this.withSubnavbar,
        'no-navbar': this.noNavbar,
        'no-toolbar': this.noToolbar
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  position relative
  .navbar
    position fixed
    top 0
    left 0
    right 0
    .subnavbar
      width: 100%;
      position: absolute
      left: 0
      top: 44px
      z-index: 500
      box-sizing: border-box
      display: flex
      justify-content: space-between
      align-items: center
  .toolbar
    position fixed
    bottom 0
    left 0
    right 0
  .page-content
    height: 100%;
    box-sizing: border-box
    overflow: auto
    -webkit-overflow-scrolling: touch
    padding-top 44px

// subnavbar是navbar的子组件，所以不能直接用page来取
.navbar.navbar-with-subnavbar ~ .page-content
    padding-top 88px

.page.no-navbar
  .page-content
    padding-top 0

.page.page-with-subnavbar
  .page-content
    padding-top 88px
  .subnavbar
    top: 44px

.page.no-navbar.page-with-subnavbar
  .page-content
    padding-top 44px

</style>
