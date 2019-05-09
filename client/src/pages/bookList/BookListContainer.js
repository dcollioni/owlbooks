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
      loading: false
    }
  }

  async componentDidMount () {
    this.setState(() => ({ loading: true }))
    const res = await this.fetcher.get('books')
    this.setState(() => ({ loading: false }))

    if (res.ok) {
      const books = await res.json()
      this.setState(() => ({ books }))
    }
  }

  render () {
    return (
      <BookList R={this.props.R} books={this.state.books} loading={this.state.loading} />
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
