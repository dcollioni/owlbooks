const bookRepository = require('./../repositories/bookRepository')

const findAll = () => {
  return bookRepository.findAll()
}

const findById = (id) => {
  return bookRepository.findById(id)
}

const insert = (bookData) => {
  return bookRepository.insert(bookData)
}

const update = async (id, bookData) => {
  return bookRepository.update(id, bookData)
}

module.exports = {
  findAll,
  findById,
  insert,
  update
}
