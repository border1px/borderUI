## 使用指南

```js
import ActionSheet from 'border-ui';

Vue.component(ActionSheet.name, ActionSheet);
```

#### 基本用法
```vue
  <bo-action-sheet 
    :menus="menus" 
    v-model="show"
    @select = "onSelect"
  >
  </bo-action-sheet>
```

```js
export default {
  data () {
    return {
      menus: [
        {name: '确定'},
        {name: '分享给微信好友'},
        {name: '分享到朋友圈'}
      ],
      show: false
    }
  },
  methods: {
    onSelect (index) {
        console.log(index)
    }
  }
}
```

#### 禁用某项
```vue
  <bo-action-sheet 
    :menus="menus" 
    v-model="show"
  >
  </bo-action-sheet>
```

```js
export default {
  data () {
    return {
      menus: [
        {name: '确定'},
        {name: '分享给微信好友', disabled},
        {name: '分享到朋友圈'}
      ],
      show: false
    }
  }
}
```

#### 带取消按钮
```vue
  <bo-action-sheet 
    :menus="menus" 
    v-model="show"
    cancel
  >
  </bo-action-sheet>
```

#### 点击遮障层关闭
```vue
  <bo-action-sheet 
    :menus="menus" 
    v-model="show"
    closeOnClickOMask
  >
  </bo-action-sheet>
```

#### 点击按钮自动关闭
```vue
  <bo-action-sheet 
    :menus="menus" 
    v-model="show"
    autoClose
  >
  </bo-action-sheet>
```


## API
### props
| 参数              | 说明                                             | 类型            | 默认
| -------------     |:------------------------------------------------ | :-------------:| :-----:  |
| menus             | 菜单项                                           | Array           | []       |
| cancel            | 是否显示取消按钮                                  | Boolean         | false   |
| cancelText        | 取消按钮文字                                      | String          |         |
| closeOnClickOMask | 点击遮障层关闭菜单                                | Boolean         | false    |
| autoClose         | 点击按钮自动关闭菜单                              | Boolean          | true     |

### events
| 参数           | 说明                                                | 类型            | 默认
| ------------- |:------------------------------------------------    | :-------------: | :-----:  |
| select         | 菜单项选择事件,参数为按钮索引值                       | Function        |         |
| cancel         | 取消按钮触发事件                                     | Function        |        |