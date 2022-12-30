const User = require('../model/user.model')
const Package = require('../model/packaged.model')
const express = require('../model/express.model')
const secondHand = require('../model/secondHand.model')
const other = require('../model/other.model')

User.hasMany(Package, {
  foreignKey: 'microUserId'
})
User.hasMany(express, {
  foreignKey: 'microUserId'
})
User.hasMany(secondHand, {
  foreignKey: 'microUserId'
})
User.hasMany(other, {
  foreignKey: 'microUserId'
}) // 在target模型中插入关联键
// // Package的实例对象将拥有getUser、setUser、createUser方法
Package.belongsTo(User, {
  foreignKey: 'microUserId'
}) // 将关联键插入到source模型中
express.belongsTo(User, {
  foreignKey: 'microUserId'
}) // 将关联键插入到source模型中
secondHand.belongsTo(User, {
  foreignKey: 'microUserId'
}) // 将关联键插入到source模型中
other.belongsTo(User, {
  foreignKey: 'microUserId'
}) // 将关联键插入到source模型中

class UserManagementService {
  // 查找所有用户
  async getAllUserInfo() {
    const res = await User.findAll({
      // 设置返回值的格式
      // raw: true,
      include: [
        {model:Package},
        {model:express},
        {model:secondHand},
        {model:other},
      ]
    })
    return res ? res : null
  }
  // 修改is_admin
  async updateManager({id, email, password, is_admin}) {
    const whereOpt = { email }
    const newUser = {}
    // // 追加到newUser里
    id && Object.assign( newUser, { id })
    id && Object.assign( newUser, { email })
    password && Object.assign( newUser, { password })
    is_admin && Object.assign( newUser, { is_admin })
    // 更新语句
    const res = await User.update(newUser, {
      where: whereOpt
    })
    return res[0] > 0 ? true : false
  }
  // 删除用户
  async deleteUsers({id, email, password, is_admin}) {
    console.log(id, email, password, is_admin);
    const whereOpt = { email }
    const res = await User.destroy({
      where: whereOpt
    })
    return res[0] > 0 ? true : false
  }
}
module.exports = new UserManagementService()