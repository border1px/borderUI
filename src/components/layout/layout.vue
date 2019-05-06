<template>
  <div class="pf-layout">
    <div class="pf-test">33333</div>
    <slot name="navbar"></slot>

    <slot name="top"></slot>

    <section class="pf-scrollview" ref="scrollView" id="scrollView">
      <slot></slot>
    </section>

    <slot name="bottom"></slot>

    <slot name="tabbar"></slot>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'bo-layout'
}
</script>

<style scoped lang="stylus">
@import "../../style/var";

.@{css-prefix}
  &-test
    color:red
    font-weight bold
  // &-view
  //   margin: 0 auto;
  //   max-width: @max-width;
  //   min-width: @min-width;
  //   &:before
  //     content: '';
  //     display: block;
  //     width: 100%;
  //     height: @navbar-height;
  //   &:after
  //     content: '';
  //     display: block;
  //     width: 100%;
  //     height: @body-padding-bottom * 3;
  &-layout
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: @max-width;
    min-width: @min-width;
  &-scrollview
    width: 100%;
    height: 100%;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
    margin-bottom: -1px;
    &:after
      content: '';
      display: block;
      width: 100%;
      height: $body-padding-bottom;

// .ios .$css-prefix-scrollview {
//   margin-top: 1px;
// }

// .hairline .$css-prefix-scrollview {
//   margin-top: 0.5px;
// }
</style>
