<template>
  <div class="bo-swipe"
    @touchstart="handleTouchstart"
    @touchmove="handleTouchmove"
    @touchend="handleTouchend"
    @touchcancel="handleTouchend"
  >
    <div
      class="bo-swipe-wrapper"
      ref="wrapper"
      :style="wrapperStyle"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'bo-swipe',
  data() {
    return {
      transX: 0,
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
  methods: {
    handleTouchstart () {

    },
    handleTouchmove () {

    },
    handleTouchend () {

    },
    handleTouchend() {

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