// 打包管理路由
const Router = require('koa-router')

const { getSwiperImg } = require('../controller/swiper.controller')

const router = new Router()
// 获取所有打包信息
router.get('/getSwiperImg', getSwiperImg)

module.exports = router