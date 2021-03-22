var worker = new Worker('worker.js');

worker.postMessage({ method: 'echo', args: ['work'] });

worker.onmessage = function (event) {
	console.log('received message from worker' + event.data);
	doSomething();
};

function doSomething() {
	// worker.postMessage('work done')
	console.log('hello');
}

setTimeout(() => {
    worker.postMessage('worker即将关闭')
}, 6000);

worker.onerror = function (e) {
    var errMsg = `ERROR:Line: ${e.lineno},in ${e.filename} : ${e.message}`
    console.warn(errMsg)
 }

//  setTimeout(() => {
//      worker.terminate()
//  }, 7000);