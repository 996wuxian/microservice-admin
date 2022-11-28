// 打包管理路由
const Router = require('koa-router')
// const { auth } = require('../middleware/auth.middleware')

const { addPack, getPack, updatePack, deletePack } = require('../controller/packaged.controller')

const router = new Router({ prefix: '/packaged' })
// 添加打包信息
router.post('/addPack', addPack)
// 获取所有打包信息
router.get('/getPack', getPack)
// 修改打包信息
router.post('/updatePack', updatePack)
// 删除打包信息
router.post('/deletePack', deletePack)

module.exports = router