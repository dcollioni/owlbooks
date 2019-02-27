const { Router } = require('express')
const router = new Router()
const bookService = require('./../services/bookService')

router.get('/', async (_req, res) => {
  const books = await bookService.findAll()
  res.json(books)
})

router.get('/:id', async (req, res) => {
  const { params: { id } } = req
  const book = await bookService.findById(id)

  if (book) {
    res.json(book)
  } else {
    res.sendStatus(404)
  }
})

router.post('/', async (req, res) => {
  const { body } = req
  const book = await bookService.insert(body)

  if (book) {
    res.status(201).json(book)
  } else {
    res.sendStatus(400)
  }
})

router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req
  const book = await bookService.update(id, body)

  if (book) {
    res.status(200).json(book)
  } else {
    res.sendStatus(400)
  }
})

module.exports = router
