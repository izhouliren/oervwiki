import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OERV Wiki",
  description: "openEuler RISC-V 百科,简洁,好用,优雅.",
  //You need to commit the markdown file to see the updated time.
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/getting-started' },
      { text: '文档',
        items:[
          { text: 'Linux', link: '/getting-started/linux' },
          { text: 'macOS', link: '/getting-started/macos' }
        ]
      
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © oervwiki'
    },
    editLink: {
      // 需要请王经纬给一个 oerv github 的仓库地址
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    sidebar: [
      {
        text: '快速开始',
        // docs：https://vitepress.dev/reference/default-theme-sidebar#collapsible-sidebar-groups
        collapsed: false,
        items: [
          {
            text: '在QEMU中安装',
            items: [
              { text: 'Linux', link: '/getting-started/linux' },
              { text: 'macOS', link: '/getting-started/macos' }
            ]
          },
          {
            text: '在物理机中安装',
            items: [
              { text: '开发板1', link: '/api-examples' },
              { text: '开发板2', link: '/api-examples' },
              { text: '开发板3', link: '/api-examples' },
              { text: '开发板4', link: '/api-examples' },
              { text: '开发板5', link: '/api-examples' },
            ]
          },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Examples2',
        // docs：https://vitepress.dev/reference/default-theme-sidebar#collapsible-sidebar-groups
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/openeuler/RISC-V' }
    ]
  }
})
