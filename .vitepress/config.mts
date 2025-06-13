import { defineConfig } from "vitepress"
import mdItCustomAttrs from "markdown-it-custom-attrs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  lang: "zh-CN",
  title: "Typecho 开发框架",
  description: "最直观的 Typecho 主题模板开发框架",
  head: [['link', { rel: 'icon', href: '/assets/Typecho.svg' }]],
  srcDir: "src",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { 
        text: "主题开发", 
        activeMatch: "/develop.*",
        items: [
          { text: "快速开始", link: "/develop/quickstart" },
          { text: "组件模板", link: "/develop/template/quickstart" },
          { text: "页面布局", link: "/develop/layouts/quickstart" },
        ]
      },
    ],

    sidebar: {
      'develop': [
        {
          base: "/develop/",
          text: '快速开始',
          link: "quickstart",
          items: [
            {
              text: '文件结构',
              link: 'structure'
            },
            {
              text: '框架配置',
              link: 'core/config'
            },
            {
              text: '主题设置',
              link: 'core/setup'
            },
            {
              text: '文章字段',
              link: 'core/fields'
            },
          ]
        },
        {
          base: "/develop/function/",
          text: '框架功能',
          link: "quickstart",
          items: [
            {
              text: '方法函数',
              items: [
                {
                  text: 'Get',
                  link: 'get'
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
              ]
            },
          ],
        },
        {
          base: "/develop/template/",
          text: '组件模板',
          link: "quickstart",
          items: [
            {
              text: 'AppHeader.php',
              link: 'appheader'
            },
            {
              text: 'AppFooter.php',
              link: 'appfooter'
            },
          ]
        },
        {
          base: "/develop/layouts/",
          text: '页面布局',
          link: "quickstart",
          items: [
            {
              text: 'index.php',
              link: 'home'
            },
            {
              text: 'post.php',
              link: 'post'
            },
            {
              text: 'page.php',
              link: 'page'
            },
            {
              text: 'search.php',
              link: 'search'
            },
            {
              text: 'archive.php',
              link: 'archive'
            },
            {
              text: '404.php',
              link: 'error'
            },
          ]
        },
      ],
    },

    outline: [2, 3],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ShuShuicu/TTDF",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: 'Copyright © 2024-present <a href="https://space.bilibili.com/435502585">鼠子(Tomoriゞ)</a><br /><a href="https://beian.miit.gov.cn/">鲁ICP备2023052135号</a>',
    }
  },
  markdown: {
    config (md) {
      md.use(mdItCustomAttrs, "image", {
        "data-zoomable": "",
      })
    },
  },
})
