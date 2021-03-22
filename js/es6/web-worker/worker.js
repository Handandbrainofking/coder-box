var a = 0
var st =  +new Date()
while(a < 10 ** 9) {
    a = a + 1
}
debugger
console.log(a)
var et =  +new Date()
console.log(et - st)

self.addEventListener('message',function(e) {
    self.postMessage('You said' + e.data)
},false)

console.log(b)