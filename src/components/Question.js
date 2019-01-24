import React from 'react';
const Question = (props) => {
  return(
       <div>  
       {props.question && <p>Question: {props.question}</p>}
      <button> True </button> 
      <button> False </button> 
       
       </div>
   )
}
export default Question;