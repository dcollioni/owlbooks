import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => (
  <div id='home'>
    <header>
      <h2>My books</h2>
    </header>
    <div className='list'>
      <Link className='item' to=''>
        <span>Harry Potter e a Pedra Filosofal</span>
        <span>JK Rowling</span>
        <span>Ficção</span>
        <span>240</span>
      </Link>
      <Link className='item' to=''>
        <span>Fortaleza Digital</span>
        <span>Dan Brown</span>
        <span>Ficção</span>
        <span>520</span>
      </Link>
    </div>
    <Link className='floating-button add' to='/' title='Add book' />
  </div>
)

Home.propTypes = {
}

export default Home
