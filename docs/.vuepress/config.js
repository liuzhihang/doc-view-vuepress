module.exports = {
    port: "3000",
    base: "/",
    markdown: {
        externalLinks: {
            target: "_blank",
            rel: "noopener noreferrer"
        }
    },
    title: "Doc View",
    description: "快速生成文档的 IDEA 插件",
    // logo
    themeConfig: {
        docsRepo: "liuzhihang/doc-view-vuepress",
        editLinks: true,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: [{
                    text: "指南",
                    link: "/guide/"
                },
                    {
                        text: "配置",
                        link: "/config/"
                    },
                    {
                        text: "更新日志",
                        link: "https://github.com/liuzhihang/doc-view/blob/master/doc/ChangeNotes.md"
                    },
                    // {
                    //     text: '语言',
                    //     items: [{
                    //             text: '简体中文',
                    //             link: '/'
                    //         },
                    //         {
                    //             text: 'English',
                    //             link: '/en/'
                    //         }
                    //     ]

                    // },
                    {
                        text: 'Github',
                        link: 'https://github.com/liuzhihang/doc-view'
                    },
                ],
                sidebar: {
                    "/guide/": [
                        {
                            title: "开始使用",
                            collapsable: false,
                            children: ["", "install", "start", "config"]
                        },
                        {
                            title: "文档说明",
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                                "controller",
                                "dubbo"
                            ]
                        },
                        {
                            title: "FAQ",
                            collapsable: false,
                            sidebarDepth: 2,
                            children: ["faq", "feedback"]
                        }
                    ],
                    "/config/": []
                }
            },
            "/en/": {
                label: "English",
                selectText: "Languages",
                editLinkText: "Edit this page on GitHub",
                lastUpdated: "Last Updated",
                nav: [{
                    text: "Guide",
                    link: "/en/guide/"
                },
                    {
                        text: "Config",
                        link: "/en/config/"
                    },
                    {
                        text: 'Other plugins',
                        items: [{
                            text: 'Toolkit',
                            link: 'https://github.com/liuzhihang/toolkit'
                        },
                            {
                                text: 'copy-as-json',
                                link: 'https://github.com/liuzhihang/copy-as-json'
                            }
                        ]
                    },
                    {
                        text: "Changelog",
                        link: "https://github.com/liuzhihang/doc-view/blob/master/doc/ChangeNotes.md"
                    },
                    // {
                    //     text: 'Language',
                    //     items: [{
                    //             text: '简体中文',
                    //             link: '/'
                    //         },
                    //         {
                    //             text: 'English',
                    //             link: '/en'
                    //         }
                    //     ]

                    // },
                    {
                        text: 'Github',
                        link: 'https://github.com/liuzhihang/doc-view'
                    },

                ],

            }
        },

    },

};