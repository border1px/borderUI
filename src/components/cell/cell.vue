<template>
  <div
    :class="[
      'bo-cell',
      noBorder ? 'no-border' : ''
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bo-cell',
  props: {
    noBorder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus">
$cell-border-color = #D9D9D9

.bo-cell
  border 1px solid $cell-border-color
  border-left none
  border-right none
  .cell-item:last-child
    .cell-item-inner
      border-bottom none
  &.no-border
    border: none
</style>
