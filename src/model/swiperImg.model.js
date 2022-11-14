const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const Swiper = seq.define('swiperTable', {
  imgPath: {
    type: DataTypes.STRING,
    allowNull: false,
    comments:'轮播图图片'
  }
})

// Swiper.sync({ force: true })

module.exports = Swiper