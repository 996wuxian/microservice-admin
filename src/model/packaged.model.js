const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const Package = seq.define('packTable', {
  headPortrait: {
    type: DataTypes.STRING,
    allowNull: false,
    comments:'头像'
  },
  packTitle: {
    type: DataTypes.STRING,
    allowNull: false,
    comments:'打包标题'
  },
  dormitoryNo: {
    type: DataTypes.STRING,
    allowNull: false,
    comments:'宿舍号'
  }
})

// Package.sync({ force: true })

module.exports = Package