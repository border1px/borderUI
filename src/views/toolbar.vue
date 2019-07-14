<template>
<bo-page>
  <bo-navbar back-link title="Toolbar" @back-click="$router.back()"></bo-navbar>

  <bo-test :todos="todos">
    <template slot-scope="slotProps">
      <span v-if="slotProps.todo.isComplete">✓</span>
      <span>{{slotProps.todo}}</span>
    </template>
  </bo-test>

  <bo-toolbar>
    <bo-toolbar-item icon="home">首页</bo-toolbar-item>
    <bo-toolbar-item icon="fenlei">分类</bo-toolbar-item>
    <bo-toolbar-item icon="cart">购物车</bo-toolbar-item>
    <bo-toolbar-item icon="my">我的</bo-toolbar-item>
  </bo-toolbar>
</bo-page>

</template>

<script>
import Test from '../components/test'

export default {
  components: {
    Test
  },
  data () {
    return {
      todos: [
        {
          id: 0,
          text: 'ziwei0',
          isComplete: false
        },
        {
          text: 'ziwei1',
          id: 1,
          isComplete: true
        },
        {
          text: 'ziwei2',
          id: 2,
          isComplete: false
        },
        {
          text: 'ziwei3',
          id: 3,
          isComplete: false
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus">

</style>
