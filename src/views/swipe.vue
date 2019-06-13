<template>
<bo-page>
  <bo-navbar back-link title="Swipe" @back-click="$router.back()"></bo-navbar>
  <div>
    <bo-swipe loop :activeIndex=4>
      <bo-swipe-item>
        <div style="height:200px;width:100%;background-color:pink;display:flex;align-items:center;justify-content:center;font-size:20px;">1</div>
      </bo-swipe-item>
      <bo-swipe-item>
        <div style="height:200px;width:100%;background-color:blue;display:flex;align-items:center;justify-content:center;font-size:20px;">2</div>
      </bo-swipe-item>
      <bo-swipe-item>
        <div style="height:200px;width:100%;background-color:orange;display:flex;align-items:center;justify-content:center;font-size:20px;">3</div>
      </bo-swipe-item>
      <bo-swipe-item>
        <div style="height:200px;width:100%;background-color:green;display:flex;align-items:center;justify-content:center;font-size:20px;">4</div>
      </bo-swipe-item>
      <bo-swipe-item>
        <div style="height:200px;width:100%;background-color:red;display:flex;align-items:center;justify-content:center;font-size:20px;">5</div>
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
