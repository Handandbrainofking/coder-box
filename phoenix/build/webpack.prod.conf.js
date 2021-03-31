var path = require('path');
var config = require('../config');
var utils = require('../utils');
var webpack = require('webpack');
var merge = require('webpack-merge');

var baseWebpackConfig = require('./webpack.base.conf');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var env = config.build.env;

var webpackConfig = merge(baseWebpackConfig, {
	module: {
		// 配置样式文件的处理规则，使用styleLoaders
		loaders: utils.styleLoaders({
			sourceMap: config.build.productionSourceMap,
			extract: true,
		}),
	},
	devtool: config.build.productionSourceMap ? '#source-map' : false,
	output: {
		path: config.build.assetsRoot,
		filename: utils.assetsPath('js/[name].[chunkhash].js'), // 编译输出文件名格式
		chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
	},
	vue: {
		// vue里的css也要单独提取出来
		loaders: utils.cssLoaders({
			// css加载器，调用了utils文件中的cssLoaders方法,用来返回针对各类型的样式文件的处理方式,
			sourceMap: config.build.productionSourceMap,
			extract: true,
		}),
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': env,
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
		}),
		new webpack.optimize.OcurenceOrderPlugin(),
		new ExtractTextPlugin(utils.assets('css/[name].[contenthash].css')),
		new HtmlWebpackPlugin({
			filename: config.build.index,
			template: 'index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
			},
			chunksSortMode: 'dependency',
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module, count) {
				return (
					module.resource &&
					/\.js$/.test(module.resource) &&
					module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
				);
			},
		}),
		new webpack.optimize.CommonChunkPlugin({
			name: 'manifest',
			chunks: [vendor],
		}),
	],
});

if(config.build.productionGzip) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}


module.exports = webpackConfig