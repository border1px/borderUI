<template>
<bo-page>
  <bo-navbar back-link title="Uploader" @back-click="$router.back()"></bo-navbar>
  <div>
    <demo-item title="基础用法" no-padding>
      <bo-uploader
        :maxImgWidth="800"

        @onAllFilesUploaded = "onAllFilesUploaded"
        @onFileUpload = "onFileUpload"
        @onFileError = "onFileError"
        @onFilesBase64 = "onFilesBase64"
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
    onAllFilesUploaded (files) {
      console.log('onAllFilesUploaded', files)
    },
    onFileUpload (response) {
      console.log('onFileUpload', response)
    },
    onFileError (response) {
      console.log(response)
    },
    onFilesBase64 (arrBase64) {
      console.table(arrBase64)
    }
  }
}
</script>

<style>

</style>
