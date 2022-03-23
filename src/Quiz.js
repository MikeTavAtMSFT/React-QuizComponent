import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }

    render() {
        const isQuizEnd = quizData.quiz_questions.length == this.state.quiz_position - 1 ? true : false;
        return (
            <div>
                { isQuizEnd ? (
                    <QuizEnd />
                ) : (
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>
                )}
            </div>
            );
    }
}

export default Quiz