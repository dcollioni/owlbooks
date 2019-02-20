import React from 'react'
import './Home.css'
import BookListContainer from './../bookList/BookListContainer'
import FloatingButton from './../floatingButton/FloatingButton'
// import { ReactComponent as AddIcon } from './../../svg/ic_add.svg'

const Home = ({ books }) => (
  <div id='home'>
    <header>
      <h2>My books</h2>
    </header>
    <BookListContainer books={books} />
    <FloatingButton icon='add' url='/books/new' title='Add book' />
  </div>
)

Home.propTypes = {
}

export default Home
