<template>
  <button class="pf-button" :class="classes">
    <div>
      {{text}}
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'BoButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: String,
    text: String,
    color: String,
    full: Boolean,
    loading: Boolean,
    disabled: Boolean
  },
  computed: {
    classes () {
      return 'pf-button-primary'
    }
  }
}
</script>

<style lang="stylus">
@import '../../style/var.styl'
.pf-button
  border 0
  margin 0
  padding 0
  outline none
  color #FFF
  &-primary
    background-color: $button-primary-bg
  &-warning
    background-color: $button-warning-bg
  &-danger
    background-color: $button-danger-bg
  &-default
    background-color: $button-default-bg
</style>
