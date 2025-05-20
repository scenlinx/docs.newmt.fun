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
  let groups: DefaultTheme.SidebarItem[] = [];
  const directories = await fg(`content/${path}/*`, { onlyDirectories: true, objectMode: true });

  directories.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));

  for (const { name: groupName } of directories) {
    const items: DefaultTheme.SidebarItem[] = [];
    const articles = await fg(`content/${path}/${groupName}/*`, { onlyFiles: true, objectMode: true });

    for (const article of articles) {
      const { data } = matter.read(article.path);
      items.push({
        text: data.title,
        link: `/${path}/${groupName}/${article.name.replace('.md', '')}`,
      });
    }

    groups.push({
      text: `${groupName.substring(groupName.indexOf('-') + 1)}`,
      items,
      collapsed: items.length < 2,
    });
  }

  return groups;
}