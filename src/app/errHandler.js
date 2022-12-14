module.exports = (err, ctx) => {
  let status = 500
  switch (err.code) {
    case 10001:
      status = 400
    break
    case 10006:
      status = 200
    case 10110:
      status = 300
    break
    case 10111:
      status = 201
    break
    case 10110:
      status = 202
    break
    case 10102:
      status = 401
    break
    default:
      status = 500
  }
  ctx.status = status
  ctx.body = err
  console.log(err)
}