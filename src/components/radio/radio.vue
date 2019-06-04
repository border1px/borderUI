<template>
<div>
  <span
    :class="[
      'radio-item',
      { 'is-checked': isChecked },
      { 'is-disabled': isDisabled },
      { 'is-group': isGroup }
    ]"
    @click.stop="toggle"
  >
    <input
      v-if="false"
      class="f-hide"
      type="radio"
      :disabled="isDisabled"
      v-bind="$attrs"
      :value="model"
      @click.stop
    >
    <span class="radio-inner">
      <bo-icon name="Radio" :size=iconSize color="#CCC" v-if="!isChecked"/>
      <bo-icon name="radio1" :size=iconSize color="#CCC" v-if="isChecked"/>
      <span class="slot-value">
        <slot></slot>
      </span>
    </span>
  </span>
</div>

</template>

<script>
import { findComponentUpward } from '../utils/assist'
export default {
  name: 'bo-radio',
  props: {
    value: {
      type: [String, Number]
    },
    label: String,
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
    isDisabled () {
      // return this.parent.disabled || this.disabled
      return false
    },
    isChecked () {
      const { isGroup, model } = this
      if (!isGroup) return model

      const {
        label,
        parent: { value: selectItem }
      } = this
      return selectItem === label
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
    toggle (event) {
      !this.isDisabled && (this.model = this.label)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../style/var';
.radio-item
  &.is-group
    display inline-block
    padding 2px 0
  &.is-checked
    // background-color red
    color $theme-color
  .radio-inner
    i,span
      vertical-align middle
  .slot-value
    margin-left:5px
</style>
