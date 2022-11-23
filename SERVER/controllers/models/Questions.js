import mongoose from 'mongoose'


const  QuestionSchema =mongoose.Schema({

        questionTitle : {type : String , required : "question must have a title"},
        questionBody : {type : String , required : "question must have a body"},
        questionTags : {type : [String] , required : "question must have a tags"},
        noOfAnswers : {type : Number , default : 0},
        upVote : {type : [String ] , default :[]},
        downVote : {type : [String ] , default :[]},
        userPosted : {type : String , required : "question must have an author"},
        askedOn : {type : Date , default : Date.now},
        userId : {type : String } ,
        answers : [{
            questionBody: String,
            userAnswered : String,
            userId : String,
            answeredOn : {type : Date , default : Date.now}



        }]



})


export default  mongoose.model("Question " , QuestionSchema)