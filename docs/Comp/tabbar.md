
## 代码示例
#### 基础用法
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-tabbar :btnArr="btnArr" @change="onChange"></bo-tabbar>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  data () {
    return {
      btnArr: [
        { name: '待付款' },
        { name: '待发货' },
        { name: '待收货' },
        { name: '待评价' },
        { name: '售后' }
      ]
    }
  },
  methods: {
    onChange (index) {
      this.index = index
    }
  }
}
```

#### 胶囊样式
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-tabbar :btnArr="btnArr2" capsule></bo-tabbar>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 胶囊样式 + 居中
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-tabbar :btnArr="btnArr2" capsule shrink></bo-tabbar>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

## props
| 参数           | 说明                                        | 类型    | 默认值
| ------------- |:--------------------------------------------| :-----: | :-----: |
| btnArr         | tabbar按钮组                                | Array   |   []    |
| capsule        | 胶囊模式                                    | Boolean |   false |
| shrink         | 胶囊+居中                                   | Boolean |   false |

## events
| 参数           | 说明              | 类型        | 回调参数
| ------------- |:------------------| :---------: | :-----: |
| change        | 选中tab时的回调    |  Function   |  index (当前tab索引)    |

