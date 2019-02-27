import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
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
      <BookList R={this.props.R} books={this.state.books} />
    )
  }
}

BookListContainer.propTypes = {
  user: PropTypes.object,
  R: PropTypes.object.isRequired
}

const stateToProps = ({ R }) => ({
  R
})

export default withRouter(connect(stateToProps)(BookListContainer))
