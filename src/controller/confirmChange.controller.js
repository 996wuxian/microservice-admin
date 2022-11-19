class ConfirmController {
  async confirmChange(ctx, next) {
    const { email } = ctx.request.body
    try {
      ctx.body = {
        code: 200,
        message: '',
        result: {
          email: email
        }
      }
    } catch (err) {
      console.error(err)
    }
  }
}
  
module.exports = new ConfirmController()