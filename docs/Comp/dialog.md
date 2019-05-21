
## 使用指南
Dialog内部包含五个组件：Toast、Alert、Confirm、Loading、Notify，它是以插件形式存在，注册到Vue的原型链上，这样做的好处是可以在实例内通过this直接访问，所以需要Vue.use进行注册。

```js
import { Dialog } from 'border-ui';

Vue.use(Dialog);
```

::: tip
Alert、Confirm支持promise，下面你马上就能看到它的用法
:::

## Toast
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-button auto @click="openToast">toast</bo-button >
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  methods: {
    openToast () {
      this.$toast('我是toast，默认2s后消失')
    }
  }
}
```
#### props
| 参数       | 说明                      | 类型    | 默认值
| --------- |:--------------------------| :-----: | :-----: |
| msg       | 消息内容                   | String  |         |
| timeout   | 自动关闭时间(毫秒)          | Number  |  2000ms |

## Alert
```js
this.$alert({
  title: '我是标题',
  msg: '这里是主体内容'
}).then(() => {
  this.$toast('确定')
})
```
#### props
| 参数         | 说明                      | 类型    | 默认值
| ------------|:--------------------------| :-----: | :-----: |
| title       | 标题                       | String  |         |
| msg         | 消息内容                   | String  |         |
| buttonText  | 按钮文字                   | String  |  确定   |


## Confirm
```js
this.$confirm({
  title: '我是标题',
  msg: '这里是主体内容'
}).then((index) => {
  index ? this.$toast('确定') : this.$toast('取消')
})
```
#### props
| 参数         | 说明                      | 类型    | 默认值
| ------------|:--------------------------| :-----: | :-----: |
| title       | 标题                       | String  |         |
| msg         | 消息内容                   | String  |         |
| cancelText  | 取消按钮文字                | String  |  取消   |
| okText      | 确定按钮文字                | String  |  确定   |


## Loading
```js
this.$loading.open({
  msg: '加载中'
})
// 手动关闭loading
setTimeout(() => {
  this.$loading.close()
}, 2000)
```
#### props
| 参数         | 说明                      | 类型    | 默认值
| ------------|:--------------------------| :-----: | :-----: |
| msg         | 消息内容                   | String  |         |


## Notify
```js
this.$notify({ msg: 'Notify' });
this.$notify({ msg: 'Notify', type: 'success' });
this.$notify({ msg: 'Notify', type: 'warning' });
this.$notify({ msg: 'Notify', type: 'danger' });
```
#### props
| 参数         | 说明                                          | 类型    | 默认值
| ------------|:----------------------------------------------| :-----: | :-----: |
| msg         | 消息内容                                       | String  |         |
| type        | 消息类型(primary、success、warning、danger)     | String  | primary |
| timeout     | 自动关闭时间(毫秒)                              | Number  |  2000ms |


