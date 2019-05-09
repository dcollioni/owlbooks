import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookListItemContainer from './components/BookListItemContainer'
import FloatingButton from './../components/floatingButton/FloatingButton'
import './BookList.css'

const BookList = ({ R, books, loading }) => (
  <div id='book-list'>
    <header>
      <h2>{R.strings.yourLibrary}</h2>
    </header>
    {!loading && books.length === 0
      ?
      <div className='book-list-placeholder'>
        <p>
          {R.strings.emptyBooks} <Link to='/books/new'>{R.strings.addingABook}</Link>?
        </p>
      </div>
      :
      <div className='book-list'>
        {books.map(book =>
          <BookListItemContainer key={book._id} book={book} />
        )}
      </div>
    }
    <FloatingButton icon='add' url='/books/new' title='Add book' />
  </div>
)

BookList.propTypes = {
  R: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default BookList
