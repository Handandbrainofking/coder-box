export default {
    sendCloudRequest() {
        return new Promise((resolve,reject)=> {
            this.showLoading()
            setTimeout(() => {
                let resultSuccess = {
                    code: 0,
                    data: {
                        name:'zoiew'
                    }
                }
                resolve(resultSuccess)
                this.hideLoading()
            }, 2000);
        })
    },
    sendLuaRequest() {
        console.log('api => sendLuaRequest')
    }
}