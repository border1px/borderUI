<template>
  <div class="bo-navbar">
    <div class="left"></div>
    <div class="content"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'bo-navbar'
}
</script>

<style lang="stylus" scoped>
.bo-navbar
  display flex
  height 44px
  background-color pink
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
