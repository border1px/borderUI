
::: tip
swipe组件耗费了我挺长时间，原理虽然简单，但实现过程中有很多的细节需要处理。这里主要剽窃了[vue-better-slider](https://github.com/openfe-openfe/vue-better-slider)，真真切切的学到了不少知识。
:::

## 代码示例
#### 基础用法
```vue
<bo-swipe>
  <bo-swipe-item v-for="(item,index) in items" :key="index"`>
    <div class="item" :style="bgColor(index)">{{item.id}}</div>
  </bo-swipe-item>
</bo-swipe>
```
```js
export default {
  data () {
    return {
      items: [
        { id: 1, bg: '#00BFFF' },
        { id: 2, bg: '#5cb85c' },
        { id: 3, bg: '#FF6A6A' },
        { id: 4, bg: '#f0ad4e' },
        { id: 5, bg: '#9ACD32' }
      ]
    }
  },
  methods: {
    bgColor (index) {
      return {
        background: this.items[index].bg
      }
    }
  }
}
```

#### 自动轮播(3秒一张)
```vue
<bo-swipe :autoplay="3000">
  <bo-swipe-item>
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
  </bo-swipe-item>
</bo-swipe>
```

#### 监听change事件
```vue
<bo-swipe @change="onChange">
  <bo-swipe-item>
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
  </bo-swipe-item>
</bo-swipe>
```

```js
export default {
  methods: {
    onChange (val) {
      this.$toast(`当前item索引：${val}`)
    },
  }
}
```

#### 自定义指示器
```vue
<bo-swipe @change="onChangeIndicator">
  <bo-swipe-item>
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
  </bo-swipe-item>
  <div class="my-indicator" slot="indicator">
    {{ activeIndex + 1 }}/5
  </div>
</bo-swipe>
```
```js
export default {
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    onChangeIndicator (val) {
      this.activeIndex = val
    }
  }
}
```


## props
| 参数           | 说明                                        | 类型    | 默认值
| -------------  |:--------------------------------------------| :-----: | :-----: |
| autoplay       | 自动轮播间隔（毫秒）                          | Number  |      |
| duration       | 幻灯片切换动画持续时间                        | Number  |      |
| activeIndex    | 默认显示的幻灯片索引                          | Number  |  0    |
| threshold      | 手动切换的滑动距离                            | Number  |  50   |
| showIndicators | 是否显示指示器                               | Boolean  |  true   |

## slots
| 参数           | 说明              
| ------------- |:------------------:|
| indicator     | 自定义指示器 |  

## events
| 参数           | 说明                                        | 回调参数 |
| ------------- |:--------------------------------------------| :-----: | 
| change        | 每一页轮播结束后触发                          | 当前页的索引  | 

