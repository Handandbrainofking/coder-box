require('@/assets/style/index.css');
require('@/assets/style/index.less');
require('@/assets/style/index.scss');
require('@/assets/style/index.styl');

import Bridge from '@/lib/jsBridge'

console.log(Bridge)
console.log('hello,webpack 5!')

// async function request() {
//     let result = await Bridge.sendCloudRequest()
//     console.log(result)
// }
// request()

var obj = {
    $bridge: null,
    sendCloudRequest: Bridge.sendCloudRequest,
    showLoading: ()=> {
        console.error('showLoading from obj')
    },
    hideLoading: ()=> {
        console.error('hideLoading from obj')
    },
}
obj.$bridge = Bridge
console.log(obj)
obj.sendCloudRequest()