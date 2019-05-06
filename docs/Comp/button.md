
## 基础用法
#### 按钮类型
支持primary、warning、danger三种类型，默认为primary

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-button type="primary" size="large">Primary</bo-button>
    <bo-button type="warning">Warning</bo-button>
    <bo-button type="danger">Danger</bo-button>
    <bo-button color="#04BE02">#04BE02</bo-button>
    <bo-button color="#EE30A7" size="small">#EE30A7</bo-button>
  </highlight-code>
</Common-code-format>
</ClientOnly> 


#### 按钮尺寸
支持 large、normal、small 三种尺寸，默认为normal

<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-button type="primary" size="large">Primary</bo-button>
    <bo-button type="primary" size="normal">Normal</bo-button>
    <bo-button type="primary" size="small">Small</bo-button>
  </highlight-code>
</Common-code-format>
</ClientOnly> 


#### 按钮颜色
通过color属性可以自定义按钮颜色

<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-button color="#04BE02">#04BE02</bo-button>
    <bo-button color="#EE30A7" size="small">#EE30A7</bo-button>
  </highlight-code>
</Common-code-format>
</ClientOnly> 


#### 加载状态

<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-button type="primary" loading >Primary</bo-button>
  </highlight-code>
</Common-code-format>
</ClientOnly> 


#### 满屏按钮
属性auto会让按钮占满屏幕宽度

<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-button type="primary" auto >Primary</bo-button>
  </highlight-code>
</Common-code-format>
</ClientOnly> 
<!-- 
<ClientOnly>
<Common-vue-format>
  <bo-button type="primary" size="large" >Primary</bo-button>
  <bo-button type="warning" >Warning</bo-button>
  <bo-button type="danger" >Danger</bo-button>
  <bo-button color="#04BE02" >#04BE02</bo-button>
  <bo-button color="#EE30A7" size="small">#EE30A7</bo-button>

  <highlight-code slot="codeText" lang="vue">
    <bo-button type="primary" size="large">Primary</bo-button>
    <bo-button type="warning">Warning</bo-button>
    <bo-button type="danger">Danger</bo-button>
    <bo-button color="#04BE02">#04BE02</bo-button>
    <bo-button color="#EE30A7" size="small">#EE30A7</bo-button>
  </highlight-code>
</Common-vue-format>
</ClientOnly> 
-->

## API
| 参数           | 说明                                      | 类型   | 默认值
| ------------- |:------------------------------------------| :-----: | :-----: |
| type          | 可选值为：primary、wraning、danger、hollow  | String | primary |
| size          | 可选值为：large、normal、small              | String | normal |
| color         | 自定义RGB颜色                               | String | #2196F3 |
| auto          | 宽度100%                                   | Boolean | False |
| loading       | 加载状态                                   | Boolean | False |