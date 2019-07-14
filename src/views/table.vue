<template>
  <bo-page>
    <bo-navbar back-link title="Table" @back-click="$router.back()"></bo-navbar>
      <demo-item title="基础用法" no-padding>
        <bo-table :data="tableData">
          <template slot-scope="{row}">
            <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
            <bo-table-column label="日期">{{ row.date }}</bo-table-column>
            <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
            <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
          </template>
        </bo-table>
      </demo-item>

      <demo-item title="带下划线" no-padding>
        <bo-table :data="tableData" underline>
          <template slot-scope="{row}">
            <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
            <bo-table-column label="日期">{{ row.date }}</bo-table-column>
            <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
            <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
          </template>
        </bo-table>
      </demo-item>

      <demo-item title="表头高亮" no-padding>
        <bo-table :data="tableData" thBg="#CCC">
          <template slot-scope="{row}">
            <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
            <bo-table-column label="日期">{{ row.date }}</bo-table-column>
            <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
            <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
          </template>
        </bo-table>
      </demo-item>

      <demo-item title="隔行换色" no-padding>
        <bo-table :data="tableData" thBg="#CCC" stripe>
          <template slot-scope="{row}">
            <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
            <bo-table-column label="日期">{{ row.date }}</bo-table-column>
            <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
            <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
          </template>
        </bo-table>
      </demo-item>

      <demo-item title="表格边框" no-padding>
        <bo-table :data="tableData" thBg="#CCC" stripe border>
          <template slot-scope="{row}">
            <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
            <bo-table-column label="日期">{{ row.date }}</bo-table-column>
            <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
            <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
          </template>
        </bo-table>
      </demo-item>

      <demo-item title="右对齐" no-padding>
        <bo-table :data="tableData" thBg="#CCC" stripe border align="right">
          <template slot-scope="{row}">
            <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
            <bo-table-column label="日期">{{ row.date }}</bo-table-column>
            <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
            <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
          </template>
        </bo-table>
      </demo-item>
  </bo-page>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2019-07-13',
          name: '小伙儿',
          age: 21,
          sex: 0
        },
        {
          date: '2019-07-13',
          name: '小伙儿',
          age: 21,
          sex: 0
        },
        {
          date: '2019-07-13',
          name: '小伙儿',
          age: 21,
          sex: 0
        },
        {
          date: '2019-07-13',
          name: '小伙儿',
          age: 21,
          sex: 0
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.table
  padding: 30px 10px
  background-color #FFF
  margin-top 1px
</style>
