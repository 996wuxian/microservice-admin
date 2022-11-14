const Swiper = require('../model/swiperImg.model')

class SwiperImgService {
  async getImg() {
    const res = await Swiper.findAll()
    return res ? res.dataValues : null
  }
}

module.exports = new SwiperImgService()