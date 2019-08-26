<template>
<bo-page>
  <bo-navbar back-link title="ActionSheet" @back-click="$router.back()"></bo-navbar>
  <demo-item title="基础用法">
    <bo-button auto @click="onClick(0)">打开ActionSheet</bo-button>
  </demo-item>

  <demo-item title="禁用某项">
    <bo-button auto @click="onClick(1)">打开ActionSheet</bo-button>
  </demo-item>

  <demo-item title="带取消按钮">
    <bo-button auto @click="onClick(2)">打开ActionSheet</bo-button>
  </demo-item>

  <demo-item title="点击遮障层关闭">
    <bo-button auto @click="onClick(3)">打开ActionSheet</bo-button>
  </demo-item>

  <demo-item title="点击按钮自动关闭">
    <bo-button auto @click="onClick(4)">打开ActionSheet</bo-button>
  </demo-item>

  <bo-action-sheet
    :menus="menus"
    v-model="show1"
  >
  </bo-action-sheet>

  <bo-action-sheet
    :menus="menus2"
    v-model="show2"
  >
  </bo-action-sheet>

  <bo-action-sheet
    :menus="menus"
    v-model="show3"
    cancel
  >
  </bo-action-sheet>

  <bo-action-sheet
    :menus="menus"
    v-model="show4"
    closeOnClickOMask
  >
  </bo-action-sheet>

  <bo-action-sheet
    :menus="menus"
    v-model="show5"
    autoClose
  >
  </bo-action-sheet>
</bo-page>

</template>

<script>
export default {
  data () {
    return {
      menus: [
        { name: '确定' },
        { name: '分享给微信好友' },
        { name: '分享到朋友圈' }
      ],
      menus2: [
        { name: '确定' },
        { name: '分享给微信好友', disabled: true },
        { name: '分享到朋友圈' }
      ],
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    }
  },
  methods: {
    onClick (type) {
      switch (type) {
        case 0: this.show1 = true; break
        case 1: this.show2 = true; break
        case 2: this.show3 = true; break
        case 3: this.show4 = true; break
        case 4: this.show5 = true; break
      }
    },
    onSelect (index) {
      console.log(index)
    },
    onCancel () {
      console.log('取消')
    }
  }
}
</script>

<style>
  /*  */
</style>
