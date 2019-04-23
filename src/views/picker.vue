<template>
  <div>
    <bo-picker
      :columns="columns"
      @change="onChange1"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      column2: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' }
      ],
      column3: {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州']
      },
    }
  },
  computed: {
    columns () {
      const column = this.column3
      return [
        {
          values: Object.keys(column),
          className: 'column1'
        },
        {
          values: column[Object.keys(column)[0]],
          className: 'column2',
          defaultIndex: 2
        }
      ]
    }
  },

  methods: {
    onChange1 (picker, value, index) {
      // this.$toast(this.toastContent, value, index)
    },
    onChange2 (picker, values) {
      // picker.setColumnValues(1, this.column3[values[0]])
    },
    onConfirm (value, index) {
      // this.$toast(this.toastContent, value, index)
    },
    onCancel () {
      // this.$toast(this.cancel)
    }
  }
};
</script>
