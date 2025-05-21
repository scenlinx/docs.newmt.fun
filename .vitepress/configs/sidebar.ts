import type { DefaultTheme } from 'vitepress';
import fg from 'fast-glob';
import matter from 'gray-matter';

export const sidebar: DefaultTheme.Config['sidebar'] = await generateSidebar();

async function generateSidebar(): Promise<DefaultTheme.Config['sidebar']> {
  return {
    '/guide/': await getItems("guide", []),
    '/classics/': await getItems("classics", ['山', '医', '命', '相', '卜', '灵宠', '相关经典']),
    '/it-serve/': await getItems("it-serve", []),
    '/sources/': await getItems("sources", ['每日更新', '影视综艺', '知识付费', '教育学习', '素材资源']),
  };
}

async function getItems(path: string, order: string[]): Promise<DefaultTheme.SidebarItem[]> {
  // 1. 处理顶层MD文件（添加order排序）
  const rootFiles = await fg(`content/${path}/*.md`, { objectMode: true });
  const rootItems = (await Promise.all(rootFiles.map(async file => {
    const { data } = matter.read(file.path);
    return { file, data, order: data.order || Infinity };
  })))
  .sort((a, b) => a.order - b.order) // 新增：按order字段排序
  .map(({ file, data }) => ({
    text: data.title,
    link: `/${path}/${file.name.replace('.md', '')}`,
  }));

  // 2. 处理分组文件夹（添加order排序）
  let groups: DefaultTheme.SidebarItem[] = [];
  const directories = await fg(`content/${path}/*`, { onlyDirectories: true, objectMode: true });
  directories.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));

  for (const { name: groupName } of directories) {
    const articles = await fg(`content/${path}/${groupName}/*.md`, { objectMode: true });
    const items = (await Promise.all(articles.map(async article => {
      const { data } = matter.read(article.path);
      return { article, data, order: data.order || Infinity };
    })))
    .sort((a, b) => a.order - b.order) // 新增：按order字段排序
    .map(({ article, data }) => ({
      text: data.title,
      link: `/${path}/${groupName}/${article.name.replace('.md', '')}`,
    }));

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