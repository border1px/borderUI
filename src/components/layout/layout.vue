<template>
  <div class="pf-layout">
    <div class="navbar">
      <slot name="navbar"></slot>
    </div>

    <div class="top">
      <slot name="top"></slot>
    </div>

    <section class="pf-scrollview" ref="scrollView" id="scrollView">
      <slot></slot>
    </section>

    <div class="bottom">
      <slot name="bottom"></slot>
    </div>

    <div class="toolbar">
      <slot name="toolbar"></slot>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'bo-layout'
}
</script>

<style scoped lang="stylus">
@import "../../style/var";

.{$css-prefix}
  &-layout
    height: 100%;
    overflow :hidden;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  &-scrollview
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
    margin-bottom: -1px;
</style>
