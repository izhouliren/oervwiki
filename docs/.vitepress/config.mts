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
      { text: 'openEuler 22.03 LTS', link: '/getting-started' },
      { text: '文档', link: '/' },
      { text: 'Wiki', link: '/wiki/' },
      { text: '关于', link: '/about' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © oervwiki'
    },
    editLink: {
      pattern: 'https://github.com/izhouliren/oervwiki/tree/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    // sidebar: [
    //   {
    //     text: '快速开始',
    //     // docs：https://vitepress.dev/reference/default-theme-sidebar#collapsible-sidebar-groups
    //     collapsed: true,
    //     items: [
    //       { text: '在QEMU中安装',link: '/qemu_install' },
    //       { text: '在物理机中安装',
    //         collapsed:true,
    //         items: [
    //           {text:'LicheePi 4A',link:'/licheepi_4a'},
    //           {text:'VisionFive 2',link:'/visionfive_2'},
    //           {text:'Milk-V Pioneer Box',link:'/milk-v_pioneer_box'},
    //         ]
    //       },
    //     ]
    //   },
    //   {
    //     text: '参与贡献',
    //     // docs：https://vitepress.dev/reference/default-theme-sidebar#collapsible-sidebar-groups
    //     collapsed: true,
    //     items: [
    //       { text: '', link: '/markdown-examples' },
    //     //  { text: 'Runtime API Examples', link: '/api-examples' },
    //     //  { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/openeuler/RISC-V' }
    ]
  }
})