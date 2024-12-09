import { readdirSync } from 'fs'
import { resolve } from 'path'
import type { DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

// 读取目录并返回相应的文件列表
function readDir(base: string): SidebarItem[] {
  const files = readdirSync(base, { withFileTypes: true })
  const items: SidebarItem[] = []

  files.forEach(file => {
    if (file.isDirectory()) {
      items.push({
        text: file.name,
        base: `${base}/${file.name}`,
        items: readDir(resolve(base, file.name)) // 递归读取子目录
      })
    } else if (file.isFile() && file.name.endsWith('.md')) {
      items.push({
        text: file.name.replace('.md', ''),
        link: `${base}/${file.name.replace('.md', '')}`
      })
    }
  })

  return items
}

// 自动生成侧边栏配置
export const sidebar: DefaultTheme.SidebarMulti = {}

const baseDirs = [
  '/it-serve',
  '/classics',
  '/moneys',
]

baseDirs.forEach(baseDir => {
  sidebar[baseDir] = {
    base: baseDir,
    items: readDir(resolve(__dirname, `./content${baseDir}`)) // 假设文件在 docs 文件夹下
  }
})

