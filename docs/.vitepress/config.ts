import { defineConfig } from 'vitepress';
import { nav, sidebar } from './menuConfig'; // 引入 nav 和 sidebar

export default defineConfig({
  title: '百万知识库',
  lang: 'zh-CN',
  description: '探索副业赚钱的最新行业玩法，流量卡代理和网盘拉新的技巧，网站搭建与新媒体相关的学习资料',
  sitemap: { hostname: 'https://docs.newmt.fun' },
  head: [
    ['link', { rel: 'stylesheet', href: '/style.css' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'keywords', content: '副业赚钱, 流量卡, 网盘拉新, 网盘资源, 新媒体相关, 网站搭建' }],
    ['meta', { name: 'author', content: '百万联盟' }]
  ],
  cleanUrls: true,
  ignoreDeadLinks: true, // 添加这一行来禁用死链接检查
  themeConfig: {
    logo: '/logo/logo.png',
    nav,
    sidebar,
    footer: {
      message: '© 2024 百万知识库. 保留所有权利。'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: 'deep',
    outlineTitle: '本页目录',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '文章列表',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',
    algolia: {
      appId: 'WFMYUDH3HS',
      apiKey: 'c040efca65319ec2f01ed2df6572b3df',
      indexName: 'newmt',
      placeholder: '搜索文档...',
      searchParameters: {
        hitsPerPage: 5,
      }
    },
  }
});
