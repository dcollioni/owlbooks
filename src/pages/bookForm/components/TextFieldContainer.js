import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from './TextField'

class TextFieldContainer extends Component {
  render () {
    return (
      <TextField {...this.props} />
    )
  }
}

TextFieldContainer.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  dataListItems: PropTypes.array
}

export default TextFieldContainer
