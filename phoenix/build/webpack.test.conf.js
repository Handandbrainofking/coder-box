var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')

var webpackConfig = merge(baseConfig, {
    module: {
        rules: utils.styleLoaders()
    },
    // 测试环境使用 inline-source-map生成map文件
    devtool: '#inline-source-map',
    resolveLoader: {
        alias: {
            'scss-loader': 'sass-loader'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/test.env')
        })
    ]
})
delete webpackConfig.entry


module.exports = webpackConfig