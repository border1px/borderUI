<template>
  <ul class="pf-button-group">
    <li 
      v-for="(item, index) in btnArr" 
      :key='index' 
      :class="{active : index === btnIndex}"
      @click="clickTab(index)"
    >
      <i :class="item.icon" v-if="item.icon"></i>
      <div>{{item.name}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BoButtonGroup',
  props: {
    btnArr: Array
  },
  data () {
    return {
      btnIndex: 0
    }
  },
  methods: {
    clickTab (index) {
      this.btnIndex = index
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="stylus">
@import '../../style/var.styl'
.pf-button-group
  display flex
  li
    flex 1
    height 40px
    font-size 14px
    background-color #FFF
    border 1px solid $theme-color
    display flex
    justify-content center
    align-items center 
    border-right none 
    &:last-child
      border-right 1px solid $theme-color
    &.active
      background-color $theme-color
      color #FFF
    i 
      margin-right 5px
      font-size 20px
</style>

