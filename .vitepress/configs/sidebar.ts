import type { DefaultTheme } from 'vitepress';
import fg from 'fast-glob';
import matter from 'gray-matter';

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/moneys/': await getItems("moneys", []),
  '/classics/': await getItems("classics", ['山','医','命','相','卜','灵宠','相关经典']),
  '/it-serve/': await getItems("it-serve", []),
  '/sources/': await getItems("sources", ['每日更新', '影视综艺', '知识付费', '教育学习', '素材资源']),
};

async function getItems(path: string, order: string[]): Promise<DefaultTheme.SidebarItem[]> {
  let groups: DefaultTheme.SidebarItem[] = [];
  let total = 0;
  const groupCollapsedSize = 2;
  const titleCollapsedSize = 20;

  const directories = await fg(`content/${path}/*`, { onlyDirectories: true, objectMode: true });
  
  directories.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));

  for (const { name: groupName } of directories) {
    let items: DefaultTheme.SidebarItem[] = [];
    const articles = await fg(`content/${path}/${groupName}/*`, { onlyFiles: true, objectMode: true });
    
    articles.sort((a, b) => {
      const aFile = matter.read(a.path);
      const bFile = matter.read(b.path);
      const aDate = new Date(aFile.data.date);
      const bDate = new Date(bFile.data.date);
      return bDate.getTime() - aDate.getTime(); // 最近的日期排在最前面
    });

    for (const article of articles) {
      const articleFile = matter.read(article.path);
      const { data } = articleFile;

      items.push({
        text: data.title,
        link: `/${path}/${groupName}/${article.name.replace('.md', '')}`,
      });
      total += 1;
    }

    groups.push({
      text: `${groupName.substring(groupName.indexOf('-') + 1)}`,
      items: items,
      collapsed: items.length < groupCollapsedSize || total > titleCollapsedSize,
    });
  }

  return groups;
}