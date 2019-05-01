import React from 'react'
import PropTypes from 'prop-types'
import './Signin.css'
import { GoogleLogin } from 'react-google-login'

const Signin = ({ R, onGoogleSignInSuccess, onGoogleSignInFailure }) => {
  return (
  <div id='signin'>
    <header>
      <h2>{R.strings.signin}</h2>
    </header>

    <div className='providers'>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={onGoogleSignInSuccess}
        onFailure={onGoogleSignInFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  </div>
)}

Signin.propTypes = {
  R: PropTypes.object.isRequired
}

export default Signin
