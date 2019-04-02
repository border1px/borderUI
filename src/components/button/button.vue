<template>
  <button :disabled="disabled" class="pf-button" :class="buttonClass">
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
    type: String,
    size: String,
    text: String,
    color: String,
    full: Boolean,
    loading: Boolean,
    disabled: Boolean
  },
  computed: {
    buttonClass () {
      return {
        'pf-button-primary'  : true,
        'pf-button-warning'  : this.type === 'warning',
        'pf-button-danger'   : this.type === 'danger',
        'pf-button-normal'   : true,
        'pf-button-large'    : this.size === 'large',
        'pf-button-small'    : this.size === 'small',
        'pf-button-full'     : this.full,
        'pf-button-disabled' : this.disabled
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../../style/var.styl'
.pf-button
  position relative
  border 0
  margin 0
  padding 0
  outline none
  color #FFF
  border-radius 4px
  &:active
    // background-color #ADADAD
  // 按钮类型
  &-primary
    background-color: $button-primary-bg
  &-warning
    background-color: $button-warning-bg
  &-danger
    background-color: $button-danger-bg
  // 按钮尺寸
  &-normal
    padding: 8px 10px
  &-large
    padding: 12px 16px
  &-small
    padding: 2px 4px
  &-full
    width: 100%
    border-radius 0
  // &-disabled
  //   position absolute
  //   top:0
  //   left:0
  //   right 0
  //   bottom 0
    // background-color:#fff;opacity:0.6;
</style>
