
const install = (Vue,vm) => {
    //请求逻辑核心
    //基础配置
    Vue.prototype.$u.http.setConfig({
        baseUrl: 'https://api.example.com',
        loadingText: '努力加载中～',
        loadingTime: 800
    })

    //请求拦截，配置token
    Vue.prototype.$u.http.interceptor.request = (config) => {
        //引用token 
        // config.header.token = vm.token
        // config.header.token = vm.$store.state.token
        config.header.Token = 'xxxxxx'

        if(config.url == '/user/login') config.header.noToken = true
        return config

    }

    Vue.prototype.$u.http.interceptor.response = (res) => {
        if(res.code >= 200 && res.code <= 299 ) {
            return res.result
        } else {
            // 抛出异常
        }
    }
}

export default {
    install
}