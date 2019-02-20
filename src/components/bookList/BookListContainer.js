import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

class BookListContainer extends Component {
  render () {
    return (
      <BookList books={this.props.books} />
    )
  }
}

BookListContainer.propTypes = {
  user: PropTypes.object,
  books: PropTypes.array.isRequired
}

export default BookListContainer
