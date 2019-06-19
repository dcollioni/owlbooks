const bookRepository = require('./../repositories/bookRepository')

const findAll = (userId, page) => {
  return bookRepository.findAll(userId, page)
}

const findById = (id, userId) => {
  return bookRepository.findById(id, userId)
}

const insert = async (bookData) => {
  const book = await bookRepository.insert(bookData)
  return findById(book._id, book.userId)
}

const update = async (id, bookData) => {
  const book = await bookRepository.update(id, bookData)
  return findById(book._id, book.userId)
}

const remove = (id, userId) => {
  return bookRepository.remove(id, userId)
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove
}
