const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const Other = seq.define('other', {
  // headPortrait: {
  //   type: DataTypes.TEXT,
  //   allowNull: false,
  //   comments:'头像'
  // },
  microUserId: {
    type: DataTypes.STRING,
    allowNull: null,
    comment: "外键"
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: null,
    comments:'快递标题'
  },
  date: {
    type: DataTypes.STRING,
    allowNull: null,
    comments:'日期'
  },
  email: {
    type: DataTypes.STRING,
    allowNull: null,
    comments:'创建者'
  },
}, {
  charset: 'utf8',
  collate: 'utf8_unicode_ci',
  // 不生成created_at , updated_at
  timestamps: false,
})

// Other.sync({ force: true })

module.exports = Other