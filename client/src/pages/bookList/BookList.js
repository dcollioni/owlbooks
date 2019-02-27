import React from 'react'
import PropTypes from 'prop-types'
import BookListItemContainer from './components/BookListItemContainer'
import FloatingButton from './../components/floatingButton/FloatingButton'
import './BookList.css'

const BookList = ({ R, books }) => (
  <div id='book-list'>
    <header>
      <h2>{R.strings.myBooks}</h2>
    </header>
    <div className='book-list'>
      {books.map(book =>
        <BookListItemContainer key={book._id} book={book} />
      )}
    </div>
    <FloatingButton icon='add' url='/books/new' title='Add book' />
  </div>
)

BookList.propTypes = {
  R: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
}

export default BookList
