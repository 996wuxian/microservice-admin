
const { addPack, getPack, updatePack, deletePack } = require('../service/packaged.service')
// const { getUserInfo } = require('../service/user.service')

class Packaged {
  // 添加打包信息
  async addPack(ctx, next) {
    // const res = await getUserInfo()
    const { packTitle, address, pack_data, price, email } = ctx.request.body
    try {
      const res = await addPack( packTitle, address, pack_data, price, email )
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
    const { id, packTitle, address, pack_data, price, email, is_packaged } = ctx.request.body
    try {
      const res = await updatePack(id, packTitle, address, pack_data, price, email, is_packaged)
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
    const { id, email, is_packaged } = ctx.request.body
    try {
      const res = await deletePack( id, email, is_packaged )
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