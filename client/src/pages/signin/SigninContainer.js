import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Signin from './Signin'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { showToast } from '../../actions'
const { fetch, confirm } = window

class SigninContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
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
    return <Signin {...this.props} {...this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />
  }
}

SigninContainer.propTypes = {
  R: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const stateToProps = ({ R }) => ({
  R
})

export default withRouter(connect(stateToProps)(SigninContainer))
