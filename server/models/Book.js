const { mongoose } = require('./../database/connection')

const Book = mongoose.model('Book', {
  title: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true
  },
  author: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true
  },
  length: {
    type: Number,
    min: 0
  },
  publicationYear: {
    type: Number,
    max: 9999
  },
  publisher: {
    type: String,
    maxlength: 100,
    trim: true
  },
  isbn: {
    type: String,
    maxlength: 100,
    trim: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = Book
