<template>
<bo-page>
  <bo-navbar back-link title="Checkbox" @back-click="$router.back()"></bo-navbar>
  <div class="body-padding">
    <bo-checkbox v-model="checked">已解决</bo-checkbox>
    <div>{{checked}}</div>
  </div>
</bo-page>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data(){
    return {
      checked: false
    }
  }
}
</script>
