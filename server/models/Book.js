const { mongoose } = require('./../database/connection')
const ObjectId = mongoose.SchemaTypes.ObjectId

const Book = mongoose.model('Book', {
  userId: {
    type: ObjectId,
    required: true,
    index: true
  },
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
  additionalInfo: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = Book
