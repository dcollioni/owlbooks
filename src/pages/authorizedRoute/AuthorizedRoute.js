import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import Fetcher from './../../utils/Fetcher'

class AuthorizedRoute extends Component {
  render () {
    const { component: Component, user, ...rest } = this.props
    return (
      <Route {...rest} render={props => {
        if (!user) {
          return <Redirect to='/login' />
        }

        props.user = user
        props.fetcher = new Fetcher(user.token)
        return <Component {...props} />
      }} />
    )
  }
}

AuthorizedRoute.propTypes = {
  user: PropTypes.object
}

const stateToProps = ({ user }) => ({
  user
})

export default connect(stateToProps)(AuthorizedRoute)
