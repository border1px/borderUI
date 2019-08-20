
::: tip
* 默认使用FomData上传(自动)。
* 使用promise管理多文件的并发上传。
* 若需要base64上传，需要调用者自己处理上传逻辑。
:::

## 代码示例
#### 基础用法


<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-uploader 
      :action="http://abc.com/up.php"
      @onAllFilesUploaded = "onAllFilesUploaded"
      @onFileUpload = "onFileUpload"
    ></bo-uploader>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  data () {
    return {
      imgArr: []
    }
  },
  methods: {
    onAllFilesUploaded (files) {
      console.log('所有文件上传完成')
    },
    onFileUpload (response) {
      this.imgArr.push(response.url)
    },
  }
}
```
* ```onFileUpload```事件  
使用```异步```、```并发```、```FormData```上传多文件，每个文件上传完成都会触发一次 ```onFileUpload``` 事件，参数为服务器返回的json数据(假定数据会包含图片的外网访问地址)。由于后端返回数据格式不一，这里的逻辑需要交给调用者自己处理,比如push进数组，等待和其他表单内容一块提交。
* ```onAllFilesUploaded```事件  
该事件触发表明，所有文件已上传完成，便于进行后续操作。

#### 自己处理上传逻辑
有的时候我们想自己处理逻辑，上传base64编码给后端，我们可以这样配置：
1. 设置 ```autoUpload``` 为 ```false```  (组件默认FormData自动上传)
2. 监听 ```onFilesBase64``` 事件  

<ClientOnly>
<Common-code-format>
  <highlight-code slot="codeText" lang="vue">
    <bo-uploader 
      :action="http://abc.com/up.php"
      :autoUpload = false
      @onFilesBase64 = "onFilesBase64"
    >
    </bo-uploader>
  </highlight-code>
</Common-code-format>
</ClientOnly> 

```js
export default {
  methods: {
    onFilesBase64(arrBase64) {
      // arrBase64 是所有文件的base64编码数组，上传逻辑需要自己处理
    }
  }
}
```

## props
| 参数              | 说明                                        | 类型     | 默认值
| -------------    |:--------------------------------------------| :-----:  | :-----:   |
| disabled         | 是否可用                                   | Boolean   |   false    |
| accept           | 文件过滤器                                  | String    |   image/* |
| maxSize          | 可上传的文件最大尺寸 （单位：M）              | Number    |   10      |
| action           | 文件上传地址                                | String    |           |
| quality          | 图片品质                                    | Number    |  1       |
| threshold        | 文件体积超过多少时开启压缩功能 (单位：KB)      | String   |  2048     |
| autoUpload       | 开启自动上传（二进制FormData）                | Boolean   |  true   |
| maxImgWidth      | 图片最大宽度                                 | String    |   800    |
| withCredentials  | 跨域cookie                                  | Boolean   |   false  |

## events
| 参数                 | 说明                       | 类型        | 回调参数
| --------------------|:-------------------------  | :---------: | :-----: |
| onFileUpload        | 单个文件上传成功             |  Function   |  服务器返回json    |
| onFileError         | 单个文件上传失败             |  Function   |  服务器返回json    |
| onAllFilesUploaded  | 所有文件上传完成             |  Function   |  二进制文件数据    |
| onFilesBase64       | 所选文件的base64编码数组     |  Function   |  base64组成的数组  |

