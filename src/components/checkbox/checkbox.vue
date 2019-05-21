<template>
  <label
    :class="[
      'checkbox-item',
      { 'is-checked': currentValue === trueValue },
      { 'is-disabled': disabled }
    ]"
  >
    <input
      type="checkbox"
      v-bind="$attrs"
      :disabled="disabled"
      v-model="currentValue"
      @change = "onChange"
    >
    <span class="checkbox-inner">
      <bo-icon name="fanhui"/>
      <span><slot></slot></span>
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
      color $theme-color
  &.is-disabled
    i.iconfont
      color #CCC
</style>

<script>
  export default {
    name: 'bo-checkbox',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
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
        currentValue: this.value
      }
    },
    watch: {
      value (val) {
        if (val === this.trueValue || val === this.falseValue) {
          this.currentValue = this.value === this.trueValue;
        } else {
          throw 'Value should be trueValue or falseValue.';
        }
      }
    },
    methods: {
      onChange (event) {
        if (this.disabled) {
          return false;
        }

        const value = this.currentValue ? this.trueValue : this.falseValue;
        this.$emit('input', value);
        this.$emit('change', value);
      }
    }
  }
</script>
