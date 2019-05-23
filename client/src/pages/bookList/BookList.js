import React from 'react'
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types'
import BookListItemContainer from './components/BookListItemContainer'
import FloatingButton from './../components/floatingButton/FloatingButton'
import './BookList.css'

const BookList = ({ R, books, loading, onPageChange }) => (
  <div id='book-list'>
    <header>
      <h2>{R.strings.yourLibrary}</h2>
    </header>
    <div className='book-list'>
      {!loading && books.docs.length === 0
      ?
        <BookListItemContainer key={'placeholder'} placeholder={R.strings.addYourFirstBook} />
      :
        books.docs.map(book =>
          <BookListItemContainer key={book._id} book={book} />
        )
      }
    </div>
    <FloatingButton icon='add' url='/books/new' title={R.strings.addNewBook} />
    {
      books.pages > 1
      ? <ReactPaginate containerClassName='pagination' pageClassName='page' previousLabel='<'
          nextLabel='>' marginPagesDisplayed={1} pageRangeDisplayed={2} initialPage={0}
          pageCount={books.pages} onPageChange={onPageChange} />
        :
        null
    }
  </div>
)

BookList.propTypes = {
  R: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default BookList
