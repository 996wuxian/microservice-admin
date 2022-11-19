const { updateByEmail } = require('../service/user.service')
class ForgotController {
  // 修改密码方法
  async forgotPassword(ctx,next) {
    const { email, password } = ctx.request.body
    if (await updateByEmail({ email, password })) {
      ctx.body = {
        code: 200,
        message: '修改密码成功',
        result: ''
      }
    } else {
      ctx.body = {
        code: '10007',
        message: '修改密码失败',
        result: ''
      }
    }
  }
}

module.exports = new ForgotController()