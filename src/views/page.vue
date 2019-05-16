<template>
  <bo-page>
    <bo-navbar title="标题" >
      <div slot="nav-left">《Back</div>
      <bo-button size="small" slot="nav-right">Btn1</bo-button>
      <div slot="title">我是标题</div>
      <bo-subnavbar>
        <bo-tabbar :btnArr='btnArr'></bo-tabbar>
      </bo-subnavbar>
    </bo-navbar>
    <div>
      page-content
      <bo-icon name='fanhui'></bo-icon>
    </div>
  </bo-page>
</template>

<script>
export default {
  data () {
    return {
      btnArr: [
        { name: '全部' },
        { name: '待付款' },
        { name: '待发货' },
        { name: '已付款' },
        { name: '待评价' }
      ]
    }
  }
}
</script>
