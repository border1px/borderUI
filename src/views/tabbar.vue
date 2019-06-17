<template>
<bo-page>
  <bo-navbar back-link title="Tabbar" @back-click="$router.back()"></bo-navbar>
  <div>
    <demo-item title="基础用法" no-padding >
      <bo-tabbar :btnArr="btnArr" @change="onChange"></bo-tabbar>
      <p align="center" style="margin:10px 0">当前索引：{{index}}</p>
    </demo-item>

    <demo-item title="胶囊样式" no-padding>
      <bo-tabbar :btnArr="btnArr" capsule></bo-tabbar>
    </demo-item>

    <demo-item title="胶囊样式 + 居中" no-padding>
      <bo-tabbar :btnArr="btnArr2" capsule shrink></bo-tabbar>
    </demo-item>
  </div>
</bo-page>

</template>

<script>
export default {
  data () {
    return {
      btnArr: [
        { name: '待付款' },
        { name: '待发货' },
        { name: '待收货' },
        { name: '待评价' },
        { name: '售后' }
      ],
      btnArr2: [
        { name: '未处理' },
        { name: '已处理' },
        { name: '待查看' }
      ],
      index: 0
    }
  },
  methods: {
    onChange (index) {
      this.index = index
    }
  }
}
</script>

<style>

</style>
