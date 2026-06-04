const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/index.php': {
        target: 'https://smart-shop.itheima.net',
        changeOrigin: true
      }
    }
  }
})
