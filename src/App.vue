<template>
  <div class="cl-div">
    <div class="center">border UI</div>

    <div style="margin-bottom:50px">
      <div>
        <button @click="openChecklist">选择考场</button>
        <button @click="openAlert(0)">Alert</button>
        <button @click="openAlert(1)">Confirm</button>
        <button @click="openAlert(2)">Toast</button>
        <button @click="openAlert(3)">Loading</button>
        <button @click="openAlert(4)">Notify</button>
      </div>

      <!-- 自定义组件 -->
      <p v-for="(item, index) in kaochangVal" :key="index">{{item.label}}</p>
      <checklist :max=2 ref="checklist" :data-list="data" :checkbox-left=true @on-change="changeKaochangValue"></checklist>
    </div>

    <cell>
      <cell-item title="标题文字" value="标题文字"></cell-item>
      <cell-item title="标题文字" value="标题文字" is-link></cell-item>
      <cell-item icon="icon-roundcheck iconfont" title="特别关注" >
        <template v-slot:value>
          <x-switch v-model="xswitch"></x-switch>
        </template>
      </cell-item>
      <cell-item icon="icon-camera iconfont" is-link>
        <template v-slot:value>
          <h5 style="background-color:orange;border-radius:6px;padding:5px;color:#FFF;">Canvas</h5>
        </template>
      </cell-item>
    </cell>

  </div>
</template>
<script>
import checklist from './components/checklist/checklist'
import { Cell, CellItem } from './components/cell'
import XSwitch from './components/switch'
import { setTimeout } from 'timers'

export default {
  components: {
    checklist,
    Cell,
    CellItem,
    XSwitch
  },
  watch: {
    xswitch () {
      console.log(this.xswitch)
    }
  },
  data () {
    return {
      xswitch: '',
      kaochangVal: [],
      data: [{
        label: '科目二第07考点马路',
        value: '101',
        address: '上海市宝山区宝安公路2009号'
      }, {
        label: '科目二第08考点沪松公路',
        value: '102',
        address: '上海市闵行区沪松公路565弄128号'
      }, {
        label: '科目二第09考点七宝',
        value: '103',
        address: '上海市闵行区沪松公路200号'
      }, {
        label: '科目二第09考点世纪公园世纪公园',
        value: '104',
        address: ''
      }, {
        label: '科目二第09考点世纪公园',
        value: '105',
        address: '上海市浦东新区世纪大道200号'
      }, {
        label: '科目二第09考点哈哈哈哈',
        value: '107'
      }, {
        label: '科目二第09考点合川路地铁站',
        value: '106',
        address: '上海市合川路地铁站2号出口'
      }]
    }
  },
  methods: {
    confirm (value) {
      console.log(value)
    },
    openChecklist () {
      this.$refs['checklist'].show()
    },
    openAlert (type) {
      switch (type) {
        case 0:
          this.$alert({ title: '提示', content: 'haoba，wojuedekeyi.' })
          break
        case 1:
          this.$confirm({ title: '提示', content: 'haoba，wojuedekeyi.' })
          break
        case 2:
          this.$toast({ msg: '服务器开了小差~' })
          break
        case 3:
          this.$loading.open()
          setTimeout(() => {
            this.$loading.close()
          }, 3000)
          break
        case 4:
          this.$notify({ type: 'success', msg: '服务器开了小差~' })
          // this.$notify({ type: 'danger', msg: '服务器开了小差~' })
          // this.$notify({ msg: '服务器开了小差~' })
          break
      }
    },
    changeKaochangValue (val) {
      this.kaochangVal = val
    },
    openAddressSelect () {
      this.show = true
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  }

}
</script>
<style>
.center{
  text-align: center;
  font-size: 18px;
  line-height: 60px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 30px;
}
.cl-div{
  /* height: 1000px; */
}
</style>
