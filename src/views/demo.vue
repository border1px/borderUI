<template>
  <bo-page>
    <bo-navbar back-link title="Table" @back-click="$router.back()"></bo-navbar>
    <div class="table">
      <bo-table :data="tableData" align="center" thBg="#CCC" underline>
        <template slot-scope="{row}">
          <bo-table-column label="姓名">{{ row.name }}</bo-table-column>
          <bo-table-column label="日期">{{ row.date }}</bo-table-column>
          <bo-table-column label="年龄">{{ row.age }}</bo-table-column>
          <bo-table-column label="性别">{{ row.sex }}</bo-table-column>
        </template>
      </bo-table>
    </div>


  </bo-page>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          age: 21,
          sex: 0
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          age: 21,
          sex: 0
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          age: 21,
          sex: 0
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          age: 21,
          sex: 0
        },
        {
          date: "2016-05-02",
          name: "王小虎",
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
