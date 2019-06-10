<template>
<bo-page>
  <bo-navbar back-link title="Swipe" @back-click="$router.back()"></bo-navbar>
  <div>
    <bo-swipe>
      <bo-swipe-item>
        <div style="height:200px;width:100%;background-color:pink;"></div>
      </bo-swipe-item>
      <bo-swipe-item>
        <div style="height:200px;width:100%;background-color:blue;"></div>
      </bo-swipe-item>
    </bo-swipe>
  </div>
</bo-page>

</template>

<script>
export default {
  methods: {
    //
  }
}
</script>

<style>
  /*  */
</style>
