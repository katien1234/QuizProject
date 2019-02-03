import React, { Component } from "react";
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.min.css';


class Login extends Component {
    
    state = {
        email: "",
        password: ""
    };
    
   updateAccount = async (e) => {
        e.preventDefault();
        
        const requestbody = {
            email: e.target.elements.email.value,
            username: e.target.elements.username.value,
            password: e.target.elements.password.value
        }
        const api_call = await fetch('http://localhost:8080/QuizAPI/api/account/updateAccount/' + requestbody.email,{
          method:'PUT',
          body: JSON.stringify(requestbody)
        
        });
        const response = await api_call.json();
        console.log(response);
        toast("Account Successfully Updated");
    
    }


    deleteAccount = async (e) => {
        e.preventDefault();
        const requestbody = {
            email: e.target.elements.email.value,
           
        }
        const api_call = await fetch('http://localhost:8080/QuizAPI/api/account/deleteAccount/' + requestbody,{
            method: 'DELETE',
        });
    
        const  response = await api_call.json();
        console.log(response); 
        toast("Account Successfully Deleted");
    }
    


createAccount = async (e) => {
    e.preventDefault();
    const requestbody = {
        email: e.target.elements.email.value,
        username: e.target.elements.username.value,
        password: e.target.elements.password.value
    }
    const api_call = await fetch('http://localhost:8080/QuizAPI/api/account/createAccount',{
        method: 'POST',
        body: JSON.stringify(requestbody)
    });

    const  response = await api_call.json();
    console.log(response); 
    toast("Account Successfully Created");
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
    toast("Login Successful");

}

render(){
    return(
        <div className="All">
        <p clasName="TitleBox">
        <h1 className="Title"> Login or Sign Up </h1>
        </p>
        
          <form className="login"onSubmit={this.verifyAccount}>
          <input name="email" type="text" placeholder="Enter email address here"/><br/><br/>
          <input name="password" type="password" placeholder="Enter password here"/><br/><br/>
          <button>Login</button>
          </form>  
        
          <form className="SignUp"onSubmit={this.createAccount}>
          <input name="email" type="text" placeholder="Enter email address here"/><br/><br/>
          <input name="username" type="text" placeholder="Enter username here"/><br/><br/>
          <input name="password" type="password" placeholder="Enter password here"/><br/><br/>
          <button>Create account</button>
          </form>  
         
          <form className="Delete"onSubmit={this.deleteAccount}>
          <input name="email" type="text" placeholder="Enter email address here"/><br/><br/>
          <button>Delete account</button>
          </form>  
       
          <form className="UpdateAccount"onSubmit={this.updateAccount}>
          <input name="email" type="text" placeholder="Enter email address here"/><br/><br/>
          <input name="username" type="text" placeholder="Enter username here"/><br/><br/>
          <input name="password" type="password" placeholder="Enter password here"/><br/><br/>
          <button>Update account</button>
          </form> 
          <ToastContainer/>
        </div>
    )
}



}
export default Login;