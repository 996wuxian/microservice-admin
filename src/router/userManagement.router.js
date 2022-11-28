// 用户管理路由
const Router = require('koa-router')
const { auth } = require('../middleware/auth.middleware')

const { getUserInfo, updateAdmin, deleteUser } = require('../controller/userManagement.controller')

const router = new Router({ prefix: '/user' })
// 获取所有用户信息
router.get('/getUserInfo', getUserInfo)
// 修改当前用户为管理员
router.post('/updateAdmin', updateAdmin)
// 删除用户
router.post('/deleteUser', deleteUser)

module.exports = router