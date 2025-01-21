import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { h } from 'vue'

import imageViewer from 'vitepress-plugin-image-viewer'
import {
  HomeFooter,
  backtotop
} from './types/index.js'
import { Footer_Data } from '../data'
import './styles/all.css'
import 'viewerjs/dist/viewer.min.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(HomeFooter, { Footer_Data }),
      'doc-after': () => h('div', [
        h(backtotop)  // 返回顶部按钮插槽
      ])
    })
  },
  enhanceApp: ({ app }) => {
    app.component('BackTop', backtotop)  // 注册 backtotop 组件
  },
  setup() {
    const route = useRoute()
    imageViewer(route)
  }
}
