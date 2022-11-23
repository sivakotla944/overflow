import React from "react";
import { useSelector } from "react-redux";
import { useParams  } from "react-router-dom";
import upArrow from '../../assets/arrow-up.png';
import downArrow from '../../assets/downward-arrow.png';
import './QuestionsDetails.css';
import {Link } from 'react-router-dom';
import Avatar from '../../components/Avatar/Avatar'
// import DisplayAnswers  from "./DisplayAnswers";

const QuestionsDetails = () =>{

    const {id} =useParams()
    // const questionsList = useSelector (state => state.questionReducer)

    var questionsList = [{
        _id:'1',
        upVotes:2,
        downVotes:2,
        noOfAnswers : 2,
        questionTitle :"What is a function",
        questionBody : "It meant to be",
        questionTags :["java","node js", "react js"],
        userPosted:"mano",
        askedOn:"jan1",
        userId:1,
        answer : [{
                answerBody :"Answers",
               userAnswered:"kumar",
               answerOn : "jan1",
               userId :2,


        }]
    
    
    },

    {
        _id:'2',
        upVotes:2,
        downVotes:2,
        noOfAnswers : 2,
        questionTitle :"What is a function",
        questionBody : "It meant to be",
        questionTags :["java","node js", "react js"],
        userPosted:"mano",
        askedOn:"jan1",
        userId:2,
        answer : [{
                answerBody :"Answers",
               userAnswered:"kumar",
               answerOn : "jan1",
               userId :2,


        }]
    
    
    },


    {
        _id:'3',
        upVotes:2,
        downVotes:2,
        noOfAnswers : 2,
        questionTitle :"What is a function",
        questionBody : "It meant to be",
        questionTags :["java","node js", "react js"],
        userPosted:"mano",
        askedOn:"jan1",
        userId:3,
        answer : [{
                answerBody :"Answers",
               userAnswered:"kumar",
               answerOn : "jan1",
               userId :2,


        }]
    
    
    }
        
       
    ]
      





    return (
        <div className="question-details-page">
            <h2>Question details</h2>

            {
                questionsList.data === null ?
                <h2>......loading</h2>:
                <>
                {
                    questionsList.data?.filter(question => question._id === id).map(question => (
                        <div key={question._id}>
                            <section className="question-details-container">
                                <h1>{question.questionTitle}</h1>
                                <div className="question-details-container-2">
                               
                               
                                        <div className="question-votes">
                                            <  img src={upArrow} alt="uparrow" width="18" />
                                            <p>{question.upVotes  -  question.downVotes}</p>
                                            <img src={downArrow} alt="downarrow"   width="18"/>
                                        </div>
                                    <div style={{width : "100%"}} >
                                                 <p>{question.questionBody}</p>
                                         <div className="question-details-tags">
                                        {
                                            question.questionTags.map((tag) =>(
                                                <p key={tag}>{tag}</p>

                                            )


                                            )
                                        }
                                            </div>
                                         <div className="question-action-user">
                                        <div>
                                            <button type="button" >Share</button>
                                            <button type="button" >Delete</button> 
                                        </div>

                                        <div>
                                            <p>asked {question.askedOn}</p>
                                            <Link to={'/User/${question.userId}'}  className= "user-link" style={{color : '#0086d8'}}>
                                                <Avatar backgroundColor="orange" px= "8px " py = "5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div >{question.userPosted}</div>
                                            </Link>
                                            

                                        </div>
                                    </div>

                                </div>

                            </div>

                            </section>

                            {
                              question.noOfAnswers !==0 && (
                                        <section>
                                            <h3>{question.noOfAnswers} answers</h3>
                                            
                                              {/* <DisplayAnswers />   */}
                                            
                                        </section>



                              )

                            }

                            <section className="post-ans-container">
                                <h3>Your answers</h3>
                                <form >
                                    <textarea  id="" rows="10" cols="30"></textarea> <br/>
                                    <input type="submit" value="post your answers" className="post-ans-btn" />

                                </form>

                                <p>
                                    browse other tagged questions

                                    {
                                        question.questionTags.map((tag)=>(

                                            <Link to='/Tags' key={tag} className="ans-tags" > {tag} </Link>




                                        ))
                                    }

                                    Or 
                                        <Link to='/AskQuestions' style={{textDecoration :"none", color: "#009dff"}}> Ask your own question</Link>

                                </p>
                            </section>

                        </div>

                    ))
                }
                </>

            }

        </div>
    )
}

export default QuestionsDetails