const Bridge = {
  name: 'dolphin',
  lib: 'js',
  canIUse() {
    console.log('canIUse')
  },
  log() {
    console.log('log')
  },
}

export default Bridge
