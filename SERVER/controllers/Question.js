
// import Questions from "../models/Questions.js"
// import mongoose from "mongoose"
// import { postQuestion } from "../../client/src/api/index.js";

// export const AskQuestion = async(req , res) =>{

//     const PostQuestionData  =  req.body;
//     const postQuestion = new Questions({...PostQuestionData , userId : req.userId});
//     try{
//         await postQuestion.save();
//         res.status(200).json("posted a question successfully")
//     }
//     catch(error){
//         console.log(error)
//         res.status(409).json("couldn't post a new question")
    
//     }

    



// }

// export const getAllquestions = async(req , res) =>{

   
//     try{
//         const questionList = await Questions.find();
//         res.status(200).json(questionList)
//     }
//     catch(error){
//         console.log(error)
//         res.status(404).json({message :error.message})
    
//     }

    



// }





