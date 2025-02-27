import { ref, onMounted } from 'vue'
import { VideoProps } from './types'

/**
 * 检查链接是否为外部链接。
 *
 * @param link - 要判断的链接字符串。
 * @returns 如果链接是外部链接，则返回 `true`，否则返回 `false`。
 */
export const isExternalLink = (link: string): boolean => /^https?:\/\//.test(link)

/**
 * 创建一个视频播放状态的 ref 以及切换播放状态的函数。
 *
 * @returns 包含 `isVideoOpen` 状态和 `toggleVideo` 切换函数的常量数组。
 */
export const useVideoToggle = () => {
  const isVideoOpen = ref(false)

  const toggleVideo = () => {
    isVideoOpen.value = !isVideoOpen.value
  }

  return [isVideoOpen, toggleVideo] as const
}

/**
 * 将指定的 DOM 元素移动到目标位置。
 *
 * 当组件挂载时，将 `.VPHero .text` 内部的内容替换为 `#hero-text` 的内容。
 */
export const moveDomElements = () => {
  onMounted(() => {
    const targetElement = document.querySelector('.VPHero .text') as HTMLElement | null
    const sourceElement = document.querySelector('#hero-text') as HTMLElement | null

    if (targetElement && sourceElement) {
      targetElement.innerHTML = ''
      targetElement.appendChild(sourceElement)
    }
  })
}

/**
 * 视频平台配置
 * 每个平台包含以下属性：
 * - `src`: 返回视频嵌入链接的函数，接受视频的唯一标识符 `id` 作为参数。
 * - `title`: 视频播放器的名称。
 */
export const video = {
  bilibili: {
    src: (id: string) => `https://player.bilibili.com/player.html?aid=${id}`,
    title: 'Bilibili video player'
  },
  tencent: {
    src: (id: string) => `https://v.qq.com/txp/iframe/player.html?vid=${id}`,
    title: 'Tencent Video player'
  },
  youku: {
    src: (id: string) => `https://player.youku.com/embed/${id}`,
    title: 'Youku video player'
  },
  youtube: {
    src: (id: string) => `https://www.youtube-nocookie.com/embed/${id}`,
    title: 'YouTube video player'
  },
  vimeo: {
    src: (id: string) => `https://player.vimeo.com/video/${id}`,
    title: 'Vimeo video player'
  },
  xigua: {
    src: (id: string) => `https://www.ixigua.com/iframe/${id}`,
    title: 'XiGua video player'
  }
}

/**
 * 动态返回对应的视频配置或自定义链接
 * @param props - 包含视频相关参数的配置对象
 * @param props.to - 视频平台的名称（可选）
 * @param props.id - 视频的唯一标识符（可选）
 * @param props.src - 自定义视频链接（可选）
 * @returns 视频配置对象，包括 `src` 和 `title`
 */
export const getVideoConfig = (props: VideoProps) => {
  /**
   * 如果同时传递了 `to` 和 `id`，返回对应视频平台的配置。
   * @example
   * getVideoConfig({ to: 'bilibili', id: '12345' });
   * // 返回 { src: 'https://player.bilibili.com/player.html?aid=12345', title: 'Bilibili video player' }
   */
  if (props.to && props.id) {
    return video[props.to]
  }

  /**
   * 如果只有 `id` 存在，则返回默认的 YouTube 视频配置。
   * @example
   * getVideoConfig({ id: 'abcd1234' });
   * // 返回 { src: 'https://www.youtube-nocookie.com/embed/abcd1234', title: 'YouTube video player' }
   */
  if (props.id) {
    return video.youtube
  }

  /**
   * 如果没有 `to` 和 `id`，且提供了自定义的 `src`，返回自定义视频配置。
   * 如果 `src` 为空，则返回空链接。
   * @example
   * getVideoConfig({ src: 'https://example.com/custom-video.mp4' });
   * // 返回 { src: 'https://example.com/custom-video.mp4', title: 'Custom video player' }
   */
  return {
    src: props.src || '',
    title: 'Custom video player'
  }
}
