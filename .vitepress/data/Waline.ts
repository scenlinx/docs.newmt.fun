import type { WalineData } from '../theme/types/index.js'

export const Waline_Data: WalineData = {
  serverURL: 'https://waline.newmt.fun/',
  lang: 'zh-CN',
  noCopyright: true,
  imageUploader: async (file) => {
    const formData = new FormData()
    formData.append('image', file)

    const { success, data, message } = await (
      await fetch(import.meta.env.VITE_IMGBB_URL, { method: 'POST', body: formData })
    ).json()

    if (success) return data.url
    throw new Error(`上传失败: ${message}`)
  }
}
