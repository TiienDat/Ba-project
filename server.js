const express = require('express')
const routerAPI = require('./src/routes/web')
const app = express()
const port = 3000

app.use('/',routerAPI)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})