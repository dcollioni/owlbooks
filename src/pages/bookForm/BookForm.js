import React from 'react'
import PropTypes from 'prop-types'
import './BookForm.css'
import TextFieldContainer from './components/TextFieldContainer'

const BookForm = ({ R, pageTitle, title, author, subject, length, publicationYear, publisher, isbn, onChange, onSubmit }) => (
  <div id='book-form'>
    <header>
      <h2>{pageTitle}</h2>
    </header>
    <form method='post' action='/' onSubmit={onSubmit}>
      <TextFieldContainer
        label={R.strings.title}
        name='title'
        value={title}
        onChange={onChange} autoFocus />

      <TextFieldContainer
        label={R.strings.author}
        name='author'
        value={author}
        onChange={onChange} />

      <TextFieldContainer
        label={R.strings.subject}
        name='subject'
        value={subject}
        onChange={onChange}
        dataListItems={[
          R.strings.actionAndAdventure,
          R.strings.biography,
          R.strings.fiction,
          R.strings.romance,
          R.strings.terror
        ]} />

      <TextFieldContainer
        label={R.strings.length}
        name='length'
        value={length}
        onChange={onChange}
        type='number'
        min={0} />

      <TextFieldContainer
        label={R.strings.publicationYear}
        name='publicationYear'
        value={publicationYear}
        onChange={onChange}
        type='number'
        max={9999} />

      <TextFieldContainer
        label={R.strings.publisher}
        name='publisher'
        value={publisher}
        onChange={onChange} />

      <TextFieldContainer
        label={R.strings.isbn}
        name='isbn'
        value={isbn}
        onChange={onChange} />

      <div>
        <button type='submit'>{R.strings.saveBook}</button>
      </div>
    </form>
  </div>
)

BookForm.propTypes = {
  R: PropTypes.object.isRequired,
  pageTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  publicationYear: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default BookForm
