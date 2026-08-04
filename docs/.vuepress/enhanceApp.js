import hljs from 'highlight.js'
import 'highlight.js/styles/dark.css'

export default ({ Vue }) => {
  Vue.component('highlight-code', {
    props: {
      lang: {
        type: String,
        default: 'plaintext'
      }
    },
    mounted () {
      hljs.highlightBlock(this.$el)
    },
    updated () {
      this.$el.removeAttribute('data-highlighted')
      hljs.highlightBlock(this.$el)
    },
    render (h) {
      return h('pre', [
        h('code', {
          class: this.lang
        }, this.$slots.default)
      ])
    }
  })
}
