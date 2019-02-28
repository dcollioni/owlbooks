import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookForm from './BookForm'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { showToast } from './../../actions'
const { fetch } = window

class BookFormContainer extends Component {
  constructor (props) {
    super(props)

    const { R, match: { params: { id } }, location: { state } } = this.props
    const book = state && state.book

    this.state = {
      redirect: false,
      saving: false,
      pageTitle: (id === 'new') ? R.strings.addNewBook : R.strings.editBook,
      id: (id !== 'new') ? id : '',
      title: (book && book.title) || '',
      author: (book && book.author) || '',
      subject: (book && book.subject) || '',
      length: (book && book.length) ? book.length.toString() : '',
      publicationYear: (book && book.publicationYear) ? book.publicationYear.toString() : '',
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

  async loadBook (id) {
    const res = await fetch(`/api/books/${id}`)

    if (res.ok) {
      const book = await res.json()
      this.setState(() => ({
        title: book.title,
        author: book.author,
        subject: book.subject,
        length: book.length ? book.length.toString() : '',
        publicationYear: book.publicationYear ? book.publicationYear.toString() : '',
        publisher: book.publisher,
        isbn: book.isbn
      }))
    } else {
      this.setState(() => ({ redirect: true }))
    }
  }

  handleChange (e) {
    const { target: { value, name } } = e
    this.setState(() => ({ [name]: value }))
  }

  async handleSubmit (e) {
    e.preventDefault()

    const { id, title, author, subject, length, publicationYear, publisher, isbn } = this.state
    const book = {
      title: title.trim(),
      author: author.trim(),
      subject: subject.trim(),
      publisher: publisher.trim(),
      isbn: isbn.trim(),
      length,
      publicationYear
    }

    this.setState(() => ({ saving: true }))

    if (!id) {
      const res = await fetch('/api/books', {
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        body: JSON.stringify(book)
      })
      if (res.ok) {
        this.setState(() => ({ redirect: true }))
        this.props.dispatch(showToast(this.props.R.strings.bookSaved))
      } else {
        this.setState(() => ({ saving: false }))
        this.props.dispatch(showToast(this.props.R.strings.savingFailedTryAgain))
      }
    } else {
      const res = await fetch(`/api/books/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'put',
        body: JSON.stringify(book)
      })
      if (res.ok) {
        this.setState(() => ({ redirect: true }))
        this.props.dispatch(showToast(this.props.R.strings.bookSaved))
      } else {
        this.setState(() => ({ saving: false }))
        this.props.dispatch(showToast(this.props.R.strings.savingFailedTryAgain))
      }
    }
  }

  render () {
    return this.state.redirect ?
      <Redirect to='/books' /> :
      <BookForm {...this.props} {...this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />
  }
}

BookFormContainer.propTypes = {
  R: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const stateToProps = ({ R }) => ({
  R
})

export default withRouter(connect(stateToProps)(BookFormContainer))
