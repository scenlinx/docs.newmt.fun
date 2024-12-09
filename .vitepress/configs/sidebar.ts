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

  // 获取所有目录并排序
  const directories = await fg(`content/${path}/*`, { onlyDirectories: true, objectMode: true });
  directories.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));

  // 并行处理目录中的所有文章
  for (const { name: groupName } of directories) {
    const items: DefaultTheme.SidebarItem[] = [];
    const articles = await fg(`content/${path}/${groupName}/*`, { onlyFiles: true, objectMode: true });

    // 并行读取文件的元数据，优化性能
    const articleFiles = await Promise.all(articles.map(async (article) => {
      try {
        const articleFile = matter.read(article.path);
        return { article, data: articleFile.data };
      } catch (error) {
        console.error(`Error reading file ${article.path}: ${error.message}`);
        return null;  // 处理错误，跳过这个文件
      }
    }));

    // 过滤掉错误的文件
    const validArticles = articleFiles.filter((file) => file !== null);

    // 按日期排序
    validArticles.sort((a, b) => {
      const aDate = new Date(a.data.date);
      const bDate = new Date(b.data.date);
      return bDate.getTime() - aDate.getTime(); // 最近的日期排在最前面
    });

    // 生成侧边栏项
    validArticles.forEach(({ article, data }) => {
      items.push({
        text: data.title,
        link: `/${path}/${groupName}/${article.name.replace('.md', '')}`,
      });
      total += 1;
    });

    groups.push({
      text: `${groupName.substring(groupName.indexOf('-') + 1)}`,
      items,
      collapsed: items.length < groupCollapsedSize || total > titleCollapsedSize,
    });
  }

  return groups;
}
