import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookListItem from './BookListItem'

class BookListItemContainer extends Component {
  render () {
    return (
      <BookListItem book={this.props.book} />
    )
  }
}

BookListItemContainer.propTypes = {
  book: PropTypes.object
}

export default BookListItemContainer
