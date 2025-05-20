---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 百万AI知识库
titleTemplate: 一个分享每日热门网盘资源的中转站

hero:
  name: AI Wantr
  text: 'Enhanced '
  textsuffix: 'Share'
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件

  image:
    src: '/logo/Logo.webp'
    alt: '@scenlinx'
    loading: eager
    fetchpriority: high
    width: 320
    height: 320

  prelink:
    # content: '<span class="promo-text" style="display: inline-flex; align-items: center"><img src="/logo/qyt.webp" style="height:0.65em; "/>IPLC纯专线内网传输线路 最高2.5Gbps速率!</span>'
    title: '<span class="promo-title"> 🎉 FlyingBird 520&618 活动继续启航！</span>'
    content: '
    · <span class="promo-text"> 优惠码可重复使用5次!!! </span></br>
    · 月付 <span class="promo-text"> 85折 </span>优惠码 <span class="promo-text"> fb2561885 </span></br>
    · 年付 <span class="promo-text"> 64折 </span>优惠码 <span class="promo-text"> fb2561880 </span></br>
    '
    date: '2025年6月20号23点59分'
    # dateIcon: 'mdi:calendar-star'
    dateText: '活动截止日期'
    link: https://ai.wantr.cn/flyingbird

  # prelink:
  #   copy: true
  #   install: 'pnpm add @scenlinx'
  #   title: '<iconify-icon class="i-mr" icon="fa6-solid:bolt" style="color:#63E6BE"></iconify-icon> 快速开始'
  #   content: '<span class="promo-text">pnpm add @scenlinx</span>'

  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started

    - theme: alt
      text: 账号合租
      link: https://ai.wantr.cn/serve/sharing/account-sharing-guide

    - theme: alt
      text: 专线推荐
      link: https://ai.wantr.cn/serve/airport/qingyunti

    - theme: brand
      text: ❤️ 成为赞助商
      link: /logo/sponsor.webp

    - theme: custom-alt
      text: 玄学宝典
      link: https://docs.newmt.fun

features:
  - title: '<iconify-icon class="i-mr" icon="heroicons:puzzle-piece-solid" style="color:#ff9800"></iconify-icon>开箱即用的主题配色'
    details: 支持开箱即用的多种主题配色，并提供灵活的配置选项，轻松切换主题颜色方案，满足品牌或个人偏好的视觉需求。
    link: '/guide/theme'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:megaphone" style="color:#e74c3c"></iconify-icon>首页公告栏'
    details: 在首页展示重要通知或动态信息，吸引用户关注，提升站点的互动性。
    link: '/guide/announcement'

  - title: '<iconify-icon class="i-mr" icon="heroicons:paint-brush-solid" style="color:#3498db"></iconify-icon>首页下划线'
    details: 实现页面元素的下划线动画，增加视觉层次感和动感效果。
    link: '/guide/homeUnderline'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:video-camera" style="color:#f39c12"></iconify-icon>视频组件'
    details: 支持嵌入视频内容，提供更加丰富的多媒体展示形式，增强用户互动体验。
    link: '/guide/docvideolink'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:rectangle-group" style="color:#1abc9c"></iconify-icon>链接卡片'
    details: 设计美观的链接卡片，直观展示外部资源或推荐内容，提升页面内容的吸引力。
    link: '/guide/linkcard'

  - title: '<iconify-icon class="i-mr" icon="heroicons-solid:photo" style="color:#2ecc71"></iconify-icon>图片描述'
    details: 为图片添加说明文字，增强内容语义表达，提高无障碍访问体验，同时有助于SEO。
    link: '/guide/image-description'

  - title: '<iconify-icon class="i-mr" icon="heroicons:chart-bar-square-solid" style="color:#007bff"></iconify-icon>站点统计'
    details: 提供站点数据统计功能，方便监控和分析访问情况，帮助优化站点性能。
    link: '/guide/analytics'

  - title: '<iconify-icon class="i-mr" icon="line-md:iconify2-static" style="color:#1769AA"></iconify-icon>Iconify 图标集成'
    details: 轻松集成 Iconify 图标库，提供上千种矢量图标，支持多种平台，丰富站点的视觉表现和交互体验。
    link: '/guide/theme#图标支持'
---

<Home />
<style>
  :root {
    --vp-home-hero-image-background-image: none !important;
  }
</style>

