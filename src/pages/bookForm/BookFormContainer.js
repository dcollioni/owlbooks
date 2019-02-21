import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookForm from './BookForm'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class BookFormContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pageTitle: ''
    }
  }

  componentDidMount () {
    const { R, match: { params: { id } } } = this.props

    this.setState(() => ({
      pageTitle: (id === 'new') ? R.strings.addNewBook : R.strings.editBook
    }))
  }

  render () {
    return (
      <BookForm {...this.props} {...this.state} />
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
