const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Code = seq.define('code', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    comments: '邮箱, 唯一'
  },
  code: {
    type: DataTypes.CHAR(10),
    allowNull: false,
    comments: '验证码'
  }
})

// Code.sync({ force: true })

module.exports = Code
