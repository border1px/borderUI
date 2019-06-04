<template>
<bo-page>
  <bo-navbar back-link title="Radio" @back-click="$router.back()" ></bo-navbar>
  <div >
    <demo-item title="单独使用">
      <bo-radio-group v-model="check1" >
        <bo-radio label="苹果">苹果</bo-radio>
        <bo-radio label="香蕉">香蕉</bo-radio>
        <bo-radio label="桃子">桃子</bo-radio>
        <bo-radio label="荔枝">荔枝</bo-radio>
      </bo-radio-group>
    </demo-item>

    <!-- <demo-item title="禁用状态">
      <bo-checkbox disabled>已解决</bo-checkbox>
    </demo-item>

    <demo-item title="按钮组">
      <bo-checkbox-group v-model="check2" >
        <bo-checkbox label='A'>A</bo-checkbox>
        <bo-checkbox label='B'>B</bo-checkbox>
        <bo-checkbox label='C'>C</bo-checkbox>
      </bo-checkbox-group>
      {{check2}}
    </demo-item>

    <demo-item title="按钮组 + 限制选择数量">
      <bo-checkbox-group v-model="check3" :max=2>
        <bo-checkbox label='A'>A</bo-checkbox>
        <bo-checkbox label='B'>B</bo-checkbox>
        <bo-checkbox label='C'>C</bo-checkbox>
      </bo-checkbox-group>
      {{check3}}
    </demo-item>

    <demo-item title="搭配Cell使用" no-padding>
      <bo-checkbox-group v-model="check4">
        <bo-cell>
          <bo-cell-item
            v-for="(item, index) in check4List"
            :key="item"
            clickable
            :title="`复选框 ${item}`"
            @click="toggle(index)"
          >
            <bo-checkbox :name="item" ref="checkboxes" :label=item slot="value"/>
          </bo-cell-item>
        </bo-cell>
      </bo-checkbox-group>
      {{check4}}
    </demo-item> -->
  </div>
</bo-page>
</template>

<script>
export default {
  data () {
    return {
      check1: '香蕉',
      check2: ['B'],
      check3: [],
      check4: [],
      check4List: ['A', 'B', 'C']
    }
  },
  methods: {
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    }
  }
}
</script>
