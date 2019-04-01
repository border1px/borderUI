<template>
  <div class="pf-mask">
    <div class="pf-alert">
      <div class="pf-alert-hd">{{title}}</div>
      <div class="pf-alert-by">{{content}}</div>
      <div class="pf-alert-bt btn-primary" @click.stop="closeAlert">{{buttonText}}</div>
    </div>
  </div>
</template>

<style lang="stylus">
@import '../common/mixins.styl'
@import '../common/variables.styl'

.pf-alert
  width 80%
  box-sizing border-box
  border-radius 4px
  background-color $dialog-bg
  animation: pf-zoom-in .15s ease ;
  &-hd
    line-height $dialog-title-height;
    text-align center
    font-weight bold
  &-by
    text-align: left;
    padding: 0 20px;
    font-size: 14px;
    color: $dialog-text-color;
    line-height: 20px;
    word-break: break-all;
  &-bt
    line-height: $dialog-btn-height;
    margin-top: 14px;
    text-align:center;
    border-1px(,top)
    &.btn-primary
      color: $dialog-btn-primary-color;
    &:active
      background-color $dialog-btn-bg-active
</style>

<script>
export default {
  data () {
    return {
      title: '标题',
      content: 'arguments是所有函数体都有的局部变量，包含传递的所有参数',
      buttonText: '确定'
    }
  }
}
</script>
