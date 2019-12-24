module.exports = {
  // 部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? '/bid' : '/',
  // publicPath: '/',
  devServer: {
    proxy: {
      '/bid/api': {
        target: 'http://10.244.186.86:8081/api',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/bid/api': ''
        }
      }
    }
  }
}