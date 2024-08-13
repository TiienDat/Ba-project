const express = require('express')
const { getHomePage,createUser } = require('../controllers/homeControllers')
const routerAPI = express.Router()

routerAPI.get('/api',getHomePage)
routerAPI.post('/create',createUser)

module.exports = routerAPI