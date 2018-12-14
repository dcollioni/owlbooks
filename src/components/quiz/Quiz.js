import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Quiz.css'

const Quiz = ({ id, name, questions }) => (
  <div id='quiz'>
    <header>
      <h2>{name}</h2>
      <h3>Questionário</h3>
    </header>
    <div className='questions'>
      <ul>
        {questions.map(question => (
          <li key={question.order}>
            <span className='order'>{question.order}</span>
            <span className='description'>{question.description}</span>
            <span className='answers'>{question.answers}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

Quiz.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired
}

export default Quiz
