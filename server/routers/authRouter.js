const { Router } = require('express')
const router = new Router()
const authService = require('./../services/authService')

router.post('/signup', async (req, res) => {
  const { body } = req

  try {
    const book = await authService.signup(body)
    res.status(201).json(book)
  } catch (error) {
    res.status(error.statusCode).send(error.message)
  }
})

module.exports = router
