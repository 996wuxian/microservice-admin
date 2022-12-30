
const { getSwiperImg } = require('../service/swiper.service')

class Swiper {
  // 获取所有打包信息
  async getSwiperImg(ctx, next) {
    try {
      const res = await getSwiperImg()
      ctx.body = {
        code: 200,
        message: '获取图片成功',
        result: res
      }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new Swiper()