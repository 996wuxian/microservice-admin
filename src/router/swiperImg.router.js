const Router = require('koa-router')

const { swiperImg } = require('../controller/swiperImg.controller')

const router = new Router()

router.get('/swiperImg', swiperImg)

module.exports = router