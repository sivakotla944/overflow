
import React, {useState}  from "react";
import { useDispatch ,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { askquestion } from "../../actions/question";


import  './AskQuestions.css';



const AskQuestions =() =>{

    const [questionTitle, setQuestionTitle] = useState('') 
    const [questionBody, setQuestionBody] = useState('') 
    const [questionTags, setQuestionTags] = useState('') 

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const User = useSelector((state) =>(state.currentUserReducer));


    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(questionTitle,questionBody,questionTags)
       
        // dispatch(askquestion({questionTitle , questionBody , questionTags , userPosted : User.result.name} , navigate))

    }

    const handleEnter = (e)=>{
        if(e.key=== 'Enter'){
            questionBody(questionBody+ "\n")
        }
    }

   
    return(
       <div className="ask-questions">
        <div className="ask-ques-container">
            <h1>Ask Public Questions</h1>
          <form  onClick={handleSubmit}>
            <div className="ask-form-container">
                <label htmlFor="ask-ques-title">
                    <h2>Title</h2>
                    <p>
                    Be specific and imagine you’re asking a question to another person.
                    </p>
                    <input type="text" id="ask-ques-title" onChange={(e)=> {setQuestionTitle(e.target.value)}} placeholder="eg: is there is an R functions"/>
                </label>
                <label htmlFor="ask-ques-body">
                    <h2>body</h2>
                    <p>
                    Introduce the problem and expand on what you put in the title. Minimum 20 characters.
                    </p>
                    <textarea type="text" onChange={(e)=> {setQuestionBody(e.target.value)}} id="ask-ques-body" rows="10" onKeyPress={handleEnter}/>
             
                  
                </label>
                <label htmlFor="ask-ques-tags">
                    <h2>Tags</h2>
                    <p>
                    Add  upto 5 tags  to describe
                    </p>
                    <input type="text" id="ask-ques-tags" onChange={(e)=> {setQuestionTags(e.target.value.split(" "))}} placeholder="#java #python"/>
                </label>
            </div>
         
          <input className="review-btn" type="submit" value="Review your question" />
          </form>
        </div>

   

       </div>

        
        


        
     
    )
}


export default AskQuestions