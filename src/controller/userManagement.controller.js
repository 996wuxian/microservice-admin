const { getAllUserInfo, updateManager, deleteUsers } = require('../service/userManagement.service')

class UserManagement {
  // 获取所有用户信息
  async getUserInfo(ctx, next) {
    try {
      const res = await getAllUserInfo()
      ctx.body = {
        code: 200,
        message: '获取所有用户信息成功',
        result: res
      }
    } catch (error) {
      console.error(error)
    }
  }
  // 修改是否为管理员
  async updateAdmin(ctx, next) {
    const { email, is_admin } = ctx.request.body
    try {
      const res = await updateManager({email, is_admin})
      ctx.body = {
        code: 200,
        message: '修改为管理员成功',
        result: res
      }
    } catch (error) {
      console.error(error)
    }
  }
  // 删除用户
  async deleteUser(ctx, next) {
    const { email } = ctx.request.body
    try {
      const res = await deleteUsers({email})
      ctx.body = {
        code: 200,
        message: '删除用户成功',
        result: res
      }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new UserManagement()