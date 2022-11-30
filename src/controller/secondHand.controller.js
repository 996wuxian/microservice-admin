
const { addSecond, getSecond, updateSecond, deleteSecond } = require('../service/secondHand.service')
// const { getUserInfo } = require('../service/user.service')

class SecondHand {
  // 添加打包信息
  async addSecond(ctx, next) {
    // const res = await getUserInfo()
    const { title, address, date, price, email } = ctx.request.body
    try {
      const res = await addSecond( title, address, date, price, email )
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
  async getSecond(ctx, next) {
    try {
      const res = await getSecond()
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
  async updateSecond(ctx, next) {
    const { id, title, address, date, price, email, is_order, orderUser } = ctx.request.body
    try {
      const res = await updateSecond(id, title, address, date, price, email, is_order, orderUser)
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
  async deleteSecond(ctx, next) {
    const { id, email, is_order } = ctx.request.body
    try {
      const res = await deleteSecond( id, email, is_order )
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

module.exports = new SecondHand()