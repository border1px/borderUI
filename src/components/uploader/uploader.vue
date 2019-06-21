<template>
  <div class="bo-uploader">
    <slot />
    <input
      v-bind="$attrs"
      ref="input"
      type="file"
      multiple
      :accept = "accept"
      :disabled = "disabled"
      @change = "onChange"
    >
    <ul class="bo-uploader-preview">
      <li class="item" v-for="(item, index) in files" :key="index">
        <div class="cube-con">
          <div class="cube">
            <img :src="item.content">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="stylus">
.bo-uploader
  &-preview
    width 100%
    display flex;
    justify-content flex-start
    .item
      display inline-block
      margin-left 5%
      width 20%
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
          display block
          width 100%
          height 100%
</style>

<script>
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
      default: Number.MAX_VALUE
    }
  },
  data () {
    return {
      resultType: 'dataUrl',
      files: []
    }
  },
  methods: {
    onChange (event) {
      let { files } = event.target
      if (this.disabled || !files.length) {
        return
      }
      files = files.length === 1 ? files[0] : [].slice.call(files, 0)
      if (!files || (this.beforeRead && !this.beforeRead(files))) {
        return
      }
      if (Array.isArray(files)) {
        Promise.all(files.map(this.readFile)).then(contents => {
          let oversize = false
          const payload = files.map((file, index) => {
            if (file.size > this.maxSize) {
              oversize = true
            }
            return {
              file: files[index],
              content: contents[index]
            }
          })
          this.files = payload
          // this.onAfterRead(payload, oversize)
        })
      } else {
        this.readFile(files).then(content => {
          this.files = [{ file: files, content }]
          // this.onAfterRead(
          //   { file: files, content },
          //   files.size > this.maxSize
          // )
        })
      }
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
    }
  }
}
</script>
