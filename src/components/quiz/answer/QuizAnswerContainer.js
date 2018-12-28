import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QuizAnswer from './QuizAnswer'

class QuizAnswerContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: '',
      name: '',
      question: undefined,
      answer: '',
      lastAnswers: []
    }

    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this)
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this)
  }

  componentDidMount () {
    const { id, questionId } = this.props.match.params

    this.setState(() => ({
      id,
      name: 'Q1',
      question: {
        order: 1,
        description: 'Qual sua cor preferida?',
        answers: 25
      },
      lastAnswers: [
        {
          id: 'a',
          description: 'vermelho',
          user: {
            name: 'Vanessa Santos',
            picture: 'https://pmctvline2.files.wordpress.com/2016/05/person-of-interest-root-dies-amy-acker.jpg'
          },
          createdAt: new Date(2018, 11, 27, 11, 15),
          likes: 6
        },
        {
          id: 'b',
          description: 'amarelo',
          user: {
            name: 'Diego Machado',
            picture: 'https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/avatars/9/c7/ef6/9c7ef618-3f03-11e7-97f0-2336bd14c3a5.857d25d6b9c119509ea07d5ec74da1ba.png'
          },
          createdAt: new Date(2018, 11, 27, 10, 47),
          likes: 4
        }
      ]
    }))
  }

  handleChangeAnswer (e) {
    const { target: { value } } = e
    this.setState(() => ({ answer: value }))
  }

  handleSubmitAnswer (e) {
    e.preventDefault()
    const { answer } = this.state
    console.log({answer})
  }

  render () {
    return (
      <QuizAnswer
        id={this.state.id}
        name={this.state.name}
        question={this.state.question}
        answer={this.state.answer}
        lastAnswers={this.state.lastAnswers}
        onChangeAnswer={this.handleChangeAnswer}
        onSubmitAnswer={this.handleSubmitAnswer} />
    )
  }
}

QuizAnswerContainer.propTypes = {
  user: PropTypes.object
}

export default QuizAnswerContainer
