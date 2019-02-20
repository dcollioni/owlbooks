import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BookListItem = ({ book }) => (
  <Link className='book-list-item' to={`/books/${book.id}`}>
    <span>{book.title}</span>
    <span>{book.author}</span>
    <span>{book.category}</span>
    <span>{book.pages}</span>
  </Link>
)

BookListItem.propTypes = {
  book: PropTypes.object.isRequired
}

export default BookListItem
