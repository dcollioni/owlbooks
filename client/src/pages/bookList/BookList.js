import React from 'react'
import PropTypes from 'prop-types'
import BookListItemContainer from './components/BookListItemContainer'
import FloatingButton from './../components/floatingButton/FloatingButton'
import './BookList.css'

const BookList = ({ books }) => (
  <div id='book-list'>
    <header>
      <h2>My books</h2>
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
  books: PropTypes.array.isRequired
}

export default BookList
