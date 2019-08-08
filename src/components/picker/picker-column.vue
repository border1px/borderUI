
<template>
  <div
    :class="[className]"
    :style="columnStyle"
    @touchstart="onTouchStart"
    @touchmove.prevent="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <ul :style="wrapperStyle">
      <li
        v-for="(option, index) in options"
        v-html="getOptionText(option)"
        :style="optionStyle"
        class="van-ellipsis pf-picker-column__item"
        :key = 'index'
        :class="{selected: index === currentIndex,disabled: isDisabled(option)}"
        @click="setIndex(index, true)"
      />
    </ul>
  </div>
</template>

<script>
const DEFAULT_DURATION = 200

export default {
  name: 'BoPickerColumn',

  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    initialOptions: Array,
    visibleItemCount: Number
  },

  data () {
    return {
      options: this.deepClone(this.initialOptions),
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      currentIndex: this.defaultIndex
    }
  },

  created () {
    this.$parent.children && this.$parent.children.push(this)
    this.setIndex(this.currentIndex)
  },

  destroyed () {
    const { children } = this.$parent
    children && children.splice(children.indexOf(this), 1)
  },

  watch: {
    defaultIndex () {
      this.setIndex(this.defaultIndex)
    }
  },

  computed: {
    count () {
      return this.options.length
    },

    baseOffset () {
      return this.itemHeight * (this.visibleItemCount - 1) / 2
    },

    columnStyle () {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      }
    },

    wrapperStyle () {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0, ${this.offset + this.baseOffset}px, 0)`,
        lineHeight: this.itemHeight + 'px'
      }
    },

    optionStyle () {
      return {
        height: this.itemHeight + 'px'
      }
    }
  },

  methods: {
    deepClone (obj) {
      if (typeof obj !== 'object') return obj
      if (obj === null) return null
      if (obj instanceof Date) return new Date(obj)
      if (obj instanceof RegExp) return new RegExp(obj)
      if (obj instanceof Array) {
        let arr = []
        for (let i in obj) {
          arr[i] = this.deepClone(obj[i])
        }
        return arr
      }
      var o = {}
      for (var attr in obj) {
        o[attr] = this.deepClone(obj[attr])
      }
      return o
    },

    range (num, min, max) {
      return Math.min(Math.max(num, min), max)
    },

    isObj (x) {
      const type = typeof x
      return x !== null && (type === 'object' || type === 'function')
    },

    onTouchStart (event) {
      this.startY = event.touches[0].clientY
      this.startOffset = this.offset
      this.duration = 0
    },

    onTouchMove (event) {
      const deltaY = event.touches[0].clientY - this.startY
      this.offset = this.range(
        this.startOffset + deltaY,
        -(this.count * this.itemHeight),
        this.itemHeight
      )
    },

    onTouchEnd () {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION
        const index = this.range(
          Math.round(-this.offset / this.itemHeight),
          0,
          this.count - 1
        )
        this.setIndex(index, true)
      }
    },

    adjustIndex (index) {
      index = this.range(index, 0, this.count)
      for (let i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(this.options[i])) return i
      }
    },

    isDisabled (option) {
      return this.isObj(option) && option.disabled
    },

    getOptionText (option) {
      return this.isObj(option) && this.valueKey in option
        ? option[this.valueKey]
        : option
    },

    setIndex (index, userAction) {
      index = this.adjustIndex(index) || 0
      this.offset = -index * this.itemHeight

      if (index !== this.currentIndex) {
        this.currentIndex = index
        userAction && this.$emit('change', index)
      }
    },

    setValue (value) {
      const { options } = this
      for (let i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i)
        }
      }
    },

    getValue () {
      return this.options[this.currentIndex]
    }
  }
}
</script>
