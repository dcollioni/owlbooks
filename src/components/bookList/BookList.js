import React from 'react'
import PropTypes from 'prop-types'
import BookListItemContainer from './BookListItemContainer'
import './BookList.css'

const BookList = ({ books }) => (
  <div className='book-list'>
    {books.map(book =>
      <BookListItemContainer key={book.id} book={book} />
    )}
  </div>
)

BookList.propTypes = {
  books: PropTypes.array.isRequired
}

export default BookList
