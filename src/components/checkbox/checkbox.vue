<template>
  <div>
    <label
      :class="[
        'checkbox-item',
        { 'is-checked': isChecked },
        { 'is-disabled': isDisabled },
        { 'is-group': isGroup }
      ]"
      @click.stop
    >
      <input
        v-bind="$attrs"
        class="checkbox-native"
        type="checkbox"
        :checked="isChecked"
        :disabled="isDisabled"
        :value="label === undefined ? trueValue : label"
        @change="onChange"
      >
      <span class="checkbox-inner">
        <bo-icon name="radio-checked" :size=iconSize color="#CCC"/>
        <span class="slot-value" :style="{ fontSize: textSize }">
          <slot></slot>
        </span>
      </span>
    </label>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../style/var';
.checkbox-item
  position relative
  cursor pointer
  &.is-group
    display inline-block
    padding 2px 0
  .checkbox-native
    position absolute
    width 1px
    height 1px
    opacity 0
    pointer-events none
    &:focus + .checkbox-inner
      outline 2px solid $theme-color
      outline-offset 2px
  .checkbox-inner
    i,span
      vertical-align middle
  &.is-checked
    i.iconfont
      color $theme-color !important
  &.is-disabled
    cursor not-allowed
    i.iconfont
      color #CCC
    .slot-value
      color #CCC
  .slot-value
    margin-left:5px
</style>

<script>
import { findComponentUpward } from '../utils/assist'

export default {
  name: 'bo-checkbox',
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String,
      default: '24px'
    },
    textSize: {
      type: String,
      default: '14px'
    },
    label: [String, Number, Boolean],
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data () {
    return {
      isGroup: false,
      parent: null
    }
  },
  computed: {
    isDisabled () {
      return (this.parent && this.parent.disabled) || this.disabled
    },
    isChecked () {
      if (!this.isGroup) return this.currentValue

      const {
        label,
        parent: { value: selectItems }
      } = this
      return selectItems.some(item => item === label)
    },
    currentValue () {
      if (this.value === this.trueValue || this.value === this.falseValue) {
        return this.value === this.trueValue
      } else {
        throw new Error('Value should be trueValue or falseValue.')
      }
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'bo-checkbox-group')
    this.parent ? this.isGroup = true : this.isGroup = false
  },
  methods: {
    onChange (event) {
      const accepted = this.updateChecked(event.target.checked)

      if (!accepted) {
        event.target.checked = this.isChecked
      }
    },
    updateChecked (checked) {
      if (this.isDisabled) return false

      if (this.isGroup) {
        const label = this.label === undefined ? '' : this.label
        return checked
          ? this.parent.selectItem(label)
          : this.parent.deleteItem(label)
      }

      const nextValue = checked ? this.trueValue : this.falseValue
      this.$emit('input', nextValue)
      this.$emit('change', nextValue)
      return true
    },
    toggle () {
      return this.updateChecked(!this.isChecked)
    }
  }
}
</script>
