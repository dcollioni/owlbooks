import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from './../../actions'
import App from './App'
const { confirm } = window

class AppContainer extends Component {
  constructor (props) {
    super(props)

    this.handleClickUser = this.handleClickUser.bind(this)
  }
  
  handleClickUser () {
    const confirmLogout = confirm(this.props.R.strings.wantToSignOut)
    if (confirmLogout) {
      this.props.dispatch(logout())
    }
  }
  
  render () {
    return (
      <App {...this.props} onClickUser={this.handleClickUser} />
    )
  }
}

AppContainer.propTypes = {
  R: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
}

const stateToProps = ({ R, user }) => ({
  R,
  user
})

export default withRouter(connect(stateToProps)(AppContainer))
