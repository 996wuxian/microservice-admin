// 导入sequelize里数据类型
const { DataTypes } = require('sequelize') 

const seq = require('../db/seq')

// 创建模型(表)ms_user  会映射出一张表为 ms_users
const User = seq.define('microUser', {
  // 定义表字段
  // 当不定义主键时，id 会被sequelize自动创建管理
  email: {
    // STRING 对应表的数据类型为varchar
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '邮箱, 唯一'
  },
  password: {
    // STRING 对应表的数据类型为varchar
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码'
  },
  is_admin: {
    // STRING 对应表的数据类型为varchar
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '否',
    comment: '管理员'
  }
})

// sync:同步这个模型到数据库  force: true:当数据库存在这张表,则删除这张表重新创建,创建完后需要注释掉
// User.sync({ force: true })

module.exports = User