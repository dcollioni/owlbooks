import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = ({ user, perques }) => (
  <div id='home'>
    <header>
      <h2>Questionários</h2>
    </header>
    <ul className='perque-list'>
      {perques.map(perque => (
        <li key={perque.id}>
          <Link to={`/q/${perque.id}`}>
            <h3>{perque.name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

Home.propTypes = {
  user: PropTypes.object,
  perques: PropTypes.array.isRequired
}

export default Home
