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

module.exports = router
