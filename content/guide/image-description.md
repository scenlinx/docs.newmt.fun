---
title: 图片描述
order: 7  # 新增的排序字段
head:
  - - meta
    - name: description
      content: 了解如何在 VitePress 中为图片添加描述或figcaption。本指南将引导你安装和配置 @mdit/plugin-figure 插件，并应用 @scenlinx 的样式，以支持图片标题和在明暗模式下显示不同的图片。
  - - meta
    - name: keywords
      content: VitePress 图片描述 Markdown 图片标题 figcaption @mdit/plugin-figure @scenlinx 图片样式 CSS light/dark模式 明暗模式 图片配置 VitePress插件 图片注解
---

![效果图|100x0](/logo/Logo.webp '效果图')

## 导入添加样式

```md
<<< @/../.vitepress/theme/styles/picture.css
```

<<< @/../.vitepress/theme/styles/picture.css

## 使用

```md
![效果图](/logo/Logo.webp)

![浅色模式1{.light-only}](/logo/github.svg)

![深色模式1{.dark-only}](/logo/github-dark.svg)

![深色模式2](/logo/github-dark.svg#dark)

![浅色模式2](/logo/github.svg#light)
```

![效果图](/logo/Logo.webp)

![浅色模式1{.light-only}](/logo/github.svg)

![深色模式1{.dark-only}](/logo/github-dark.svg)

![深色模式2](/logo/github-dark.svg#dark)

![浅色模式2](/logo/github.svg#light)
