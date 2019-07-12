<template>
  <div class="bo-popup" >
    <div
      :style="innerStyle"
      :class = "[
        'bo-popup-inner',
        {'show': isOpen}
      ]"
    >
      <slot></slot>
    </div>
    <div
      class="bo-popup-overlay"
      :style="maskStyle"
      v-if="mask && maskOn"
      @click="onMaskClick"
      ref="popup-overlay"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'bo-popup',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: false
    },
    clickMask: {
      type: Boolean,
      default: false
    },
    maxHeight: {
      type: Number,
      default: 300
    },
    minHeight: {
      type: Number,
      default: 300
    },
    duration: {
      type: Number,
      default: 300
    },
    padding: {
      type: Number,
      default: 10
    },
    opacity: {
      type: Number,
      default: 0.5
    }
  },
  data () {
    return {
      maskOn: false
    }
  },
  computed: {
    isOpen () {
      return this.value
    },
    innerStyle () {
      return {
        transitionDuration: this.duration / 1000 + 's',
        maxHeight: this.maxHeight + 'px',
        minHeight: this.minHeight + 'px',
        padding: this.padding + 'px'
      }
    },
    maskStyle () {
      return {
        animationDuration: this.duration / 1000 + 's',
        background: 'rgba(0, 0, 0, ' + this.opacity + ')'
      }
    }
  },
  watch: {
    value (showMask) {
      if (showMask) {
        this.maskOn = true
      } else {
        this.$refs['popup-overlay'].classList.add('bo-popup-overlay-out')
        setTimeout(() => {
          this.maskOn = false
        }, this.duration + 100)
      }
    }
  },
  methods: {
    onMaskClick () {
      this.clickMask && this.closePopup()
    },
    closePopup () {
      this.$emit('input', false)
    }
  }
}
</script>
<style scoped lang="stylus">
.bo-popup
  overflow hidden
  &-inner
    position: fixed
    bottom 0
    left 0
    z-index 2000
    width 100%
    box-sizing border-box
    overflow auto
    background-color #fff
    transition-property all
    transform translate3d(0,100%,0)
    &.show
      transform: translate3d(0,0%,0)
  &-overlay
    position: fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 1000
    animation-name pf-popup-in-mask
    animation-timing-function ease
    animation-direction forwards
    &-out
      animation pf-popup-out-mask .3s ease forwards

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
