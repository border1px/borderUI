<p align="center">
	<img :src="$withBase('/logo.png')" width="150">
	<p align="center">
		<em>borderUI</em>
	</p>
</p>

# 介绍
**borderUI** 是基于Vue(2.x)开发的移动端UI组件库，由我个人维护，从项目实践中总结和提炼的可复用模块。项目目前正处于开发阶段，不建议用于生产系统，如果你愿意为 borderUI 贡献代码或提供建议，请阅读以下内容。

### 又一个轮子？
**没错！**

我造轮子的重点在于**学习** 。在各类项目实践中写过很多代码，都没有从工程化、结构化、可复用这些角度考虑过问题，每做一个项目就是从头一顿搞、百度一大抄，不懂底层实现，心里虚得很。学知识都要经历由浅入深的过程，打算抽出一些时间，逐步完善它，算是对我这几年前端工作的总结吧。

单个组件看似简单，但是要做一套完整的库真的不算简单。从写下第一行代码开始，过程中不断重构，但看着它一天天丰满起来，**痛并快乐着**。

开发过程中参考了很多优秀的UI库，因为这些库/组件广为流传，前辈的经验非常值得借鉴。
* **使用方式** 借鉴了 **Framework7**
* **文档风格** 借鉴了 **Vant**

**在开发过程中，接触并深入学习了以下技能：**
* Webpack
* Gulp
* Vue + Vue-router + Vuex
* Git/Github
* Redux
* ES6
* Vuepress
* Nuxt
* Markdown

### 自我定位
十八线小城市的三流前端攻城师（人帅，水平菜）。


<ul>
    <li  v-for="a in [
    {title:'让我帮你百度一下',url:'http://baidu.apphb.com/'},
    {title:'Kaspersky Cyberthreat',url:'https://cybermap.kaspersky.com/'},
    {title:'Breathingearth',url:'http://www.breathingearth.net/'}
    ]">
        <a :href='a.url' target='_blank'>{{a.title}}<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>
    </li>
</ul>