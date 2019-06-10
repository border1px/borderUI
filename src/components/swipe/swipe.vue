<template>
  <div class="bo-swipe"
    @touchstart="handleTouchstart"
    @touchmove="handleTouchmove"
    @touchend="handleTouchend"
  >
    <div
      class="bo-swipe-wrapper"
      ref="wrapper"
      :style="wrapperStyle"
    >
      <component :is="firstSwiperItem"></component>
      <slot></slot>
      <component :is="lastSwiperItem"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bo-swipe',
  props: {
    touchable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      transX: 0,
      startX: 0,
      startY: 0,
      deltaX: 0,
      currentIndex:0,
      clientWidth:0,
      swipeItemCount:0,
      firstSwiperItem: null,
      lastSwiperItem: null,
      autoPlayTimer: null,
      touchStartTime: 0,
      duration: '300'
    }
  },
  computed: {
    wrapperStyle () {
      return {
        transform: `translate3d(${this.transX}px, 0, 0)`,
        transition: `transform ${this.duration}ms cubic-bezier(0, 0, 0.25, 1)`
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.clientWidth = parseInt(getComputedStyle(this.$el, false).width, 10)
      
      var slots = this.$slots.default
      this.swipeItems = slots
        .filter(vnode => vnode.tag && vnode.elm.classList.contains('bo-swipe-item'))
        .map(vnode => vnode.elm)
      if (!this.swipeItems.length) {
        // console.warn('The swipe component not contained swipe-item component', this.$el);
        return false
      }
      this.swipeItemCount = this.swipeItems.length
      this.createVNode(slots)
    },
    createVNode (slots) {
      this.firstSwiperItem = {
        render (h) {
          return h('div', {
            staticClass: 'bo-swipe-item'
          }, slots.slice(-1))
        }
      }
      this.lastSwiperItem = {
        render (h) {
          return h('div', {
            staticClass: 'bo-swipe-item'
          }, slots.slice(0, 1))
        }
      }
      this.$nextTick(() => {
        this.$refs.wrapper.style.marginLeft = `-${this.clientWidth}px`;
      })
    },
    translate (d) {
      this.$refs.wrapper.style.transform = `translate3d(${d}px, 0, 0)`;
    },
    handleTouchstart (e) {
      clearTimeout(this.autoplayTimer)
      if (!this.touchable) return
      this.startX = e.touches[0].pageX
      this.startY = e.touches[0].pageY
      this.touchStartTime = new Date().getTime()
    },
    handleTouchmove (e) {
      e.preventDefault()
      if (!this.touchable) return
      this.deltaX = e.touches[0].pageX - this.startX

      // 怎么计算currentIndex
      var d = this.currentIndex * this.clientWidth + this.deltaX
      this.translate(d)
    },
    handleTouchend (e) {
      this.deltaX = 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.bo-swipe
  overflow: hidden
  &-wrapper
    height 100%
    width 100%
    display flex
    flex-direction: row
    overflow auto
  &-item
    width 100%
    height 100%
    flex none
</style>
