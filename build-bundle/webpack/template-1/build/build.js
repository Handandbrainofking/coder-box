//npm、node 版本检查
require('./check-version')()

//设置环境变量为production
process.env.NODE_ENV =  'production'
//命令行是命令行loading插件
var ora = require('ora')
//rimraf是用来执行UNIX命令rm和-rf的用来删除文件夹
var rm = require('rimraf')
//node.js的路径模块
var path = require('path')
//chalk插件，用来在命令行中输入不同颜色的文字
var chalk = require('chalk')
//引入webpack,使用内置插件和webpack方法
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

//开启转圈圈动画
var spinner = ora('building for production...')
//开启转圈圈动画
spinner.start()

//调用rm方法，第一个参数的结果就是dist/static,表示删除这个路径下面的所有文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory),err => {
    //如果删除的过程中出现错误，就抛出这个错误，同时程序终止
    if(err) throw err
    //没有错误就执行webpack编译
    webpack(webpackConfig, function(err,stats){
        //这个回调函数是webpack编译过程中执行
        spinner.stop()
        if(err) throw err
        //没有执行错误，process.stdout.write和console.log类似，输出对象
        process.stdout.write(stats.toString({
            colors: true,//增加控制台颜色开关
            modules: false, //不增加内置模块信息
            children: false,//不增加子级信息
            chunks: false,//允许较少的输出
            chunkModules: false//不将内置的信息加到包信息
        }) + '\n\n')

        console.log(chalk.cyan(' Build complete .\n'))
        console.log(chalk.yellow(
            ' Tip: built files are meant to be served over an HTTP server .\n' + 
            ' Opening index.html over file:// won\'t work .\n'
        ))
    })
})