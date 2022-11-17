const Router = require('koa-router')

const { userValidator, verifyUser, crpytPassword, verifyLogin } = require('../middleware/user.middleware')
const { verifyCode } = require('../middleware/code.middleware')

// 导入权限中间件
// const { auth } = require('../middleware/auth.middleware')

const { register, login } = require('../controller/user.controller')
const {  getCode } = require('../controller/code.controller')

const router = new Router({ prefix: '/users' })

// 注册接口
router.post('/register', userValidator, verifyUser, crpytPassword, verifyCode, register)

// 登录接口
router.post('/login', userValidator, verifyLogin, login)

// 发送验证码
router.post('/getCode', getCode)

module.exports = router