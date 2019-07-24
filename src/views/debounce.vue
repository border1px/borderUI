<template>
  <bo-page>
    <bo-navbar back-link title="Debounce" @back-click="$router.back()"></bo-navbar>

    <demo-item title="函数节流">
      <bo-debounce events="input">
        <input type="text" @input="onInput" @blur="onBlur">
      </bo-debounce>
      <div>{{inputText}}</div>
    </demo-item>

    <demo-item title="基础用法">
      <bo-debounce events="click">
        <input type="text" @click="onClick($event,1)" @blur="onBlur">
      </bo-debounce>
      <div v-html="richText1"></div>
    </demo-item>

    <demo-item title="劫持某个事件">
      <bo-debounce events="click">
        <input type="text" @click="onClick2($event,1)" @focus="onFocus2" @blur="onBlur">
      </bo-debounce>
      <div v-html="richText2"></div>
    </demo-item>

    <demo-item title="劫持多个事件">
      <bo-debounce events="click,focus">
        <input type="text" @click="onClick3($event,1)" @focus="onFocus3" @blur="onBlur">
      </bo-debounce>
      <div v-html="richText3"></div>
    </demo-item>

    <demo-item title="设置延迟时间">
      <bo-debounce events="click,focus" :delay="1000">
        <input type="text" @click="onClick4($event,1)" @focus="onFocus4" @blur="onBlur">
      </bo-debounce>
      <div v-html="richText4"></div>
    </demo-item>
  </bo-page>
</template>

<script>
export default {
  data () {
    return {
      inputText: '',
      richText1: '',
      richText2: '',
      richText3: '',
      richText4: ''
    }
  },
  methods: {
    onInput (e) {
      this.inputText = e.target.value
    },
    onClick (e, i) {
      this.richText1 += '<br/><br/>click'
    },
    onFocus () {
      this.richText1 += '<br/><br/>focus'
    },
    onClick2 () {
      this.richText2 += '<br/><br/>click'
    },
    onFocus2 () {
      this.richText2 += '<br/><br/>focus'
    },
    onClick3 () {
      this.richText3 += '<br/><br/>click'
    },
    onFocus3 () {
      this.richText3 += '<br/><br/>focus'
    },
    onClick4 () {
      this.richText4 += '<br/><br/>click'
    },
    onFocus4 () {
      this.richText4 += '<br/><br/>focus'
    },
    onBlur () {
      this.inputText = ''
      this.richText1 = ''
      this.richText2 = ''
      this.richText3 = ''
      this.richText4 = ''
    }
  }
}
</script>

<style lang="stylus">

</style>
