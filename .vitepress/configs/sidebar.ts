import { DefaultTheme } from 'vitepress'
import fs from 'fs'
import path from 'path'

// 定义 SidebarItem 类型
type SidebarItem = DefaultTheme.SidebarItem

// 获取目录下的所有 Markdown 文件（不包括扩展名）
const getMarkdownFiles = (dir: string): string[] => {
  const files = fs.readdirSync(dir)
  return files.filter(file => file.endsWith('.md')).map(file => file.replace('.md', ''))
}

// 生成侧边栏
const generateSidebar = (baseDir: string, folderName: string): SidebarItem => {
  const folderPath = path.join(baseDir, folderName)  // 确保这里是正确的路径
  const items = getMarkdownFiles(folderPath).map(file => ({
    text: file.replace(/-/g, ' '),  // 将文件名中的 `-` 替换为空格
    link: `/${folderName}/${file}`  // 生成链接
  }))

  return {
    text: folderName,
    base: `/${folderName}/`,  // 设置文件夹基础路径
    items
  }
}

// 导出各个侧边栏配置

export function Sidebar_Asus(): SidebarItem[] {
  return [
    generateSidebar('./moneys')
  ]
}

export function Sidebar_vps(): SidebarItem[] {
  return [
    generateSidebar('./classics'),
  ]
}

export function Sidebar_ESXi(): SidebarItem[] {
  return [
    generateSidebar('./it-serve'),
  ]
}

// 侧边栏配置集合
export const sidebar: DefaultTheme.SidebarMulti = {
  '/classics/': { base: '/classics/', items: Sidebar_vps() },
  '/moneys/': { base: '/moneys/', items: Sidebar_Asus() },
  '/it-serve/': { base: '/it-serve/', items: Sidebar_ESXi() },
}
