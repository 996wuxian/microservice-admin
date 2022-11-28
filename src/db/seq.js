const { Sequelize } = require('sequelize')

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB
} = require('../config/config.default')

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  // 设置字符集
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci', 
    timestamps: true
  },
  host: MYSQL_HOST,
  dialect: 'mysql',
  timezone:'+08:00',   //创建的createdAt/updatedAt会比当前的小时少8个小时
  dialectOptions: {
    useUTC: false
  }
})

// 使用authenticate测试连接
// seq.authenticate().then(()=> {
//   console.log('数据库连接成功')
// }).catch((err)=>{
//   console.log('数据库连接失败', err)
// })

module.exports = seq