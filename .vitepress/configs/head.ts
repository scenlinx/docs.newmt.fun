import type { HeadConfig } from 'vitepress'

// 导出head配置
export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '48x48', href: '/apple-touch-icon.png' }
  ],
  [
    'link',
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }
  ],
  [
    'link',
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
  ],
  ['meta', { name: 'author', content: '百万知识库' }],
  ['meta', { name: 'copyright', content: '百万知识库' }],
  ['meta', { name: 'og:type', content: 'website' }],
  ['meta', { name: 'og:locale', content: 'zh-CN' }],
  ['meta', { name: 'og:site_name', content: '百万知识库' }],
  ['meta', { name: 'og:title', content: '百万知识库' }],
  ['meta', { name: 'og:url', content: 'https://docs.newmt.fun/' }],
  ['meta', { name: 'og:image', content: 'https://docs.newmt.fun/sidelogo.png' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  [
    'meta',
    {
      name: 'description',
      content:
        '分享最新优质资源，包含各类影视资源、课程教程、软件游戏、考公考研、考证考编、幼小初高、学习资源等'
    }
  ],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  [
    'meta',
    { name: 'google-site-verification', content: '1UZ494BTZTo2f-VijC69XdHQgZ_EIbNDm3WkgRg4uKI' }
  ],
  [
    'meta',
    {
      name: 'og:description',
      content:
        '分享最新优质资源，包含各类影视资源、课程教程、软件游戏、考公考研、考证考编、幼小初高、学习资源等'
    }
  ],
  [
    'script',
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://docs.newmt.fun/',
        name: '百万知识库',
        description:
          '分享最新优质资源，包含各类影视资源、课程教程、软件游戏、考公考研、考证考编、幼小初高、学习资源等',
        author: {
          '@type': 'Person',
          name: 'scenlinx'
        }
      })
    }
  ]
]
