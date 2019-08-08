## 使用指南

```js
import Picker from 'border-ui';

Vue.component(Picker.name, Picker);
```

## 基本用法
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-picker
      :columns="column1"
      @change="onChange1"
    />
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  data () {
    return {
      column1: ['济南', '青岛', '威海', '淄博', '枣庄']
    }
  },
  methods: {
    onChange1 (picker, value, index) {
      this.$toast({
        msg: value,
        timeout: 500
      })
    }
  }
}
```

## 默认选中
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-picker
      :columns="column1"
      :defaultIndex=2
      @change="onChange1"
    />
  </highlight-code>
</Common-code-format>
</ClientOnly> 

如果是单列模式,可通过 ```defaultIndex``` 置顶默认选中项的索引值


## 某项不可选

* 对默认行为进行配置，就需要将 ```值``` 改为 ```对象```，以便进行更复杂的配置。
* 回调事件的值也要做相应的修改，需要通过 ```value.text``` 取到配置时的值。

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-picker
      :columns="column2"
      @change="onChange2"
    />
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  data () {
    return {
      column2: [
        { text: '济南' },
        { text: '青岛' },
        { text: '威海', disabled: true },
        { text: '淄博' },
        { text: '枣庄' }
      ]
    }
  },
  methods: {
    onChange2 (picker, value, index) {
      this.$toast({
        msg: value.text,
        timeout: 500
      })
    }
  }
}
```

## 显示Toolbar
* ```showToolbar = true```，即可监听 ```confirm```、```cancel``` 事件。
* 回调函数有两个参数为：```value```、```index```
* 如果是单列模式，两个参数是 ```String```，多列模式则为：```Array```

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-picker
      show-toolbar
      :columns="column1"
      @change="onChange1"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  data () {
    return {
      column1: ['济南', '青岛', '威海', '淄博', '枣庄']
    }
  },
  methods: {
    onChange1 (picker, value, index) {
      this.$toast({
        msg: value,
        timeout: 500
      })
    },
    onConfirm (value, index) {
      console.log(value, index)
    },
    onCancel () {
      console.log('cancel')
    }
  }
}
```

## 多列
* columns3中的每一个对象对应一列，继而后续我们可以增加更多的配置参数

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-picker
      :columns="column3"
      @change="onChange3"
    />
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  data () {
    return {
      column3: [
        {
          values: ['一月', '二月', '三月', '四月', '五月', '六月']
        },
        {
          values: ['第一周', '第二周', '第三周', '第四周']
        }
      ]
    }
  },
  methods: {
    onChange3 (picker, values) {
      this.$toast({
        msg: JSON.stringify(values),
        timeout: 1000
      })
    }
  }
}
```


## 多列联动
* 首先我们需要一份原始数据 ```columns4```
* 计算属性 ```columns``` 会将原始数据进行重组成picker需要的格式
* 我们还需要处理 ```onChange``` 事件，保证第一列change了，能动态改变第二列的值


<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-picker
      :columns="columns"
      @change="onChange4"
    />
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  data () {
    return {
      column4: {
        山东: ['济南', '青岛', '威海', '淄博', '枣庄'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州']
      }
    }
  },
  computed: {
    columns () {
      const column = this.column4
      return [
        {
          values: Object.keys(column),
          className: 'column1'
        },
        {
          values: column[Object.keys(column)[0]],
          className: 'column2',
          defaultIndex: 2
        }
      ]
    }
  },
  methods: {
    onChange4 (picker, values) {
      // 动态设置第二列的值
      picker.setColumnValues(1, this.column4[values[0]])
    }
  }
}
```


## API
#### Props
| 参数                | 说明                                             | 类型             | 默认
| -----------------  |:------------------------------------------------ | :-------------:  | :-----:  |
| columns            | 列数据                                            | Array            |    []   |
| defaultIndex       | 默认值索引(单列模式)                               | Number           |    0    |
| valueKey           | 列中每项文本值(单列模式)                            | String           |   text  |
| showToolbar        | 是否显示工具条                                     | Boolean          |  false  |
| title              | 工具条标题                                         | String           |        |
| cancelButtonText   | 取消按钮文字                                       | String           |  取消   |
| confirmButtonText  | 确认按钮文字                                       | String           |  确认   |
| visibleItemCount   | 每列可显示数据行数                                 | Number            |    5    |
| itemHeight         | 每行数据高度                                       | Number           |    44   |

单列模式下，```columns``` 参数内容为 ```Object``` 或者 ```值```，Object可对每列进行配置，可配置项为：
| 参数                | 说明                                             | 类型             | 默认
| -----------------  |:------------------------------------------------ | :-------------:  | :-----:  |
| text               | 显示文本                                          | String           |         |
| disabled           | 是否禁用该项                                      | Boolean          |  false   |
| defaultIndex       | 默认值索引(单列模式)                               | Number           |    0    |

多列模式下，```columns``` 参数内容为 ```Object```，可配置项为：
| 参数                | 说明                                             | 类型             | 默认
| -----------------  |:------------------------------------------------ | :-------------:  | :-----:  |
| defaultIndex       | 默认值索引(单列模式)                               | Number           |    0    |
| className          | 设置列的类名（可自定义列的样式）                      String           |    0    |

#### Events
| 参数           | 说明                                         | 类型   | 默认值
| ------------- |:------------------------------------------   | :-----: | :-----: |
| onChange	    | picker内容改变                                | String  |         |
| onConfirm     | 参数为value、index, 单列为String，多列为Array  | String,Array |    |
| onCancel      | 取消选择                                      |         |         |

#### Methods
通过 ref 可以获取到 picker 实例并调用实例方法
| 方法名           | 参数                                 | 返回值      | 介绍
| -------------   |:------------------------------------ | :-----:     | :-------------------------: |
| getValues       | values                               | -           |  获取所有列选中的值           |
| setValues       | values                               | -           |  设置所有列选中的值           |
| getIndexes      | indexes                              | -           |  获取所有列选中值对应的索引    |
| setIndexes      | indexes                              | -           |  设置所有列选中值对应的索引    |
| getColumnValue  | columnIndex                          | value       |  获取对应列选中的值           |
| setColumnValue  | columnIndex, value                   | -           |  设置对应列选中的值           |
| getColumnIndex  | columnIndex	optionIndex              | -           |  获取对应列选中项的索引        |
| setColumnIndex  | columnIndex, optionIndex             | -           |  设置对应列选中项的索引        |
| getColumnValues | columnIndex	values                   | -           |  获取对应列中所有选项          |
| setColumnValues | columnIndex, values                  | -           |  设置对应列中所有选项          |
