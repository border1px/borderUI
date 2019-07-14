::: tip
Vue3.0即将发布，计划将基于3.0进行重构，暂时没有发布到NPM。

所以目前你需要从Github上下载代码包，复制到你的项目中，进行按需引入。
:::

### 下载代码压缩包
[borderUI源代码](https://github.com/border-1px/borderUI). 

### 拷贝代码至项目
拷贝压缩包里src/components下你需要的vue组件到你的项目中(比如 components 目录)

### 注册组件
##### 全局注册
```js
import Popup from '@/components/popup'
Vue.component(Popup.name, Popup)
```


##### 局部注册
```js
// 某vue组件
<script>
import Popup from '@/components/popup'
export default {
  components: {
    Popup
  }
}
</script>
```

### 使用组件
```vue
<bo-popup v-model="showPopup" position="right" closeOnClickOMask>
  // 你的内容
</bo-popup>
```
::: tip
组件名称规则是：```bo``` 前缀再加组件名，这样做得目的避免与其他第三方组件命名冲突。
:::