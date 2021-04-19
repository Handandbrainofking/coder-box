//vue3.0 vue.config.js

module.exports ={
    publicPath: 'movie/dist',
    outputDir: 'dist',
    assetsDir: '',
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page'
        },
        subpage: 'src/main.js'
    },
    lintOnSave: true,
    runtimeCompiler: false,
    transpileDependencies: [/* string or regex */],
    productionSourceMap: true,
    chainWebpack:() => {},
    configureWebpack: () => {},
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {},
        modules: false
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8880',
                changeOrigin: true,
                secure: false,
                // ws: true,
                pathRewrite: {
                    '^/api': '/static/mock'
                }
            }
        },
        before: app => {},
        pluginOptions: {}
    }
}