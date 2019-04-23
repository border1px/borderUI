<template>
  <div class="container">
    <div class="row">
      <router-link to="/button" class="col">
        <i class="iconfont icon-anniu"></i>
        <div class="icon-text">Button</div>
      </router-link>
      <router-link to="/button_group" class="col">
        <i class="iconfont icon-duihuakuang"></i>
        <div class="icon-text">Dialog</div>
      </router-link>
      <div class="col">
        <i class="iconfont icon-menuonboardsheet"></i>
        <div class="icon-text">Cell</div>
      </div>
      <div class="col">
        <i class="iconfont icon-switch"></i>
        <div class="icon-text">Switch</div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <i class="iconfont icon-check-box"></i>
        <div class="icon-text">Checkbox</div>
      </div>
      <div class="col">
        <i class="iconfont icon-radio"></i>
        <div class="icon-text">Radio</div>
      </div>
      <div class="col">
        <i class="iconfont icon-yduiindexauctionsheet"></i>
        <div class="icon-text">ActionSheet</div>
      </div>
      <div class="col">
        <i class="iconfont icon-tab2"></i>
        <div class="icon-text">Tab</div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <i class="iconfont icon-shurukuang"></i>
        <div class="icon-text">Form</div>
      </div>
      <div class="col">
        <i class="iconfont icon-rili"></i>
        <div class="icon-text">Calc</div>
      </div>
      <div class="col">
        <i class="iconfont icon-yduiindextabbar"></i>
        <div class="icon-text">Toolbar</div>
      </div>
      <div class="col">
        <i class="iconfont icon-yduiindexspinner"></i>
        <div class="icon-text">Number</div>
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
      <div class="col">
        <i class="iconfont icon-houdongfangiconfont04"></i>
        <div class="icon-text">Sort</div>
      </div>
    </div>
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
