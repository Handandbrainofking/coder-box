
var origin = {}
Object.defineProperty(origin, 'username', {
    get() {
        return 'mbj'
    },
    set() {},
    configurable: true,
    enumerable: true
})

var obj = Object.create(origin)

Object.defineProperty(obj, 'username', {
    get:function() {
        return 'wmy'
    },
    set: function() {}
})

console.log('obj',obj)

for (var attr in obj) {
    console.log('attr', attr)
    console.log(
        `obj.${attr}属性描述符`,
        Object.getOwnPropertyDescriptor(obj,attr)
    )
    console.log(
        `obj.__proto__.${attr}属性描述符`,
        Object.getOwnPropertyDescriptor(obj.__proto__, attr)
    )
}

window.__real = window.XMLHttpRequest
window.XMLHttpRequest = function() {
    this._xhr = new window.__real()
    for(var attr in this._xhr) {
        var type = '';
        try {
            type= typeof this._xhr[attr]
        } catch(e) {
            //error
        }
        if(type === 'function') {
            this[attr] = hookfun(attr)
        } else {
            Object.defineProperty(this, attr, {
                get: genGetter(attr),
                set: genSetter(attr)
            })
        }
    }
}

window.XMLHttpRequest.prototype = window.__real.prototype