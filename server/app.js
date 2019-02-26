const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const appRouter = require('./routers/appRouter')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', appRouter)

//if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  })
//}

module.exports = app
