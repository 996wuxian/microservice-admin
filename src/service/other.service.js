const Other = require('../model/other.model')
class OtherService {
  // 添加打包信息
  async addInfo( title, date, email  ) {
    const res = await Other.create({ title, date, email })
    return res ? res : null
  }
  // 获取所有打包信息
  async getInfo() {
    const res = await Other.findAll({
      raw: true
    })
    return res ? res : null
  }
  // 修改打包信息
  async updateInfo(id, title, date, email ) {
    console.log( id, title, date, email )
    const whereOpt = { id, email }
    const newUser = {}
    // // 追加到newUser里
    title && Object.assign( newUser, { title })
    date && Object.assign( newUser, { date })
    // 更新语句
    const res = await Other.update(newUser, {
      where: whereOpt
    })
    return res[0] > 0 ? true : false
  }
  // 删除打包信息
  async deleteInfo( id, email ) {
    const whereOpt = { id, email }
    const res = await Other.destroy({
      where: whereOpt
    })
    return res[0] > 0 ? true : false
  }
}
module.exports = new OtherService()