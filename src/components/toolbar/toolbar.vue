<template>
  <div class="toolbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bo-toolbar'
}
</script>

<style lang="stylus" scoped>
.toolbar
  display flex
  height 50px
  background-color #FFF
  &-item
    flex 1
</style>
