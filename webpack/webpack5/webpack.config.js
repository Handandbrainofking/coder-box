const {resolve}  = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin') //压缩css

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            'src': '@'
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ['style-loader','css-loader']
            // },
            // {
            //     test: /\.less$/,
            //     use: ['style-loader','css-loader','less-loader']
            // },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader','css-loader','sass-loader']
            // },
            // {
            //     test: /\.styl$/,
            //     use: ['style-loader','css-loader','stylus-loader']
            // }
            {
                test:/\.css$/,
                use: [
                    miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'
                ]
            },
            {
                test:/\.less$/,
                use: [
                    miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','less-loader'
                ]
            },
            {
                test:/\.scss$/,
                use: [
                    miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    miniCssExtractPlugin.loader,'css-loader', 'postcss-loader','stylus-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 1024 * 10,
                    outputPath: 'imgs',
                    publicPath: './imgs',
                    esModule: false
                }
            },
            {
                test: /\.(htm|html)$/,
                loader: 'html-loader',
                options: {
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack5 demo',
            template: './src/public/index.html',
            hash: true,
            filename: 'index.html',
            favicon: './src/public/favicon.ico'
        }),
        new miniCssExtractPlugin({
            filename: "index.css"
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode: 'development'
}