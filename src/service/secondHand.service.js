const SecondHand = require('../model/secondHand.model')
class SecondHandService {
  // 添加打包信息
  async addSecond( microUserId, title, address, date, price, email  ) {
    const res = await SecondHand.create({ microUserId, title, address, date, price, email })
    return res ? res : null
  }
  // 获取所有打包信息
  async getSecond() {
    const res = await SecondHand.findAll({
      raw: true
    })
    return res ? res : null
  }
  // 修改打包信息
  async updateSecond(id, title, address, date, price, email, is_order, is_finish, orderUser) {
    const whereOpt = { id, email }
    const newUser = {}
    // // 追加到newUser里
    title && Object.assign( newUser, { title })
    address && Object.assign( newUser, { address })
    date && Object.assign( newUser, { date })
    price && Object.assign( newUser, { price })
    is_order && Object.assign( newUser, { is_order })
    is_finish && Object.assign( newUser, { is_finish })
    orderUser && Object.assign( newUser, { orderUser })
    // 更新语句
    const res = await SecondHand.update(newUser, {
      where: whereOpt
    })
    return res[0] > 0 ? true : false
  }
  // 删除打包信息
  async deleteSecond( id, email ) {
    const whereOpt = { id, email }
    const res = await SecondHand.destroy({
      where: whereOpt
    })
    return res[0] > 0 ? true : false
  }
}
module.exports = new SecondHandService()