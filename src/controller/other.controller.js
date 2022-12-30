
const { addInfo, getInfo, updateInfo, deleteInfo } = require('../service/other.service')
// const { getUserInfo } = require('../service/user.service')

class Other {
  // 添加打包信息
  async addInfo(ctx, next) {
    // const res = await getUserInfo()
    const { microUserId, title, date, email } = ctx.request.body
    try {
      const res = await addInfo( microUserId, title, date, email )
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
  async getInfo(ctx, next) {
    try {
      const res = await getInfo()
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
  async updateInfo(ctx, next) {
    const { id, title, date, email } = ctx.request.body
    try {
      const res = await updateInfo( id, title, date, email )
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
  async deleteInfo(ctx, next) {
    const { id, email } = ctx.request.body
    try {
      const res = await deleteInfo( id, email )
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

module.exports = new Other()