import React, { Component } from 'react';



class DisplayQuiz extends Component {
    constructor() {
        super();

    this.clickTrue = this.clickTrue.bind(this);
    this.clickFalse = this.clickFalse.bind(this);
   
    }

    state={
        question: undefined,
        answer: undefined,
        counter: 0,
        
    }

    clickTrue(){
        if (this.state.answer == "True"){
          console.log("Correct")
          this.setState({
            counter: this.state.counter +1
          })
        }
        else console.log("blah")
      }

      clickFalse(){
        if(this.state.answer == "False"){
          console.log("Correct")
          this.setState({
            counter: this.state.counter +1
          })
        }
        else console.log("blah")
      }
      
      componentDidMount(){
          this.setState({
              question: this.props.item.question,
              answer: this.props.item.answer
          })
      }

    

    render() {
        return (
            <div className="quiz">
                <p>{this.props.item.question}</p>
                <button name="True" onClick={this.clickTrue}>True</button> 
                <button name="False" onClick={this.clickFalse}> False </button> 
                <p>
            Score:&nbsp;{this.state.counter}
          </p>
            </div>
        );
    }
}

export default DisplayQuiz;