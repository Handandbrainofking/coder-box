//当前环境node和npm版本是否符合要求
require('./check-versions')()

var config = require('../config')
if(!process.env.NODE_ENV) {
    process.env.NODE_ENV = config.dev.env.NODE_ENV
    console.log(`env: ${process.env.NODE_ENV}`)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
//引入webpack,用来使用webpack内置插件
var webpack=  require('webpack')
//引入http-proxy-middleware插件，此插件是用来代理请求的只能用于开发环境，用于解决跨域请求后台API
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing' ? require('./webpack.prod.conf') : require('./webpack.dev.conf')
var port = process.env.PORT || config.dev.port
var autoOpenBrowser = !!config.dev.autoOpenBrowser

var proxyTable = config.dev.proxyTable

// 创建express 实例
var app = express()

//配置参数传递到webpack方法中，返回一个编译对象
var compiler = webpack(webpackConfig)
//黄金组合：
//webpack-dev-middleware和webpack-hot-middleware

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler,{
    log:()=> {}
})

compiler.plugin('compilation',function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data,cb){
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

//proxy api requests 
Object.keys(proxyTable).forEach(function(context){
    var options = proxyTable[context]
    if(typeof options === 'string') {
        options = {
            target: options
        }
    }
    app.use(proxyMiddleware(options.filter || context,options))
})

//handle fallback for HTML5 history API
//解决单页面应用，点击刷新按钮和通过其他search值定位页面的404错误

app.use(require('connect-history-api-fallback')())

//serve webpack bundle output
// app.use 是在响应请求执行之前执行，用来指定静态路径，挂载静态资源
app.use(devMiddleware)

//enable hot-reload and state-preserving
app.use(hotMiddleware)

var staticPath = path.posix.join(config.dev.assetsPublicPath,config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))
//http://localhost:8080
var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})

console.log('> Starting dev server...')
//编译成功后调用
devMiddleware.waitUntilValid(()=> {
    console.log('> Listening at ' + uri + '\n')

    if(autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
    _resolve()
})
//node.js监听端口
var server = app.listen(port)

module.exports = {
    ready: readyPromise,
    close:()=> {
        server.close() //关闭服务器
    }
}