import React from 'react';
const Question = (props) => {
  return(
       <div>  
       {props.question && <p>Question: {props.question}</p>}
     
       
       </div>
   )
}
export default Question;