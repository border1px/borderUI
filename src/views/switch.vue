<template>
<bo-page>
  <bo-navbar back-link title="Switch" @back-click="$router.back()"></bo-navbar>
  <div>
    <demo-item title="最简单用法">
      <bo-switch></bo-switch>
    </demo-item>
    <demo-item title="默认选中">
      <bo-switch :value=true></bo-switch>
    </demo-item>
    <demo-item title="事件监听">
      <bo-switch @change="onChange"></bo-switch>
    </demo-item>
  </div>
</bo-page>

</template>

<script>
export default {
  methods: {
    onChange (val) {
      alert(val)
    }
  }
}
</script>

<style>
.btn-inline .pf-button {
  margin-right: 5px;
  margin-bottom: 20px;
}
.btn-block > button{
  margin-bottom: 10px!important;
}
</style>
