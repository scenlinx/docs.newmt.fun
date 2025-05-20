import type { DefaultTheme } from 'vitepress'

// 导航栏设置
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:rocket-launch-solid" style="color:#20c997"></iconify-icon>快速开始',
    link: '/guide/getting-started'
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:wrench-screwdriver-solid" style="color:#3498db"></iconify-icon>配置',
    link: '/guide/theme'
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
