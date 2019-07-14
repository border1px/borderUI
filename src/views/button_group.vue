<template>
<bo-page>
  <bo-navbar back-link title="Button" @back-click="$router.back()"></bo-navbar>
  <div class="body-padding">
    <div class="button-group">
      <bo-button-group :btnArr='btnArr'></bo-button-group>
      <bo-button-group :btnArr='btnArr2'></bo-button-group>
    </div>
  </div>
</bo-page>
</template>

<script>
export default {
  data () {
    return {
      btnArr: [
        { name: '最近消息', icon: 'iconfont icon-yduiindexicons' },
        { name: '历史通知' }
      ],
      btnArr2: [
        { name: '上午' },
        { name: '中午' },
        { name: '下午' }
      ]
    }
  }
}
</script>

<style>
.button-group .pf-button-group{
  margin-bottom: 10px
}
</style>
