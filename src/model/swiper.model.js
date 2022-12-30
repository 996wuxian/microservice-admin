const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const Swiper = seq.define('swiper', {
  url: {
    type: DataTypes.STRING,
    allowNull: null,
    comments: "图片地址"
  },
}, {
  charset: 'utf8',
  collate: 'utf8_unicode_ci',
  // 不生成created_at , updated_at
  timestamps: false,
})

// Swiper.sync({ force: true })

module.exports = Swiper