<template>
  <bo-page>
    <bo-navbar back-link title="Picker" @back-click="$router.back()"></bo-navbar>
    <p align="center" style="margin:30px 0;color:red;">touch事件只能浏览器的调试模式下运行</p>
    <demo-item title="基础用法" no-padding>
      <bo-picker
        :columns="column1"
        @change="onChange1"
      />
    </demo-item>

    <demo-item title="默认选中" no-padding>
      <bo-picker
        :columns="column1"
        :defaultIndex = '2'
        @change="onChange1"
      />
    </demo-item>

    <demo-item title="某项不可选（威海）" no-padding>
      <bo-picker
        :columns="column2"
        @change="onChange2"
      />
    </demo-item>

    <demo-item title="显示Toolbar" no-padding>
      <bo-picker
        show-toolbar
        :columns="column1"
        @change="onChange1"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </demo-item>

    <demo-item title="多列" no-padding>
      <bo-picker
        :columns="column3"
        @change="onChange3"
      />
    </demo-item>

    <demo-item title="列联动" no-padding>
      <bo-picker
        :columns="columns"
        @change="onChange4"
      />
    </demo-item>
  </bo-page>
</template>

<script>
export default {
  data () {
    return {
      column1: ['济南', '青岛', '威海', '淄博', '枣庄'],
      column2: [
        { text: '济南' },
        { text: '青岛' },
        { text: '威海', disabled: true },
        { text: '淄博' },
        { text: '枣庄' }
      ],
      column3: [
        {
          values: ['一月', '二月', '三月', '四月', '五月', '六月']
        },
        {
          values: ['第一周', '第二周', '第三周', '第四周']
        }
      ],
      column4: {
        山东: ['济南', '青岛', '威海', '淄博', '枣庄'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州']
      }
    }
  },
  computed: {
    columns () {
      const column = this.column4
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
      this.$toast({
        msg: value,
        timeout: 500
      })
    },
    onChange2 (picker, value, index) {
      this.$toast({
        msg: value.text,
        timeout: 500
      })
    },
    onChange3 (picker, values) {
      this.$toast({
        msg: JSON.stringify(values),
        timeout: 1000
      })
    },
    onChange4 (picker, values) {
      picker.setColumnValues(1, this.column4[values[0]])
    },
    onConfirm (value, index) {
      // this.$toast(this.toastContent, value, index)
      console.log(value, index)
    },
    onCancel () {
      // this.$toast(this.cancel)
      console.log('cancel')
    }
  }
}
</script>
