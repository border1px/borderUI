<template>
<bo-page>
  <bo-navbar back-link title="Swipe" @back-click="$router.back()"></bo-navbar>
  <div>
    <p align="center" style="margin:30px 0;color:red;">touch事件只能浏览器的调试模式下运行</p>
    <demo-item title="基础用法" no-padding>
      <bo-swipe>
        <bo-swipe-item v-for="(item,index) in items" :key="index">
          <div class="item" :style="bgColor(index)">{{item.id}}</div>
        </bo-swipe-item>
      </bo-swipe>
    </demo-item>

    <demo-item title="自动轮播(3秒一张)" no-padding>
      <bo-swipe :autoplay="3000">
        <bo-swipe-item v-for="(item,index) in items" :key="index">
          <div class="item" :style="bgColor(index)">{{item.id}}</div>
        </bo-swipe-item>
      </bo-swipe>
    </demo-item>

    <demo-item title="监听change时间" no-padding>
      <bo-swipe @change="onChange">
        <bo-swipe-item v-for="(item,index) in items" :key="index">
          <div class="item" :style="bgColor(index)">{{item.id}}</div>
        </bo-swipe-item>
      </bo-swipe>
    </demo-item>

    <demo-item title="自定义指示器" no-padding>
      <bo-swipe @change="onChangeIndicator">
        <bo-swipe-item v-for="(item,index) in items" :key="index">
          <div class="item" :style="bgColor(index)">{{item.id}}</div>
        </bo-swipe-item>
        <div class="my-indicator" slot="indicator">
          {{ activeIndex + 1 }}/5
        </div>
      </bo-swipe>
    </demo-item>
  </div>
</bo-page>

</template>

<script>
export default {
  data () {
    return {
      items: [
        { id: 1, bg: '#00BFFF' },
        { id: 2, bg: '#5cb85c' },
        { id: 3, bg: '#FF6A6A' },
        { id: 4, bg: '#f0ad4e' },
        { id: 5, bg: '#9ACD32' }
      ],
      activeIndex: 0
    }
  },
  methods: {
    onChange (val) {
      this.$toast(`当前item索引：${val}`)
    },
    onChangeIndicator (val) {
      this.activeIndex = val
    },
    bgColor (index) {
      return {
        background: this.items[index].bg
      }
    }
  }
}
</script>

<style>
.item{
  height:150px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
}
.my-indicator{
  position: absolute;
  right:10px;
  bottom:10px;
  padding:4px;
  color:#FFF;
  font-size: 12px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 10px;
}
</style>
