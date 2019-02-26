import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'
const { fetch } = window

class BookListContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }
  }

  async componentDidMount () {
    const response = await fetch('/api/books')
    const books = await response.json()
    this.setState(() => ({ books }))
  }

  render () {
    return (
      <BookList books={this.state.books} />
    )
  }
}

BookListContainer.propTypes = {
  user: PropTypes.object
}

export default BookListContainer
