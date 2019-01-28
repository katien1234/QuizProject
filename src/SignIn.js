import React, { Component } from "react";
import axios from 'axios';

class SignIn extends Component {
    


    state = {
        email: "",
        password: ""
    };

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
          <button>Login</button>
          
          </form> 
        </div>
    )
}



}
export default SignIn;