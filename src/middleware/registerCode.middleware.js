const { emailCodeError, CodeError } = require('../constant/err.type')
const { checkCode, deleteCode } = require('../service/registerCode.service')

// 格式化时间的包
const moment = require('moment')
// 关闭提示
moment.suppressDeprecationWarnings = true;

const verifyRegisterCode = async (ctx, next) => {
  // code使用的时间,输入的code，请求体里的数据
  const { email, code, codeDate } = ctx.request.body
  // 生成写入数据库的code
  // 获取请求体里的email和code去表里查响应的数据
  // 正确输入才能拿到res的内容
  // 如果输入错误的邮箱或者错误的code,这个是根据请求体里面传入的参数获取的
  const res = await checkCode({ email, code })
  // 查不到res的情况
  if (res === '查询失败') {
    console.error('邮箱或验证码错误', { email }, { code })
    ctx.app.emit('error', emailCodeError, ctx)
    return
  } else {
    // 查到res的情况,证明请求的邮箱和code与数据库里的匹配了
     // 转换请求的code和数据库里的code为number类型
     // 格式化code生成写入数据库时间
     const sendCodeTime = moment(res.createdAt,moment.ISO_8601).format('YYYY-MM-DD HH:mm:ss')
     // 格式化输入框输入code发送请求时间
     const useCodeTime = moment(codeDate,moment.ISO_8601).format('YYYY-MM-DD HH:mm:ss')
     // 两个时间相减
     const TimeComparison = moment(useCodeTime).diff(moment(sendCodeTime), 'minute')
     // 判断验证码是否有效
     if (TimeComparison < 15) {
      console.log('验证码有效')
      const res = await deleteCode({ code })
      await next()
    } else {
      console.error('验证码无效', { code })
      ctx.app.emit('error', CodeError, ctx)
      return
    }
  }
}

module.exports = {
  verifyRegisterCode
}