import React, { Component } from 'react';
import DisplayQuiz from './components/DisplayQuiz';
import Timer from './components/Timer';
import Quiz from './Quiz';

class MasterQuiz extends Component {



    render() {
      return (
        <div className="MasterQuizText">
        <h1> Test yourself </h1>
        <h2>True or false!</h2>
        <Timer/> <br/>
        <Quiz/>
        
         <br/>
 
        </div>
        
      );
    }
  }
  
  export default MasterQuiz;
  