import type { DefaultTheme } from 'vitepress'

// 导航栏设置
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:rocket-launch-solid" style="color:#2072c9"></iconify-icon>快速开始',
    link: '/guide/getting-started',
    activeMatch: '^/guide/'
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:chat-bubble-left-ellipsis-solid" style="color:#e83e8c"></iconify-icon>四海闲谈',
    items: [
      { 
        text: '码农专区', 
        link: '/it-serve/index', 
        activeMatch: '^/it-serve/' 
      },
      { 
        text: '玄学中医', 
        link: 'https://doc.panws.top/03learn/xuanxue'
//      link: '/classics/index', 
//      activeMatch: '^/classics/' 
      },
    ],
    activeMatch: '/it-serve/'
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:archive-box-solid" style="color:#fd7e14"></iconify-icon>资源合集',
    link: 'https://doc.panws.top/' 
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:currency-dollar-solid" style="color:#20c997"></iconify-icon>副业学习',
    link: 'https://pro.wantr.cn/moneys/',
  },
  { 
    text: '<iconify-icon class="i-mr" icon="heroicons:cloud-arrow-down-solid" style="color:#17a2b8"></iconify-icon>网盘搜索', 
    link: 'https://panws.top/' 
  },
  { 
    text: '<iconify-icon class="i-mr" icon="heroicons:map-solid" style="color:#28a745"></iconify-icon>百万导航', 
    link: 'https://www.newmt.fun/' 
  }
]
