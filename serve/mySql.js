const mysql = require('mysql')
const chalk = require('chalk')
module.exports = {
  // 数据库配置
  config: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'myselfdb'
  },
  // 链接数据库
  sqlConnect: function(sql, sqlArr, callback) {
    const pool = mysql.createPool(this.config)
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(chalk.red('连接失败'))
      }
      console.log(chalk.green('连接成功'))
      // 事件驱动回调
      connection.query(sql, sqlArr, callback)
      // 释放连接
      connection.release(
      )
    })
  }
}