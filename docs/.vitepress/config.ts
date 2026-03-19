import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vite+ Template',
  description:
    'A professional, open-source Vite+ template with Ant Design Vue, VueUse, and best practices',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'theme-color', content: '#667eea' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Vite+',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/overview' },
      { text: 'API', link: '/api/utils' },
      {
        text: '链接',
        items: [
          { text: 'GitHub', link: 'https://github.com' },
          { text: 'NPM', link: 'https://npm.js.org' },
        ],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '项目结构', link: '/guide/project-structure' },
            { text: '开发工作流', link: '/guide/development-workflow' },
          ],
        },
        {
          text: '特性',
          items: [
            { text: '主题系统', link: '/guide/theming' },
            { text: '响应式设计', link: '/guide/responsive' },
            { text: '工具函数', link: '/guide/utilities' },
            { text: 'Composables', link: '/guide/composables' },
          ],
        },
        {
          text: '最佳实践',
          items: [
            { text: '代码规范', link: '/guide/best-practices' },
            { text: '性能优化', link: '/guide/performance' },
            { text: '部署指南', link: '/guide/deployment' },
          ],
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: '组件概览', link: '/components/overview' },
            { text: 'Common 组件', link: '/components/common' },
            { text: 'Layout 组件', link: '/components/layout' },
            { text: 'UI 组件', link: '/components/ui' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            { text: '工具函数', link: '/api/utils' },
            { text: 'Composables', link: '/api/composables' },
            { text: '服务', link: '/api/services' },
            { text: '常量', link: '/api/constants' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
      { icon: 'npm', link: 'https://npm.js.org' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Vite+ Template',
    },
    editLink: {
      pattern: 'https://github.com/yourusername/vite-plus-template/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    search: {
      provider: 'local',
    },
  },
  markdown: {
    lineNumbers: true,
    theme: 'github-dark',
  },
})
