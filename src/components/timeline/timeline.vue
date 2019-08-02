<template>
  <ul class="bo-timeline">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'bo-timeline'
}
</script>

<style lang="stylus">
.bo-timeline
  &-item
    width: 2px
    background-color: #2677F1
    padding-bottom: 50px
    position: relative
    left: 8px
    &-v // vertical方向内容
      // box-sizing: border-box
      word-wrap:break-word
      padding-left:20px
      width calc(100vw - 30px)
  &-item:before
    content:""
    display: block
    width: 16px
    height: 16px
    border-radius: 50%
    background-color: #2677F1
    // border:4px solid #2677F1
    box-sizing border-box
    position: absolute
    top:0
    left:50%
    transform: translateX(-50%)
</style>
