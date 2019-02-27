const { mongoose } = require('./../database/connection')

const Book = mongoose.model('Book', {
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    min: 0
  },
  publicationYear: {
    type: Number,
    max: 9999
  },
  publisher: String,
  isbn: String
})

module.exports = Book
