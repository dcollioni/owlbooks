import React from 'react'
import PropTypes from 'prop-types'
import './Signup.css'
import InputField from '../components/inputField/InputField'
import InputButton from '../components/inputButton/InputButton'
import { Link } from 'react-router-dom'

const Signup = ({ R, firstName, lastName, email, password, password2, onChange, onSubmit, loading }) => (
  <div id='signup'>
    <header>
      <h2>{R.strings.createYourAccount}</h2>
    </header>
    <form method='post' action='/' onSubmit={onSubmit}>
    <InputField
        label={R.strings.firstName}
        placeholder='John'
        name='firstName'
        value={firstName}
        onChange={onChange}
        pattern='.*[\w]+.*'
        readOnly={loading}
        required
        maxLength={50}
        autoFocus />
      <InputField
        label={R.strings.lastName}
        placeholder='Snow'
        name='lastName'
        value={lastName}
        onChange={onChange}
        pattern='.*[\w]+.*'
        readOnly={loading}
        required
        maxLength={50} />
      <InputField
        type='email'
        label={R.strings.email}
        placeholder='john.snow@north.com'
        name='email'
        value={email}
        onChange={onChange}
        readOnly={loading}
        required
        maxLength={100} />
      <InputField
        type='password'
        label={R.strings.password}
        placeholder='d43n3ry$'
        name='password'
        value={password}
        onChange={onChange}
        readOnly={loading}
        required
        minLength={6}
        maxLength={50} />
      <InputField
        type='password'
        label={R.strings.confirmPassword}
        placeholder='d43n3ry$'
        name='password2'
        value={password2}
        onChange={onChange}
        readOnly={loading}
        required
        minLength={6}
        maxLength={50}
        pattern={password} />
      <div>
        <InputButton type='submit' text={loading ? R.strings.creatingAccount : R.strings.createAccount} disabled={loading} />
      </div>
      <div>
        <Link to='/signin'>{R.strings.signin}</Link>
      </div>
    </form>
  </div>
)

Signup.propTypes = {
  R: PropTypes.object.isRequired
}

export default Signup
