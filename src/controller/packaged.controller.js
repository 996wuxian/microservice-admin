
const { addPack, getPack, updatePack, deletePack } = require('../service/packaged.service')

class Packaged {
  // 添加打包信息
  async addPack(ctx, next) {
    const { microUserId, title, address, date, price, email } = ctx.request.body
    try {
      const res = await addPack( microUserId, title, address, date, price, email )
      ctx.body = {
        code: 200,
        message: '添加打包信息成功',
        result: res
      }
    } catch (error) {
      console.error(error)
    }
  }
  // 获取所有打包信息
  async getPack(ctx, next) {
    try {
      const res = await getPack()
      ctx.body = {
        code: 200,
        message: '获取所有用户信息成功',
        result: res
      }
    } catch (error) {
      console.error(error)
    }
  }
  // 修改打包信息
  async updatePack(ctx, next) {
    const { id, title, address, date, price, email, is_order, is_finish, orderUser } = ctx.request.body
    try {
      const res = await updatePack(id, title, address, date, price, email, is_order, is_finish, orderUser)
      ctx.body = {
        code: 200,
        message: '修改打包信息成功',
        result: res
      }
    } catch (error) {
      console.error(error)
    }
  }
  // 删除打包信息
  async deletePack(ctx, next) {
    const { id, email, is_order } = ctx.request.body
    try {
      const res = await deletePack( id, email, is_order )
      if (!res) {
        ctx.body = {
          code: 200,
          message: '删除打包信息成功',
          result: res
        }
        console.log(ctx.body)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new Packaged()