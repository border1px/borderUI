<template>
  <bo-page>
    <bo-navbar back-link title="Table" @back-click="$router.back()"></bo-navbar>
    <demo-item title="基础用法">
      <bo-debounce>
        <bo-button auto @click="onClick">Button</bo-button>
      </bo-debounce>
    </demo-item>
  </bo-page>
</template>

<script>
export default {
  methods: {
    onClick () {
      console.log('click')
    }
  }
}
</script>

<style lang="stylus">

</style>
