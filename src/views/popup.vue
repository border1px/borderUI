<template>
<bo-page>
  <bo-navbar back-link title="Popup" @back-click="$router.back()"></bo-navbar>
  <div class="body-padding">
    <div class="btn-block">
      <bo-button @click="showIt(0)" auto>left</bo-button >
      <bo-button @click="showIt(1)" auto>right</bo-button >
      <bo-button @click="showIt(2)" auto>top</bo-button >
      <bo-button @click="showIt(3)" auto>bottom</bo-button >
      <bo-button @click="showCheckList" auto color="#04BE02">CheckList</bo-button >
    </div>
    <bo-popup v-model="showPopup" :position="dir"  closeOnClickOMask>
      <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    </bo-popup>
    <checklist ref="checklist"></checklist>
  </div>
</bo-page>

</template>

<script>
import Checklist from '../components/checklist'

export default {
  components: {
    Checklist
  },
  data () {
    return {
      showPopup: false,
      dir: ''
    }
  },
  methods: {
    showIt (dir) {
      switch (dir) {
        case 0: this.dir = 'left'; break
        case 1: this.dir = 'right'; break
        case 2: this.dir = 'top'; break
        case 3: this.dir = 'bottom'; break
      }
      this.showPopup = true
    },
    showCheckList () {
      this.$refs['checklist'].show()
    }
  }
}
</script>

<style>

</style>
