import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Quiz from './Quiz'

class QuizContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: '',
      name: '',
      questions: []
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params

    this.setState(() => ({
      id,
      name: 'Q1',
      questions: [
        { order: 1, description: 'Qual sua cor preferida?', answers: 25 },
        { order: 2, description: 'Qual seu time?', answers: 18 },
        { order: 3, description: 'Qual seu signo?', answers: 14 },
        { order: 4, description: 'Qual seu maior defeito?', answers: 10 }
      ]
    }))
  }

  render () {
    return (
      <Quiz id={this.state.id} name={this.state.name} questions={this.state.questions} />
    )
  }
}

QuizContainer.propTypes = {
  user: PropTypes.object
}

export default QuizContainer
