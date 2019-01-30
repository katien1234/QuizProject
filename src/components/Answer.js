import React from 'react';
const Answer = (props) => {
  return(
       <div>  
       {props.quiz && <p>Question: {props.quiz}</p>}
      <button name="True" onClick={props.clickTrue}> True </button> 
      <button name="False" onClick={props.clickFalse}> False </button> 
       
       </div>
   )
}
export default Answer;