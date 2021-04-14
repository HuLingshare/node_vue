const mySql = require('../../mySql')
const getTestData = function (req, res) {
  const sql = 'select * from test'
  const sqlArr = []
  const callBack = (err, data) => {
    if (err) {
      console.log('连接错误！')
    }
    res.send({
      list: data
    })
  }
  mySql.sqlConnect(sql, sqlArr, callBack)
}
const getTestDataById = function (req, res) {
  const { id } = req.query
  const sql = 'select * from test where id=?'
  const sqlArr = [id]
  const callBack = (err, data) => {
    if (err) {
      console.log('连接错误！', err)
    }
    res.send({
      list: data
    })
  }
  mySql.sqlConnect(sql, sqlArr, callBack)
}

module.exports = {
  getTestData,
  getTestDataById
}