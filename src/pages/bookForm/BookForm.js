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
        <input type='text' name='title' autoFocus />
      </label>
      <label>
        <span>{R.strings.author}</span>
        <input type='text' name='author' />
      </label>
      <label>
        <span>{R.strings.subject}</span>
        <input type='text' name='subject' list='subjectList' />
        <datalist id='subjectList'>
          <option value='Ação e Aventura' />
          <option value='Biografia' />
          <option value='Ficção' />
          <option value='Romance' />
          <option value='Terror' />
        </datalist>
      </label>
      <label>
        <span>{R.strings.length}</span>
        <input type='number' min={0} name='length' />
      </label>
      <label>
        <span>{R.strings.publicationYear}</span>
        <input type='number' max={9999} name='publicationYear' />
      </label>
      <label>
        <span>{R.strings.publisher}</span>
        <input type='text' name='publisher' />
      </label>
      <label>
        <span>{R.strings.isbn}</span>
        <input type='text' name='isbn' />
      </label>
      <div>
        <button type='submit'>{R.strings.saveBook}</button>
      </div>
    </form>
  </div>
)

BookForm.propTypes = {
}

export default BookForm
