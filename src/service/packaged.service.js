const Pack = require('../model/packaged.model')
class PackService {
  // 添加打包信息
  async addPack( packTitle, address, pack_data, price, email  ) {
    const res = await Pack.create({ packTitle, address, pack_data, price, email })
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
  async updatePack(id, packTitle, address, pack_data, price, email, is_packaged) {
    console.log(id, packTitle, address, pack_data, price, email, is_packaged)
    const whereOpt = { id, email }
    const newUser = {}
    // // 追加到newUser里
    packTitle && Object.assign( newUser, { packTitle })
    address && Object.assign( newUser, { address })
    pack_data && Object.assign( newUser, { pack_data })
    price && Object.assign( newUser, { price })
    is_packaged && Object.assign( newUser, { is_packaged })
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