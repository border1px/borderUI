::: tip
borderUI 当前仍基于 Vue 2，且尚未发布到 NPM。项目正在恢复维护，后续将单独规划 Vue 3 与 Vite 迁移。

目前需要从 GitHub 下载源码，并仅复制经过验证的组件到项目中按需引入。现阶段不建议直接用于新的生产项目。
:::

### 下载代码压缩包
[borderUI源代码](https://github.com/border1px/borderUI)。

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
