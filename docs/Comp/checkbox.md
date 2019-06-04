## 使用指南

```js
import { CheckboxGroup, Checkbox } from 'border-ui';

Vue.component(CheckboxGroup.name, CheckboxGroup);
Vue.component(Checkbox.name, Checkbox);
```

::: tip
Checkbox组件可以单独使用，也可以组合使用。
:::

#### 单独使用
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-checkbox v-model="result1" >已解决</bo-checkbox>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 禁用状态
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-checkbox disabled>已解决</bo-checkbox>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 按钮组
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-checkbox-group v-model="result2" >
      <bo-checkbox label='A'>A</bo-checkbox>
      <bo-checkbox label='B'>B</bo-checkbox>
      <bo-checkbox label='C'>C</bo-checkbox>
    </bo-checkbox-group>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 按钮组 + 限制选择数量
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-checkbox-group v-model="result3" :max=2>
      <bo-checkbox label='A'>A</bo-checkbox>
      <bo-checkbox label='B'>B</bo-checkbox>
      <bo-checkbox label='C'>C</bo-checkbox>
    </bo-checkbox-group>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 搭配Cell使用
有几点需要注意：
* Checkbox组件通过slot```value```被正确的插入到CellItem的右侧
* 每个Checkbox组件需要定义一个```ref```引用，以便正确的找到每个CellItem对应的Checkbox
* Checkbox、Radio组件内部都有```toggle```方法，绑定组件的click事件，用于触发组件选中状态

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-checkbox-group v-model="result4">
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
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  data () {
    return {
      result1: true,
      result2: ['B'],
      result3: [],
      result4: [],
      check4List: ['A', 'B', 'C']
    }
  },
  methods: {
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    }
  }
}
```

## API
#### Checkbox Props
| 参数           | 说明                                             | 类型            | 默认
| ------------- |:------------------------------------------------ | :-------------: | :-----: |
| disabled      | 是否禁用                                          | Boolean         | false  |
| iconSize      | icon尺寸                                          | String          | 24px   |
| value         | 是否选中(等于trueValue选中,等于falseValue未选中)    | B/S             | false  |
| trueValue     | 选中状态时的值                                     | String          |        |
| falseValue    | 未选中状态的值                                     | String          |        |
| label         | 需配合CheckboxGroup使用，表示该Checkbox被选中时的值 | String           |        |


#### CheckboxBroup Props
| 参数           | 说明                                       | 类型   | 默认值
| ------------- |:------------------------------------------ | :-----: | :-----: |
| value         | CheckboxGroup绑定的值                       | Array   | []     |
| max           | 最多选择几个                                | Number  |         |
| disabled      | 是否禁用                                    | Boolean | false   |