import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookForm from './BookForm'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class BookFormContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <BookForm {...this.props} />
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
