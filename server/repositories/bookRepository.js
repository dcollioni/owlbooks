const Book = require('./../models/Book')

const findAll = (userId, page) => {

  return Book.paginate({ userId }, { page: page, limit: 10 })
    .then(response => {
    // response struct: {docs: array, total: int,limit: int, page: int, pages: int}
    return response
  })

  // TODO: Treat error
  .catch((err) => console.log(err));
}

const findById = (_id, userId) => {
  return Book.findOne({ _id, userId })
    .select({ userId: 0, createdAt: 0, __v: 0 })
}

const insert = (bookData) => {
  const book = new Book({...bookData})
  return book.save()
}

const update = async (id, bookData) => {
  const book = await findById(id, bookData.userId)

  if (!book) {
    throw new Error('not found')
  }

  Object.assign(book, bookData)
  return book.save()
}

const remove = async (id, userId) => {
  const book = await findById(id, userId)

  if (!book) {
    throw new Error('not found')
  }

  return book.remove()
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove
}
