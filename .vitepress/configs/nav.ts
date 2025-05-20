import type { DefaultTheme } from 'vitepress'

// 导航栏设置
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:rocket-launch-solid" style="color:#2072c9"></iconify-icon>快速开始',
    link: '/guide/1-getting-started',
    activeMatch: '^/guide/'
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:currency-dollar-solid" style="color:#20c997"></iconify-icon>副业学习',
    link: '/moneys/',
    activeMatch: '^/moneys/'
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:archive-box-solid" style="color:#fd7e14"></iconify-icon>资源合集',
    link: '/sources/',
    activeMatch: '^/sources/'
  },
  {
    text: '<iconify-icon class="i-mr" icon="heroicons:chat-bubble-left-ellipsis-solid" style="color:#e83e8c"></iconify-icon>四海闲谈',
    items: [
      { 
        text: '<iconify-icon class="i-mr" icon="heroicons:code-bracket-solid" style="color:#007bff"></iconify-icon>码农专区', 
        link: '/it-serve/index', 
        activeMatch: '^/it-serve/' 
      },
      { 
        text: '<iconify-icon class="i-mr" icon="heroicons:sparkles-solid" style="color:#6f42c1"></iconify-icon>玄学中医', 
        link: '/classics/index', 
        activeMatch: '^/classics/' 
      },
    ],
    activeMatch: '/it-serve/'
  },
  { 
    text: '<iconify-icon class="i-mr" icon="heroicons:cloud-arrow-down-solid" style="color:#17a2b8"></iconify-icon>网盘资源', 
    link: 'https://pan.newmt.fun/' 
  },
  { 
    text: '<iconify-icon class="i-mr" icon="heroicons:map-solid" style="color:#28a745"></iconify-icon>导航', 
    link: 'https://nav.newmt.fun/' 
  }
]
