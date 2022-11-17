const jwt = require('jsonwebtoken')
const { createUser, getUserInfo } = require('../service/user.service')

// 导入错误类型
const { userRegisterError } = require('../constant/err.type')

// 导入jwt环境变量
const { JWT_SECRET } = require('../config/config.default')

class UserController {
  // 注册方法
  async register(ctx,next) {
    // 1 获取数据
    const { email, password } = ctx.request.body
    try {
      // 2 操作数据库
      const res = await createUser(email, password)
      // 3 返回结果
      // 数据库注册
      ctx.body = {
        code: 200,
        message: '用户注册成功',
        result: {
          id: res.id,
          email: res.email
        }
      }
    } catch (err) {
      ctx.app.emit('error', userRegisterError, ctx)
    }
  }
  // 登录方法
  async login(ctx,next) {
    const { email } = ctx.request.body
    ctx.body = `用户${ email }登录成功`
    // 1 获取用户信息，在token的payload中，记录id和email、is_admin
    try {
      // 从res对象里解构剔除掉password，将剩下的属性放到res对象里
      const {password, ...res} = await getUserInfo({ email })
      ctx.body = {
        code: 200,
        message: '用户登录成功',
        result: {
          // 颁发token
          // sign()放的是一个对象,即将res放入,然后第二个参数为定义的私钥,第三个设置过去时间：expiresIn 1天
          token: jwt.sign(res, JWT_SECRET, {expiresIn: '1d'})
        }
      }
    } catch (err) {
      console.error('用户登录失败', err)
      // ctx.app.emit('error', userLoginError, ctx)
    }
  }
}

module.exports = new UserController()