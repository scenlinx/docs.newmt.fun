/// <reference types="vite/client" />
import { useRoute } from 'vitepress'
import imageViewer from 'vitepress-plugin-image-viewer'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import {
  Notice,
  Footer,
  Links,
  Underline,
  Backtotop,
  umamiAnalytics,
  Waline
} from './types/index.js'
import './style/all.css'
import { Footer_Data, Waline_Data } from '../data'
import 'viewerjs/dist/viewer.min.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Notice),
      'layout-bottom': () => h(Footer, { Footer_Data }),
      'doc-after': () => h('div', [
        h(Waline, { Waline_Data }),
        h(Backtotop)
      ])
    })
  },

  enhanceApp: ({ app }) => {
    umamiAnalytics({
      id: import.meta.env.VITE_UMAMI_ID,
      src: import.meta.env.VITE_UMAMI_SRC,
      domains: 'pro.wantr.cn'
    })
    app.component('Home', Underline)
    app.component('Links', Links)
  },

  setup() {
    const route = useRoute()
    imageViewer(route, '.vp-doc', {
      navbar: true,
      toolbar: true,
      filter: (img: HTMLImageElement) => {
        const noViewer = !img.hasAttribute('data-no-viewer')
        if (noViewer) img.style.cursor = 'zoom-in'
        return noViewer
      }
    })
  }
}
