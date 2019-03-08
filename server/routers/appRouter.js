const { Router } = require('express')
const bookRouter = require('./bookRouter')
const authRouter = require('./authRouter')
const router = new Router()

router.get('/', (_req, res) => {
  res.send('owlbooks api')
})

router.use('/books', bookRouter)
router.use('/auth', authRouter)

module.exports = router
