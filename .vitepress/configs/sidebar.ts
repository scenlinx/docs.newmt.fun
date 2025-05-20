import type { DefaultTheme } from 'vitepress';
import fg from 'fast-glob';
import matter from 'gray-matter';

export const sidebar: DefaultTheme.Config['sidebar'] = await generateSidebar();

async function generateSidebar(): Promise<DefaultTheme.Config['sidebar']> {
  return {
    '/guide/': await getItems("guide", []),
    '/moneys/': await getItems("moneys", []),
    '/classics/': await getItems("classics", ['山', '医', '命', '相', '卜', '灵宠', '相关经典']),
    '/it-serve/': await getItems("it-serve", []),
    '/sources/': await getItems("sources", ['每日更新', '影视综艺', '知识付费', '教育学习', '素材资源']),
  };
}

async function getItems(path: string, order: string[]): Promise<DefaultTheme.SidebarItem[]> {
  // 新增：文件排序函数（保持原文件名处理逻辑）
  const sortFiles = (files: { name: string }[]) => {
    return files.sort((a, b) => {
      const getOrder = (name: string) => {
        const match = name.match(/^(\d+)-/);
        return match ? parseInt(match[1]) : Infinity;
      };
      return getOrder(a.name) - getOrder(b.name);
    });
  };

  // 1. 处理顶层MD文件（仅增加排序）
  const rootFiles = sortFiles(await fg(`content/${path}/*.md`, { objectMode: true })); // 修改点
  const rootItems = rootFiles.map(file => {
    const { data } = matter.read(file.path);
    return {
      text: data.title,
      link: `/${path}/${file.name.replace('.md', '')}`,
    };
  });

  // 2. 处理分组文件夹（仅增加文件排序）
  let groups: DefaultTheme.SidebarItem[] = [];
  const directories = await fg(`content/${path}/*`, { onlyDirectories: true, objectMode: true });
  directories.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));

  for (const { name: groupName } of directories) {
    const articles = sortFiles(await fg(`content/${path}/${groupName}/*.md`, { objectMode: true })); // 修改点
    const items = articles.map(article => {
      const { data } = matter.read(article.path);
      return {
        text: data.title,
        link: `/${path}/${groupName}/${article.name.replace('.md', '')}`,
      };
    });

    if (items.length > 0) {
      groups.push({
        text: groupName.includes('-') 
          ? groupName.substring(groupName.indexOf('-') + 1)
          : groupName,
        items,
        collapsed: items.length < 2,
      });
    }
  }

  return [...rootItems, ...groups];
}