// 打包管理路由
const Router = require('koa-router')
const { auth } = require('../middleware/auth.middleware')

const { addSecond, getSecond, updateSecond, deleteSecond } = require('../controller/secondHand.controller')

const router = new Router({ prefix: '/secondHand' })
// 添加快递信息
router.post('/addSecond', auth, addSecond)
// 获取所有快递信息
router.get('/getSecond', auth, getSecond)
// 修改快递信息
router.post('/updateSecond', auth, updateSecond)
// 删除快递信息
router.post('/deleteSecond', auth, deleteSecond)

module.exports = router