import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class BookListContainer extends Component {
  constructor (props) {
    super(props)

    this.fetcher = this.props.fetcher

    this.state = {
      books: []
    }
  }

  async componentDidMount () {
    const res = await this.fetcher.get('books')
    if (res.ok) {
      const books = await res.json()
      this.setState(() => ({ books }))
    }
  }

  render () {
    return (
      <BookList R={this.props.R} books={this.state.books} />
    )
  }
}

BookListContainer.propTypes = {
  R: PropTypes.object.isRequired,
  fetcher: PropTypes.object.isRequired
}

const stateToProps = () => ({
})

export default withRouter(connect(stateToProps)(BookListContainer))
