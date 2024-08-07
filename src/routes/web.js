const express = require('express')
const { getHomePage } = require('../controllers/homeControllers')
const routerAPI = express.Router()

routerAPI.get('/',getHomePage)

module.exports = routerAPI