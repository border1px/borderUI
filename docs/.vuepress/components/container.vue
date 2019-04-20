<template>
  <div class="bo-container">
    <div class="bo-title">
      <h2>{{title}}</h2>
      <small>{{desc}}</small>
    </div>
    <div class="bo-body">
      <slot></slot>
    </div>
    <div class="bo-code">
      <pre v-highlightjs>
        <code class="javascript">
          <slot name="code"></slot>
        </code>
      </pre>
    </div>
    <div class="bo-button" @click="toggleShow">{{codeTextBtn}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: '',
    desc: '',
    isShow: true,
    codeTextBtn: '显示代码'
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
      this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码';
    }
  }
}
</script>
