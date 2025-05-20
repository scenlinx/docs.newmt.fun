<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

/**
 * 组件的 props 类型定义。
 *
 * @typedef {Object} Props
 * @property {Object} Footer_Data - 页脚数据。
 * @property {Object} [beian] - 备案信息（可选）。
 * @property {string} [beian.icp] - ICP 备案号。
 * @property {string} [beian.police] - 公安备案号。
 * @property {Object} [author] - 作者信息（可选）。
 * @property {string} [author.name] - 作者姓名。
 * @property {string} [author.time] - 发布时间。
 * @property {string} [author.link] - 作者链接。
 */
const props = defineProps<{
  Footer_Data: {
    beian?: {
      icp?: string
      police?: string
    }
    author?: {
      name?: string
      time?: string
      link?: string
    }
  }
}>()

/**
 * 当前打开的 section 索引，`null` 表示没有 section 被打开。
 *
 * @type {Ref<number | null>}
 */
const openSectionIndex = ref<number | null>(null)

/**
 * 当前窗口宽度。
 *
 * @type {Ref<number | null>}
 */
const windowWidth = ref<number | null>(null)

/**
 * 切换 section 的显示状态。
 *
 * @param {number} index - 要切换的 section 的索引。
 */
const toggleSection = (index: number) => {
  openSectionIndex.value = openSectionIndex.value === index ? null : index
}

/**
 * 更新当前窗口宽度。
 */
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

// 组件挂载时添加 resize 事件监听器
onMounted(() => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', updateWindowWidth)
  }
})

// 组件卸载时移除 resize 事件监听器
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWindowWidth)
  }
})

/**
 * 计算当前窗口是否为大屏幕，宽度大于 768px 时为大屏幕。
 *
 * @type {ComputedRef<boolean>}
 */
const isLargeScreen = computed(() => windowWidth.value > 768)
</script>

<template>
  <footer class="ba">

    <!-- 底部信息栏 -->
    <div
      class="flex"
      v-if="props.Footer_Data.beian?.icp || props.Footer_Data.beian?.police"
    >
      <span v-if="props.Footer_Data.beian?.icp">
        <i class="fas fa-earth-americas"></i>
        <a
          target="_blank"
          rel="noopener"
          href="https://beian.miit.gov.cn/"
          title="ICP备案"
        >
          {{ props.Footer_Data.beian.icp }}
        </a>
      </span>
      <span v-if="props.Footer_Data.beian?.police">
        <i class="fas fa-shield"></i>
        <a
          target="_blank"
          rel="noopener"
          href="https://beian.mps.gov.cn/"
          title="公安备案"
        >
          {{ props.Footer_Data.beian.police }}
        </a>
      </span>
    </div>
    <div class="flex" v-if="props.Footer_Data.author?.name">
      <span>
        Copyright © 
        {{ props.Footer_Data.author?.time }} -
        {{ new Date().getFullYear() }}
        <a
          target="_blank"
          rel="noopener"
          title="GitHub"
          :href="props.Footer_Data.author?.link"
          >{{ props.Footer_Data.author?.name }}</a
        >
        . All Rights Reserved
      </span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;

  a {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
      color: var(--vp-c-brand-1);
    }
  }

  .has-sidebar ~ & {
    display: none;
  }
}

span {
  margin-left: 1rem;
}

i {
  margin: 0 0.25rem;
}

.ba {
  background: var(--vp-c-bg-alt);
  font-size: 0.8rem;
  text-align: center;
  margin: 0 auto;
}

.flex {
  display: inline-block;
  margin: 1.25rem 0;
}

</style>
