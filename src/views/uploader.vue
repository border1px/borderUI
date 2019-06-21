<template>
<bo-page>
  <bo-navbar back-link title="Uploader" @back-click="$router.back()"></bo-navbar>
  <div>
    <demo-item title="基础用法" no-padding>
      <bo-uploader></bo-uploader>
    </demo-item>
  </div>
</bo-page>

</template>

<script>
export default {
  data () {
    return {
      //
    }
  }
}
</script>

<style>

</style>
