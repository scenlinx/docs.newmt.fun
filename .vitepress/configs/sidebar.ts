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
export function Sidebar_notes(): SidebarItem[] {
  return [
    generateSidebar('./notes', '文档记录'),
    generateSidebar('./notes/vitepress', 'VitePress 搭建记录')
  ]
}

export function Sidebar_Asus(): SidebarItem[] {
  return [
    generateSidebar('./asus', '梅林操作文档')
  ]
}

export function Sidebar_FE(): SidebarItem[] {
  return [
    generateSidebar('./fe/linux', 'Linux 文档'),
    generateSidebar('./fe/docker', 'Docker 文档'),
    generateSidebar('./fe/git', 'Git 文档'),
    generateSidebar('./fe/homebrew', 'HomeBrew 文档'),
    generateSidebar('./fe/pnpm', 'pnpm 文档')
  ]
}

export function Sidebar_vps(): SidebarItem[] {
  return [
    generateSidebar('./vps/settings', 'Debian/Ubuntu'),
    generateSidebar('./vps/tools', '系统工具'),
    generateSidebar('./vps/serve', '搭建服务'),
    generateSidebar('./vps/oracle-cloud', 'Oracle Cloud 甲骨文云')
  ]
}

export function Sidebar_ESXi(): SidebarItem[] {
  return [
    generateSidebar('./esxi/install', 'ESXi 8.0 部署指南'),
    generateSidebar('./esxi/openwrt', 'OpenWrt/iStoreOS')
  ]
}

export function Sidebar_streaming(): SidebarItem[] {
  return [
    generateSidebar('./streaming', 'Netflix 观看指南')
  ]
}

export function Sidebar_serve(): SidebarItem[] {
  return [
    generateSidebar('./serve', '账号合租平台')
  ]
}

// 侧边栏配置集合
export const sidebar: DefaultTheme.SidebarMulti = {
  '/vps/': { base: '/vps/', items: Sidebar_vps() },
  '/asus/': { base: '/asus/', items: Sidebar_Asus() },
  '/esxi/': { base: '/esxi/', items: Sidebar_ESXi() },
  '/fe/': { base: '/fe/', items: Sidebar_FE() },
  '/notes/': { base: '/notes/', items: Sidebar_notes() },
  '/serve/': { base: '/serve/', items: Sidebar_serve() },
  '/streaming/': { base: '/streaming/', items: Sidebar_streaming() }
}
