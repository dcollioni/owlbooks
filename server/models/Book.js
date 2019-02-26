const { mongoose } = require('./../database/connection')

const Book = mongoose.model('Book', {
  title: String,
  author: String,
  subject: String,
  length: Number,
  publicationYear: Number,
  publisher: String,
  isbn: String
})

module.exports = Book
