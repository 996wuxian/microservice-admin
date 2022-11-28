const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const Express = seq.define('express', {
  // headPortrait: {
  //   type: DataTypes.TEXT,
  //   allowNull: false,
  //   comments:'头像'
  // },
  expressTitle: {
    type: DataTypes.TEXT,
    allowNull: null,
    comments:'快递标题'
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: null,
    comments:'地址'
  },
  pack_data: {
    type: DataTypes.STRING,
    allowNull: null,
    comments:'地址'
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
  is_packaged: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 0,
    comments:'是否打包，1是，0否'
  }
}, {
  charset: 'utf8',
  collate: 'utf8_unicode_ci',
  // 不生成created_at , updated_at
  timestamps: false,
})

// Express.sync({ force: true })

module.exports = Express