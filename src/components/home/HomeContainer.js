import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Home from './Home'

class HomeContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      perques: [{ id: '1', name: 'Q1' }, { id: '2', name: 'Q2' }, { id: '3', name: 'Q3' }, { id: '4', name: 'Q4' }, { id: '5', name: 'Q5' }]
    }
  }

  render () {
    return (
      <Home user={this.props.user} perques={this.state.perques} />
    )
  }
}

HomeContainer.propTypes = {
  user: PropTypes.object
}

export default HomeContainer
