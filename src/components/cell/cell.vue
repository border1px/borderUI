<template>
  <div class="cell">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
$cell-border-color = #D9D9D9

.cell
  border 1px solid $cell-border-color
  border-left none
  border-right none
  .cell-item:last-child
    .cell-item-inner
      border-bottom none
</style>
