module.exports = {
  // 配置 webpack-dev-server 行为。
  devServer: {
    host: 'localhost',
    port: 8448,
    https: true,
    hotOnly: false,
    open: true,
    proxy: {
      '/api': {
        target: 'http://10.10.10.214:18080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
      '/websocket': {
        target: 'ws://localhost:3088/',
        ws: true
      }
    }
  }
}
