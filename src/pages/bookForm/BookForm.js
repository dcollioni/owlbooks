import React from 'react'
import PropTypes from 'prop-types'
import './BookForm.css'

const BookForm = ({ R, pageTitle }) => (
  <div id='book-form'>
    <header>
      <h2>{pageTitle}</h2>
    </header>
    <form method='post' action='/'>
      <label>
        <span>{R.strings.title}</span>
        <input type='text' name='title' />
      </label>
      <label>
        <span>{R.strings.author}</span>
        <input type='text' name='author' />
      </label>
      <label>
        <span>{R.strings.subject}</span>
        <input type='text' name='subject' />
      </label>
      <label>
        <span>{R.strings.length}</span>
        <input type='text' name='length' />
      </label>
      <label>
        <span>{R.strings.publisher}</span>
        <input type='text' name='publisher' />
      </label>
      <label>
        <span>{R.strings.publisher}</span>
        <input type='text' name='publisher' />
      </label>
      <label>
        <span>{R.strings.isbn}</span>
        <input type='text' name='isbn' />
      </label>
      <label>
        <span>{R.strings.publicationDate}</span>
        <input type='text' name='publicationDate' />
      </label>
    </form>
  </div>
)

BookForm.propTypes = {
}

export default BookForm
