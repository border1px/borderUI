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
    threshold: {
      type: Number,
      default: 50,
      validator(val) { return val >= 0 }
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
      firstSwipeItem: null,
      lastSwipeItem: null,
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
        this.$refs.wrapper.style.marginLeft = `-${this.clientWidth}px`;
      })
    },
    translate (d) {
      this.$refs.wrapper.style.transform = `translate3d(${d}px, 0, 0)`;
    },
    updateCurrentIndex () {
      if (this.deltaX > 0) {
        (this.currentIndex == 0) ? (this.currentIndex == 0) : (this.currentIndex --)
      } else {
        (this.currentIndex == this.swipeItemCount - 1) ? (this.currentIndex == this.swipeItemCount - 1) : (this.currentIndex ++)
      }

      var d = -(this.currentIndex * this.clientWidth)
      this.translate(d)
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


      const translate = -(this.currentIndex * this.clientWidth) + this.deltaX
      // 正常触摸应该移动的距离
      let finalTranslate = translate;
      // 考虑 loop 的取值时
      finalTranslate = this.handleTouchmove_loop(translate);


      // 怎么计算currentIndex
      // var d = -(this.currentIndex * this.clientWidth) + this.deltaX
      this.translate(finalTranslate)
    },
    handleTouchend (e) {
      if (Math.abs(this.deltaX) < this.threshold) {
        return
      }
      var f = (this.deltaX > 0) ? -1 : 1
      if (this.loop) {
        this.handleTouchend_loop(f)
      } else {
        this.updateCurrentIndex()
      }
      this.deltaX = 0
    },
    handleTouchmove_loop(translate) {
      if (this.loop) {
        return translate;
      }
      const leftBoundary = 0;
      const rightBoundary = -this.clientWidth * (this.swipeItemCount - 1);
      // 左边界
      if (translate > leftBoundary) {
        return leftBoundary;
      }
      // 右边界
      if (translate < rightBoundary) {
        return rightBoundary;
      }
      // normal
      return translate;
    },
    handleTouchend_loop (deviation) {
      if (!this.loop) return;
      const newValue = this.currentIndex + deviation;
      // left boundary
      if (this.currentIndex === 0 && newValue < this.currentIndex) {
        this.translate(-this.clientWidth * (this.swipeItemCount - 1))
        this.currentIndex = this.swipeItemCount - 1
        return;
      }
      // right boundary
      if (this.currentIndex === this.swipeItemCount - 1 && newValue > this.currentIndex) {
        this.translate(0);
        this.currentIndex = 0
        return;
      }
      this.updateCurrentIndex()
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
