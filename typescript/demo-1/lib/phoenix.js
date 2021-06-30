const Bridge = {
  name: 'dolphin',
  lib: 'js',
  canIUse(apiName) {
    console.log(apiName)
    return false
  },
  showToast(params) {
    console.log(params)
  },
}

export default Bridge
