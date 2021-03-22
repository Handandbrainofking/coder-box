const Observe = function (data) {
	for (let key in data) {
		defineRective(data, key);
	}
};

const defineReactive = function(obj, key) {
    //局部变量，用于get set内部调用
    const dep = new Dep()
    let val = obj[key]
    Object.defineProperty(obj,key, {
        //设置当前描述属性为可被循环
        enumerable: true,
        //设置当前描述属性可被修改
        configurable: true,
        get() {
            console.log('in get')
            //调用依赖收集器中的addSub,用于收集当前属性与watcher中的依赖关系
            dep.depend()
            return val
        },
        set(newVal) {
            if(newVal === val) {
                return 
            }
            val= newVal
            //当值发生变更时，通知依赖收集器，更新每个需要更新的watcher
            //这里每个需要更新通过什么断定？ dep.subs
            dep.notify()
        }

    })
}

const observe = function(data) {
    return new Observe(data)
}

const Vue = function(options) {
    const self= this;
    // 将data赋值给this._data,源码部分用Proxy所以我们用最简单的方式临时实现
    if(options && options.data === 'function') {
        this._data = options.data.apply(this)
    }
    //挂载函数
    this.mount = function() {
        new Watcher(self,self.render)
    }
    this.render= function() {
        with(self) {
            _data.text
        }
    }
    //监听this._data
    observe(this._data)
}

const Watcher = function(vm, fn) {
    const self = this
    this.vm = vm
    Dep.target = this
    this.addDep = function(dep) {
        dep.addSub(self)
    }
    //更新方法，用于触发vm.render
    this.update = function() {
        console.log('in watcher update')
        fn()
    }
    //这里会首次调用vm._render,从而触发text的get
    //从而将当前的watcher与Dep关联起来
    this.value = fn()
    // 这里清空了Dep.target,为了防止notify触发时，不停的绑定watcher与Dep,造成死循环代码
    Dep.target = null
}

const Dep = function () {
    const self = this;
    //收集目标
    this.target = null
    //收集目标
    this.subs = []
    // 当有目标时，绑定与Dep与watcher的关系
    this.depend = function() {
        if(Dep.target) {
            Dep.target.addDep(self)
        }
    }
//为当前收集器添加watcher
    this.addSub = function(watcher) {
        self.subs.push(watcher)
    }
    //通知收集器中所有的watcher，调用其update方法
    this.notify = function() {
        for(let i = 0;i < self.subs.length; i +=1) {
            self.subs[i].update()
        }
    }
}



