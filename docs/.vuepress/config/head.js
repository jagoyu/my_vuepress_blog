
module.exports = [
  ['link',{ rel: 'icon', href: '/img/favicon.ico'}],
  ['meta',{
    name: 'keywords',
    content: '个人博客，前端博客，前端开发，前端学习，前端框架，技术文档，学习，JavaScript,ES6,vue,react,css3,html5,Node,markdown'
  }],
  ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  [
    'script',
    {
      'data-ad-client': 'ca-pub-7828333725993554',
      async: 'async',
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    },  // 网站关联Google AdSense 与 html格式广告支持
  ],
]