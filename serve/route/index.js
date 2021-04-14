const express = require('express')
const router = express.Router()
const test = require('./controllers/test.js')

module.exports = app => {
  app.use('/', router.get('/', test.getTestData))
  app.use('/', router.get('/getOneList', test.getTestDataById))
}