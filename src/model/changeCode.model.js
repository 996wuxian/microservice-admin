const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const changeCode = seq.define('changeCode', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    comments: '邮箱, 唯一'
  },
  code: {
    type: DataTypes.CHAR(10),
    allowNull: false,
    comments: '更改密码的验证码'
  }
})

// changeCode.sync({ force: true })

module.exports = changeCode
