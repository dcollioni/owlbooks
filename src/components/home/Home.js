import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import BookListContainer from './../bookList/BookListContainer'
// import { ReactComponent as AddIcon } from './../../svg/ic_add.svg'

const Home = ({ books }) => (
  <div id='home'>
    <header>
      <h2>My books</h2>
    </header>
    <BookListContainer books={books} />
    <Link className='floating-button add' to='/' title='Add book' />
  </div>
)

Home.propTypes = {
}

export default Home
