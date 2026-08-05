
## 代码示例
#### 最简单用法
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-switch></bo-switch>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 默认选中
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-switch v-model="enabled"></bo-switch>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 事件监听
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-switch @change="onChange"></bo-switch>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  methods: {
    onChange (val) {
      alert(val)
    }
  }
}
```

## props
| 参数           | 说明                                        | 类型    | 默认值
| ------------- |:--------------------------------------------| :-----: | :-----: |
| value         | 是否选中                                     | Boolean  | False     |
| disabled      | 是否禁用                                     | Boolean  | False     |
| aria-label    | 无可见文本时使用的无障碍名称                   | String   |           |


## events
| 参数           | 说明              | 类型        | 默认值
| ------------- |:------------------| :---------: | :-----: |
| change        | switch开关回调事件 |  Function   |         |
| input         | Vue 2 v-model 更新事件 | Function |         |
