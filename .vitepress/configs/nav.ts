import type { DefaultTheme } from 'vitepress'

// 导航栏设置
export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '首页',
    link: '/',
    activeMatch: '^/'
  },
  {
    text: '资源分享',
    link: '/sources/index',
    activeMatch: '^/sources/'
  },
  {
    text: '副业学习',
    link: '/moneys/副业学习/sim',
    activeMatch: '^/moneys/'
  },
  {
    text: '文档记录',
    link: '/categories/index',
    activeMatch: '^/categories/'
  },
  {
    text: '杂七杂八',
    items: [
      { text: '国学中医', link: '/others/classics/index', activeMatch: '/others/classics/' },
      { text: '码农服务', link: '/others/it-serve/流媒体观影/Netflix-guide', activeMatch: '/others/it-serve/' },
    ],
    activeMatch: '^/others/'
  },
  { text: '网盘资源', link: 'https://pan.newmt.fun/' }
]
