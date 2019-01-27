import React, { Component } from "react";
import axios from 'axios';

class Login extends Component {
    


    state = {
        email: "",
        password: ""
    };


    updateAccount = async (e) => {
        e.preventDefault();
        
        const requestbody = {
            email: e.target.elements.email.value,
            username: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        const api_call = await fetch('http://localhost:8080/QuizAPI/api/account/updateAccount/' + requestbody.email,{
          method:'PUT',
          body: JSON.stringify(requestbody)
        
        });
        const response = await api_call.json();
        console.log(response);
    
    }


    deleteAccount = async (e) => {
        e.preventDefault();
        const requestbody = {
            email: e.target.elements.email.value,
           
        }
        const api_call = await fetch("http://localhost:8080/QuizAPI/api/account/deleteAccount/" + requestbody,{
            method: 'DELETE',
        });
    
        const  response = await api_call.json();
        console.log(response); 
    }
    


createAccount = async (e) => {
    e.preventDefault();
    const requestbody = {
        email: e.target.elements.email.value,
        username: e.target.elements.email.value,
        password: e.target.elements.password.value
    }
    const api_call = await fetch('http://localhost:8080/QuizAPI/api/account/createAccount',{
        method: 'GET',
        body: JSON.stringify(requestbody)
    });

    const  response = await api_call.json();
    console.log(response); 
}


verifyAccount = async (e) => {
    e.preventDefault();
    const requestbody = {
        email: e.target.elements.email.value,
        password: e.target.elements.password.value
    }
    const api_call = await fetch('http://localhost:8080/QuizAPI/api/account/verifyAccount',{
      method:'POST',
      body: JSON.stringify(requestbody)
    
    });
    const response = await api_call.json();
    console.log(response);

}

render(){
    return(
        <div>
          <form className="login"onSubmit={this.verifyAccount}>
          <input name="email" type="text" placeholder="Enter email address here"/>
          <input name="password" type="password" placeholder="Enter password here"/> 
          <button>Submit</button>
          </form>  
          <form className="SignUp"onSubmit={this.createAccount}>
          <input name="email" type="text" placeholder="Enter email address here"/>
          <input name="username" type="text" placeholder="Enter username here"/>
          <input name="password" type="password" placeholder="Enter password here"/> 
          <button>Create account</button>
          </form>  
          <form className="Delete"onSubmit={this.deleteAccount}>
          <input name="email" type="text" placeholder="Enter email address here"/>
          <button>Delete account</button>
          </form>  
          <form className="UpdateAccount"onSubmit={this.updateAccount}>
          <input name="email" type="text" placeholder="Enter email address here"/>
          <input name="username" type="text" placeholder="Enter username here"/>
          <input name="password" type="password" placeholder="Enter password here"/> 
          <button>Update account</button>
          </form> 

        </div>
    )
}



}
export default Login;