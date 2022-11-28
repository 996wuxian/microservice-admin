// 打包管理路由
const Router = require('koa-router')
// const { auth } = require('../middleware/auth.middleware')

const { addExpress, getExpress, updateExpress, deleteExpress } = require('../controller/express.controller')

const router = new Router({ prefix: '/express' })
// 添加快递信息
router.post('/addExpress', addExpress)
// 获取所有快递信息
router.get('/getExpress', getExpress)
// 修改快递信息
router.post('/updateExpress', updateExpress)
// 删除快递信息
router.post('/deleteExpress', deleteExpress)

module.exports = router