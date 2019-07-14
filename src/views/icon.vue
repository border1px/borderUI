<template>
<bo-page>
  <bo-navbar back-link title="Icon" @back-click="$router.back()"></bo-navbar>
  <ul class="flex-container">
    <li class="flex-item">
      <bo-icon name="back"></bo-icon>
      <div class="name">back</div>
    </li>
    <li class="flex-item">
      <bo-icon name="weixin"></bo-icon>
      <div class="name">weixin</div>
    </li>
    <li class="flex-item">
      <bo-icon name="alipay"></bo-icon>
      <div class="name">alipay</div>
    </li>
    <li class="flex-item">
      <bo-icon name="wepay"></bo-icon>
      <div class="name">wepay</div>
    </li>
    <li class="flex-item">
      <bo-icon name="home"></bo-icon>
      <div class="name">home</div>
    </li>
    <li class="flex-item">
      <bo-icon name="fenlei"></bo-icon>
      <div class="name">fenlei</div>
    </li>
    <li class="flex-item">
      <bo-icon name="cart"></bo-icon>
      <div class="name">cart</div>
    </li>
    <li class="flex-item">
      <bo-icon name="my"></bo-icon>
      <div class="name">my</div>
    </li>
    <li class="flex-item">
      <bo-icon name="avator"></bo-icon>
      <div class="name">avator</div>
    </li>
    <li class="flex-item">
      <bo-icon name="smile"></bo-icon>
      <div class="name">smile</div>
    </li>
    <li class="flex-item">
      <bo-icon name="meh"></bo-icon>
      <div class="name">meh</div>
    </li>
    <li class="flex-item">
      <bo-icon name="frown"></bo-icon>
      <div class="name">frown</div>
    </li>
    <li class="flex-item">
      <bo-icon name="reload"></bo-icon>
      <div class="name">reload</div>
    </li>
    <li class="flex-item">
      <bo-icon name="filter"></bo-icon>
      <div class="name">filter</div>
    </li>
    <li class="flex-item">
      <bo-icon name="like"></bo-icon>
      <div class="name">like</div>
    </li>
    <li class="flex-item">
      <bo-icon name="unlike"></bo-icon>
      <div class="name">unlike</div>
    </li>
    <li class="flex-item">
      <bo-icon name="suoxiao"></bo-icon>
      <div class="name">suoxiao</div>
    </li>
    <li class="flex-item">
      <bo-icon name="fangda"></bo-icon>
      <div class="name">fangda</div>
    </li>
    <li class="flex-item">
      <bo-icon name="left"></bo-icon>
      <div class="name">left</div>
    </li>
    <li class="flex-item">
      <bo-icon name="up"></bo-icon>
      <div class="name">up</div>
    </li>
    <li class="flex-item">
      <bo-icon name="right"></bo-icon>
      <div class="name">right</div>
    </li>
    <li class="flex-item">
      <bo-icon name="down"></bo-icon>
      <div class="name">down</div>
    </li>
    <li class="flex-item">
      <bo-icon name="doc"></bo-icon>
      <div class="name">doc</div>
    </li>
    <li class="flex-item">
      <bo-icon name="download"></bo-icon>
      <div class="name">download</div>
    </li>
    <li class="flex-item">
      <bo-icon name="youhui"></bo-icon>
      <div class="name">youhui</div>
    </li>
    <li class="flex-item">
      <bo-icon name="location"></bo-icon>
      <div class="name">location</div>
    </li>
    <li class="flex-item">
      <bo-icon name="chart"></bo-icon>
      <div class="name">chart</div>
    </li>
    <li class="flex-item">
      <bo-icon name="js"></bo-icon>
      <div class="name">js</div>
    </li>
    <li class="flex-item">
      <bo-icon name="addpic"></bo-icon>
      <div class="name">addpic</div>
    </li>
    <li class="flex-item">
      <bo-icon name="link"></bo-icon>
      <div class="name">link</div>
    </li>
    <li class="flex-item">
      <bo-icon name="picture"></bo-icon>
      <div class="name">picture</div>
    </li>
    <li class="flex-item">
      <bo-icon name="love"></bo-icon>
      <div class="name">love</div>
    </li>
    <li class="flex-item">
      <bo-icon name="loved"></bo-icon>
      <div class="name">loved</div>
    </li>
    <li class="flex-item">
      <bo-icon name="store"></bo-icon>
      <div class="name">store</div>
    </li>
    <li class="flex-item">
      <bo-icon name="stored"></bo-icon>
      <div class="name">stored</div>
    </li>
  </ul>
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

  }
}
</script>

<style lang="stylus">
.flex-container
  display flex
  flex-wrap wrap
  margin-top 1px
  .flex-item
    width 20%
    padding:12px 0
    background-color #FFF
    box-sizing border-box
    text-align center
    border-right 1px solid #f5f5f5
    border-bottom 1px solid #f5f5f5
    .name
      margin-top:10px
      color:#999
      font-size 14px
  .flex-item:nth-child(5n)
    border-right none
</style>
