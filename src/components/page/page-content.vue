<script>
import Utils from '../utils/utils'
import Mixins from '../utils/mixins'

const PageContentProps = Utils.extend({
  tab: Boolean,
  tabActive: Boolean,
  ptr: Boolean,
  ptrDistance: Number,
  ptrPreloader: {
    type: Boolean,
    default: true
  },
  infinite: Boolean,
  infiniteTop: Boolean,
  infiniteDistance: Number,
  infinitePreloader: {
    type: Boolean,
    default: true
  },
  hideBarsOnScroll: Boolean,
  hideNavbarOnScroll: Boolean,
  hideToolbarOnScroll: Boolean,
  messagesContent: Boolean
}, Mixins.colorProps)
export default {
  name: 'page-content',
  render (h) {
    const self = this
    return h('div', { staticClass: 'page-content' }, [self.$slots.default])
  },
  props: PageContentProps,
  computed: {
    classes () {
      const self = this
      return Utils.extend({

      }, Mixins.colorClasses(self))
    }
  },
  methods: {

  }
}
</script>
