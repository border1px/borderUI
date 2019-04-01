<template>
  <div class="pf-mask">
    <div class="pf-loading">
      <div class="pf-loading-icon"></div>
      <div class="pf-loading-text" v-if="msg">{{msg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/mixins.styl'
@import '../common/variables.styl'

.pf-mask
  background-color rgba(0,0,0,0)
.pf-loading
  animation: pf-zoom-in .15s ease
  padding 8px 15px
  background-color rgba(0,0,0,0.8)
  border-radius 4px
  display flex
  align-items center
  &-icon
    width: 28px
    height: 28px
    background: url($icon-loading) no-repeat
    background-size: 28px 28px
    animation: pf-rotate .45s linear forwards infinite
  &-text
    color #FFF
    max-width: 140px
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    margin-left: 10px
</style>
