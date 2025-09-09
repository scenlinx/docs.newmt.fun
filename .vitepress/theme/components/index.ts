import { defineAsyncComponent } from 'vue'

export { default as Notice } from './LmNotice.vue'
export { default as Links } from './LmLinks.vue'
export { default as Footer } from './LmFooter.vue'
export { default as Underline } from './LmUnderline.vue'
export { default as Backtotop } from './Backtotop.vue'

export const Waline = defineAsyncComponent(() => import('./LmWaline.vue'))
