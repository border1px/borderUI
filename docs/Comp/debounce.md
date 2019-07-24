
## 基本概念

#### 函数防抖(debounce)
当持续触发某事件时，一定时间间隔内没有再触发事件时，事件处理函数才会执行一次，如果设定的时间间隔到来之前，又一次触发了事件，就重新开始延时。
#### 函数节流(throttle)
当持续触发事件时，有规律的每隔一个时间间隔执行一次事件处理函数。

## 实现方法
我们来自己找一个需求： ```实现页面按钮的点击事件防抖控制``` 。实现方法主要有以下两个：

* **```Mixins```**  这个比较简单就不说了，缺点就是需要知道被劫持组件源码结构。
* **```HOC```**   这种方式更优雅，但我这里并没有完全按照规矩来，而是直接修改了被劫持的事件对象，让它指向了新的节流函数。

::: tip
所谓高阶组件其实就是高阶函数，React 和 Vue 都证明了一件事儿：一个函数就是一个组件。所以组件是函数这个命题成立了，那高阶组件很自然的就是高阶函数，即一个返回函数的函数。
:::

## 使用指南

```js
import DeBounce from 'border-ui';

Vue.component(DeBounce.name, DeBounce);
```

::: tip
这里使用input作为演示，当你点击input时，会触发同时click和focus两个事件
:::

#### 基本用法
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
      <bo-debounce>
        <input type="text" @click="onClick">
      </bo-debounce>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

* click事件将会被延迟300ms触发，多次点击以最后一次点击为准
* ```bo-debounce``` 内部只能存放单个组件
* 默认会将第一层组件上绑定的所有事件进行劫持(可以通过events参数进行过滤，见后面例子)


#### 函数节流
input事件每隔300ms触发一次

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
      <bo-debounce>
        <input type="text" @input="onInput">
      </bo-debounce>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 劫持某个事件
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
      <bo-debounce :events="click">
        <input type="text" @click="onClick" @focus="onFocus" @blur="onBlur">
      </bo-debounce>
  </highlight-code>
</Common-code-format>
</ClientOnly> 
通过指定events参数，指定要劫持的事件，其他事件会被过滤掉。

#### 劫持多个事件
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
      <bo-debounce :events="click,focus">
        <input type="text" @click="onClick" @focus="onFocus" @blur="onBlur">
      </bo-debounce>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 设置延迟时间
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
      <bo-debounce :events="click,focus" :delay="1000">
        <input type="text" @click="onClick" @focus="onFocus" @blur="onBlur">
      </bo-debounce>
  </highlight-code>
</Common-code-format>
</ClientOnly> 


## API
| 参数       | 说明                                             | 类型             |  默认
| -----------|:------------------------------------------------ | :-------------: | :-----: |
| events     | 事件列表，多个以逗号分隔                           | String          |        |
| delay      | 事件触发延迟时间(毫秒)                             | Number          | 300   |
