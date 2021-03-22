let hotSearchUrl = '/dolphin_api/store_api/hot_search'
let indexUrl = '/dolphin_api/public_api/index'

const install = (Vue, vm) => {
    let getSearch = (params = {}) => vm.$u.get(hotSearchUrl,{
        id: 2
    })
    let getInfo = (params = {}) => vm.$u.post(indexUrl, params)

    vm.$u.api = {getSearch, getInfo}
}

export default {
    install
}