<template>
<table :class="[
    'bo-table',
    { 'is-stripe': stripe },
    { 'is-border': border }
  ]" >
  <thead>
    <tr class="tr-wrapper">
      <th
        v-for="(item, index) in labels"
        :key="index"
        :colspan="item.colspan"
        :class="`th-wrapper text-${align}`"
        :style = "thStyle"
      >
        {{ item.label }}
      </th>
    </tr>
  </thead>
  <!-- Table-body -->
  <tbody class="bo-table-body">
    <tr
      v-for="(item, index) in data"
      :key="index" :data-index="index"
      :class="[
        'tr-wrapper',
        {'is-underline': underline}
      ]"
      >
      <slot v-bind:row="item"></slot>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'bo-table',
  props: {
    data: { type: Array, default: () => [] },
    align: { type: String, default: 'center' },
    stripe: { type: Boolean, default: false },
    thBg: { type: String, default: '' },
    thColor: { type: String, default: '#000' },
    underline: { type: Boolean, default: false },
    border: { type: Boolean, default: false }
  },
  provide () {
    return {
      boTable: this
    }
  },
  data () {
    return {
      labels: [] // 表头
    }
  },
  computed: {
    thStyle () {
      return {
        background: this.thBg,
        border: this.thBg,
        color: this.thColor
      }
    }
  },
  methods: {
    addLabel (label) {
      const { labels } = this
      const existItem = labels.find(item => item.label === label)
      // 利用 colspan 来处理合并表头的情况
      if (existItem) {
        existItem.colspan += 1
      } else {
        labels.push({
          label,
          colspan: 1
        })
      }
    },
    delLabel (label) {
      this.labels = this.labels.filter(item => item.label !== label)
    }
  }
}
</script>

<style lang="stylus">
$border-color = #CCC
$line-bg = #f5f5f5
$underline-color = #dddddd

.bo-table
  width 100%
  background #FFF
  &.is-border
    border-collapse: collapse
    border: 1px solid $border-color
    tr th
      border: 1px solid $border-color
    tr td
      border: 1px solid $border-color
      // border-top none
  &.is-stripe
    .bo-table-body
      .tr-wrapper:nth-child(2n)
        background: $line-bg
  .tr-wrapper
    font-size 14px
    .bo-table-column
      padding: 12px 6px
    &.is-underline
      border-bottom: 1px solid $underline-color
  .th-wrapper
    font-size 14px
    font-weight bold
    padding: 12px 6px
    &.text-left
      text-align: left
    &.text-center
      text-align: center
    &.text-right
      text-align: right
</style>
