import App from './App'
import Router from './modules/Router'
import Track from './modules/Track'
import Share from './modules/Share'

//依赖注入
App.use([Router,Track])
App.use(Share)

new App({
    router: {
        mode: 'history'
    },
    track:{

    },
    onReady(app) {
        //app.options
        app.setShare({
            title:'Hello, world!',
            description: 'description here...'
        })
    }
})