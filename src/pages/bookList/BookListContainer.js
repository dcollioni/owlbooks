import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

class BookListContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: [{
        id: '1',
        title: 'A Guerra dos Tronos',
        author: 'RR Martin',
        subject: 'Ficção',
        length: 584,
        publisher: '',
        isbn: '',
        publicationDate: new Date()
      }, {
        id: '2',
        title: 'Harry Potter e a Pedra Filosofal',
        author: 'JK Rowling',
        subject: 'Ficção',
        length: 320,
        publisher: '',
        isbn: '',
        publicationDate: new Date()
      }, {
        id: '3',
        title: 'O Código Da Vinci',
        author: 'Dan Brown',
        subject: 'Ficção',
        length: 691,
        publisher: '',
        isbn: '',
        publicationDate: new Date()
      }, {
        id: '4',
        title: 'O Livro dos Títulos',
        author: 'Pedro Cardoso',
        subject: 'Romance',
        length: 367,
        publisher: '',
        isbn: '',
        publicationDate: new Date()
      }]
    }
  }

  render () {
    return (
      <BookList books={this.state.books} />
    )
  }
}

BookListContainer.propTypes = {
  user: PropTypes.object
}

export default BookListContainer
