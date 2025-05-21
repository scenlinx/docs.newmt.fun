import type { HeadConfig } from 'vitepress'

// 导出head配置
export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  [
    'link',
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-96x96.png',
      sizes: '96x96'
    }
  ],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
  ],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'NewMT-Docs' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ['meta', { name: 'author', content: 'Scenlinx' }],
  ['meta', { name: 'copyright', content: 'Scenlinx' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-Hans' }],
  ['meta', { property: 'og:site_name', content: ' NewMT百万知识库' }],
  ['meta', { property: 'og:title', content: ' NewMT百万知识库' }],
  ['meta', { property: 'og:url', content: 'https://docs.newmt.fun/' }],
  [
    'meta',
    {
      property: 'og:image',
      content: '/logo/Docs-og.webp'
    }
  ],
  [
    'meta',
    {
      property: 'og:description',
      content:
        '集成 Vue 功能组件和主题美化的 VitePress 插件'
    }
  ],
  [
    'meta',
    {
      name: 'description',
      content:
        '集成 Vue 功能组件和主题美化的 VitePress 插件'
    }
  ],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@Scenlinx' }],
  ['meta', { name: 'twitter:title', content: 'NewMT-Docs' }],
  [
    'meta',
    {
      name: 'twitter:description',
      content:
        '集成 Vue 功能组件和主题美化的 VitePress 插件'
    }
  ],
  [
    'meta',
    {
      name: 'twitter:image',
      content: '/logo/Docs-og.webp'
    }
  ],
  [
    'meta',
    {
      name: 'keywords',
      content:
        '流媒体, Netflix, Disney+, HBO Max, Spotify, YouTube, 解锁, 流媒体观影, 奈飞, 青云梯, 奈飞小铺, 银河录像局'
    }
  ],

  [
    'meta',
    {
      name: 'google-site-verification',
      content: '1UZ494BTZTo2f-VijC69XdHQgZ_EIbNDm3WkgRg4uKI'
    }
  ]
]
