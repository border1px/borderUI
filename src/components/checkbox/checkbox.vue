<template>
  <label
    :class="[
      'checkbox-item',
      { 'is-checked': isChecked },
      { 'is-disabled': disabled }
    ]"
    @click.stop="handleClick"
  >
    <input
      v-if="false"
      type="checkbox"
      v-bind="$attrs"
      :disabled="disabled"
      :value="model"
    >
    <span class="checkbox-inner">
      <bo-icon name="radio-checked" size="24px" color="#CCC"/>
      <span>
        <slot></slot>
      </span>
    </span>
  </label>
</template>

<style lang="stylus" scoped>
@import '../../style/var';
.checkbox-item
  input
    appearance none
  .checkbox-inner
    i,span
      vertical-align middle
  &.is-checked
    i.iconfont
      color $theme-color !important
  &.is-disabled
    i.iconfont
      color #CCC
</style>

<script>
import { findComponentUpward } from '../utils/assist'

export default {
  name: 'bo-checkbox',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
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
    model: {
      get () {
        return this.isGroup ? this.parent.value : this.currentValue
      },
      set (newValue) {
        const { isGroup, isChecked } = this

        if (isGroup) {
          isChecked
            ? this.parent.deleteItem(this.label)
            : this.parent.selectItem(this.label)
        } else {
          this.$emit('input', newValue)
        }
      }
    },
    isChecked () {
      const { isGroup, model } = this
      if (!isGroup) return model

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
        throw 'Value should be trueValue or falseValue.'
      }
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'bo-checkbox-group')
    this.parent ? this.isGroup = true : this.isGroup = false
  },
  methods: {
    handleClick (event) {
      const { disabled, isGroup, model, value } = this
      if (!disabled) {
        this.model = isGroup ? value : !model
      }
    }
  }
}
</script>
