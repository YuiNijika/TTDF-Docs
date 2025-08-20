import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Typecho Dev",
  description: "最直观的 Typecho 主题模板开发框架",
  head: [
    [
      'link', { rel: 'icon', href: '/assets/typecho.svg' } // 站点图标
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    // Logo
    logo: '/assets/486.jpg',
    
    // 启用搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '重置搜索',
            footer: {
              selectText: '选择',
              navigateText: '导航',
              closeText: '关闭',
            },
          },
        }
      }
    },
    
    // 顶部栏
    nav: [
      { text: "首页", link: "/" },
      { 
        text: "主题开发", 
        activeMatch: "/develop.*",
        items: [
          { text: "快速开始", link: "/develop/quickstart" },
        ]
      },
    ],

    // 侧边栏
    sidebar: {
      'develop': [
        {
          base: "/develop/",
          text: '快速开始',
          link: "quickstart",
          items: [
            {
              text: '组件',
              link: 'app/components',
            },
            {
              text: '框架配置',
              link: 'app/config'
            },
            {
              text: '主题设置',
              link: 'app/setup'
            },
            {
              text: '文章字段',
              link: 'app/fields'
            }
          ]
        },
        {
          base: "/develop/function/",
          text: '框架功能',
          link: "quickstart",
          items: [
            {
              text: '类与方法',
              items: [
                {
                  text: '面向对象',
                  link: 'oop'
                },
                {
                  text: '面向过程',
                  link: 'opp'
                },
              ]
            },
            {
              text: '集成功能',
              items: [
                {
                  text: 'Ajax',
                  link: 'ajax'
                },
                {
                  text: 'Hook',
                  link: 'hook'
                },
                {
                  text: 'Route',
                  link: 'route'
                },
                {
                  text: 'useSeo',
                  link: 'use-seo'
                },
                {
                  text: 'RestAPI',
                  link: 'rest-api'
                },
                {
                  text: 'Vite&Vue',
                  link: 'vite-vue'
                },
              ]
            },
          ],
        },
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YuiNijika/TTDF' }
    ],

    // 页脚
    footer: {
      copyright: `Copyright © 2024-${new Date().getFullYear()} <a href="https://github.com/YuiNijika">鼠子(YuiNijika)</a> and <a href="https://typecho.org/">Typecho</a>。`,
    },

    // 编辑链接
    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('packages/')) {
          return `https://github.com/YuiNijika/TTDF-Docs/edit/main/${filePath}`
        } else {
          return `https://github.com/YuiNijika/TTDF-Docs/edit/main/docs/${filePath}`
        }
      },
      text: '在 GitHub 上编辑此页面',
    },

    // 翻译
    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 外观
    darkModeSwitchLabel: '外观',

    // 当前页面
    outline: {
      label: '当前页面',
    },

    // 返回顶部
    returnToTopLabel: '返回顶部',

    // menu
    sidebarMenuLabel: '菜单',

    // 搜索

    // 404
    notFound: {
      title: '页面未找到',
      quote: 'HTTP 404 - Page Not Found',
      linkText: '返回首页'
    }

  },
  
  ignoreDeadLinks: [
    '/develop/elements'
  ]
})