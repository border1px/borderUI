<template>
  <div class="bo-swipe"
    @touchstart="handleTouchstart"
    @touchmove="handleTouchmove"
    @touchend="handleTouchend"
    @transitionend="transitionendFn"
  >
    <div
      class="bo-swipe-wrapper"
      ref="wrapper"
      :style="wrapperStyle"
    >
      <component :is="firstSwipeItem"></component>
      <slot></slot>
      <component :is="lastSwipeItem"></component>
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
    },
    loop: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 300
    },
    threshold: {
      type: Number,
      default: 50,
      validator (val) { return val >= 0 }
    },
    maxSlideBoundary: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      transX: 0,
      startX: 0,
      startY: 0,
      deltaX: 0,
      isTransToX: false,
      currentIndex: 0,
      clientWidth: 0,
      swipeItemCount: 0,
      firstSwipeItem: null,
      lastSwipeItem: null,
      autoPlayTimer: null,
      touchStartTime: 0
    }
  },
  computed: {
    wrapperStyle () {
      return {
        transform: `translate3d(${this.transX}px, 0, 0)`,
        transition: this.isTransToX ? `transform ${this.duration}ms cubic-bezier(0, 0, 0.25, 1)` : ''
      }
    },
    atFirst () {
      return this.currentIndex === 0
    },
    atLast () {
      return this.currentIndex === this.swipeItemCount - 1
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
      this.loop && this.createVNode(slots)
    },
    createVNode (slots) {
      this.firstSwipeItem = {
        render (h) {
          return h('div', {
            staticClass: 'bo-swipe-item'
          }, slots.slice(-1))
        }
      }
      this.lastSwipeItem = {
        render (h) {
          return h('div', {
            staticClass: 'bo-swipe-item'
          }, slots.slice(0, 1))
        }
      }
      this.$nextTick(() => {
        this.$refs.wrapper.style.marginLeft = `-${this.clientWidth}px`
      })
    },
    translate (d) {
      this.$refs.wrapper.style.transform = `translate3d(${d}px, 0, 0)`
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
      this.translate(this.getToX())
    },
    handleTouchend (e) {
      this.isTransToX = true
      this.currentIndex = this.getIndex()
      this.translate(-this.clientWidth * this.currentIndex)
      this.deltaX = 0
    },
    transitionendFn () {
      this.isTransToX = false
      if (this.currentIndex === -1) {
        this.currentIndex = this.swipeItemCount - 1
        this.translate(-this.clientWidth * (this.swipeItemCount - 1))
      }
      if (this.currentIndex === this.swipeItemCount) {
        this.currentIndex = 0
        this.translate(0)
      }
      console.log(this.currentIndex)
    },
    getToX () {
      // 移动
      var offset = -this.clientWidth * this.currentIndex
      if (this.loop) {
        offset = offset + this.deltaX
      } else {
        if (this.atFirst && this.deltaX > 0) offset = offset + Math.min(this.deltaX, this.maxSlideBoundary)
        if (this.atLast && this.deltaX < 0) offset = offset + Math.max(this.deltaX, -this.maxSlideBoundary)
      }
      return offset
    },
    getIndex () {
      // 松手
      var deviation = (this.deltaX > 0) ? -1 : 1
      if (Math.abs(this.deltaX) >= this.threshold) {
        if (this.loop) {
          if (this.atFirst && this.deltaX > 0) return -1
          if (this.atLast && this.deltaX < 0) return this.swipeItemCount
          return this.currentIndex + deviation
        } else {
          if (this.atFirst && this.deltaX > 0) return 0
          if (this.atLast && this.deltaX < 0) return this.swipeItemCount - 1
          return this.currentIndex + deviation
        }
      }
      return this.currentIndex
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
  &-item
    width 100%
    height 100%
    flex none
</style>
