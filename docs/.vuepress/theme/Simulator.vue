<template>
  <div class="simulator">
    <iframe id="simulator" :src="iFrameUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Simulator',
  mounted() {
    if (process.env.NODE_ENV == 'development') {
      this.iFrameUrl = 'http://localhost:8080/'
    } else if (process.env.NODE_ENV == 'production') {
      this.iFrameUrl = 'https://border-1px.github.io/border-ui/demo/'
    }
  },
  data () {
    return {
      iFrameUrl: '',
      exclude:['introduction','quickstart','changelog','aboutme']
    }
  },
  methods: {
    _triggerLink (data, init) {
      // document.getElementById('simulator').contentWindow.location.reload(true);
      // // $("#h5Content").attr("src","${h5.url}"+"?time="+new Date().getTime());
      // if(init){
      //   this.iFrameUrl = 'http://127.0.0.1:8082/button'
      // }else{
      //   this.iFrameUrl = 'http://127.0.0.1:8082/'
      // }

    },
    _changeRouter (data, init) {
      // var prefix = 'http://localhost:8080/#/'
      var prefix = 'https://border-1px.github.io/border-ui/demo/#/'
      var action = data.path.substring(6, data.path.length -  5)

      if (data.path.indexOf('FAQ') == -1) {
        this.iFrameUrl = prefix + action
      }
    }
  }
}
</script>

<style lang="stylus">
#simulator
  width 100%
  height 646px
  border 5px solid #000
  border-radius 10px
  box-sizing border-box
  html
    height 100%
  body
    height 100%
</style>

