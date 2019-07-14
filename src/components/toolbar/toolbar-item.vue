<template>
  <div class="toolbar-item">
    <div class="toolbar-item-icon">
      <slot name="icon"></slot>
    </div>
    <bo-icon v-if="icon" :size="size" :name="icon"></bo-icon>
    <div class="toolbar-item-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from '../icon'

export default {
  inheritAttrs: false,
  components: {
    Icon
  },
  name: 'bo-toolbar-item',
  props: {
    icon: String,
    size: {
      type: String,
      default: '25px'
    },
    inner: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.toolbar-item
  text-align center
  display flex
  flex-direction column
  align-items center
  justify-content center
  // &-icon
  //   width 25px
  //   height 25px
  &-text
    font-size 14px
</style>
