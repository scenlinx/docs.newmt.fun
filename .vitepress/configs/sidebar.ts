import fs from 'fs'
import path from 'path'
import { DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

// 递归获取目录中的所有 .md 文件
function getMarkdownFiles(dir: string): SidebarItem[] {
  const files = fs.readdirSync(dir)
  let sidebarItems: SidebarItem[] = []

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    // 如果是目录，递归获取子目录的 .md 文件
    if (stat.isDirectory()) {
      sidebarItems.push({
        text: file,
        base: `/${file}/`,
        items: getMarkdownFiles(filePath), // 递归获取子目录中的 .md 文件
      })
    } else if (file.endsWith('.md')) {
      // 如果是 .md 文件，生成相应的侧边栏项
      const link = path.relative('.', filePath).replace(/\.md$/, '')
      sidebarItems.push({
        text: file.replace(/-/g, ' '), // 文件名转为文本
        link,
      })
    }
  })

  return sidebarItems
}

// 自动构建侧边栏
function generateSidebar(baseDir: string): DefaultTheme.SidebarMulti {
  const sidebarConfig: DefaultTheme.SidebarMulti = {}

  // 获取主目录中的子目录并为每个子目录生成侧边栏
  const directories = fs.readdirSync(baseDir)

  directories.forEach((dir) => {
    const dirPath = path.join(baseDir, dir)
    const stat = fs.statSync(dirPath)

    if (stat.isDirectory()) {
      sidebarConfig[`/${dir}/`] = {
        base: `/${dir}/`,
        items: getMarkdownFiles(dirPath),
      }
    }
  })

  return sidebarConfig
}

// 在 VitePress 配置中使用自动生成的侧边栏
export const sidebar = generateSidebar(path.resolve(__dirname, 'docs'))
