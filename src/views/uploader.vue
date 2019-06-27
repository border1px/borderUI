<template>
<bo-page>
  <bo-navbar back-link title="Uploader" @back-click="$router.back()"></bo-navbar>
  <div>
    <demo-item title="基础用法" no-padding>
      <bo-uploader
        @onAllFilesUploaded = "onAllFilesUploaded"
        @onFileUpload = "onFileUpload"
        @onFileError = "onFileError"
      ></bo-uploader>
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
  },
  methods: {
    onAllFilesUploaded (e) {
      console.log(e)
    },
    onFileUpload (e, r) {
      console.log(e, r)
    },
    onFileError (e) {
      console.log(e)
    }
  }
}
</script>

<style>

</style>
