import React from "react";
import './HomeMainbar.css';
import { useLocation ,useNavigate} from 'react-router-dom';
import QuestionsList from "./QuestionsList";
import { useSelector } from "react-redux";



const HomeMainbar= () =>{

    const user =null;
    const location = useLocation();
    const navigate = useNavigate()


    const questionsList = useSelector (state => state.questionReducer);



    // var questionsList = [{
    //     id:1,
    //     votes:2,
    //     noOfAnswers : 2,
    //     questionTitle :"What is a function",
    //     questionTags :["java","node js", "react js"],
    //     userPosted:"mano",
    //     askedOn:"jan1"}
    //     ,
    //     {
    //         id:2,
    //         votes:3,
    //         noOfAnswers : 2,
    //         questionTitle :"What is a function",
    //         questionTags :["java","node js", "react js"],
    //         userPosted:"mano",
    //         askedOn:"jan1"}
    // ,
    //     {
    //         id:3,
    //         votes:0,
    //         noOfAnswers : 2,
    //         questionTitle :"What is a function",
    //         questionTags :["java","node js", "react js"],
    //         userPosted:"mano",
    //         askedOn:"jan1"
    //     },

    //     {
    //         id:4,
    //         votes:0,
    //         noOfAnswers : 2,
    //         questionTitle :"What is a function",
    //         questionTags :["java","node js", "react js"],
    //         userPosted:"mano",
    //         askedOn:"jan1"
    //     }

    // ]
      

    const  checkAuth = () =>{
        if(user === 1)
        {
            alert ("sign in or login to ask  a questions");
            navigate('/Auth')
        }
        else{
            navigate('./AskQuestions');
        }

        
        
    }


    


    return (
        <div className="main-bar">
            <div className="main-bar-header">
                {
                        location.pathname === '/' ? <h2>Top Questions</h2> : <h2>All Questions</h2>
                }

                <button onClick={checkAuth}  className="ask-btn" >Ask Questions</button>


            </div>
            <div>
                {
                    questionsList?.data === null? 
                    <h1>.....Loading</h1>:
                    <>
                    <p>{questionsList?.data.length} Questions</p>
                    <QuestionsList questionsList ={questionsList?.data} />

                    </>
                }
            </div> 


        </div>
    )
            }          


export default HomeMainbar