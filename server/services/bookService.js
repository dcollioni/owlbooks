const bookRepository = require('./../repositories/bookRepository')

const findAll = () => {
  return bookRepository.findAll()
}

const findById = (id) => {
  return bookRepository.findById(id)
}

module.exports = {
  findAll,
  findById
}
