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
      iFrameUrl: 'https://youzan.github.io/vant/mobile.html#/zh-CN/'
    }
  },
  methods: {
    _triggerLink (data, init) {
      document.getElementById('simulator').contentWindow.location.reload(true);
      // $("#h5Content").attr("src","${h5.url}"+"?time="+new Date().getTime());
      if(init){
        this.iFrameUrl = 'https://youzan.github.io/vant/mobile.html#/zh-CN/button'
      }else{
        this.iFrameUrl = 'https://youzan.github.io/vant/mobile.html#/zh-CN/'
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

