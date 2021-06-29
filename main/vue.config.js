const port = 8000; // dev port

module.exports = {
  transpileDependencies: ['common'],
  chainWebpack: config => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = 'qiankun-demo'
        return args
      })
  },
  devServer: {
    hot: true,
    port,
  },
  // 自定义webpack配置
  configureWebpack: {
  },
};
