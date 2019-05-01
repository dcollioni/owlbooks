import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Signin from './Signin'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { login, showToast } from '../../actions'
const { fetch, confirm } = window

class SigninContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      success: false,
    }

    this.handleGoogleSignInSuccess = this.handleGoogleSignInSuccess.bind(this)
    this.handleGoogleSignInFailure = this.handleGoogleSignInFailure.bind(this)
  }

  async handleGoogleSignInSuccess ({ googleId, tokenId, accessToken, tokenObj, profileObj }) {
    const res = await fetch('/api/auth/signin', {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify({ provider: 'google', tokenId })
    })

    if (res.ok) {
      const user = await res.json()
      this.props.dispatch(login(user))
      this.setState(() => ({ success: true }))
    } else {
      const errorMessage = this.props.R.strings.failedToSignin
      this.props.dispatch(showToast(errorMessage))
    }
  }

  async handleGoogleSignInFailure ({ error, details }) {
    console.log(error, details)
    const errorMessage = this.props.R.strings.failedToSignin
    this.props.dispatch(showToast(errorMessage))
  }

  render () {
    if (this.state.success) {
      return <Redirect to='/' />
    }

    return <Signin {...this.props} {...this.state}
      onGoogleSignInSuccess={this.handleGoogleSignInSuccess}
      onGoogleSignInFailure={this.handleGoogleSignInFailure} />
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
