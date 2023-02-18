const { defineConfig } = require('@vue/cli-service')
// 참조 링크: https://cli.vuejs.org/guide/webpack.html#working-with-webpack
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      config.devtool = 'source-map'
    }
    console.log('vue.config.configureWebpack config:', config)
  }
})
