import type { DefaultTheme } from 'vitepress'

// 导航栏设置
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '副业学习',
    link: '/moneys/',
    activeMatch: '^/moneys/'
  },
  {
    text: '资源合集',
    link: '/sources/',
    activeMatch: '^/sources/'
  },
  {
    text: '四海闲谈',
    items: [
      { text: '码农专区', link: '/it-serve/index', activeMatch: '^/it-serve/' },
      { text: '玄学中医', link: '/classics/index', activeMatch: '^/classics/' },
    ],
    activeMatch: '/it-serve/'
  },
  { text: '网盘资源', link: 'https://pan.newmt.fun/' },
  { text: '导航', link: 'https://nav.newmt.fun/' }
]
