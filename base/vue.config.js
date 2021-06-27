const port = 8000; // dev port

module.exports = {
  devServer: {
    hot: true,
    port,
  },
  // 自定义webpack配置
  configureWebpack: {
  },
};
