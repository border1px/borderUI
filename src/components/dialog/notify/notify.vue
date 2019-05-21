<template>
  <div class="pf-notify" :class="classes">{{msg}}</div>
</template>

<script>
export default {
  props: {
    msg: String,
    type: String,
    timeout: {
      type: Number,
      default: 2000
    }
  },
  computed: {
    classes () {
      if (this.type === 'success') {
        return 'pf-notify-success'
      } else if (this.type === 'warning') {
        return 'pf-notify-warning'
      } else if (this.type === 'danger') {
        return 'pf-notify-danger'
      } else {
        return 'pf-notify-primary'
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../../../style/mixins.styl'
@import '../../../style/var.styl'

.pf-notify
  position: fixed
  top: 0
  left: 0
  width: 100%
  right: 0
  line-height: 30px
  font-size: 14px
  color: #FFF
  padding: .4rem .24rem .3rem .24rem
  word-break: break-all
  text-align: center
  z-index: 99999
  animation: pf-notify-in .15s ease forwards;
  &-out
    animation: pf-notify-out .15s ease forwards;
  &-primary
    background-color $theme-color
  &-success
    background-color #5cb85c
  &-warning
    background-color #FFA500
  &-danger
    background-color #FF3030
  &-default
    background-color: rgba(40, 40, 40, .85)

</style>
