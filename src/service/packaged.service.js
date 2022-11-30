const Pack = require('../model/packaged.model')
class PackService {
  // 添加打包信息
  async addPack( title, address, date, price, email  ) {
    const res = await Pack.create({ title, address, date, price, email })
    return res ? res : null
  }
  // 获取所有打包信息
  async getPack() {
    const res = await Pack.findAll({
      raw: true
    })
    return res ? res : null
  }
  // 修改打包信息
  async updatePack(id, title, address, date, price, email, is_order, orderUser) {
    const whereOpt = { id, email }
    const newUser = {}
    // // 追加到newUser里
    title && Object.assign( newUser, { title })
    address && Object.assign( newUser, { address })
    date && Object.assign( newUser, { date })
    price && Object.assign( newUser, { price })
    is_order && Object.assign( newUser, { is_order })
    orderUser && Object.assign( newUser, { orderUser })
    // 更新语句
    const res = await Pack.update(newUser, {
      where: whereOpt
    })
    return res[0] > 0 ? true : false
  }
  // 删除打包信息
  async deletePack( id, email ) {
    const whereOpt = { id, email }
    const res = await Pack.destroy({
      where: whereOpt
    })
    return res[0] > 0 ? true : false
  }
}
module.exports = new PackService()