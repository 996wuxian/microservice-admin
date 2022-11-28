const Koa = require('koa')
const { koaBody } = require('koa-body')
const cors = require('koa2-cors')

// 导入错误处理
const errHandler = require('./errHandler')
// 导入总的路由
const router = require('../router/index')

const app = new Koa()

// 配置跨域
app.use(
  cors({
      origin: function (ctx) {
          //设置允许来自指定域名请求
          // if (ctx.url === '/test') {
          //     return '*'; // 允许来自所有域名请求
          // }
          return ctx.header.origin; //只允许http://localhost:8080这个域名的请求
      },
      maxAge: 5, //指定本次预检请求的有效期，单位为秒。
      credentials: true, //是否允许发送Cookie
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
);

app.use(koaBody())
// 全局生效总路由
app.use(router.routes())

// 统一的错误处理
app.on('error', errHandler)

module.exports = app