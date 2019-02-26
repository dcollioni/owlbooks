const { Router } = require('express')
const bookRouter = require('./bookRouter')
const router = new Router()

router.get('/', (_req, res) => {
  res.send('owlbooks api')
})

router.use('/books', bookRouter)

module.exports = router
