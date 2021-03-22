### IoC (inversion of control) 思想中面向接口编程而不是面向实现编程：App并不关心模块具体实现了什么，只要满足对接口init的约定即可。


### App 模块此时应该称之为「容器」比较合适了，跟业务已经没有任何关系了，它仅仅只是提供了一些方法来辅助管理注入的依赖和控制模块如何执行。
### 控制反转（Inversion of Control）是一种「思想」，依赖注入（Dependency Injection）则是这一思想的一种具体「实现方式」，而这里的 App 则是辅助依赖管理的一个「容器」。

链接[https://juejin.cn/post/6844903750843236366?utm_medium=fe&utm_source=weixinqun%3Futm_medium%3Dfe&utm_source=weixinqun]