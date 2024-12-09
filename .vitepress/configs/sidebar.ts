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
        base: `${base}/${file.name}`, // 确保是相对路径
        items: readDir(resolve(base, file.name)) // 递归读取子目录
      })
    } else if (file.isFile() && file.name.endsWith('.md')) {
      // 生成相对路径
      items.push({
        text: file.name.replace('.md', ''),
        link: `${base}/${file.name.replace('.md', '')}` // 使用相对路径
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

// 通过 __dirname 获取相对路径
baseDirs.forEach(baseDir => {
  // 读取 content 目录的文件
  const contentDir = resolve(__dirname, `./content${baseDir}`)
  
  sidebar[baseDir] = {
    base: baseDir,
    items: readDir(contentDir) // 读取相对路径内容
  }
})
