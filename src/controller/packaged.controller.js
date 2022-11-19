const { getImg } = require('../service/swiperImg.service')

class SwiperImgController {
  async registerPackInfo(ctx, next) {
    ctx.body = '打包内容'
  }
}

module.exports = new SwiperImgController()