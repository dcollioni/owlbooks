import React from 'react'
import PropTypes from 'prop-types'
import './Signin.css'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'

const Signin = ({ R, onGoogleSignInSuccess, onGoogleSignInFailure, onFacebookSignInSuccess, onFacebookSignInFailure }) => {
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
        buttonText={R.strings.signInWithGoogle}
        cookiePolicy={'single_host_origin'} />

      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        fields='name,email,picture'
        icon='fa-facebook'
        textButton={R.strings.signInWithFacebook}
        cssClass='facebook-button'
        callback={onFacebookSignInSuccess}
        onFailure={onFacebookSignInFailure} />
    </div>
  </div>
)}

Signin.propTypes = {
  R: PropTypes.object.isRequired
}

export default Signin
