<template>
  <div
    :class = "[
      'demo-item',
      noPadding ? 'no-padding': ''
    ]"
  >
    <div class="demo-item-title" v-if="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'demo-item',
  props: {
    title: String,
    noPadding: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus">
@import '../../style/var';
.demo-item
  padding: 10px
  &.no-padding
    padding: 10px 0
  &-title
    height 40px
    line-height 40px
    font-size 14px
    font-weight bold
    color #8C999F
    // padding 0 15px
    // color:$theme-color

.demo-item.no-padding
  .demo-item-title
    padding:0 15px
</style>
