//1、收集需要用到的生命周期
//2、定义setData函数，提供给用户层更新UI
//3、定义监听函数，处理生命周期函数执行
//4、通知UI进程开启渲染

//构造worker
const voxWorker = (options) => {
	const { config } = options;
	//vue生命周期收集
	const lifeCircleMap = {
		'lifeCircle:create': [config.create],
	};
	//定义setData方法, 用于通知UI层渲染更新
	self.setData = (data) => {
		console.log('setData called');
		self.postMessage(
			JSON.stringify({
				type: 'update',
				data,
			}),
			null
		);
	};
	//worker渲染完成，通知渲染层初始化
	self.postMessage(
		JSON.stringify({
			type: 'init',
			data: config.data,
		}),
		null
	);
	//执行生命周期函数
	self.onmessage = (e) => {
		const { type } = JSON.parse(e.data);
		lifeCircleMap[type].forEach((lifeCircle) => lifeCircle.call(self));
	};
};

export default voxWorker;

//通知UI进程开始渲染的时候，UI进程也就是需要构造Vue实例，进行页面的render
Worker.onmessage = (e) => {
	const { type, data } = JSON.parse(e.data);
	if (type === 'init') {
		const mountNode = document.createElement('div');
		document.body.appendChild(mountNode);
		target = new Vue({
			el: mountNode,
			data: () => data,
			template: template(),
			created() {
				Worker.postMessage(
					JSON.stringify({
						type: 'lifeCircle:create',
					}),
					null
				);
			},
		});
	}
};
