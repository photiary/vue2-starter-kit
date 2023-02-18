const { defineConfig } = require('@vue/cli-service')
// 참조 링크: https://cli.vuejs.org/guide/webpack.html#working-with-webpack
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      // 참조 링크: https://webpack.kr/configuration/devtool/#development
      config.devtool = 'eval-source-map'
    }
    console.log('vue.config.configureWebpack config:', config)
  }
})
