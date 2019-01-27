import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Question from './components/Question.js';
import Answer from './components/Answer.js';
import Timer from './components/Timer.js';
import Quiz from './Quiz.js'


class App extends Component {
    constructor() {
        super();

    this.clickTrue = this.clickTrue.bind(this);
    this.clickFalse = this.clickFalse.bind(this);
   
   
    }

    state = {
      question: undefined,
      answer: undefined,
      questionList: [],
      counter: 0
    }

getQuestion = async (e) => {
  e.preventDefault();
  const api_call = await fetch('http://localhost:8080/QuizAPI/api/question/getQuestion');
  const response = await api_call.json();
  
  const tempQuestionList = []
  var i= 0
    for(let i=0; i< response.length; i++){
    let tempQuestion = {
        id: i,
        question: response[i].question,
        answer: response[i].answer,
        questionId: response[i].questionId
    }
      tempQuestionList.push(tempQuestion);
    }
  console.log(response);

  this.setState({
    question: response[0].question,
    answer: response[0].answer,
    questionList: tempQuestionList,
    counter: 0
  });

}

clickTrue(){
  if (this.state.answer == "True"){
    console.log("Correct")
    this.setState({
      counter: this.state.counter +1
    })
  }
  else console.log("blah")
}

clickFalse(){
  if(this.state.answer == "False"){
    console.log("Correct")
  }
  else console.log("blah")
}

  render() {
    return (
      <div className="App">
        <Titles/>
        <Form getQuestion={this.getQuestion} />
        <Question
        question = {this.state.question} 
        />
      <Answer clickTrue={this.clickTrue}
      clickFalse={this.clickFalse}/>
      <Timer start/>
          <p>
            Score:&nbsp;{this.state.counter}
          </p>
      </div>
    );
  }
}

export default App;
