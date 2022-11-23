import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Questions  from "./pages/Questions/Questions";
import AskQuestions  from "./pages/AskQuestions/AskQuestions";
import DisplayQuestions from "./pages/Questions/DisplayQuestions";


const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/Auth" element={<Auth />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/Questions" element= {<Questions />}/>
            <Route path="/AskQuestions" element= {<AskQuestions />}/>
            <Route path="/Questions/:id" element= {<DisplayQuestions />}/>
           
           
           
        </Routes>
    )
}

export default AllRoutes