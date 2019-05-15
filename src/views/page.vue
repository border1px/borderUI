<template>
  <bo-page>
    <bo-navbar back-link='返回' title="我是标题">
      <bo-subnavbar>
        <bo-tabbar capsule :btnArr='btnArr'></bo-tabbar>
      </bo-subnavbar>
    </bo-navbar>
    <div>page-content</div>
  </bo-page>
</template>

<script>
export default {
  data () {
    return {
      btnArr: [
        { name: '历史通知' },
        { name: '其他通知' }
      ]
    }
  }
}
</script>
