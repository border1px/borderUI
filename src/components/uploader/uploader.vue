<template>
  <div class="bo-uploader">
    <slot />
    <input
      id="bo-uploader__input"
      v-bind="$attrs"
      ref="input"
      type="file"
      multiple
      :accept = "accept"
      :disabled = "disabled"
      @change = "onChange"
    >
    <ul class="bo-uploader-preview">
      <li class="bo-uploader-item" v-for="(item, index) in files" :key="index">
        <div class="cube-con">
          <div class="cube">
            <img :src="item.content">
          </div>
        </div>
        <div class="bo-uploader-del" @click="delImage(item, index)">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAbFBMVEUAAADqSl/qSl7qSl7qSl7vSGDvQGDpSl7qSl3pSl7sSWDqSmDqSl7rTGDqS17rS13qSl/qSl7qS17rSV3qS1/////yjpv+8/XubHzrVmn73eH96Ov60tf1p7HveIfwgpD4wcjzmaTubH3sYHI0VRTpAAAAFHRSTlMA8MCAoCAQ4GCwUDCQQNBwz29fP4CN2W4AAAMoSURBVHja7ZrLcuIwEEUlW37bMWSuAAMhr///x2EqU+WFxsi6LTEbn02ycHEuouU2LdTGxsbGxgZL+Wuf53l2p7///VWoJ1K8mgwOu2bfqSfQ9jssUpnXUqWk6zV8mFal4nWHVVR5imUo9xVWo/PoRZlrhGGirsJQIRi9j7f6DSiyLtLG02DJY/h7CMjElVDsIEIPMn+nIaWW+GtEwAj9cozQL8cI/XIM6f+vCTpEZQze/xpxaVUYO0RGF7L7r5xdUP9BAvqA/quRgvVtoUESqrWtcYAI+eNBhVSs2wk5kpEJK1DOIFuA04QVnL6xSCOpgDdr7fUbHt6P1l5OniqgmuCn/cPxhIccfq5aXCrDL8DVzgke+++8e5aA6cJnOyfw+e0b3ZcNlviwcwKf397onqSxxM36EpyO9i9XLNPRbfDgSTD7zxPdFA1WJqD9qDx7gEjg+PmGUABEAsfPf1erEZCA9MN4SoBJMDl+sggyUAmm8wr/jFoGIBI4fr4nF2ASuH66CgcQCVw//2g4IjxBuB+N4GnQTRDuRyYI4CZw/JIABkSCRT/RkTMQCWb/aqIEwIHw0wEet3978fi5AH7/zAFBcN+KXT+boKK2oetnEvD3AddPJCACeP0fTgJJgDbYf8DBTcA3oy7cDyLBqBYh/ESCgR7OuH4qQcmOx1w/lUCrZUbCv5CAm5J0lN9NwA/OdYCfTdBRM1LXzybQ1ITI9dMJjHpEudbPJ2jZOfXFeX0qgfafFPCvPl/zxp8a6MUx5ez3JzgSe8DTkj9n/4oEV08rJoYk03H2+yelX54SZOZUt4u1lxt8vN8vO395HwepOdE0YQ3TJDzLN0hG9dRDU/7cbEQiGrWSF4iQn94OSEIuOjqW86ICeAEP/wHIdwLfhtOfn/cqkBwpd+DTb4gvpaITpPen3wqa86vSRHr/hWIxiddffktM/5vGWov3v5BOVIq6VWJKIyw/OW0FCp2rSJQ5CJpCxaPLEEjVqrgMWZC+VvEZmtW1V6s0FGMFL7rvVEI6Uz20N61KTlEb/W/52KlnUQ51nmXZT5D7P/04FGpjY2NjY4PiNwCFlcDu74vmAAAAAElFTkSuQmCC">
        </div>
      </li>
      <li class="bo-uploader-item">
        <div class="cube-con">
          <div class="cube">
            <label for="bo-uploader__input">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAJFBMVEUAAADDxsvDxszDxcvDxczDxczDxszDxszDxszEx83Ex83DxsxwhPvoAAAAC3RSTlMAwNXU7uW/93NUOuc8pYUAAAB4SURBVGje7dmhDYNgEIDRExVNXefoMp2iDQtgMHg8mh0QkPzLoTEgLoEQ3ufOPHHyLkqymN6pmhgj1QcAAAAAAMDBwGtIAo8vAAAAAACAk4H+t+pfr+dqF+jKZvMFdgAAAAAAAGCzZxtXv2AAAAAAAHA7IP28L8kW5bEMy5ogfZEAAAAASUVORK5CYII=">
            </label>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="stylus">
