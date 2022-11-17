// 错误处理
// 导出到中间件的错误返回部分
module.exports = {
  userFormateError: {
    code: 10001,
    message: '邮箱或密码为空',
    result: ''
  },
  userAlreadyExited: {
    code: 10002,
    message: '邮箱已经存在',
    result: ''
  },
  userRegisterError: {
    code: '10003',
    message: '邮箱注册错误',
    result: ''
  },
  userDoesNotExist: {
    code: '10004',
    message: '邮箱不存在',
    result: ''
  },
  userLoginError: {
    code: '10005',
    message: '邮箱登录失败',
    result: ''
  },
  invalidPasswordError: {
    code: 10006,
    message: '密码错误',
    result: ''
  },
  tokenExpiredError: {
    code: '10101',
    message: 'token已过期',
    result: ''
  },
  invalidToken: {
    code: '10102',
    message: '无效的token',
    result: ''
  },
  emailCodeError: {
    code: '10110',
    message: '邮箱或验证码错误',
    result: ''
  },
  CodeError: {
    code: '10111',
    message: '验证码无效',
    result: ''
  },
}