<template>
  <div class="bo-tabbar">
    <ul class="bo-tabbar-inner"
     :class="{
        capsule: capsule,
        shrink: shrink
      }">
      <li
        v-for="(item, index) in btnArr"
        :key='index'
        :class="{active : index === btnIndex}"
        @click="clickTab(index)"
      >
        <div class="item-inner">
          <i :class="item.icon" v-if="item.icon"></i>
          <div>{{item.name}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BoTabbar',
  props: {
    btnArr: Array,
    capsule: Boolean,
    shrink: Boolean
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
.bo-tabbar
  width 100%
  background-color $theme-bgcolor
  color $theme-textcolor
  &-inner
    display flex
    align-items center
    justify-content center
    width 100%
    li
      font-size $tabbar-fontsize
      background-color #FFF
      position relative
  // 默认tabbar
  &-inner:not(.capsule)
    li
      flex 1
      display flex
      justify-content center
      align-items center
      .item-inner
        position relative
        height $tabbar-height
        display flex
        align-items center
      i
        margin-right 5px
        font-size 20px
      &.active:not(.capsule)
        .item-inner
          &:after
            content: ''
            position absolute
            bottom 0
            left 0
            right 0
            height $tabbar-underline-height
            background-color $theme-color
            color $theme-textcolor-active
  // 胶囊tabbar公共部分
  &-inner.capsule
    li
      height $tabbar-height-capsule
      line-height $tabbar-height-capsule
      border 1px solid $theme-color
      border-right none
      &.active
        background-color $theme-color
        color $theme-textcolor-active
      &:first-child
        border-radius $tabbar-radius 0 0 $tabbar-radius
      &:last-child
        border-radius 0 $tabbar-radius $tabbar-radius 0
        border-right 1px solid $theme-color
  // 胶囊tabbar + 两侧对齐
  &-inner.capsule:not(.shrink)
    li
      flex 1
      text-align center
  // 胶囊tabbar + 中间对齐
  &-inner.capsule.shrink
    li
      padding 0 10px
  </style>
