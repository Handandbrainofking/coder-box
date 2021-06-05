const fs = require('fs')
const path = require('path')
const colors = require('colors')
const chokidar = require('chokidar')
const glob = require('glob')
const handlebars = require('handlebars')
const cwd = process.cwd()
let infoList = {
  list: []
}

function walk () {
  return new Promise((resolve, reject) => {
    glob(
      '**/*.vue',
      {
        cwd: process.cwd(),
        ignore: '',
        nodir: true
      },
      function (err, files) {
        if (err) {
          reject(err)
        }
        let directory = files.map(file => ({
          name: file.replace(/^(.*)\/(.*)\.vue/, '$2'),
          file: file.replace(/src\/views\//, '')
        }))
        resolve(directory)
      }
    )
  })
}

function compile (data, targetPath, templatePath) {
  if (fs.existsSync(templatePath)) {
    const content = fs.readFileSync(templatePath).toString()
    const result = handlebars.compile(content)(data)
    console.log('result', result)
    fs.writeFileSync(targetPath, result)
  }
  console.log(colors.bgGreen('router 文件创建成功！!!!'))
}

async function generate () {
  let directory = await walk()
  infoList.list.splice(0)
  infoList.list.push(...directory)
  console.log(directory)
  console.log(infoList.list)
  let templatePath = path.resolve(__dirname, '../src/template/router.js.hbs')
  let targetPath = path.resolve(process.cwd(), 'src/router/index.js')
  compile(infoList, targetPath, templatePath)
}

module.exports = generate

// 监听文件变化
let watchFileDir = path.resolve(cwd, 'src/views')
// fs.watch(watchFileDir,function(event, filename) {
//     console.log('event',event, filename)
// })

chokidar.watch(watchFileDir).on('all', (event, path) => {
  console.log(colors.green('panda'), event, path)
  generate()
})
