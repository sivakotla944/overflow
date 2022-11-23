import  Express  from "express";
import {signup , login } from '../controllers/auth.js'
 
const router = Express.Router();

router.post('/signup' ,()=>{})
router.post('/login' ,()=>{})


export default router