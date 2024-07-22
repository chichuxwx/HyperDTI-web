const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://122.51.8.11:5557/#/',
        changeOrigin: true,
      },
      '/download': {
        target: 'http://122.51.8.11:5557/#/',
        changeOrigin: true,
      },
    },
  },
};

