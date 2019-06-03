<template>
<bo-page>
  <bo-navbar back-link title="Checkbox" @back-click="$router.back()"></bo-navbar>
  <div class="body-padding">
    <bo-checkbox v-model="checked2">已解决</bo-checkbox> {{checked2}}<br>
    <bo-checkbox-group v-model="checks">
      <bo-checkbox label='A'>A</bo-checkbox>
      <bo-checkbox label='B'>B</bo-checkbox>
      <bo-checkbox label='C'>C</bo-checkbox>
    </bo-checkbox-group>
    {{checks}}
  </div>
</bo-page>
</template>

<script>
export default {
  data () {
    return {
      checked2: true,
      checks: ['B']
    }
  }
}
</script>
