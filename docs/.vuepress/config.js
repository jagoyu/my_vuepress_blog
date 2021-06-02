
const head = require('./config/head.js')
const plugins = require('./config/plugins.js')
const themeConfig = require('./config/themeConfig.js')

module.exports = {
  theme: '@vuepress/theme-blog',
  title: "Jago's blog",
  description: '个人博客，记录web前端的学习过程，专注前端学习总结。JavaScript,vue,ES6,TypeScript,css3,html5,NodeJs,React,Webpack等技术',
  markdown: {
    lineNumbers: true,
  },
  head,
  plugins,
  themeConfig
}