img
  display block
input[type=file]
  display none

.bo-uploader
  &-preview
    width 100%
    display flex;
    justify-content flex-start
    flex-wrap: wrap
  &-del
    position absolute
    top 0px
    right 0px
    width 22px
    height 22px
    img
      width 100%
      height 100%
  &-item
    display inline-block
    margin-bottom 15px
    margin-left 2%
    font-size 0
    width 22.5%
    position relative
    .cube-con
      padding-bottom 100%
      position relative
      .cube
        position absolute
        top 0
        bottom 0
        left 0
        right 0
      img
        width 100%
        height 100%
</style>

<script>
// import EXIF from './small-exif.js'
export default {
  name: 'bo-uploader',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    maxSize: {
      type: Number,
      default: 10
    },
    action: {
      type: String,
      default: 'http://192.168.1.3/upload/up.php'
    },
    quality: {
      type: Number,
      default: 1
    },
    threshold: {
      type: Number,
      default: 2048
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    maxImgWidth: {
      type: Number,
      default: 0
    },
    withCredentials: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      resultType: 'dataUrl',
      files: []
    }
  },
  methods: {
    delImage (item, index) {
      this.files.splice(index, 1)
    },
    onChange (event) {
      let { files } = event.target
      if (this.disabled || !files.length) {
        return
      }
      files = [].slice.call(files, 0)
      if (!files || (this.beforeRead && !this.beforeRead(files))) {
        return
      }

      // 过滤重复文件 与 超标尺寸文件
      files = files.filter(file => {
        return !this.files.find(f => f.file.name === file.name) && (this.maxSize && file.size / 1024 / 1024 < this.maxSize)
      })

      Promise.all(files.map(this.readFile)).then(contents => {
        const payload = files.map((file, index) => {
          return {
            file: files[index],
            content: contents[index]
          }
        })
        if (payload.length) {
          this.files = this.files.concat(payload)
          this.$emit('onFilesBase64', this.files.map(file => file.content))
          this.autoUpload && this.fileUpload(files)
        }
      })
    },
    readFile (file) {
      return new Promise(resolve => {
        const reader = new FileReader()
        reader.onload = event => {
          resolve(event.target.result)
        }
        if (this.resultType === 'dataUrl') {
          reader.readAsDataURL(file)
        } else if (this.resultType === 'text') {
          reader.readAsText(file)
        }
      })
    },
    _onProgress (e) {
      e.percent = (e.loaded / e.total) * 100
    },
    fileUpload (files) {
      if (files.length > 0) {
        var allTask = files.map(file => {
          if (file.size / 1024 > this.threshold) {
            return this._fixImageOrientation(file)
              .then(file => this._compressImage(file))
              .then(file => this._handleUpload(file))
          } else {
            return this._fixImageOrientation(file).then(file => this._handleUpload(file))
          }
        })
        Promise.all(allTask)
          .then(allFiles => {
            this.$emit('onAllFilesUploaded', allFiles)
          }).catch(err => {
            this.$emit('onFileError', files, err)
          })
      } else {
        var err = new Error('No files to upload for this field')
        this.$emit('onFileError', files, err)
      }
    },
    async _handleUpload (file) {
      this.$emit('beforeFileUpload', file)
      var form = new FormData()
      var xhr = new XMLHttpRequest()
      form.append('file', file, Date.parse(new Date()) + Math.floor(Math.random() * (1 - 1000) + 1000) + '.jpg')

      return new Promise((resolve, reject) => {
        xhr.upload.addEventListener('progress', this._onProgress, false)

        xhr.onreadystatechange = () => {
          if (xhr.readyState < 4) {
            return
          }
          if (xhr.status === 200) {
            var res = JSON.parse(xhr.responseText)
            this.$emit('onFileUpload', file, res)
            resolve(file)
          } else {
            var err = JSON.parse(xhr.responseText)
            err.status = xhr.status
            err.statusText = xhr.statusText
            this.$emit('onFileError', file, err)
            reject(err)
          }
        }

        xhr.onerror = () => {
          var err = JSON.parse(xhr.responseText)
          err.status = xhr.status
          err.statusText = xhr.statusText
          this.$emit('onFileError', file, err)
          reject(err)
        }

        xhr.open(this.method || 'POST', this.action, true)
        if (this.withCredentials && 'withCredentials' in xhr) {
          xhr.withCredentials = true
        }

        var headers = this.headers || {}
        for (var item in headers) {
          if (headers.hasOwnProperty(item) && headers[item] !== null) {
            xhr.setRequestHeader(item, headers[item])
          }
        }
        xhr.send(form)
        this.$emit('afterFileUpload', file)
      })
    },
    _compressImage (file) {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = window.URL.createObjectURL(file)
        img.onerror = error => reject(error)

        img.onload = () => {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')

          // 是否限制文件分辨率
          if (this.maxImgWidth && img.width > this.maxImgWidth) {
            canvas.width = this.maxImgWidth
            canvas.height = this.maxImgWidth * (img.height / img.width)
          } else {
            canvas.width = img.width
            canvas.height = img.height
          }
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
          canvas.toBlob(file => resolve(file), 'image/jpeg', this.quality)
        }
      })
    },
    _fixImageOrientation (file) {
      return new Promise((resolve, reject) => {
        resolve(file)
        // 获取图片
        // const img = new Image()
        // img.src = window.URL.createObjectURL(file)
        // img.onerror = () => resolve(file)
        // img.onload = () => {
        //   // 获取图片元数据（EXIF 变量是引入的 exif-js 库暴露的全局变量）
        //   EXIF.getData(img, function(i) {
        //     console.log(i)
        //     // 获取图片旋转标志位
        //     var orientation = EXIF.getTag(this, "Orientation")
        //     console.log(orientation)
        //     // 根据旋转角度，在画布上对图片进行旋转
        //     if (orientation === 3 || orientation === 6 || orientation === 8) {
        //       const canvas = document.createElement("canvas")
        //       const ctx = canvas.getContext("2d")
        //       switch (orientation) {
        //         case 3: // 旋转180°
        //           canvas.width = img.width
        //           canvas.height = img.height
        //           ctx.rotate((180 * Math.PI) / 180)
        //           ctx.drawImage(img, -img.width, -img.height, img.width, img.height)
        //           break
        //         case 6: // 旋转90°
        //           canvas.width = img.height
        //           canvas.height = img.width
        //           ctx.rotate((90 * Math.PI) / 180)
        //           ctx.drawImage(img, 0, -img.height, img.width, img.height)
        //           break
        //         case 8: // 旋转-90°
        //           canvas.width = img.height
        //           canvas.height = img.width
        //           ctx.rotate((-90 * Math.PI) / 180)
        //           ctx.drawImage(img, -img.width, 0, img.width, img.height)
        //           break
        //       }
        //       // 返回新图片
        //       canvas.toBlob(file => resolve(file), 'image/jpeg', 0.92)
        //     } else {
        //       console.log(file)
        //       return resolve(file)
        //     }
        //   })
        // }
      })
    }
  }
}
</script>
