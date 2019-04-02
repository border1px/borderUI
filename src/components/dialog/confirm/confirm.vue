<template>
  <div class="pf-mask">
    <div class="pf-confirm">
      <div class="pf-confirm-hd">{{title}}</div>
      <div class="pf-confirm-by">{{content}}</div>
      <div class="pf-confirm-bt">
        <div class="btn-default" @click="closeConfirm(0)">{{cancelText}}</div>
        <div class="btn-primary" @click="closeConfirm(1)">{{okText}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">
@import '../style/mixins.styl'
@import '../style/variables.styl'

.pf-confirm
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
    color: $dialog-button-color;
    display flex;
    > div
      flex:1
      text-align center
      &:active
        background-color $dialog-btn-bg-active
      &.btn-primary
        color:$dialog-btn-primary-color
</style>

<script>
export default {
  data () {
    return {
      title: '标题',
      content: 'arguments是所有函数体都有的局部变量，包含传递的所有参数',
      cancelText: '取消',
      okText: '确定'
    }
  }
}
</script>
