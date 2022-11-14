const { getImg } = require('../service/swiperImg.service')

class SwiperImgController {
  async registerSwiperImg(ctx, next) {
    if (getImg()) {
      ctx.body = '获取图片成功'
    } else {
      ctx.body = '获取图片失败'
    }
  }
}

module.exports = new SwiperImgController()