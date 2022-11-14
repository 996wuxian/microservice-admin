const { createImg } = require('../service/swiperImg.service')

class SwiperImgController {
  async swiperImg(ctx, next) {
    ctx.body = '请求图片成功'
  }
}

module.exports = new SwiperImgController()