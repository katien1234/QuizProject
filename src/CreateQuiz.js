import React, { Component } from 'react';

class CreateQuiz extends Component {


    state = {
        question: "",
        answer: "",
        category: ""
    };

 deleteQuestion = async (e) => {
        e.preventDefault();
        const requestbody = {
            question: e.target.elements.question.value,
           
        }
        const api_call = await fetch('http://localhost:8080/QuizAPI/api/question/deleteQuestion/' + requestbody,{
            method: 'DELETE',
        });
    
        const  response = await api_call.json();
        console.log(response); 
    }

createQuestion = async (e) => {
    e.preventDefault();
    const requestbody = {
        question: e.target.elements.question.value,
        answer: e.target.elements.answer.value,
        category: e.target.elements.category.value
    }
    const api_call = await fetch('http://localhost:8080/QuizAPI/api/question/createQuestion',{
        method: 'POST',
        body: JSON.stringify(requestbody)
    });

    const  response = await api_call.json();
    console.log(response); 
}

updateQuestion = async (e) => {
        e.preventDefault();
        
        const requestbody = {
            question: e.target.elements.question.value,
            answer: e.target.elements.answer.value,
            category: e.target.elements.category.value
        }
        const api_call = await fetch('http://localhost:8080/QuizAPI/api/question/updateQuestion/' + requestbody,{
          method:'PUT',
          body: JSON.stringify(requestbody)
        
        });
        const response = await api_call.json();
        console.log(response);
    
    }

getQuestion = async (e) => {
        e.preventDefault();
        const requestbody = {
            question: e.target.elements.question.value,
           
        }
        const api_call = await fetch('http://localhost:8080/QuizAPI/api/question/getQuestion/' + requestbody,{
            method: 'GET',
        });
    
        const  response = await api_call.json();
        console.log(response); 
    }

render(){
    return(
        <div>
           <form className="createQuestion"onSubmit={this.createQuestion}>
          <input name="question" type="text" placeholder="Question"/>
           <input name="answer" type="text" placeholder="Answer: True or False"/>
            <input name="category" type="text" placeholder="Username or Category"/>
          <button>Create a question!</button>
           </form> 
          <form className="updateQuestion"onSubmit={this.updateQuestion}>
          <input name="question" type="text" placeholder="Question"/>
           <input name="answer" type="text" placeholder="Answer: True or False"/>
            <input name="category" type="text" placeholder="Username or Category"/>
          <button>Update question</button>
          <form className="deleteQuestion"onSubmit={this.deleteQuestion}>
          <input name="question" type="text" placeholder="Question"/>
          <button>Delete question</button>
          </form> 
          <form className="getQuestion"onSubmit={this.getQuestion}>
          <input name="question" type="text" placeholder="Question"/>
          <button>Get questions</button>
          </form> 
          </form> 
        </div>
    )
}



}

export default CreateQuiz;