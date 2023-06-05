const express = require('express')
const app = express()
const port = 3001

var cors = require('cors')
app.use(cors())

app.use(require('./rutas'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})