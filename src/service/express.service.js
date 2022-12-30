const Express = require('../model/express.model')
class ExpressService {
  // 添加打包信息
  async addExpress( microUserId, title, address, date, price, email  ) {
    const res = await Express.create({ microUserId, title, address, date, price, email })
    return res ? res : null
  }
  // 获取所有打包信息
  async getExpress() {
    const res = await Express.findAll({
      raw: true
    })
    return res ? res : null
  }
  // 修改打包信息
  async updateExpress(id, title, address, date, price, email, is_order, is_finish, orderUser) {
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
    const res = await Express.update(newUser, {
      where: whereOpt
    })
    return res[0] > 0 ? true : false
  }
  // 删除打包信息
  async deleteExpress( id, email ) {
    const whereOpt = { id, email }
    const res = await Express.destroy({
      where: whereOpt
    })
    return res[0] > 0 ? true : false
  }
}
module.exports = new ExpressService()