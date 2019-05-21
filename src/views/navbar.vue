<template>
  <bo-page>
  <bo-navbar back-link title="Navbar" @back-click="$router.back()"></bo-navbar>

    <demo-item title="最简单用法">
      <bo-navbar title="我是标题"></bo-navbar>
    </demo-item>

    <demo-item title="标题 + 返回按钮">
      <bo-navbar @back-click="onBackClick" back-link title="我是标题"></bo-navbar>
    </demo-item>

    <demo-item title="标题 + 返回按钮 + 文字">
      <bo-navbar back-link="back" title="我是标题"></bo-navbar>
    </demo-item>

    <demo-item title="自定义返回按钮">
      <bo-navbar title="我是标题">
        <div slot="nav-left">
          <bo-button>back</bo-button>
        </div>
      </bo-navbar>
    </demo-item>

    <demo-item title="自定义标题">
      <bo-navbar>
        <div slot="title">
          <bo-button>我是自定义标题</bo-button>
        </div>
      </bo-navbar>
    </demo-item>

    <demo-item title="自定义右侧按钮">
      <bo-navbar title="我是标题">
        <div slot="nav-right">
          <bo-button size="small">按钮1</bo-button>
          <bo-button size="small">按钮2</bo-button>
        </div>
      </bo-navbar>
    </demo-item>

    <!-- <demo-item title="带工具栏">
      <bo-navbar title="标题">
        <bo-subnavbar>
          <bo-tabbar :btnArr='btnArr'></bo-tabbar>
        </bo-subnavbar>
      </bo-navbar>
    </demo-item> -->

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
  },
  methods: {
    onBackClick () {
      alert('back-click')
    }
  }
}
</script>
