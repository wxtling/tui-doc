import type { DefaultThemeOptions } from 'vuepress';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'TUI',
  description: '一个开箱即用的 uni-app 框架',
  themeConfig: {
    editLink: false,
    repo: 'https://github.com/wxtling/tui',

    navbar: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '组件',
        link: '/components/',
      },
      {
        text: 'API 参考',
        link: '/api/',
      },
      {
        text: '关于',
        link: '/about/',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: ['/guide/index.md', '/guide/start.md'],
        },
      ],
    },

    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',

    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',

    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',

    // a11y
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏',
  },
});
