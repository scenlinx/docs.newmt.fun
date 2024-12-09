import type { DefaultTheme } from 'vitepress'

// 导航栏设置
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/',
    activeMatch: '^/'
  },
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
    text: '码农专区',
    link: '/it-serve/',
    activeMatch: '^/it-serve/'
  },
  {
    text: '玄学中医',
    link: '/classics/',
    activeMatch: '^/classics/'
  },
  { text: '网盘资源', link: 'https://pan.newmt.fun/' }
]
