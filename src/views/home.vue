<template>
  <div class="container">

    <p align="center" style="margin:20px 0">
      <img src="../assets/logo.png" width="100">
    </p>
    <p align="center" style="margin:20px 0">
      borderUI
    </p>
    <div class="row">
      <router-link to="/button" class="col">
        <i class="iconfont icon-anniu"></i>
        <div class="icon-text">Button</div>
      </router-link>
      <router-link to="/button_group" class="col">
        <i class="iconfont icon-anniu"></i>
        <div class="icon-text">Btn Group</div>
      </router-link>
      <router-link to="/navbar" class="col">
        <i class="iconfont icon-NavBar-Back" style="font-size:20px"></i>
        <div class="icon-text">Navbar</div>
      </router-link>
      <router-link to="/switch" class="col">
        <i class="iconfont icon-switch"></i>
        <div class="icon-text">Switch</div>
      </router-link>
    </div>
    <div class="row">
      <router-link to="/dialog" class="col">
        <i class="iconfont icon-Popup"></i>
        <div class="icon-text">Dialog</div>
      </router-link>
      <router-link to="/checkbox" class="col">
        <i class="iconfont icon-check-box"></i>
        <div class="icon-text">checkbox</div>
      </router-link>
      <router-link to="/radio" class="col">
        <i class="iconfont icon-radio"></i>
        <div class="icon-text">Radio</div>
      </router-link>
      <router-link to="/cell" class="col">
        <i class="iconfont icon-boardsheet-o"></i>
        <div class="icon-text">Cell</div>
      </router-link>
    </div>
    <div class="row">
      <router-link to="/swipe" class="col">
        <i class="iconfont icon-swiper"></i>
        <div class="icon-text">Swipe</div>
      </router-link>
      <router-link to="/tabbar" class="col">
        <i class="iconfont icon-tab"></i>
        <div class="icon-text">Tabbar</div>
      </router-link>
      <div class="col">
        <i class="iconfont icon-yduiindextabbar"></i>
        <div class="icon-text">Toolbar</div>
      </div>
      <router-link to="/uploader" class="col">
        <i class="iconfont icon-tupianshangchuan"></i>
        <div class="icon-text">Uploader</div>
      </router-link>
    </div>
    <div class="row">
      <div class="col">
        <i class="iconfont icon-YDUI-index-scrolltab"></i>
        <div class="icon-text">ScrollTab</div>
      </div>
      <div class="col">
        <i class="iconfont icon-yduiindexcityselect"></i>
        <div class="icon-text">CitySelect</div>
      </div>
      <router-link to="/picker" class="col">
        <i class="iconfont icon-nianyuerixuanze"></i>
        <div class="icon-text">DatePicker</div>
      </router-link>
      <div class="col">
        <i class="iconfont icon-houdongfangiconfont04"></i>
        <div class="icon-text">Sort</div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <i class="iconfont icon-YDUI-index-scrolltab"></i>
        <div class="icon-text">ScrollTab</div>
      </div>
      <div class="col">
        <i class="iconfont icon-yduiindexcityselect"></i>
        <div class="icon-text">CitySelect</div>
      </div>
      <router-link to="/picker" class="col">
        <i class="iconfont icon-nianyuerixuanze"></i>
        <div class="icon-text">DatePicker</div>
      </router-link>
      <router-link to="/swipe" class="col">
        <i class="iconfont icon-houdongfangiconfont04"></i>
        <div class="icon-text">Swipe</div>
      </router-link>
    </div>
    <!-- <bo-layout></bo-layout> -->
  </div>
</template>

<style lang="stylus" scoped>
.iconfont
  font-size 30px
.icon-duihuakuang
  font-size 22px
.icon-menuonboardsheet
  font-size 20px
.icon-rili //日历
  font-size 26px
.icon-check-box
  font-size 26px
.icon-houdongfangiconfont04
  font-size 26px

.container
  .row
    display flex
    .col
      flex 1
      display flex
      flex-direction column
      justify-content center
      align-items center
      padding 20px 0
      background-color #ffffff
      border 1px solid #eeeeee
      border-left none
      border-top none
      &:last-child
        border-right none
      .icon-text
        font-size 14px
      &:active
        background-color #F2F2F2
</style>
