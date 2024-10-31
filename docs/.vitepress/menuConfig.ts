import fs from 'fs';
import path from 'path';

// 读取 Markdown 文件中的标题或文件名
const getTitleFromMarkdown = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const titleMatch = content.match(/title:\s*(.+)/);
  return titleMatch ? titleMatch[1].trim() : path.basename(filePath, '.md'); 
};

// 递归获取所有 Markdown 文件
const getMarkdownFiles = (dir, basePath = '', order = []) => {
  let results = [];

  const listFiles = (currentDir) => {
    const files = fs.readdirSync(currentDir);
    const directories = files.filter(file => fs.statSync(path.join(currentDir, file)).isDirectory());

    // 对文件夹进行排序
    const sortedDirectories = order.length ? 
      directories.sort((a, b) => order.indexOf(a) - order.indexOf(b)) :
      directories.sort(); // 默认按字母排序

    sortedDirectories.forEach((dir, index) => {
      const dirPath = path.join(currentDir, dir);
      const subItems = getMarkdownFiles(dirPath, path.join(basePath, dir));
      if (subItems.length > 0) {
        results.push({
          text: dir,
          items: subItems,
          collapsed: index !== 0 // 默认展开第一个文件夹
        });
      }
    });

    // 对 Markdown 文件进行处理
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    for (const file of markdownFiles) {
      const filePath = path.join(currentDir, file);
      results.push({
        text: getTitleFromMarkdown(filePath),
        link: `/${path.relative('docs', filePath).replace(/\\/g, '/')}`
      });
    }
  };

  listFiles(dir);
  return results;
};

// 导航配置
export const nav = [
  {
    text: '首页',
    link: '/',
    activeMatch: '^/'
  },
  {
    text: '副业学习',
    link: '/moneys/',
    activeMatch: '^/moneys/'
  },
  {
    text: '码农专区',
    link: '/it-serve/',
    activeMatch: '^/it-serve/'
  },
  {
    text: '玄学中医',
    link: '/classics/',
    activeMatch: '^/classics/'
  },
  { text: '网盘资源', link: 'https://pan.newmt.fun/' }
];

// 侧边栏配置，给每个目录指定不同的排序数组
export const sidebarConfig = {
  '/moneys/': getMarkdownFiles(path.join(__dirname, '../moneys'), '', ['', '']),
  '/it-serve/': getMarkdownFiles(path.join(__dirname, '../it-serve'), '', ['index', '', '', '', '']),
  '/classics/': getMarkdownFiles(path.join(__dirname, '../classics'), '', ['山', '医', '命', '相', '卜', '灵宠', '相关经典']),
};

// 导出 sidebar
export const sidebar = sidebarConfig;
