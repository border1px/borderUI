<template>
  <div class="pf-mask">
    <div class="pf-toast">
      <div class="pf-toast-text">{{msg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    timeout: Number
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/mixins.styl'
@import '../common/variables.styl'

.pf-mask
  background-color rgba(0,0,0,0)
.pf-toast
  animation: pf-zoom-in .15s ease ;
  padding 8px 15px
  background-color rgba(0,0,0,0.8)
  border-radius 4px
  &-text
    color #FFF
</style>
