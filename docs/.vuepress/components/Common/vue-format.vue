<template>
  <div class="bo-container">
    <div class="bo-title">
      <h2>{{title}}</h2>
      <small>{{desc}}</small>
    </div>
    <div class="bo-body">
      <slot></slot>
    </div>
    <div class="bo-code" :class="{ active: isShow }">
      <slot name="codeText"></slot>
    </div>
    <div class="bo-button" @click="toggleShow">{{codeTextBtn}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: '',
    desc: ''
  },
  data() {
    return {
      isShow: false,
      codeTextBtn: '显示代码'
    }
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
      this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码';
    }
  }
}
</script>

<style lang="stylus">
.bo-code
  height 0
  transition all 5s linear
  pre 
    height 0
    padding: 0
    margin: 0
  &.active
    height auto
    pre 
      height auto;
      padding: 1.25rem 1.5rem;
      margin: 0.85rem 0;
.bo-button
  height 40px
  line-height 40px
  text-align center
  cursor pointer
  font-size 12px
</style>
