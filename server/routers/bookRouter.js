const { Router } = require('express')
const router = new Router()
const bookService = require('./../services/bookService')

router.get('/', async (_req, res) => {
  const books = await bookService.findAll()
  res.json(books)
})

router.get('/:id', async (req, res) => {
  const { params: { id } } = req

  try {
    const book = await bookService.findById(id)

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
  const { body } = req

  try {
    const book = await bookService.insert(body)
    res.status(201).json(book)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req

  try {
    const book = await bookService.update(id, body)
    res.status(200).json(book)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = router
