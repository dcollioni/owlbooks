import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({ type, name, label, value, dataListItems, onChange, ...props }) => (
  <label>
    <span>{label}</span>
    <input
      type={type || 'text'}
      name={name}
      value={value}
      list={dataListItems ? `${name}_items` : ''}
      onChange={onChange}
      {...props} />

    {dataListItems && (
      <datalist id={`${name}_items`}>
        {dataListItems.map(item => (
          <option key={item} value={item} />
        ))}
      </datalist>
    )}
  </label>
)

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  dataListItems: PropTypes.array
}

export default TextField
