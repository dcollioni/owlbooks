import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookForm from './BookForm'

class BookFormContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <BookForm />
    )
  }
}

BookFormContainer.propTypes = {
  user: PropTypes.object
}

export default BookFormContainer
