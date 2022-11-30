const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const SecondHand = seq.define('secondHand', {
  // headPortrait: {
  //   type: DataTypes.TEXT,
  //   allowNull: false,
  //   comments:'头像'
  // },
  title: {
    type: DataTypes.TEXT,
    allowNull: null,
    comments:'快递标题'
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: null,
    comments:'地址'
  },
  date: {
    type: DataTypes.STRING,
    allowNull: null,
    comments:'日期'
  },
  price: {
    type: DataTypes.STRING,
    allowNull: null,
    comments:'价格'
  },
  email: {
    type: DataTypes.STRING,
    allowNull: null,
    comments:'外键连接user表'
  },
  is_order: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 0,
    comments:'是否打包，1是，0否'
  },
  orderUser: {
    type: DataTypes.STRING,
    allowNull: false,
    allowNull: null,
    comments:'接单者'
  }
}, {
  charset: 'utf8',
  collate: 'utf8_unicode_ci',
  // 不生成created_at , updated_at
  timestamps: false,
})

// SecondHand.sync({ force: true })

module.exports = SecondHand