const Koa = require('koa')
const { koaBody } = require('koa-body')
// 轮播图路由
const swiperImgRouter = require('../router/swiperImg.router')
// 打包路由
const packagedRouter = require('../router/packaged.router')

const app = new Koa()

app.use(koaBody())
app.use(swiperImgRouter.routes())
app.use(packagedRouter.routes())

module.exports = app