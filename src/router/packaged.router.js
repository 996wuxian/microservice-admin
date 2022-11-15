const Router = require('koa-router')

const { registerPackInfo } = require('../controller/packaged.controller')

const router = new Router()

router.get('/packInfo', registerPackInfo)

module.exports = router