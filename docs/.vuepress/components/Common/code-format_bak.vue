<template>
  <div class="code-format">
    <div class="vue-vi-title">
      <p class="titleName" v-if="title">{{title}}</p>
     <!-- 在markdown中书写的时候使用一对*标记从而将想给样式的说明和普通文本分割，
     同时第一个*后面要留一个空字符-->
      <div class="extended-wrapper">
        <p class="extended" v-if="extendedDescription" v-for="(item,index) in extendedContent">
          <span class="colorStyle" v-if="item[0]===' '">{{item}}</span>
          <span class="noColor" v-else>{{item}}</span>
        </p>
      </div>
      <div class="attrContent-wrapper">
        <p v-if="description" class="attrContent" v-for="(item,index) in content">
        <span class="attrStyle" v-if="item[0]===' '">{{item}}</span>
        <span class="attrNoColor" v-else>{{item}}</span>
      </p>
      </div>
    </div>
    <!-- 案例 -->
    <section class="vue-vi-main">
      <div class="vue-vi-demo">
        <div class="vue-vi-content">
          <slot></slot>
        </div>
      </div>
      <!-- 示例代码 -->
      <div v-if="isShow" class="vue-vi-code">
          <div class="vue-vi-paraDescription">
            <slot name="paraDescription"></slot>
          </div>
          <div>
            <slot name="codeText"></slot>
          </div>
      </div>
      <!-- 点击切换显示或是隐藏 -->
      <div class="vue-vi-button" @click="handleToggleShow">
        <div class="vue-vi-wrapper">
          <!-- <vi-icon class="vue-vi-icon" v-if="!isShow" vi-icon-name="unfold"></vi-icon>
          <vi-icon class="vue-vi-icon" v-if="isShow" vi-icon-name="fold"></vi-icon> -->
          <span class="vue-vi-buttonText">{{codeTextBtn}}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import '../../public/svg.js'
// import Icon from '../../../../src/components/icon'
export default {
  name: 'CodeFormat',
  // components:{
  //     'vi-icon': Icon
  // },
  props:{
    title:{},
    description:{},
    extendedDescription:''
  },
  data() {
    return {
      isShow: false,
      codeTextBtn: '显示代码',
      proString:'',
      extendedString:'',
      content:[],
      extendedContent:[]
    }
  },
  methods: {
    handleToggleShow() {
      // console.log(!(this.$slots.codeText))
      this.isShow = !this.isShow
      this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码'
    }
  },
  created(){

  }
}
</script>

<style lang="stylus" scoped>
  *{
    padding: 0;
    margin:0;
    box-sizing: border-box;
  }
  .code-format{
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    font-size:16px;
    color: #5e6d82;
    .vue-vi-title{
      .titleName{
        font-weight: 400;
        color: #1f2f3d;
        font-size: 22px;
      }
      .attrContent-wrapper{
        .attrContent{
          display: inline-block;
          font-size: 16px;
          color: #5e6d82;
          margin-top: 0.6em;
          // background: red;
          .attrStyle{
            font-size: 14px;
            padding: 0.2em 0;
            border: 1px solid #ebebeb;
            border-radius: 3px; 
            background: #e6effb;//#ebebeb
          }
        }
      }
      
      .extended-wrapper{
        margin-top: 0.6em;
        .extended{
          display: inline;
          margin-top: 0.1em; 
          font-size: 15px;
          color: #5e6d82;
          margin-top: 0.2em;
          .colorStyle{
            font-size: 14px;
            padding: 0.1em 0;
            background: #e6effb;//#ebebeb
            border: 1px solid #ebebeb;
            border-radius: 3px; 
          }
        }
      }
      
    }
    .vue-vi-main{
      border: 1px solid #ebebeb;
      margin-top: 0.6em;
      .vue-vi-demo{
        border-radius: 3px;
        margin-top: 0.6em;
        padding: 0.4em 0;
        width: 100%; 
        .vue-vi-content{
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-content: flex-start;
          padding-left: 1em;
        }
      }
      .vue-vi-code{
        border-radius: 3px;
        padding: 0 0.2em;
        .vue-vi-paraDescription{
          border: 1px solid #ebebeb;
          border-radius: 3px; 
          padding: 0.6em;
          padding-left: 0.8em; 
          margin: 0 0.6em;
          margin-top: 0.2em; 
          margin-bottom: 0.6em;
          font-size: 18px;
          font-weight: 400px;
          .paraStyle{
            // 在父组件slot写的类名，用于描写组件参数
            border: 1px solid #ebebeb;
            border-radius: 3px; 
            display: inline-block;
            color: #5e6d82;
            background-color: #e6effb;
            padding: 0.1em 0.3em;
            margin: 0 0.2em;
            font-size: 16px;
            // word-break: break-word;
          }
        }
      }
      .vue-vi-button{
        border-top: 2px solid #ebebeb;
        border-radius: 3px;
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: top;
        .vue-vi-wrapper{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: top;
          padding: 0.7em 0;
          .vue-vi-icon{
            width:1.2em;
            height:1.2em;
            fill:#ebebeb;
          }
          .vue-vi-buttonText{
            font-size: 14px;
            color: #ebebeb;
            // display:none;
          } 
        }
        &:hover{
          .vue-vi-buttonText{
            // display: block;
            color: #409eff;
          }
        }
        &:hover{
          .vue-vi-icon{
            fill:#409eff;
          }
        } 
      }
    }
  }
  // p .vue-vi-paraDescription参数样式
  // .paraStyle{
  //   color: #5e6d82;
  //   background-color: #e6effb;
  //   padding: 0.5 0.5em;
  //   font-size: 14px;
  //   // word-break: break-word;
  // }
</style>

