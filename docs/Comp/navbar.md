
## 代码示例
#### 最简单用法
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-navbar title="我是标题"></bo-navbar>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 标题 + 返回按钮
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-navbar back-link title="我是标题"></bo-navbar>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 标题 + 返回按钮（带文字）
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-navbar back-link="back" title="我是标题"></bo-navbar>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 自定义返回按钮
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-navbar title="我是标题">
        <div slot="nav-left">
            <bo-button>back</bo-button>
        </div>
    </bo-navbar>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 自定义标题
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-navbar>
        <div slot="title">
            <bo-button>标题</bo-button>
        </div>
    </bo-navbar>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 自定义右侧按钮
<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-navbar>
        <div slot="nav-right">
            <bo-button>按钮1</bo-button>
            <bo-button>按钮2</bo-button>
        </div>
    </bo-navbar>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 带工具栏
通常我们希望，导航栏下面再多出一排工具条，进行一些更复杂的操作，并且不会影响页面主体的滚动。只需要再navbar中嵌入subnavbar，它的内容就会被正确的摆放。

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-navbar title="标题">
      <bo-subnavbar>
        <bo-tabbar :btnArr='btnArr'></bo-tabbar>
      </bo-subnavbar>
    </bo-navbar>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

#### 完全自定义工具栏
当inner为false时，允许您自定义navbar的内容，div+css此时派上用场啦。

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-navbar :inner=false>
        自定义代码
    </bo-navbar>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

## props
| 参数           | 说明                                        | 类型    | 默认值
| ------------- |:--------------------------------------------| :-----: | :-----: |
| title         | 标题                                        | String  |         |
| back-link     | 显示返回按钮，值为string时同时显示icon和文字   | Boolean、String | false |
| inner         | 不开启自定义模式                              | Boolean | true  |


## slots
| 参数           | 说明         | 类型    | 默认值
| ------------- |:-------------| :-----: | :-----: |
| nav-left      | 左侧按钮      |        |         |
| title         | 标题         |         |         |
| nav-right     | 右侧按钮      |        |         |

## events
| 参数           | 说明         | 类型    | 默认值
| ------------- |:-------------| :-----: | :-----: |
| back-click    | 返回按钮触发      |        |         |

