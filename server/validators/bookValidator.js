const bookRepository = require('./../repositories/bookRepository')

const beforeInsert = async (book) => {
  if (!book) {
    return error('book cannot be null')
  }

  if (!book.userId) {
    return error('userId cannot be null')
  }

  if (!book.title) {
    return error('title cannot be null')
  } else if (book.title.length > 100) {
    return error('title max length is 100')
  }

  if (!book.author) {
    return error('author cannot be null')
  } else if (book.author.length > 100) {
    return error('author max length is 100')
  }

  if (!book.subject) {
    return error('subject cannot be null')
  } else if (book.subject.length > 100) {
    return error('subject max length is 100')
  }

  if (book.length < 0) {
    return error('length min value is 0')
  }

  if (book.publicationYear > 9999) {
    return error('publicationYear max value is 9999')
  }

  if (book.publisher && book.publisher.length > 100) {
    return error('publisher max length is 100')
  }

  if (book.isbn && book.isbn.length > 100) {
    return error('isbn max length is 100')
  }

  const count = await bookRepository.count(book.userId)
  if (count >= 100) {
    return error('books limit per user is 100')
  }

  return success()
}

const error = (message) => {
  return { isValid: false, message }
}

const success = () => {
  return { isValid: true }
}

module.exports = {
  beforeInsert
}
