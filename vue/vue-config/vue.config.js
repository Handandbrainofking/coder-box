const path = require('path')

module.exports = {
  lintOnSave: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境配置
    } else {
      // 开发环境配置
      // config.output = {
      //   path: path.resolve(__dirname, 'dist'),
      //   filename: 'js/[name].[hash:8].js',
      //   publicPath: '/',
      //   chunkFilename: 'js/[name].[hash:8].js',
      // }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: {
          require('postcss-pxtorem')({
            rootValue: 75,
            propList: ['*', '!font-size'],
            exclude: /node_modules|folder_name/i
          })
        }
      }
    }
  }
}
