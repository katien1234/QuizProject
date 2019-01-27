import React, { Component } from 'react';
import DisplayQuiz from './components/DisplayQuiz';

class Quiz extends Component {

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
              answer: response[i].answer
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


    render() {
      return (
        <div className="Quiz">
        <button onClick={this.getQuestion}>Start</button>
          {this.state.questionList.map((item,key) => 
            <DisplayQuiz item={item} key={item.id}/>)}
  
        </div>
        
      );
    }
  }
  
  export default Quiz;
  