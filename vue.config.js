const { defineConfig } = require('@vue/cli-service')

// 참조 링크: https://cli.vuejs.org/config/#devserver-proxy
// TODO CORS 테스트 후 필요없을 경우 proxy 설정 제거
module.exports = defineConfig({
  devServer: {
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_URL_SERVICE,
        changeOrigin: true
      }
    }
  },
  transpileDependencies: true,
  configureWebpack: config => {
    // 참조 링크: https://cli.vuejs.org/guide/webpack.html#working-with-webpack
    if (process.env.NODE_ENV !== 'production') {
      // 참조 링크: https://webpack.kr/configuration/devtool/#development
      config.devtool = 'eval-source-map'
    }
    console.log('vue.config.configureWebpack config:', config)
  }
})
