const { Router } = require('express')
const authenticator = require('./../middlewares/authenticator')
const bookRouter = require('./bookRouter')
const authRouter = require('./authRouter')
const router = new Router()

router.get('/', (_req, res) => {
  res.send('owlbooks api')
})

router.use('/books', authenticator, bookRouter)
router.use('/auth', authRouter)

module.exports = router
