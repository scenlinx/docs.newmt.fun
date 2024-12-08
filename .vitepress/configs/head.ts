import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  // 样式与主题设置
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  
  // 网站图标配置
  ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],

  // SEO 优化
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  ['meta', { name: 'author', content: 'scenlinx' }],
  ['meta', { name: 'copyright', content: 'scenlinx' }],
  ['meta', { name: 'og:type', content: 'website' }],
  ['meta', { name: 'og:locale', content: 'zh-CN' }],
  ['meta', { name: 'og:site_name', content: '百万知识库' }],
  ['meta', { name: 'og:title', content: '百万知识库' }],
  ['meta', { name: 'og:url', content: 'https://docs.newmt.fun/' }],
  ['meta', { name: 'og:image', content: 'https://docs.newmt.fun/logo/logo.png' }],
  ['meta', { name: 'keywords', content: '副业赚钱, 流量卡, 网盘拉新, 网盘资源, 新媒体相关, 网站搭建' }],
  [
    'meta',
    {
      name: 'description',
      content: '探索副业赚钱的最新行业玩法，流量卡代理和网盘拉新的技巧，网站搭建与新媒体相关的学习资料'
    }
  ],
  [
    'meta',
    {
      name: 'og:description',
      content: '探索副业赚钱的最新行业玩法，流量卡代理和网盘拉新的技巧，网站搭建与新媒体相关的学习资料'
    }
  ],

  // JSON-LD 结构化数据
  [
    'script',
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://docs.newmt.fun/',
        name: '百万知识库',
        description: '探索副业赚钱的最新行业玩法，流量卡代理和网盘拉新的技巧，网站搭建与新媒体相关的学习资料',
        author: { '@type': 'Person', name: 'scenlinx' }
      })
    }
  ]
]
