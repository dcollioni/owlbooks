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
      books: [],
      hasNextPage: false,
      nextPage: 1,
      loading: false
    }
  }

  componentDidMount () {
    this.loadMore()
  }

  loadMore = async () => {
    const { state } = this

    this.setState(() => ({ loading: true }))

    const res = await this.fetcher.get(`books?page=${state.nextPage}`)

    if (res.ok) {
      let { books, hasNextPage, nextPage } = await res.json()
      books = [...state.books, ...books]

      this.setState({ books, hasNextPage, nextPage })
    }
  }

  render () {
    const { books, loading, hasNextPage } = this.state;

    return (
      <BookList R={this.props.R} books={books} loading={loading} 
        loadMore={this.loadMore} hasNextPage={hasNextPage}/>
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
