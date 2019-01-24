import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Question from './components/Question.js';


class App extends Component {
    constructor() {
        super();
    }


    state = {
      question: undefined,
      answer: undefined
    }



getQuestion = async (e) => {
  e.preventDefault();
  const api_call = await fetch('http://localhost:8080/QuizAPI/api/question/getQuestion');
  const response = await api_call.json();
  console.log(response);

  this.setState({
    question: response[0].question,
    answer: response[0].answer
  })

}


  render() {
    return (
      <div className="App">
        <Titles/>
        <Form getQuestion={this.getQuestion} />
        <Question
        question = {this.state.question}
        />
     
      </div>
    );
  }
}

export default App;
