const Express = require('../model/express.model')
class ExpressService {
  // 添加打包信息
  async addExpress( expressTitle, address, pack_data, price, email  ) {
    const res = await Express.create({ expressTitle, address, pack_data, price, email })
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
  async updateExpress(id, expressTitle, address, pack_data, price, email, is_packaged) {
    console.log(id, expressTitle, address, pack_data, price, email, is_packaged)
    const whereOpt = { id, email }
    const newUser = {}
    // // 追加到newUser里
    expressTitle && Object.assign( newUser, { expressTitle })
    address && Object.assign( newUser, { address })
    pack_data && Object.assign( newUser, { pack_data })
    price && Object.assign( newUser, { price })
    is_packaged && Object.assign( newUser, { is_packaged })
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