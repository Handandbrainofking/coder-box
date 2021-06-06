var path = require('path');

module.exports = {
	build: {
		index: path.resolve(__dirname, 'dist/index.html'), //必须是本地文件系统上的绝对路径
		assetsRoot: path.resolve(__dirname, 'dist'), //必须是本地文件系统上的绝对路径,应该指向包含应用程序的所有静态资产的根目录。
		// 被webpack编译处理过的资源文件都会在这个build.assetsRoot目录下，所以它不可以混有其它可能在build.assetsRoot里面有的文件。
		// 例如，假如build.assetsRoot参数是/path/to/dist，build.assetsSubDirectory 参数是 static, 那么所以webpack资源会被编译到path/to/dist/static目录
		// 每次编译前，这个目录会被清空，所以这个只能存放编译出来的资源文件。
		// static/目录的文件会在构建过程中，直接拷贝到这个目录。这意味着是如果改变这个规则，所有依赖于static/中文件的绝对地址，都需要改变。
		assetsSubDirectory: 'static',
		// build.assetsPublicPath【资源的根目录】
		// 这个是通过http服务器运行的url路径。在大多数情况下，这个是根目录(/)。如果后台框架对静态资源url前缀要求，仅需要改变这个参数。在内部，这个是被webpack当做output.publicPath来处理的。
        assetsPublicPath: '/',
        // 在构建生产环境版本时是否开启source map
		productionSourceMap: true,
	},
	dev: {
		port: 8080, //开发服务器监听的特定端口
		proxyTable: {}, //定义开发服务器的代理规则。
	},
};

// module.exports = {
//     dev: {
//         env: {
//             NODE_ENV: 'release',
//             PORT: '8080'
//         },

//         // 接口地址原本是 /save/index，但是为了匹配代理地址，在前面加一个 /api, 因此接口地址需要写成:/api/save/index，这样即可生效 。
//         // 注意： ‘/api’ 为匹配项，target 为被请求的地址，因为在 ajax 的 url 中加了前缀 ‘/api’，而原本的接口是没有这个前缀的，所以需要通过 pathRewrite 来重写地址，将前缀 ‘/api’ 转为 ‘/’。如果本身的接口地址就有 ‘/api’ 这种通用前缀，就可以把 pathRewrite 删掉。
//         proxyTable: {
//             '/api': {
//                 target: 'http://xxx.com',//接口的域名
//                 //secure: false, //如果是https接口，需要配置这个参数
//                 changeOrigin: true,  //如果接口跨域，需要进行这个参数配置
//                 pathRewrite: {
//                     '^/api': ''
//                 }
//             }
//         },

//         autoOpenBrowser: true
//     }
// }
