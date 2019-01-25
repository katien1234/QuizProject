import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Question from './components/Question.js';
import Answer from './components/Answer.js';


class App extends Component {
    constructor() {
        super();

    this.clickTrue = this.clickTrue.bind(this);
     this.clickFalse = this.clickFalse.bind(this);


    }

    state = {
      question: undefined,
      answer: undefined,
      questionList: []
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
        answer: response[i].answer
    }
      tempQuestionList.push(tempQuestion);
    }
  console.log(response);

  this.setState({
    question: response[0].question,
    answer: response[0].answer,
    questionList: tempQuestionList,
  });

}


clickTrue(){
  if (this.state.answer == "True"){
    console.log("Correct")
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
      </div>
    );
  }
}

export default App;
