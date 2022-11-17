const { bindCode } = require('../service/code.service')

// 导入验证码nodemailer
const nodemailer = require('nodemailer')

class CodeController {
  // 发送验证码
  async getCode(ctx, next) {
    // 创建一个code
    let codes = Math.floor(Math.random() * 900000) + 100000
    // 建立一个smtp连接
    let transporter = nodemailer.createTransport({
      host:'smtp.qq.com',
      secureConnection: true,  //更安全的发邮件
      port: 465,
      auth: {
        user: 'wuxian_996@qq.com',  //我的邮箱账号
        pass: 'zxpohdnnpuaxcjhg'   //QQ邮箱授权码
      }
    })
    // 配置相关参数
    let options = {
      from:'wuxian_996@qq.com',    //来自我的邮箱
      //给谁发,不管是网易还是QQ，多次发送都会有拦截，所以要附带自己的邮箱，这样就不会拦截了
      to:'wuxian_996@qq.com,1874940243@qq.com',
      subject:'注册验证码',  // 标题
      html:`<div style="width: 600px;margin: 30px auto">
              <h1 style="text-align: center;">欢迎注册管理系统账户</h1>
              <p style="font-size:24px">此次的验证码如下:</p>
              <strong style="font-size:26px;display: block;text-align: center;color: red;">${codes}</strong>
              <p>验证码15分钟有效，请及时输入</p>
              <i style="color: #00bfff;">此邮箱为系统自动发送，请勿回复! 若您没有进行注册请忽略</i>
              <p style="text-align: right;font-size:24px">--wuxian</p>
            </div>`
    }
    const msg = {}
    transporter.sendMail(options, function (err, msg) {
      if (err) {
        console.log(err)
      } else {
        msg = msg
        transporter.close()
      }
    })
    ctx.body = {
      code: 200,
      msg
    }
    // 如果email, codes存在，写入数据库
    const { email } = ctx.request.body
    try {
      if (email, codes) {
        const res = await bindCode(email, codes)
      }
    } catch (error) {
      console.log(error)
    } 
    await next()
  }
}
  
module.exports = new CodeController