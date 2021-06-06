
//utils配置文件使用解决css相关的loader
var utils = require('./utils')
//生产和开发环境的相关属性
var config = require('../config')
//判断是否生产环境
var isProduction = process.env.NODE_ENV === 'production'
module.exports = {
   loaders: utils.cssLoaders({
       // 这一句话表示如何生成map文
       sourceMap: isProduction
       ? config.build.productionSourceMap
       : config.env.cssSourceMap,
       extract: isProduction // 这一项是自定义配置项，设置为true表示生成单独样式文件
   }) 
}
