import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OERV WIKI",
  description: "openEuler RISC-V 百科,简洁,好用,优雅.",
  //You need to commit the markdown file to see the updated time.
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
    //  { text: 'Wiki', link: '/wiki/' },
      { text: '关于', link: '/about' },
    ],
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © oervwiki'
    // },
    editLink: {
      pattern: 'https://github.com/izhouliren/oervwiki/tree/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    sidebar: [
      {
        text: '系统安装',
        // docs：https://vitepress.dev/reference/default-theme-sidebar#collapsible-sidebar-groups
        collapsed: false,
        items: [
          { text: '在QEMU中安装',
            items:[
              {text:'Linux',link:'qemu_install/linux'},
              {text:'macOS',link:'qemu_install/macos'},
            ]
          },
          { text: '在物理机中安装',
            collapsed:false,
            items: [
              {text:'LicheePi 4A',link:'devices/licheepi_4a'},
              {text:'Lichee RV',link:'devices/lichee_rv'},
              {text:'Milk-V Pioneer Box',link:'devices/milk-v_pioneer_box'},
              {text:'Milk-V Mars',link:'devices/milk-v_mars'},
              {text:'全志 D1-H 哪吒',link:'devices/d1-h_nezha'},
              {text:'VisionFive 2',link:'devices/visionfive_2'},
            ]
          },
        ]
      },
      { text: '应用安装',
            collapsed:false,
            items: [
              {text:'桌面环境',
               collapsed:false,
               items:[
                {text:'GNOME',link:'app_install/gnome'},
                {text:'Xfce',link:'app_install/xfce'},
                {text:'MATE',link:'app_install/mate'},
                {text:'DDE',link:'app_install/dde'},
                {text:'UKUI',link:'app_install/ukui'},
               ]
              },
              {text:'服务器',link:'/licheepi_4a'},
              {text:'云计算',link:'/visionfive_2'},
              {text:'机器人',
               collapsed:false,
               items:[
                  {text:'ROS2',
                  collapsed:false,
                  items:[
                    {text:'快速入门',link:'robot/quick_start'},
                    {text:'如何安装',link:'robot/how_to_install'},
                    {text:'常用命令',link:'robot/common_command'},
                    {text:'编译环境安装与 service 通信',link:'robot/compiler_and_service'},
                    {text:'最佳实践',
                     collapsed:false,
                     items:[
                      {text:'多机通信实例',link:'robot/bestofpractice/01.md'},
                      {text:'VNC 配置与使用',link:'robot/bestofpractice/02.md'},
                      {text:'用户创建和登入配置',link:'robot/bestofpractice/03.md'},
                      {text:'提交 issue',link:'robot/bestofpractice/04.md'},
                      {text:'资源总汇',link:'robot/bestofpractice/05.md'},
                     ]
                    },
                  ]
                  },
                ]
              },
              {text:'边缘计算',link:'/milk-v_pioneer_box'},
              {text:'安全设置',link:'/d1_nezha'},
              {text:'闭源驱动',link:'/d1_nezha'},
            ]
      },
      { text: '参与贡献',
            collapsed:false,
            items: [
              {text:'LicheePi 4A',link:'/licheepi_4a'},
              {text:'VisionFive 2',link:'/visionfive_2'},
              {text:'Milk-V Pioneer Box',link:'/milk-v_pioneer_box'},
              {text:'全志D1哪吒',link:'/d1_nezha'},
            ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/openeuler/RISC-V' }
    ]
  }
})