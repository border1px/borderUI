<template>
<bo-page>
  <bo-navbar back-link title="Dialog" @back-click="$router.back()"></bo-navbar>
  <div>
      <demo-item title="Toast">
        <bo-button auto @click="openToast">Toast</bo-button >
      </demo-item>

      <demo-item title="Alert">
        <bo-button auto color="#5CB85C" @click="openAlert">Alert</bo-button >
      </demo-item>

      <demo-item title="Confirm">
        <bo-button auto type='warning' @click="openConfirm">Confirm</bo-button >
      </demo-item>

       <demo-item title="Loading">
        <bo-button auto color="#FF34B3" @click="openLoading">Loading</bo-button >
      </demo-item>

       <demo-item title="Notify">
        <div class="btn-inline">
          <bo-button  @click="openNotify()">Default</bo-button >
          <bo-button color="#5CB85C" @click="openNotify('success')">Success</bo-button >
          <bo-button type="warning" @click="openNotify('warning')">Warning</bo-button >
          <bo-button type="danger" @click="openNotify('danger')">Danger</bo-button >
        </div>
      </demo-item>
    </div>
</bo-page>

</template>

<script>
export default {
  methods: {
    openToast () {
      this.$toast('我是toast，默认2s后消失')
    },
    openAlert () {
      this.$alert({
        title: '我是标题',
        msg: '这里是主体内容'
      }).then(() => {
        this.$toast('确定')
      })
    },
    openConfirm () {
      this.$confirm({
        title: '我是标题',
        msg: '这里是主体内容'
      }).then((index) => {
        index ? this.$toast('确定') : this.$toast('取消')
      })
    },
    openLoading () {
      this.$loading.open({
        msg: '加载中'
      })
      setTimeout(() => {
        this.$loading.close()
      }, 2000)
    },
    openNotify (type) {
      switch (type) {
        case 'success': this.$notify({ msg: 'Notify', type: 'success' }); break
        case 'warning': this.$notify({ msg: 'Notify', type: 'warning' }); break
        case 'danger': this.$notify({ msg: 'Notify', type: 'danger' }); break
        default: this.$notify({ msg: 'Notify' }); break
      }
    }
  }
}
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
