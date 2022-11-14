const Koa = require('koa')
const { koaBody } = require('koa-body')
const swiperImgRouter = require('../router/swiperImg.router')

const app = new Koa()

app.use(koaBody())
app.use(swiperImgRouter.routes())

module.exports = app