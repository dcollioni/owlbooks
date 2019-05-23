const { Router } = require('express')
const router = new Router()
const bookService = require('./../services/bookService')

router.get('/', async (req, res) => {
  const { userId, query } = req
  const books = await bookService.findAll(userId, query.page)
  res.json(books)
})

router.get('/:id', async (req, res) => {
  const { params: { id }, userId } = req

  try {
    const book = await bookService.findById(id, userId)

    if (book) {
      res.json(book)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.post('/', async (req, res) => {
  const { body, userId } = req
  body.userId = userId

  try {
    const book = await bookService.insert(body)
    res.status(201).json(book)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.put('/:id', async (req, res) => {
  const { body, params: { id }, userId } = req
  body.userId = userId

  try {
    const book = await bookService.update(id, body)
    res.status(200).json(book)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.delete('/:id', async (req, res) => {
  const { params: { id }, userId } = req

  try {
    await bookService.remove(id, userId)
    res.sendStatus(204)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = router
