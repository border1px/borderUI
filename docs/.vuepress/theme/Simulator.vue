<template>
  <div class="simulator">
    <iframe id="simulator" :src="iFrameUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Simulator',
  data () {
    return {
      iFrameUrl: 'http://127.0.0.1:8082/'
    }
  },
  methods: {
    _triggerLink (data, init) {
      document.getElementById('simulator').contentWindow.location.reload(true);
      // $("#h5Content").attr("src","${h5.url}"+"?time="+new Date().getTime());
      if(init){
        this.iFrameUrl = 'http://127.0.0.1:8082/button'
      }else{
        this.iFrameUrl = 'http://127.0.0.1:8082/'
      }

    }
  }
}
</script>

<style lang="stylus">
#simulator
  width 100%
  height 646px
</style>

