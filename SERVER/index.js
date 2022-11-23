import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';
// import questionRoutes from './routes/Questions.js'

const app =express();

app.use(express.json({limit :"30mb"  , extended : true}))
app.use(express.urlencoded({limit :"30mb" , extended : true}))
app.use(cors());

app.get('/' , (req,res)=>{
    res.send("this is  a stackoverflow clone API")
})

app.use('/user',userRoutes)
// app.use('/questions',questionRoutes)


const PORT = process.PORT || 8000

const CONNCETION_URL = "mongodb+srv://Siva:Siva1000@stack-overflow-clone.q7sekyl.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNCETION_URL ,{ useNewUrlParser : true , useUnifiedTopology: true})
  .then(()=> app.listen(PORT , () =>{console.log(`server running on port ${PORT}`)}))
  .catch((err) => console.log(err.message))