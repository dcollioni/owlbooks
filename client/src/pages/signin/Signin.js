import React from 'react'
import PropTypes from 'prop-types'
import './Signin.css'
import InputField from '../components/inputField/InputField'
import InputButton from '../components/inputButton/InputButton'
import { Link } from 'react-router-dom'

const Signin = ({ R, email, password, onChange, onSubmit }) => (
  <div id='signin'>
    <header>
      <h2>{R.strings.signin}</h2>
    </header>
    <form method='post' action='/' onSubmit={onSubmit}>
      <InputField
        type='email'
        label={R.strings.email}
        placeholder='john.snow@north.com'
        name='email'
        value={email}
        onChange={onChange}
        required
        autoFocus />
      <InputField
        type='password'
        label={R.strings.password}
        placeholder='d43n3ry$'
        name='password'
        value={password}
        onChange={onChange}
        required />
      <div>
        <InputButton type='submit' text={R.strings.signin} />
      </div>
      <div>
        <Link to='/signup'>{R.strings.createAccount}</Link>
      </div>
    </form>
  </div>
)

Signin.propTypes = {
  R: PropTypes.object.isRequired
}

export default Signin
