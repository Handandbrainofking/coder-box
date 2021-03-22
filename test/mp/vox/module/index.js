export function test() {
    alert('hello, module!')
}
test()

var h = document.createElement('h3')
h.innerText = 'module动态创建'
document.body.appendChild(h)