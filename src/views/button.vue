<template>
  <div class="body-padding">
    <div class="btn-inline">
      <bo-button type="primary" size="large" >Primary</bo-button>
      <bo-button type="warning" >Warning</bo-button>
      <bo-button type="danger" >Danger</bo-button>
      <bo-button color="#04BE02" >#04BE02</bo-button>
      <bo-button color="#EE30A7" size="small">#EE30A7</bo-button>
    </div>
    <div class="btn-block">
      <bo-button auto>Primary</bo-button >
      <bo-button type="warning" auto>Warning</bo-button >
      <bo-button type="danger" auto>Danger</bo-button >
      <bo-button color="#04BE02" square auto>#04BE02</bo-button>
      <bo-button type="hollow" auto>hollow</bo-button>
      <bo-button color="#EE30A7" size="large" loading auto>Button</bo-button >
    </div>
  </div>
</template>

<script>

</script>

<style>
.btn-inline .pf-button {
  margin-right: 5px;
  margin-bottom: 20px;
}
.btn-block > button{
  margin-bottom: 10px!important;
}
</style>
