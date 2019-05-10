<template>
  <div class="pf-navbar">
    <div class="left"></div>
    <div class="content">333</div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'BoNavbar'
}
</script>

<style lang="stylus" scoped>
.pf-navbar
  display flex
  height 44px
  .left
    width 44px
  .content
    flex 1
    display flex
    justify-content center
    align-items center
  .right
    width 44px
</style>
