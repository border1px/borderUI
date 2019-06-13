<template>
  <div class="bo-swipe">
    <div
      :style="trackStyle"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      @transitionend="$emit('change', activeIndicator)"
    >
      <div
        class="bo-swipe-wrapper"
        ref="wrapper"
      >
        <slot></slot>
      </div>
    </div>
    <!-- <div class="ic-slider__indicators" v-if="showIndicators && count > 1">
      <i v-for="index in count" :class='{ 'ic-slider__indicator--active': index - 1 === activeIndicator }" :key='index' />
    </div> -->
</div>
</template>

<script>
export default {
  name: 'bo-swipe',
  props: {
    autoplay: Number,
    showIndicators: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    threshold: {
      type: Number,
      default: 50
    }
  },
  data () {
    return {
      width: 0,
      offset: 0,
      startX: 0,
      startY: 0,
      active: 0,
      deltaX: 0,
      swipes: [],
      direction: '',
      currentDuration: 0
    }
  },
  mounted () {
    this.initialize()
  },
  destroyed () {
    clearTimeout(this.timer)
  },
  watch: {
    swipes () {
      this.initialize()
    },
    activeIndex () {
      this.initialize()
    }
  },
  computed: {
    count () {
      return this.swipes.length
    },
    trackStyle () {
      return {
        width: (this.count + 0) * this.width + 'px',
        transitionDuration: `${this.currentDuration}ms`,
        transform: `translate3d(${this.offset}px, 0, 0)`
      }
    },
    activeIndicator () {
      return (this.active + this.count) % this.count
    }
  },
  methods: {
    initialize (active = this.activeIndex) {
      clearTimeout(this.timer)
      this.width = this.$el.getBoundingClientRect().width
      this.active = active
      this.currentDuration = 0
      this.offset = this.count > 1 ? -this.width * this.active : 0
      this.swipes.forEach(swipe => {
        swipe.offset = 0
      })
      this.autoPlay()
    },
    onTouchStart (event) {
      clearTimeout(this.timer)
      this.deltaX = 0
      this.direction = ''
      this.currentDuration = 0
      this.startX = event.touches[0].clientX
      this.startY = event.touches[0].clientY
      if (this.active <= -1) {
        this.move(this.count)
      }
      if (this.active >= this.count) {
        this.move(-this.count)
      }
    },
    onTouchMove (event) {
      this.direction = this.direction || this.getDirection(event.touches[0])
      if (this.direction === 'horizontal') {
        event.preventDefault()
        this.deltaX = event.touches[0].clientX - this.startX
        this.move(0, this.range(this.deltaX, [-this.width, this.width]))
      }
    },
    onTouchEnd () {
      if (this.deltaX) {
        this.move(Math.abs(this.deltaX) > this.threshold ? (this.deltaX > 0 ? -1 : 1) : 0)
        this.currentDuration = this.duration
        // console.log((this.active) % (this.width-1))
      }
      this.autoPlay()
    },
    move (move = 0, offset = 0) {
      const { active, count, swipes, deltaX, width } = this
      if (move) {
        if (active === -1) {
          swipes[count - 1].offset = 0
        }
        swipes[0].offset = active === count - 1 && move > 0 ? count * width : 0
        this.active += move
      } else {
        if (active === 0) {
          swipes[count - 1].offset = deltaX > 0 ? -count * width : 0
        } else if (active === count - 1) {
          swipes[0].offset = deltaX < 0 ? count * width : 0
        }
      }
      this.offset = offset - (this.active + 0) * this.width
    },
    autoPlay () {
      const { autoplay } = this
      if (autoplay && this.count > 1) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.currentDuration = 0
          if (this.active >= this.count) {
            this.move(-this.count)
          }
          setTimeout(() => {
            this.currentDuration = this.duration
            this.move(1)
            this.autoPlay()
          }, 30)
        }, autoplay)
      }
    },
    getDirection (touch) {
      const distanceX = Math.abs(touch.clientX - this.startX)
      const distanceY = Math.abs(touch.clientY - this.startY)
      return distanceX > distanceY ? 'horizontal' : distanceX < distanceY ? 'vertical' : ''
    },
    range (num, arr) {
      return Math.min(Math.max(num, arr[0]), arr[1])
    }
  }
}
</script>

<style>
.bo-swipe{
  overflow: hidden;
  position: relative;
  user-select: none;
}
.bo-swipe .bo-swipe-item {
  float: left;
  height: 100%;
}
.bo-swipe .bo-swipe-item img{
  width:100%;
}
/* .bo-swipe.ic-slider__track {
  height: 100%;
  overflow: hidden;
}
.ic-slider__indicators {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 12px;
  transform: translateZ(1px);
  text-align: center;
  font-size: 0;
}
.ic-slider__indicators > i {
  display: inline-block;
  margin: 0 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccc;
}
.ic-slider__indicators .ic-slider__indicator--active {
    width: 20px;
    border-radius: 5px;
    background: #fff;
} */
</style>
