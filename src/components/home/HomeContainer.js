import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Home from './Home'

class HomeContainer extends Component {
  render () {
    return (
      <Home user={this.props.user} />
    )
  }
}

HomeContainer.propTypes = {
  user: PropTypes.object
}

export default HomeContainer
