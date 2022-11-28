// 路由自动加载,就不用在app/index那一直导入然后use一堆了
const fs = require('fs')

const Router = require('koa-router')
const router = new Router()

fs.readdirSync(__dirname).forEach(file => {
  // 获取router文件夹里的文件名
  // console.log(file)
  if (file !== 'index.js') {
    let r = require('./' + file)
    router.use(r.routes())
  }
})

module.exports = router
