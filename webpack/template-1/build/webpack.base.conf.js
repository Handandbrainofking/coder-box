var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        // 路径是config目录下的index.js中的build配置中的assetsRoot，也就是dist目录
        path: config.build.assetsRoot,
        // 文件名称这里使用默认的name
        filename: '[name].js',
        // 上线地址，也就是真正的文件引用路径，如果是production生产环境，其实这里都是 '/'
        publicPath: process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
    },
        // resolve是webpack的内置选项，顾名思义，决定要做的事情，也就是说当使用 import "jquery"，该如何去执行这件事
    // 情就是resolve配置项要做的，import jQuery from "./additional/dist/js/jquery" 这样会很麻烦，可以起个别名简化操作
    resolve: {
        // 省略扩展名，也就是说.js,.vue,.json文件导入可以省略后缀名，这会覆盖默认的配置，所以要省略扩展名在这里一定要写上
        extensions: ['.js','.vue','.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
             // resolve('src') 其实在这里就是项目根目录中的src目录，使用 import somejs from "@/some.js" 就可以导入指定文件，是不是很高大上
            '@': resolve('src')
        }
    },
      // module用来解析不同的模块
    module: {
        rules:[
            {
                test: /\.(js|vue)/,
                // 也就是说，对.js和.vue文件在编译之前进行检测，检查有没有语法错误
                loader: 'eslint-loader',
                // 此选项指定enforce: 'pre'选项可以确保，eslint插件能够在编译之前检测，如果不添加此项，就要把这个配置项放到末尾，确保第一个执行
                enforce: 'pre',
                // include选项指明这些目录下的文件要被eslint-loader检测，还有一个exclude表示排除某些文件夹
                include: [resolve('src'), resolve(test)],
                options: {
                // formatter是参数的名称，eslint-friendly-formatter是eslint的一个报告总结插件，也就是说eslint的检测
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                // 对vue文件使用vue-loader，该loader是vue单文件组件的实现核心，专门用来解析.vue文件的
                loader: 'vue-loader',
                // 将vueLoaderConfig当做参数传递给vue-loader,就可以解析文件中的css相关文件
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'),resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                limit: 10000,// 限制 10000 个字节一下的图片才使用DataURL
                // 不知道吧 name 设置成 /img/[name].[hash:7].[ext] 意欲何为，猜测应该是输出图片的路径或者是解析图片的路径
                name: utils.assetsPublicPath('img/[name].[hash:7].[ext]') // 这个函数执行结果是 /img/[name].[hash:7].[ext]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPublicPath('fonts/[name].[hash].[ext]')
                }
            }
        ]
    }
}