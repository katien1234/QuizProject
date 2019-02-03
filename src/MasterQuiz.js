import React, { Component } from 'react';
import Timer from './components/Timer';
import Quiz from './Quiz';
import './components/Component.css';

class MasterQuiz extends Component {

    render() {
      return (
        <div className="MasterQuizText">
        <h1> Test yourself </h1>
        <h2>True or false!</h2>
        <div className="Quiz">
        </div>
        <Quiz/>
        <div className="Timer">
        <Timer/>
        </div>
        </div>
      );
    }
  }
  
  export default MasterQuiz;
  