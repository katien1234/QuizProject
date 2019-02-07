import React, { Component } from 'react';
import DisplayQuiz from './components/DisplayQuiz';
import './CreateQuiz.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


class Quiz extends Component {

  state = {
    question: undefined,
    answer: undefined,
    quizList: [],
    quizListCat: [],
    counter: 0,
  }


  getQuiz = async (e) => {
    e.preventDefault();
    const api_call = await fetch('http://localhost:1337/localhost:8080/QuizAPI/api/quiz/getQuiz');
    const response = await api_call.json();

    const tempQuizList = []
    var i = 0
    for (let i = 0; i < response.length; i++) {
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

  getQuizByCat = async (e) => {
    e.preventDefault();
    try {
      const api_call = await fetch('http://localhost:1337/localhost:8080/QuizAPI/api/quiz/getQuizByCat/' + e.target.elements.category.value);
      const response = await api_call.json();
      const tempQuizListCat = []
      var i = 0
      for (let i = 0; i < response.length; i++) {
        let tempQuizCat = {
          id: i,
          question: response[i].question,
          answer: response[i].answer
        }
        tempQuizListCat.push(tempQuizCat);
      }
      console.log(response);

      this.setState({
        question: response[0].question,
        answer: response[0].answer,
        quizListCat: tempQuizListCat,
      });
    }
    catch (error) {
      console.log("Error please try again" + error);
      toast("Please select a category");
    }
  }


  render() {
    return (
      <div>
        <div className="Quiz">
          <button onClick={this.getQuiz}>Start</button>
          {this.state.quizList.map((item, key) =>
            <DisplayQuiz item={item} key={item.id} />)}
        </div>
        <div className="QuizByCat">
          <form className="getQuizByCat" onSubmit={this.getQuizByCat}>
            <input name="category" type="text" placeholder="Username or Category" required />
            {this.state.quizListCat.map((item, key) =>
              <DisplayQuiz item={item} key={item.id} />)}
            <button>Get questions by category</button>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Quiz;
