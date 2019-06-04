<template>
<bo-page>
  <bo-navbar back-link title="Cell" @back-click="$router.back()"></bo-navbar>
  <div>
    <demo-item title="基础用法" no-padding>
      <bo-cell>
        <bo-cell-item title="收藏"></bo-cell-item>
        <bo-cell-item title="相册"></bo-cell-item>
      </bo-cell>
    </demo-item>

    <demo-item title="带value" no-padding>
      <bo-cell>
        <bo-cell-item title="收藏" value=20></bo-cell-item>
        <bo-cell-item title="相册" value=11></bo-cell-item>
      </bo-cell>
    </demo-item>

    <demo-item title="带value + 带链接" no-padding>
      <bo-cell>
        <bo-cell-item title="收藏" value=20 isLink></bo-cell-item>
        <bo-cell-item title="相册" value=11 isLink></bo-cell-item>
      </bo-cell>
    </demo-item>

    <demo-item title="带icon图标" no-padding>
      <bo-cell>
        <bo-cell-item title="收藏" isLink icon="iconfont icon-sheet-border-outer"></bo-cell-item>
        <bo-cell-item title="相册" isLink icon="iconfont icon-sheet-clear-format"></bo-cell-item>
      </bo-cell>
    </demo-item>

    <demo-item title="不带边框" no-padding>
      <bo-cell no-border>
        <bo-cell-item title="收藏" isLink icon="iconfont icon-sheet-border-outer"></bo-cell-item>
        <bo-cell-item title="相册" isLink icon="iconfont icon-sheet-clear-format"></bo-cell-item>
        <bo-cell-item title="卡包" isLink icon="iconfont icon-Popup1"></bo-cell-item>
      </bo-cell>
    </demo-item>

    <demo-item title="自定义value" no-padding>
      <bo-cell>
        <bo-cell-item title="收藏" isLink icon="iconfont icon-sheet-border-outer">
          <bo-button size="small" slot="value">value</bo-button>
        </bo-cell-item>
        <bo-cell-item title="相册" clickable icon="iconfont icon-sheet-clear-format">
          <bo-checkbox slot="value" v-model="check">全选</bo-checkbox>
        </bo-cell-item>
        <bo-cell-item title="卡包" clickable icon="iconfont icon-Popup1">
          <bo-switch :value=true slot="value"></bo-switch>
        </bo-cell-item>
      </bo-cell>
    </demo-item>
  </div>
</bo-page>

</template>

<script>
export default {
  data () {
    return {
      check: false
    }
  },
  methods: {
    //
  }
}
</script>

<style>

</style>
