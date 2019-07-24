<template>
  <bo-page>
    <bo-navbar back-link title="Table" @back-click="$router.back()"></bo-navbar>
    <demo-item title="基础用法">
      <bo-debounce events="click,focus" :delay="1000">
        <input type="text" @click="onClick($event,1)" @focus="onFocus" @blur="onBlur">
      </bo-debounce>
      <div v-html="richText1"></div>
    </demo-item>
  </bo-page>
</template>

<script>
export default {
  data () {
    return {
      richText1: ''
    }
  },
  methods: {
    onClick (e, i) {
      this.richText1 += '<br/><br/>click'
      console.log('click延迟触发')
    },
    onFocus () {
      this.richText1 += '<br/><br/>focus'
      console.log('focus')
    },
    onBlur () {
      this.richText1 = ''
    }
  }
}
</script>

<style lang="stylus">

</style>
