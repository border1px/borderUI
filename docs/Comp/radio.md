## 使用指南

```js
import { RadioGroup, Radio } from 'border-ui';

Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Radio.name, Radio);
```

组件会渲染原生 `input[type="radio"]`，支持键盘焦点和原生单选交互。
RadioGroup 会为组内控件生成一致的 `name`，也可以通过 `name` 属性显式指定。

#### 基本用法
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
      <bo-radio-group v-model="radio1" >
        <bo-radio label="苹果">苹果</bo-radio>
        <bo-radio label="香蕉">香蕉</bo-radio>
        <bo-radio label="桃子">桃子</bo-radio>
        <bo-radio label="荔枝">荔枝</bo-radio>
      </bo-radio-group>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  data () {
    return {
      radio1: '香蕉',   // 默认会选中这个项目
    }
  }
}
```

#### 禁用状态
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
      <bo-radio-group disabled>
        <bo-radio label="苹果">苹果</bo-radio>
        <bo-radio label="香蕉">香蕉</bo-radio>
      </bo-radio-group>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 搭配Cell使用
有几点需要注意：
* Radio组件通过slot```value```被正确的插入到CellItem的右侧
* 每个Radio组件需要定义一个```ref```引用，以便正确的找到每个CellItem对应的Radio
* Checkbox、Radio组件内部都有```toggle```方法，绑定组件的click事件，用于触发组件选中状态

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
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
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  data () {
    return {
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
```

## API
#### Radio Props
| 参数           | 说明                                             | 类型            | 默认
| ------------- |:------------------------------------------------ | :-------------: | :-----: |
| disabled      | 是否禁用                                          | Boolean         | false  |
| iconSize      | icon尺寸                                          | String          | 24px   |
| label         | 被选中时写入 v-model 的值                           | String / Number  |        |
| name          | 独立 Radio 的原生 name                              | String           |        |

#### Radio Events
| 事件名        | 说明                                      | 回调参数 |
| ------------- |:------------------------------------------| :------: |
| input         | Vue 2 v-model 更新事件                     | label    |
| change        | 独立 Radio 选中事件                         | label    |


#### RadioGroup Props
| 参数           | 说明                                       | 类型   | 默认值
| ------------- |:------------------------------------------ | :-----: | :-----: |
| v-model	    | 当前选中的标识                              | String  |         |
| disabled      | 是否禁用                                    | Boolean | false   |
| name          | 组内原生 Radio 共用的 name                  | String  | 自动生成 |
| aria-label    | 单选组的无障碍名称                           | String  |         |

#### RadioGroup Events
| 事件名           | 说明                                     | 类型      | 默认值
| ------------- |:------------------------------------------ | :-----:   | :-----: |
| change        | 单个Radio被选中触发，参数为Radio的label      | Function  |         |
