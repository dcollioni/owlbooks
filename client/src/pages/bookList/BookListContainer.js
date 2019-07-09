import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import BookList from './BookList'

class BookListContainer extends Component {
  constructor (props) {
    super(props)

    this.fetcher = this.props.fetcher

    this.state = {
      books: [],
      hasNextPage: true,
      nextPage: 1
    }

    this.loadMore = this.loadMore.bind(this)
  }

  async loadMore () {
    const res = await this.fetcher.get(`books?page=${this.state.nextPage}`)

    if (res.ok) {
      let { books, hasNextPage, nextPage } = await res.json()
      books = [...this.state.books, ...books]

      this.setState({ books, hasNextPage, nextPage })
    }
  }

  render () {
    return (
      <BookList {...this.props} {...this.state} loadMore={this.loadMore} />
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
