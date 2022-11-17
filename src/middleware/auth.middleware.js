// 加密权限的中间件
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config/config.default')

const { tokenExpiredError } = require('../constant/err.type')

const auth = async (ctx, next) => {
  // 拿到请求头
  const { authorization } = ctx.request.header
  // 去除Bearer,拿到token
  const token = authorization.replace('Bearer ', '')
  
  // 验证token
  try {
    // user中包含了payload得信息(id,email,is_admin)
    const user = jwt.verify(token, JWT_SECRET)
    // 放到ctx里得state里
    // 旧的密码
    ctx.state.user = user
  } catch (err) {
    switch (err.name) {
      // 这里得错误名，是jwt里面定义的
      case 'TokenExpiredError':
        console.error('token已过期', err)
        return ctx.app.emit('error', tokenExpiredError, ctx)
      case 'JsonWebTokenError':
        console.error('无效的token', err)
        return ctx.app.emit('error', invalidToken, ctx)
    }
  }
  await next()
}

module.exports = {
  auth
}