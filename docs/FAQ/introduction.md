<p align="center">
	<img :src="$withBase('/logo.png')" width="150">
	<p align="center">
		<em>borderUI</em>
	</p>
</p>

# 介绍
**borderUI** 是基于Vue(2.x)开发的移动端UI组件库，由我个人维护，从大量的项目实践中总结和提炼的可复用的模块，便于更加有相率的完成新项目，也为了多活两年。。。

项目目前正处于开发阶段，暂时不要用于生产系统，如果你愿意为 borderUI 贡献代码或提供建议，请阅读以下内容。

<ul>
    <li  v-for="a in [
    {title:'让我帮你百度一下',url:'http://baidu.apphb.com/'},
    {title:'Kaspersky Cyberthreat',url:'https://cybermap.kaspersky.com/'},
    {title:'Breathingearth',url:'http://www.breathingearth.net/'}
    ]">
        <a :href='a.url' target='_blank'>{{a.title}}<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>
    </li>
</ul>