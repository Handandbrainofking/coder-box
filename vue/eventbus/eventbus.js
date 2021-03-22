import Vue from 'vue'
const vm = new Vue()

//注册订阅者
vm.$on('event-name',(payload)=> {/* 执行业务逻辑 */})

//执行注册订阅者，执行一次后自动取消订阅者
vm.$once('some-event-name',(payload)=> {/* 执行业务逻辑 */})

//取消某事件的某个订阅者
vm.$off('event-name',(payload)=>{/* 执行业务逻辑 */})

//通知各个订阅者执行相对应的业务逻辑
vm.emit('event-name', (payload)=> {/* 执行业务逻辑 */})
