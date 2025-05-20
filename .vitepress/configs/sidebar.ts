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

    const articleFiles = await Promise.all(articles.map(async (article) => {
      const articleFile = matter.read(article.path);
      return { article, data: articleFile.data };
    }));

    articleFiles.sort((a, b) => {
      const aDate = new Date(a.data.date);
      const bDate = new Date(b.data.date);
      return bDate.getTime() - aDate.getTime(); // 排序：最近的文章排在最前
    });

    articleFiles.forEach(({ article, data }) => {
      items.push({
        text: data.title,
        link: `/${path}/${groupName}/${article.name.replace('.md', '')}`,
      });
    });

    groups.push({
      text: `${groupName.substring(groupName.indexOf('-') + 1)}`,
      items,
      collapsed: items.length < 2,
    });
  }

  return groups;
}
