// 打包管理路由
const Router = require('koa-router')
const { auth } = require('../middleware/auth.middleware')

const { addPack, getPack, updatePack, deletePack } = require('../controller/packaged.controller')

const router = new Router({ prefix: '/packaged' })
// 添加打包信息
router.post('/addPack', auth, addPack)
// 获取所有打包信息
router.get('/getPack',auth, getPack)
// 修改打包信息
router.post('/updatePack', auth, updatePack)
// 删除打包信息
router.post('/deletePack', auth, deletePack)

module.exports = router