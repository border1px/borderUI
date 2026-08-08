<template>
<div>
  <label
    :class="[
      'radio-item',
      { 'is-checked': isChecked },
      { 'is-disabled': isDisabled },
      { 'is-group': isGroup }
    ]"
    @click.stop
  >
    <input
      v-bind="$attrs"
      class="radio-native"
      type="radio"
      :name="nativeName"
      :value="label"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="onChange"
    >
    <span class="radio-inner">
      <bo-icon :name=iconName :size=iconSize :color=iconColor />
      <span class="slot-value">
        <slot></slot>
      </span>
    </span>
  </label>
</div>

</template>

<script>
import { findComponentUpward } from '../utils/assist'
export default {
  name: 'bo-radio',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number]
    },
    label: [String, Number],
    name: String,
    iconSize: {
      type: String,
      default: '24px'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      parent: null,
      isGroup: false
    }
  },
  computed: {
    iconName () {
      if (this.isDisabled) {
        return 'jinyong1'
      } else {
        return this.isChecked ? 'radio1' : 'Radio'
      }
    },
    iconColor () {
      if (this.isDisabled) {
        return '#CCC'
      } else {
        return this.isChecked ? '#2196F3' : '#CCC'
      }
    },
    isDisabled () {
      return (this.parent && this.parent.disabled) || this.disabled
    },
    isChecked () {
      return this.model === this.label
    },
    nativeName () {
      return this.isGroup ? this.parent.nativeName : this.name
    },
    model: {
      get () {
        return this.isGroup ? this.parent.value : this.value
      },
      set (newValue) {
        this.isGroup ? this.parent.$emit('input', newValue) : this.$emit('input', newValue)
      }
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'bo-radio-group')
    this.parent ? this.isGroup = true : this.isGroup = false
  },
  methods: {
    onChange (event) {
      if (event.target.checked) this.select()
    },
    select () {
      if (this.isDisabled || this.isChecked) return false

      this.model = this.label
      if (!this.isGroup) this.$emit('change', this.label)
      return true
    },
    toggle () {
      return this.select()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../style/var';
.radio-item
  position relative
  cursor pointer
  &.is-group
    display inline-block
    padding 2px 0
  &.is-checked
    color $theme-color
  &.is-disabled
    cursor not-allowed
    color #CCC
  .radio-native
    position absolute
    width 1px
    height 1px
    opacity 0
    pointer-events none
    &:focus + .radio-inner
      outline 2px solid $theme-color
      outline-offset 2px
  .radio-inner
    i,span
      vertical-align middle
  .slot-value
    margin-left:5px
</style>
