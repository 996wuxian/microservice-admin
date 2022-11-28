
const { addExpress, getExpress, updateExpress, deleteExpress } = require('../service/express.service')
// const { getUserInfo } = require('../service/user.service')

class Express {
  // 添加打包信息
  async addExpress(ctx, next) {
    // const res = await getUserInfo()
    const { expressTitle, address, pack_data, price, email } = ctx.request.body
    try {
      const res = await addExpress( expressTitle, address, pack_data, price, email )
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
  async getExpress(ctx, next) {
    try {
      const res = await getExpress()
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
  async updateExpress(ctx, next) {
    const { id, expressTitle, address, pack_data, price, email, is_packaged } = ctx.request.body
    try {
      const res = await updateExpress(id, expressTitle, address, pack_data, price, email, is_packaged)
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
  async deleteExpress(ctx, next) {
    const { id, email, is_packaged } = ctx.request.body
    try {
      const res = await deleteExpress( id, email, is_packaged )
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

module.exports = new Express()