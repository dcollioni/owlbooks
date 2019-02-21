import React from 'react'
import PropTypes from 'prop-types'
import './BookForm.css'

const BookForm = ({ R }) => (
  <div id='book-form'>
    <header>
      <h2>Book form</h2>
    </header>
    <form method='post' action='/'>
      <label>
        {R.strings.title}
        <input type='text' name='title' />
      </label>
    </form>
  </div>
)

BookForm.propTypes = {
}

export default BookForm
