const Swiper = require('../model/swiper.model')

class SwiperService {
  // 获取所有打包信息
  async getSwiperImg() {
    const res = await Swiper.findAll({
      // raw: true
    })
    return res ? res : null
  }
}
module.exports = new SwiperService()