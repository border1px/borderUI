module.exports = {
  title: 'borderUI',
  description: 'Mobile UI Components built on Vue',
  base:'/border-ui/docs/',
  sidebarDepth: 2,
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav:[
      {
        text: '学习', link: '/' ,
        items: [
          { text: '教程', link: '' },
          { text: 'API',link: '' },
          { text: '风格指南',link: '' },
          { text: '示例',link: '' },
          { text: 'Cookbook',link: '' },
        ]
      },
      { text: '博客', link: 'http://hicjiajia.cnblogs.com/' }, // 外部链接
      { text: 'GitHub', link: 'https://github.com/border-1px/borderUI'}
    ],
    sidebar:[
      {
        title: '指南',
        collapsable: true,
        children: [
          ['/FAQ/introduction','介绍'],
          ['/FAQ/quickstart','快速上手'],
          ['/FAQ/changelog','更新日志'],
          ['/FAQ/theme','定制主题'],
        ]
      },
      {
        title: '组件',
        collapsable: true,
        children: [
          ['/Comp/button','Button 按钮'],
          ['/Comp/button_group','Button Group 按钮组'],
          ['/Comp/navbar','Navbar 导航']
        ]
      },
    ]
  }
}
