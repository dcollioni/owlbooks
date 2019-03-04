const Book = require('./../models/Book')

const findAll = () => {
  return Book.find().sort({ title: 1 })
}

const findById = (id) => {
  return Book.findById(id)
}

const insert = (bookData) => {
  const book = new Book({...bookData})
  return book.save()
}

const update = async (id, bookData) => {
  const book = await findById(id)
  Object.assign(book, bookData)
  return book.save()
}

const remove = async (id) => {
  const book = await findById(id)
  return book.remove()
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove
}
