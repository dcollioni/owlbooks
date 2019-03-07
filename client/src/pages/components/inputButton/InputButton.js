import React from 'react'
import PropTypes from 'prop-types'
import './InputButton.css'

const InputButton = ({ type, text, disabled }) => (
  <button className='input-button' type={type} disabled={disabled}>{text}</button>
)

InputButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default InputButton
