import React from 'react'
import PropTypes from 'prop-types'
import InputButton from './../components/inputButton/InputButton'
import './Settings.css'

const Settings = ({ R, user, onClickSignOut }) => (
  <div id='settings'>
    <header>
      <h2>{R.strings.settings}</h2>
    </header>
    <div className='wrapper'>
      <div className='user-info'>
        <div className='picture' style={{backgroundImage: `url(${user.picture})`}} />
        <div className='info'>
          <h3>{user.name}</h3>
          <p className='provider'>
            {R.strings.signedInWith} <span>{user.provider}</span>
          </p>
        </div>
        <InputButton text={R.strings.signOut} onClick={onClickSignOut} />
      </div>
      <div className='language-info'>
        <h3>{user.name}</h3>
        <p className='provider'>
          {R.strings.signedInWith} <span>{user.provider}</span>
        </p>
      </div>
    </div>
  </div>
)

Settings.propTypes = {
  R: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onClickSignOut: PropTypes.func.isRequired
}

export default Settings
