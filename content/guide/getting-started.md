---
title: 快速开始
order: 2  # 新增的排序字段
description: 快速了解如何安装和开始使用插件。本指南提供 pnpm、npm 和 yarn 安装命令，并概述了主题导入、首页定制、内容组件如公告栏、视频、评论等核心功能模块的入口。
---

# 快速开始

## 主要功能模块导航

以下是 `./types/index.js` 插件的核心功能模块入口，点击即可查看详细配置和用法

<BoxCube
  :items="[
    { icon: { icon: 'heroicons:puzzle-piece', color: '#ff9800' }, name: '导入主题', link: 'theme' },
    { icon: { icon: 'heroicons:megaphone', color: '#e74c3c' }, name: '首页公告栏', link: 'notice' },
    { icon: { icon: 'heroicons:paint-brush', color: '#3498db' }, name: '首页下划线', link: 'underline' },
    { icon: { icon: 'heroicons-outline:template', color: '#2ecc71' }, name: '页脚配置', link: 'footer' },
    { icon: { icon: 'heroicons:rectangle-group', color: '#1abc9c' }, name: '链接卡片', link: 'linkcard' },
    { icon: { icon: 'heroicons:photo', color: '#2ecc71' }, name: '图片描述', link: 'image-description' },
    { icon: { icon: 'heroicons-outline:chat', color: '#3498db' }, name: '集成评论', link: 'comment' },
    { icon: { icon: 'heroicons:chart-bar-square', color: '#007bff' }, name: '站点统计', link: 'analytics' }
  ]"
/>
