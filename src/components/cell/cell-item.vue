<template>
  <div class="cell-item" :class="{ taphold : isLink }">
    <div class="cell-item-inner">
      <div class="cell-icon" :class="icon" v-if="icon"></div>
      <div class="cell-item-left">
        {{title}}
        <slot name="title"></slot>
      </div>
      <div class="cell-item-right">
        {{value}}
        <slot name="value"></slot>
      </div>
      <div v-if="isLink" class="icon-right"></div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    value: String,
    isLink: Boolean
  }
}
</script>

<style lang="stylus">
$cell-bg = #FFF
$cell-item-height = 50px
$cell-item-active = #F4F4F4
$cell-item-border-color = #ECECEC
$cell-item-right-color = #909090

.cell-item
  padding-left 15px
  background-color $cell-bg
  &.taphold:active
    background-color $cell-item-active
  &-inner
    display flex
    align-items center
    min-height $cell-item-height
    border-bottom 1px solid $cell-item-border-color
    padding-right 15px
    .cell-icon
      width 25px
      height 25px
      margin-right 5px
  &-left
    flex:1
  &-right
    flex 0 1 auto;
    display flex
    justify-content flex-end
    align-items center
    font-size 14px
    color $cell-item-right-color
.icon-right
  margin-left 5px
  width 15px
  height 15px
  background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAKlBMVEUAAAC/v7/Dw8O/v7+/v7+/v7++vr6/v7+/v7+/v7++vr6+vr6/v7+/v79aZa1MAAAADXRSTlMA7AsnyM8rwKj73FJMMPiVHQAAAEhJREFUKM9jAAKehQkMKIDlrjCqAMfdiwYoAkyx6EpUMJT4DjUlBRgC6FoS0BSIEVIgjGEp5QrwxoMqAQWYUcmKHjTc05F8AQC67TKd/ChFegAAAABJRU5ErkJggg==') no-repeat center
  background-size contain
</style>
