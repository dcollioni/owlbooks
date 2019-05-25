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
      nextPage: 1,
    }
  }

  componentDidMount () {
    this.loadMore()
  }

  loadMore = async () => {
    const res = await this.fetcher.get(`books?page=${this.state.nextPage}`)

    if (res.ok) {
      let { books, hasNextPage, nextPage } = await res.json()
      books = [...this.state.books, ...books]

      this.setState({ books, hasNextPage, nextPage })
    }
  }

  render () {
    const { books, hasNextPage } = this.state;

    return (
      <BookList R={this.props.R} books={books} loadMore={this.loadMore}
        hasNextPage={hasNextPage}/>
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
