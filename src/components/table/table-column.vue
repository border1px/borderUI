<template>
  <td :class="`bo-table-column text-${align}`">
    <slot>无</slot>
  </td>
</template>
<script>
export default {
  name: 'bo-table-column',
  props: {
    label: { type: String, required: true }
  },
  data () {
    return {
      align: 'left'
    }
  },
  inject: ["boTable"],
  created() {
    this.$nextTick(() => {
      this.align = this.boTable.align

      let dom = this.$el.parentNode;
      let index = null;

      while (dom.tagName !== "TR") {
        dom = dom.parentNode;
      }

      index = dom.getAttribute("data-index");
      if (index === "0") {
        this.boTable.addLabel(this.label);

        this.$destroy = () => {
          this.boTable.delLabel(this.label);
        };
      }
    });
  }
};
</script>

<style lang="stylus">
.bo-table-column
  &.text-left
    text-align: left
  &.text-center
    text-align: center
  &.text-right
    text-align: right
</style>
