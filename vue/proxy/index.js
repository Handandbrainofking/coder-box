module.exports = {
    dev: {
        assetsSubDirectory: 'static',//静态资源文件夹
        assetsPublicPath: '/',//发布路径
        //代理配置表，在这里可以配置特定的请求代理到对应的API接口
        //例如将‘localhost:8080/api/xxx’代理到‘www.example.com/api/xxx’,
        //使用方法： https://vuejs-templates.github.io/webpack/proxy.html
        proxyTable: {
            '/api': {
                target: 'http://xxx.com',//接口的域名
                secure:false,//如果是https接口，需要配置这个参数
                changeOrigin: true,//如果接口跨域，需要配置这个参数
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}