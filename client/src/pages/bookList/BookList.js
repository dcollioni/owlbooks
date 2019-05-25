import React from 'react'
import PropTypes from 'prop-types'

import BookListItemContainer from './components/BookListItemContainer'
import FloatingButton from './../components/floatingButton/FloatingButton'
import InfiniteScroll from './../components/infiniteScroll/InfiniteScroll'
import './BookList.css'

const BookList = ({ R, books, hasNextPage, loadMore }) => (
  <div id='book-list'>
    <header>
      <h2>{R.strings.yourLibrary}</h2>
    </header>
    <InfiniteScroll className='book-list' hasMore={hasNextPage}
      loadMore={loadMore} threshold={500}>
      {
        !hasNextPage && books.length === 0
        ?
        <BookListItemContainer key={'placeholder'}
          placeholder={R.strings.addYourFirstBook} />
        :
        books.map(book =>
          <BookListItemContainer key={book._id} book={book} />
        )
      }
    </InfiniteScroll>
    <FloatingButton icon='add' url='/books/new' title={R.strings.addNewBook} />

  </div>
)

BookList.propTypes = {
  R: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
}

export default BookList
