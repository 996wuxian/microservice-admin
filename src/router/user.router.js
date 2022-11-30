// 注册登录路由
const Router = require('koa-router')

// 验证邮箱密码不为空、验证邮箱是否存在、加密密码、验证登录
const { userValidator, verifyUser, crpytPassword, verifyLogin } = require('../middleware/user.middleware')
// 验证注册验证码
const { verifyRegisterCode } = require('../middleware/registerCode.middleware')
// 验证忘记密码验证码
const { verifyForgotCode } = require('../middleware/confirmCode.middleware')

// 注册，登录，修改密码
const { register, login } = require('../controller/user.controller')
// 获取注册验证码
const {  getRegCode } = require('../controller/registerCode.controller')
// 获取修改密码验证码
const {  getChgCode } = require('../controller/changeCode.controller')
// 确认修改者的邮箱和验证码
const {  confirmChange } = require('../controller/ConfirmChange.controller')
// 忘记密码重置密码
const {  forgotPassword } = require('../controller/forgotPwd.controller')

const router = new Router({ prefix: '/users' })

// 注册接口
router.post('/register', userValidator, verifyUser, crpytPassword, verifyRegisterCode, register)

// 登录接口
router.post('/login', userValidator, verifyLogin, login)

// 发送注册验证码
router.post('/getRegCode', getRegCode)

// 发送修改密码验证码
router.post('/getChgCode', getChgCode)

// 验证修改密码邮箱和code是否匹配
router.post('/confirmChange', verifyForgotCode, confirmChange)

// 忘记密码接口
router.post('/forgotPassword', crpytPassword, forgotPassword)

module.exports = router