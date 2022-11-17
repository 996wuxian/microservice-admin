const User = require('../model/user.model')

// 操作数据库的
class UserService {
  // 创建用户
  async createUser(email, password) {

    const res = await User.create({ email, password })

    return res.dataValues
  }
  // 查询用户
  async getUserInfo({ id, email, password, is_admin }) {
    const whereOpt = {}

    // 短路运算
    // 当前者不为空时,执行后面代码,将{ } 里的属性通过assign方法拷贝到whereOpt里
    id && Object.assign(whereOpt, { id })
    email && Object.assign(whereOpt, { email })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })
    // 获得它找到的第一个条目
    const res = await User.findOne({
      attributes: ['id', 'email', 'password', 'is_admin'],
      // where条件
      where: whereOpt
    })

    return res ? res.dataValues : null
  }
}

module.exports = new UserService()