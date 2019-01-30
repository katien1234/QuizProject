import React, { Component } from 'react';
import Quiz from './Quiz.js'
import Question from './components/Question.js'

class CreateQuiz extends Component {

 state = {
        question: undefined,
        answer: undefined,
        quizList: [],
        counter: 0
      }

   

 deleteQuiz = async (e) => {
        e.preventDefault();
        const requestbody = {
            question: e.target.elements.question.value,
            answer: e.target.elements.answer.value,
            category: e.target.elements.category.value
           
        }
        const api_call = await fetch('http://localhost:8080/QuizAPI/api/quiz/deleteQuiz/' + requestbody,{
            method: 'DELETE',
        });
    
        const  response = await api_call.json();
        console.log(response); 
    }

createQuiz = async (e) => {
    e.preventDefault();
    const requestbody = {
        question: e.target.elements.question.value,
        answer: e.target.elements.answer.value,
        category: e.target.elements.category.value
    }
    const api_call = await fetch('http://localhost:8080/QuizAPI/api/quiz/createQuiz',{
        method: 'POST',
        body: JSON.stringify(requestbody)
    });

    const  response = await api_call.json();
    console.log(response); 
}

updateQuiz = async (e) => {
        e.preventDefault();
        
        const requestbody = {
           question: e.target.elements.question.value,
            answer: e.target.elements.answer.value,
            category: e.target.elements.category.value
        }
        const api_call = await fetch('http://localhost:8080/QuizAPI/api/quiz/updateQuiz/' + requestbody.question,{
          method:'PUT',
          body: JSON.stringify(requestbody)
        
        });
        const response = await api_call.json();
        console.log(response);
    
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

   


render(){
    return(
        <div>
           <form className="createQuiz"onSubmit={this.createQuiz}>
          <input name="question" type="text" placeholder="Question"/>
           <input name="answer" type="text" placeholder="Answer: True or False"/>
            <input name="category" type="text" placeholder="Username or Category"/>
          <button>Create a question!</button>
           </form> 
          <form className="updateQuiz"onSubmit={this.updateQuiz}>
          <input name="question" type="text" placeholder="Question"/>
           <input name="answer" type="text" placeholder="Answer: True or False"/>
            <input name="category" type="text" placeholder="Username or Category"/>
          <button>Update question</button>
          </form>
          <form className="deleteQuiz"onSubmit={this.deleteQuiz}>
          <input name="question" type="text" placeholder="Question"/>
           <input name="answer" type="text" placeholder="Answer: True or False"/>
            <input name="category" type="text" placeholder="Username or Category"/>
          <button>Delete question</button>
          </form> 
         <Quiz/>
           <button onClick={this.getQuiz}>Get questions</button>
          <button onClick={this.getQuiz}>Start</button>
          {this.state.quizList.map((item,key) => 
            <Question item={item} key={item.id}/>)}
        </div>
    )
}



}

export default CreateQuiz;