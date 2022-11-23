import React  from "react";
import Question from "./Question";

const QuestionsList =({questionsList}) =>{
    return(
      <>
      {
         questionsList?.map((question) =>  (

            <Question question = {question} key={question.id}/>

          )
          )
         }
         
      </>
    )
}

export default QuestionsList