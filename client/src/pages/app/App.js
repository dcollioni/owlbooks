import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ToastContainer from './../components/toast/ToastContainer'
import './App.css'

const App = ({ children, user, onClickUser }) => {
  return (
    <main className={`app ${!user ? 'unauthorized' : ''}`}>
      <header className='app-header'>
        <h1 className='app-title'>
          <Link to='/'>owlbooks</Link>
        </h1>
        {user && 
          <span className='user'>
            <span className='wrapper' onClick={onClickUser}>
              <span className='picture' style={{backgroundImage: `url(${user.picture})`}}></span>
              <span className='name'>{user.name}</span>
            </span>
          </span>
        }
      </header>
      <section className="content">
        {children}
      </section>
      <footer>
      </footer>
      <ToastContainer />
    </main>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  user: PropTypes.object
}

export default App
