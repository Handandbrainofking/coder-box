var webpackConfig = require('../../build/webpack.test.conf');

module.exports = function (config) {
	config.set({
		// to run in additional browsers:
		// 1. install corresponding karma launcher
		//    http://karma-runner.github.io/0.13/config/browsers.html
		// 2. add it to the `browsers` array below.
		// 这里使用的是PhantomJS作为浏览器测试环境，这个插件支持DOM, CSS, JSON, Canvas, and SVG.的解析
		browsers: ['PhantomJS'],//browsers: ['Chrome','Firefox']
		// 下面的测试框架是用来测试js
		frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
		// 下面的是用来出报告的
		reporters: ['spec', 'coverage'],
		// 下面指的是index.js文件在browsers里面运行
		// 关于index.js其实就是把需要测试的文件都require进来，然后一股脑的在上面的browsers里面跑，使用frameworks测试js,通过reporters输出报告
		files: ['./index.js'],
		// 下面是为文件制定预处理器，也就是说测试index.js之前用webpack和sourcemap处理一下
		preprocessors: {
			'./index.js': ['webpack', 'sourcemap'],
		},
		webpack: webpackConfig, //下面给webpack指定相关的配置文件
		webpackMiddleware: {
			noInfo: true,
		},
		// 下面是覆盖报告
		// coverage是代码测试覆盖率的一个reporter，也就是说告诉你项目的代码有多少测试了
		// 下面是vue-cli对这个的一个配置
		coverageReporter: {
			dir: './coverage',
			reporters: [
				{
					type: 'lcov',
					subdir: '.',
				},
				{
					type: 'text-summary',
				},
			],
		},
	});
};
