import React from 'react'
import PropTypes from 'prop-types'
import BookListItemContainer from './components/BookListItemContainer'
import FloatingButton from './../components/floatingButton/FloatingButton'
import './BookList.css'

const BookList = ({ R, books, loading }) => (
  <div id='book-list'>
    <header>
      <h2>{R.strings.yourLibrary}</h2>
    </header>
    <div className='book-list'>
      {!loading && books.length === 0
      ?
        <BookListItemContainer key={'placeholder'} placeholder={R.strings.addYourFirstBook} />
      :
        books.map(book =>
          <BookListItemContainer key={book._id} book={book} />
        )
      }
    </div>
    <FloatingButton icon='add' url='/books/new' title={R.strings.addNewBook} />
  </div>
)

BookList.propTypes = {
  R: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default BookList
