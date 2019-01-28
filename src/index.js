import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Quiz from './Quiz';
import CreateQuiz from './CreateQuiz'
import Login from './Login'


const routing = (
    <Router>
    <div>
          <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          </ul>
          <ul className="Login">
           <li> <Link to="/Login">Login or Sign Up</Link>
          </li>
          </ul>
          <ul className="StartButton">
           <li> <Link to="/Quiz">Take a Quiz!</Link>
          </li>
          </ul>
           <ul className="CreateQuiz">
           <li> <Link to="/CreateQuiz">Create a Quiz!</Link>
          </li>
          </ul>
        <Route exact path="/" component={App} />
        <Route path="/Quiz" component={Quiz} />
        <Route path="/CreateQuiz" component={CreateQuiz} />
        <Route path="/Login" component={Login} />
      </div>
    </Router>
    );
  
  
  
  ReactDOM.render(routing, document.getElementById('root'));
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();