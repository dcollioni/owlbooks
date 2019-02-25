import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookForm from './BookForm'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class BookFormContainer extends Component {
  constructor (props) {
    super(props)

    const { R, match: { params: { id } }, location: { state } } = this.props
    const book = state && state.book

    this.state = {
      pageTitle: (id === 'new') ? R.strings.addNewBook : R.strings.editBook,
      id: (id !== 'new') ? id : '',
      title: (book && book.title) || '',
      author: (book && book.author) || '',
      subject: (book && book.subject) || '',
      length: (book && book.length) || '',
      publicationYear: (book && book.publicationYear) || '',
      publisher: (book && book.publisher) || '',
      isbn: (book && book.isbn) || ''
    }

    this.loadBook = this.loadBook.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const { id } = this.state

    if (id) {
      this.loadBook(id)
    }
  }

  loadBook (id) {
    // this.setState(() => ({
    //   title: 'Harry Potter and the Sorcerer\'s Stone',
    //   author: 'J.K. Rowling',
    //   subject: 'Action & Adventure',
    //   length: '309',
    //   publicationYear: '1998',
    //   publisher: 'Pottermore',
    //   isbn: '1781100489'
    // }))
  }

  handleChange (e) {
    const { target: { value, name } } = e
    this.setState(() => ({ [name]: value }))
  }

  handleSubmit (e) {
    e.preventDefault()
  }

  render () {
    return (
      <BookForm {...this.props} {...this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />
    )
  }
}

BookFormContainer.propTypes = {
  R: PropTypes.object.isRequired
}

const stateToProps = ({ R }) => ({
  R
})

export default withRouter(connect(stateToProps)(BookFormContainer))
