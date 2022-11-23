import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from './models/auth.js'

export const signup  = async(req,res) =>{

    const {name , email, password } = req.body;
    try{
        const existingUser = User.findOne({email});
        if(existingUser){
            console.log("UserExist")
            return res.status(404).json({message : "User already Exist."})
        }

        const hashedPassword = await bcrypt.hash(password , 12)
        const newUser = await User.create({name, email , password : hashedPassword})
        const token = jwt.sign({email : newUser.email , id:newUser._id }, "test", {expiresIn : "1h"})
        res.status(200).json({result : newUser, token})

    }catch(error){
        console.log(error)
        res.status(500).json("something went wrong")
    }

}

export const login  = async(req,res) =>{
    const {email, password } = req.body;
    console.log(email,password)
    try{
        const existingUser =await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({message : "User don't Exist."})
        }

        const isPasswordCrt = await bcrypt.compare(password , existingUser.password)
      if(!isPasswordCrt){
        return res.status(400).json({message : "Invalid credentials"})
      }
      const token = jwt.sign({email : newUser.email , id:newUser._id }, "test", {expiresIn : "1h"})
        res.status(200).json({result : newUser, token})

    }catch(error){
        console.log(error)
        res.status(500).json("something went wrong")

    }

    
}