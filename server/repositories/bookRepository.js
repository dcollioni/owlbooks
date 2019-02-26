const Book = require('./../models/Book')

const findAll = () => {
  return Book.find().sort({ title: 1 })
}

const findById = (id) => {
  return Book.findById(id)
}

module.exports = {
  findAll,
  findById
}
