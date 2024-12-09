import fs from 'fs';
import path from 'path';

// 读取 Markdown 文件中的标题或文件名
const getTitleFromMarkdown = (filePath: string): string => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const titleMatch = content.match(/title:\s*(.+)/);  // 从文件中提取 title
  return titleMatch ? titleMatch[1].trim() : path.basename(filePath, '.md'); // 如果没有 title，则使用文件名
};

// 递归获取所有 Markdown 文件，支持自定义排序
const getMarkdownFiles = (dir: string, basePath: string = '', order: string[] = []): any[] => {
  let results: any[] = [];

  const listFiles = (currentDir: string) => {
    const files = fs.readdirSync(currentDir);
    const directories = files.filter(file => fs.statSync(path.join(currentDir, file)).isDirectory());

    // 对文件夹进行排序
    const sortedDirectories = order.length ?
      directories.sort((a, b) => order.indexOf(a) - order.indexOf(b)) :  // 按照传入的顺序排序
      directories.sort();  // 默认按字母排序

    // 递归遍历子目录
    sortedDirectories.forEach((dir) => {
      const dirPath = path.join(currentDir, dir);
      const subItems = getMarkdownFiles(dirPath, path.join(basePath, dir), order);  // 递归获取子文件夹中的 Markdown 文件
      if (subItems.length > 0) {
        results.push({
          text: dir,
          items: subItems,
          collapsed: true // 默认文件夹折叠
        });
      }
    });

    // 处理 Markdown 文件
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    for (const file of markdownFiles) {
      const filePath = path.join(currentDir, file);
      results.push({
        text: getTitleFromMarkdown(filePath),
        link: `/${path.relative('docs', filePath).replace(/\\/g, '/')}`  // 生成 Markdown 文件的链接
      });
    }
  };

  listFiles(dir);
  return results;
};

// 侧边栏配置，给每个目录指定不同的排序数组
export const sidebarConfig = {
  '/moneys/': getMarkdownFiles(path.join(__dirname, '../moneys'), '', ['index', '副业赚钱', '流量卡', '网盘资源', '新媒体相关']),
  '/it-serve/': getMarkdownFiles(path.join(__dirname, '../it-serve'), '', ['index', '前端技术', '后端技术', '架构优化', '工具集']),
  '/classics/': getMarkdownFiles(path.join(__dirname, '../classics'), '', ['山', '医', '命', '相', '卜', '灵宠', '相关经典']),
};

// 导出 sidebar
export const sidebar = sidebarConfig;
