<template>
  <div class="demo-item">
    <div class="demo-item-title" v-if="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'demo-item',
  props: {
    title: String
  }
}
</script>

<style lang="stylus">
.demo-item
  &-title
    height 40px
    line-height 40px
    padding 0 15px
    font-size 14px
  margin-bottom 20px
</style>
