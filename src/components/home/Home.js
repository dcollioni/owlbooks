import React from 'react'
import './Home.css'

const Home = () => (
  <div id='home'>
    <header>
      <h2>My books</h2>
    </header>
    <div className='list'>
      <div className='item'>
        <span>Harry Potter e a Pedra Filosofal</span>
        <span>JK Rowling</span>
        <span>Ficção</span>
        <span>240</span>
      </div>
      <div className='item'>
        <span>Fortaleza Digital</span>
        <span>Dan Brown</span>
        <span>Ficção</span>
        <span>520</span>
      </div>
    </div>
  </div>
)

Home.propTypes = {
}

export default Home
