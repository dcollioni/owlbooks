import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './QuizAnswer.css'
// import LikeSvg from './../../../like.svg'
import LikeSvg from './../../../svg/like.svg';

const QuizAnswer = ({ id, name, question, answer, lastAnswers, onChangeAnswer, onSubmitAnswer }) => (
  <div id='quiz-answer'>
    <header>
      <h2>{name}</h2>
      <h3>Questionário</h3>
      <Link to={`/q/${id}/answer`} className='next-question'>Próxima pergunta</Link>
    </header>
    {question && (
      <div className='content'>
        <div className='question'>
          <span className='order'>{question.order}</span>
          <span className='description'>{question.description}</span>
          <span className='answers'>{question.answers}</span>
        </div>
        <div className='answer'>
          <form method='post' onSubmit={onSubmitAnswer}>
            <input type='text' name='answer' value={answer} maxLength='240' placeholder='Sua resposta' onChange={onChangeAnswer} required autoFocus />
            <input type='submit' value='Enviar resposta' />
          </form>
        </div>
        <div className='last-answers'>
          <ul>
            {lastAnswers.map(a => (
              <li key={a.id}>
                <span className='picture'>
                  <img src={a.user.picture} />
                </span>
                <span>
                  <p className='description'>{a.description}</p>
                  <p className='time'>{a.createdAt.toLocaleDateString()}</p>
                </span>
                <span className='action'>
                  {/* <button className='like' /> */}
                  <LikeSvg />
                  <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <p className='likes'>{a.likes}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </div>
)

QuizAnswer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  question: PropTypes.object,
  answer: PropTypes.string.isRequired,
  lastAnswers: PropTypes.array.isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired
}

export default QuizAnswer
