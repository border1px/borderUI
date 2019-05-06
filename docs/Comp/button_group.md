
## 基础用法
按钮组允许多个按钮被堆叠在同一行上，当你想要把按钮对齐在一起时，这就显得非常有用。

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-button-group :btnArr='btnArr'></bo-button-group>
    <bo-button-group :btnArr='btnArr2'></bo-button-group>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  data () {
    return {
      btnArr: [
        { name: '最近消息', icon: 'iconfont icon-yduiindexicons' },
        { name: '历史通知' }
      ],
      btnArr2: [
        { name: '上午' },
        { name: '中午' },
        { name: '下午' }
      ]
    }
  }
}
```

## API
| 参数           | 说明              | 类型    | 默认值
| ------------- |:------------------| :-----: | :-----: |
| btnArr        | 按钮数组，元素为对象，包含单个按钮的配置           | Array   |         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> name | 按钮文字 | String |   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-> icon | 按钮图标 | String |   |