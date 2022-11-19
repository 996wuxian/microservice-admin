const registerCode = require('../model/registerCode.model')

class CodeService {
  // 插入邮箱和code
  async bindCode(email, code) {
    const res = await registerCode.create({ email, code })
    return res.dataValues
  }

  // 查询code和邮箱是否匹配
  async checkCode({id, email, code, createdAt}) {
    const whereOpt = {}

    id && Object.assign(whereOpt, { id })
    email && Object.assign(whereOpt, { email })
    code && Object.assign(whereOpt, { code })
    createdAt && Object.assign(whereOpt, { createdAt })

    const res = await registerCode.findOne({
      attributes: ['id', 'email', 'code', 'createdAt'],
      where: whereOpt
    })
    return res ? res.dataValues : '查询失败'
  }

  // 删除code
  async deleteCode({id, email, code}) {
    const whereOpt = {}

    id && Object.assign(whereOpt, { id })
    email && Object.assign(whereOpt, { email })
    code && Object.assign(whereOpt, { code })

    const res = await registerCode.destroy({
      attributes: ['id', 'email', 'code'],
      where: whereOpt
    })
    return res ? res.dataValues : '删除失败'
  }
}

module.exports = new CodeService()