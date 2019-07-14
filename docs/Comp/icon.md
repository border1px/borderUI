## 使用指南

```js
import Icon from 'border-ui';

Vue.component(Icon.name, Icon);
```

#### 基本用法
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-icon name="weixin"></bo-icon>
  </highlight-code>
</Common-code-format>
</ClientOnly> 


## API
| 参数                | 说明                                             | 类型            | 默认
| -------------      |:------------------------------------------------ | :-------------: | :-----: |
| name               | icon的名字                                        | Boolean         | false  |
| size               | icon尺寸                                          | String          | 30px   |
| color              | icon颜色                                          | String          |        |
| defaultClassPrefix | 字体图标前缀                                       | String          | iconfont |
| classPrefix        | icon名称前缀                                      | String          |  icon-  |


假定使用 ```iconfont.cn``` 图标，那么 
* ```defaultClassPrefix``` 即为 ```iconfont```
* ```classPrefix``` 即为 ```icon-```
