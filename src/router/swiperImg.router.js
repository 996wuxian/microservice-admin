const Router = require('koa-router')

const { registerSwiperImg } = require('../controller/swiperImg.controller')

const router = new Router()

router.get('/swiperImg', registerSwiperImg)

module.exports = router