<template>
  <div class="subnavbar" :class="classes">
    <div class="subnavbar-inner" v-if="inner">
      <div v-if="title" class="title">{{title}}</div>
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>
<script>
import Utils from '../utils/utils'
import Mixins from '../utils/mixins'
const SubnavbarProps = Utils.extend({
  sliding: Boolean,
  title: String,
  inner: {
    type: Boolean,
    default: true
  }
}, Mixins.colorProps)
export default {
  name: 'bo-subnavbar',
  props: SubnavbarProps,
  computed: {
    classes () {
      return Utils.extend({
        sliding: this.sliding
      }, Mixins.colorClasses(this))
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../style/var.styl'
.subnavbar
  background-color #FFF
  .subnavbar-inner
    width 100%
    height $subnavbar-height
    padding 0 $subnavbar-padding
    display flex
    align-items center
    justify-content: space-between
</style>
