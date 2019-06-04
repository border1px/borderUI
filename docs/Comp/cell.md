## 使用指南

```js
import { Cell, CellItem } from 'border-ui';

Vue.component(Cell.name, Cell);
Vue.component(CellItem.name, CellItem);
```

::: tip
Cell组件一般会成组的出现，由一个Cell包裹着多个CellItem来使用。
:::

#### 基础用法
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-cell>
      <bo-cell-item title="收藏"></bo-cell-item>
      <bo-cell-item title="相册"></bo-cell-item>
    </bo-cell>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 带value
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-cell>
      <bo-cell-item title="收藏" value=20></bo-cell-item>
      <bo-cell-item title="相册" value=11></bo-cell-item>
    </bo-cell>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 带value + 带链接
```isLink```属性给item加上右侧箭头，同时会有点击背景高亮效果。 

```clickable```属性同样会有点击背景高亮效果，但它不会有右侧箭头。

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-cell>
      <bo-cell-item title="收藏" value=20 isLink></bo-cell-item>
      <bo-cell-item title="相册" value=11 isLink></bo-cell-item>
    </bo-cell>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 带icon图标
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-cell>
      <bo-cell-item title="收藏" isLink icon="iconfont icon-yduiindexicons"></bo-cell-item>
      <bo-cell-item title="相册" isLink icon="iconfont icon-yduiindexbadge"></bo-cell-item>
    </bo-cell>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 不带边框
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-cell no-border>
      <bo-cell-item title="收藏" isLink icon="iconfont icon-yduiindexicons"></bo-cell-item>
      <bo-cell-item title="相册" isLink icon="iconfont icon-yduiindexbadge"></bo-cell-item>
      <bo-cell-item title="卡包" isLink icon="iconfont icon-yduiindexbadge"></bo-cell-item>
    </bo-cell>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 自定义value
如你所见，使用slot```value```就可以将任意内容插入右侧位置。

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-cell>
      <bo-cell-item title="收藏" isLink icon="iconfont icon-yduiindexicons">
        <bo-button size="small" slot="value">value</bo-button>
      </bo-cell-item>
      <bo-cell-item title="相册" clickable icon="iconfont icon-yduiindexbadge">
        <bo-checkbox slot="value" v-model="check">全选</bo-checkbox>
      </bo-cell-item>
      <bo-cell-item title="卡包" clickable icon="iconfont icon-yduiindexbadge">
        <bo-switch :value=true slot="value"></bo-switch>
      </bo-cell-item>
    </bo-cell>
  </highlight-code>
</Common-code-format>
</ClientOnly> 


## API
#### CellItem
| 参数           | 说明                                      | 类型   | 默认值
| ------------- |:------------------------------------------| :-----: | :-----: |
| title         | cell-item的名称                            | String |  |
| value         | cell-item右侧显示内容                       | String |  |
| isLink        | 是否作为链接显示(右侧有箭头+点击背景高亮)     | Boolean | false |
| clickable     | 是否可点击(点击背景高亮)                     | Boolean | False |
| icon          | cell-item左侧icon图标                       | Boolean | False |

#### Cell
| 参数           | 说明                                      | 类型   | 默认值
| ------------- |:------------------------------------------| :-----: | :-----: |
| no-border     | cell无上下边框                            | Boolean | false |