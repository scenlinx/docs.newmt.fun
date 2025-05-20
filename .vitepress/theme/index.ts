import { useRoute } from 'vitepress'

import imageViewer from 'vitepress-plugin-image-viewer'
import DefaultTheme from 'vitepress/theme'

import { h } from 'vue'

import {
  Announcement,
  DocBox,
  DocBoxCube,
  DocLinks,
  DocPill,
  DocVideoLink,
  HomeFooter,
  HomeUnderline,
  backtotop,
  umamiAnalytics
} from './types/index.js'
import './styles/all.css'

import { Footer_Data } from '../data'

import 'viewerjs/dist/viewer.min.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Announcement),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      'doc-after': () => h('div', [
        h(backtotop)
      ])
    })
  },
  enhanceApp: ({ app }) => {
    umamiAnalytics({
      id: 'ede95de6-e37d-4364-b1cb-bc4af35b5318',
      src: 'https://ai.wantr.cn/script.js'
    })
    app.component('Home', HomeUnderline)
    app.component('Pill', DocPill)
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('Vid', DocVideoLink)
    app.component('BackTop', backtotop)
  },
  setup() {
    const route = useRoute()
    imageViewer(route)
  }
}
