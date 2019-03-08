import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Signup from './Signup'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { showToast } from '../../actions'
const { fetch, confirm } = window

class SignupContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const { target: { value, name } } = e
    this.setState(() => ({ [name]: value }))
  }

  async handleSubmit (e) {
    e.preventDefault()
  }

  render () {
    return <Signup {...this.props} {...this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />
  }
}

SignupContainer.propTypes = {
  R: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const stateToProps = ({ R }) => ({
  R
})

export default withRouter(connect(stateToProps)(SignupContainer))
