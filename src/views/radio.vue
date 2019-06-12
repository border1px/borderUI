<template>
<bo-page>
  <bo-navbar back-link title="Radio" @back-click="$router.back()" ></bo-navbar>
  <div >
    <demo-item title="基础用法">
      <bo-radio-group v-model="radio1" >
        <bo-radio label="苹果">苹果</bo-radio>
        <bo-radio label="香蕉">香蕉</bo-radio>
        <bo-radio label="桃子">桃子</bo-radio>
        <bo-radio label="荔枝">荔枝</bo-radio>
      </bo-radio-group>
      <div style="padding:15px 0;font-weight:bold;">当前值：{{radio1}}</div>
    </demo-item>

    <demo-item title="禁用状态">
      <bo-radio-group disabled>
        <bo-radio label="苹果">苹果</bo-radio>
        <bo-radio label="香蕉">香蕉</bo-radio>
      </bo-radio-group>
    </demo-item>

    <demo-item title="搭配Cell使用" no-padding>
      <bo-radio-group v-model="radio2" @change="onChange">
        <bo-cell>
          <bo-cell-item
            v-for="(item, index) in radioList"
            :key="item"
            clickable
            :title="`${item}`"
            @click="toggle(index)"
          >
            <bo-radio :name="item" ref="checkboxes" :label=item slot="value"/>
          </bo-cell-item>
        </bo-cell>
      </bo-radio-group>
      <div style="padding:15px;font-weight:bold;">当前值：{{radio2}}</div>
    </demo-item>
  </div>
</bo-page>
</template>

<script>
export default {
  data () {
    return {
      radio1: '香蕉',
      radio2: '',
      radioList: ['苹果', '香蕉', '桃子', '荔枝']
    }
  },
  methods: {
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    },
    onChange (val) {
      alert(val)
    }
  }
}
</script>
