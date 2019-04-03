<template>
  <button
    class = "pf-button"
    @click = "handleClick"
    :style = "styleObject"
    :disabled = "disabled || loading"
    :class = "[
      type ? 'pf-button-' + type : '',
      size ? 'pf-button-' + size : '',
      {
        'is-full' : full,
        'is-disabled': disabled
      }
    ]"
  >
    <span class="pf-button-loading" v-if="loading">
      <div class="pf-loading-icon"></div>
      <div v-if="full">{{loadingTxt}}</div>
    </span>
    <span v-else>
      <slot>{{text}}</slot>
    </span>
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
    size: {
      type: String,
      default: 'normal'
    },
    text: String,
    full: Boolean,
    color: String,
    loading: Boolean,
    loadingTxt: {
      type: String,
      default: '加载中'
    },
    disabled: Boolean
  },
  computed: {
    styleObject () {
      return {
        backgroundColor: this.color
      }
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="stylus">
@import '../../style/var.styl'
@import '../../style/mixins.styl'
.pf-button
  position relative
  border 0
  margin 0
  padding 0
  outline none
  color #FFF
  border-radius 4px
  &:active
    background-color $button-tap-active
  // 按钮类型
  &-primary
    background-color: $button-primary-bg
  &-warning
    background-color: $button-warning-bg
  &-danger
    background-color: $button-danger-bg
  // 按钮尺寸
  &-normal
    padding: 0 14px
    line-height 40px
  &-large
    padding: 0 20px
    line-height 50px
  &-small
    padding: 0 10px
    line-height 30px
  &.is-full
    width: 100%
    border-radius 0
  &.is-disabled:after
    content: ""
    position absolute
    top:0
    left:0
    right 0
    bottom 0
    background-color #fff
    opacity 0.6
  .pf-button-loading
    display flex
    justify-content center
    align-items center
  .pf-loading-icon
    width: 20px
    height: 20px
    margin-right 5px
    background: url($icon-loading) no-repeat
    background-size: 100%
    animation: pf-rotate .45s linear forwards infinite
</style>
