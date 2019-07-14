<template>
  <transition :name="currentTransition">
    <div
      v-show="value"
      :style="popupStyle"
      :class="[
        'bo-popup',
        `bo-popup--${position}`
      ]"
    >
      <slot/>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'bo-popup',
  props: {
    position: {
      type: String,
      default: 'bottom'
    },
    mask: {
      type: Boolean,
      default: true
    },
    value: Boolean,
    maxHeight: Number,
    minHeight: Number,
    maxWidth: Number,
    minWidth: {
      type: Number,
      default: 150
    },
    width: Number,
    height: Number,
    closeOnClickOMask: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentTransition () {
      return `popup-slide-${this.position}`
    },
    popupStyle () {
      var style = {}
      if (this.position === 'top' || this.position === 'bottom') {
        style.maxHeight = this.maxHeight + 'px'
        style.minHeight = this.minHeight + 'px'
        style.height = this.height + 'px'
      } else if (this.position === 'left' || this.position === 'right') {
        style.maxWidth = this.maxWidth + 'px'
        style.minWidth = this.minWidth + 'px'
        style.width = this.width + 'px'
      }
      return style
    }
  },
  data () {
    return {
      //
    }
  },
  watch: {
    value (showMask) {
      this[showMask ? 'open' : 'close']()
      !showMask && this.close()
    }
  },
  methods: {
    open () {
      if (this.opened) {
        return
      }
      this.opened = true
      this.renderOverlay()
    },
    close () {
      if (!this.opened) {
        return
      }
      this.opened = false
      // 关闭弹框
      this.$emit('input', false)
      // 淡出动画 + 删除节点
      document.querySelector('.bo-popup-overlay').classList.add('bo-popup-overlay-out')
      setTimeout(() => {
        document.querySelector('.bo-popup-overlay').remove()
      }, 400)
    },
    onMaskClick () {
      this.closeOnClickOMask && this.close()
    },
    renderOverlay () {
      var node = document.createElement('div')
      node.setAttribute('class', 'bo-popup-overlay')
      node.onclick = this.onMaskClick
      document.body.appendChild(node)
    }
  }
}
</script>

<style lang="stylus">
.bo
  &-popup
    overflow: hidden
    position fixed
    z-index 2000
    transition all 0.3s
    box-sizing border-box
    background-color #FFF
    &-overlay
      position: fixed
      top 0
      left 0
      right 0
      bottom 0
      z-index 1000
      background rgba(0,0,0,0.5)
      animation pf-popup-in-mask .3s ease forwards
      &-out
        animation pf-popup-out-mask .3s ease forwards
    // 弹框正常显示时的位置
    &--top
      width: 100%
      top: 0
      left: 0
      transform: translate3d(0, 0, 0)
    &--right
      top: 0
      right: 0
      height: 100%
      transform: translate3d(0, 0, 0)
    &--bottom
      width: 100%
      bottom: 0
      left: 0
      transform: translate3d(0, 0, 0)
    &--left
      top: 0
      left: 0
      height: 100%
      transform: translate3d(0, 0, 0)

// 弹框初始化时候的位置
.popup-slide-top-enter,
.popup-slide-top-leave-active {
  transform: translate3d(0, -100%, 0)
}

.popup-slide-right-enter,
.popup-slide-right-leave-active {
  transform: translate3d(100%, 0, 0)
}

.popup-slide-bottom-enter,
.popup-slide-bottom-leave-active {
  transform: translate3d(0, 100%, 0)
}

.popup-slide-left-enter,
.popup-slide-left-leave-active {
  transform: translate3d(-100%, 0, 0)
}

// 背景动画
@keyframes pf-popup-in-mask {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}
@keyframes pf-popup-out-mask {
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
}
</style>
