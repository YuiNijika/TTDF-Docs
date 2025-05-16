import { defineConfig } from "vitepress"
import mdItCustomAttrs from "markdown-it-custom-attrs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Typecho 开发框架",
  description: "TTDF: 直观的 Typecho 主题模板开发框架",
  srcDir: "src",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "主题开发", link: "/develop/quickstart", activeMatch: "/develop.*" },
    ],

    sidebar: {
      'develop': [
        {
          base: "/develop/",
          text: '快速开始',
          link: "quickstart",
          items: [
            {
              text: 'AppHeader.php',
              link: 'template/appheader'
            },
          ]
        },
      ],
    },

    outline: [2, 3],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ShuShuicu/Typecho-Theme-Development-Framework",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: 'Copyright © 2024-present <a href="https://space.bilibili.com/435502585">鼠子(Tomoriゞ)</a>',
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
