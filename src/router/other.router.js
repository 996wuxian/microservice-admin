// 打包管理路由
const Router = require('koa-router')
const { auth } = require('../middleware/auth.middleware')

const { addInfo, getInfo, updateInfo, deleteInfo } = require('../controller/other.controller')

const router = new Router({ prefix: '/other' })
// 添加快递信息
router.post('/addInfo', auth, addInfo)
// 获取所有快递信息
router.get('/getInfo', auth, getInfo)
// 修改快递信息
router.post('/updateInfo', auth, updateInfo)
// 删除快递信息
router.post('/deleteInfo', auth, deleteInfo)

module.exports = router