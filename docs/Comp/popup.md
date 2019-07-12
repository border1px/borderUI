## 使用指南

```js
import Popup from 'border-ui';

Vue.component(Popup.name, Popup);
```

#### 使用方法
```vue
<bo-popup v-model="showPopup" position="right" closeOnClickOMask>
  // 你的内容
</bo-popup>
```
```js
export default {
  data () {
    return {
      showPopup: false
    }
  }
}
```

::: tip
Popup是一个很常用的组件，比如下面这个选择考场就是一个很好的案例。
:::

## API
| 参数              | 说明                                      | 类型   | 默认值
| -------------     |:------------------------------------------| :-----: | :-----: |
| v-model           | 打开popup                                 | Boolean | false |
| position          | popup出现的位置                            | String | bottom |
| mask              | 是否开启背景遮障                            | Boolean | true |
| maxHeight         | 最大高度(px)                               | Number |   -   |
| minHeight         | 最小高度(px)                               | Number  |   -   |
| height            | 固定高度(px)                               | Number  |   -   |
| maxWidth          | 最大宽度(px)                               | Number  |   -   |
| minWidth          | 最小宽度(px)                               | Number  |   200 |
| width             | 固定宽度(px)                               | Number  |   -   |
| closeOnClickOMask | 点击遮障层关闭popup                         | Boolean | true  |
