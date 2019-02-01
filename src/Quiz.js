import React, { Component } from 'react';
import DisplayQuiz from './components/DisplayQuiz';
import Timer from './components/Timer';


class Quiz extends Component {

    state = {
        question: undefined,
        answer: undefined,
        quizList: [],
        counter: 0,
      }

 
    getQuiz = async (e) => {
        e.preventDefault();
        const api_call = await fetch('http://localhost:8080/QuizAPI/api/quiz/getQuiz');
        const response = await api_call.json();
        
        const tempQuizList = []
        var i= 0
          for(let i=0; i< response.length; i++){
          let tempQuiz = {
              id: i,
              question: response[i].question,
              answer: response[i].answer
          }
            tempQuizList.push(tempQuiz);
          }
        console.log(response);
      
        this.setState({
          question: response[0].question,
          answer: response[0].answer,
          quizList: tempQuizList,
          counter: 0
        });
      
      }
 

    render() {
      return (
        <div className="Quiz">
        <button onClick={this.getQuiz}>Start</button>
        
          {this.state.quizList.map((item,key) => 
            <DisplayQuiz item={item} key={item.id}/>)}
 
        </div>
        
      );
    }
  }
  
  export default Quiz;
  