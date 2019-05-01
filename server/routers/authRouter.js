const { Router } = require('express')
const router = new Router()
const authService = require('./../services/authService')

router.post('/signin', async (req, res) => {
  const { body: { provider, tokenId } } = req

  try {
    const signedUser = await authService.signin(provider, tokenId)
    res.status(200).json(signedUser)
  } catch (error) {
    res.sendStatus(400)
  }
})

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
