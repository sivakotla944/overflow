
import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import icon from '../../assets/favicon copy.png'
import './Auth.css'
import AboutAuth from './AboutAuth'
import { signUp , logIn } from '../../actions/auth'


const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [name ,setName] = useState('')
  const [email ,setEmail] =useState('')
  const [password ,setPassword] =useState('')

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }

  const navigate = useNavigate()
 const dispatch = useDispatch()
  const handleSubmit = (e)=>{

    e.preventDefault()
    if(!email && !password){
      alert ("enter email and password")
    }
    if(isSignup){
      if(!name){
        alert("enter a name to continue")
      }
     dispatch( signUp({name ,email ,password}, navigate))
    } else{
 dispatch(logIn({email ,password} , navigate))
    }
   

  }
  return (
        <section className='auth-section'>
          { isSignup && <AboutAuth />}
           <div className='auth-container-2'>
            { !isSignup && <img src={icon}  alt='stack overflow' className='login-logo' />}
            <form onSubmit={handleSubmit}>
              {
                isSignup && (
                  <label htmlFor='name'>
                    <h4>Display Name</h4>
                    <input type="text" id='name' name='name' onChange={(e) =>{setName(e.target.value)} }/>
                  </label>
                )
              }
              <label htmlFor="email">
                <h4>Email</h4>
                <input type="email" name='email' id='email' onChange={(e) =>{setEmail(e.target.value)} }/>
              </label>
              <label htmlFor="password">
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <h4>Password</h4>
                { !isSignup && <p style={{ color: "#007ac6", fontSize:"13px"}}>forget password?</p> }
                </div>
                <input type="password" name='password' id='password' onChange={(e) =>{setPassword(e.target.value)} }/>
                { isSignup && <p style={{ color: "#666767", fontSize:"13px"}}>Passwords must contain at least eight characters, <br />including at least 1 letter and 1 number.</p>}
              </label>
              {
                isSignup && (
                  <label htmlFor='check'>
                    <input type="checkbox" id='check' />
                    <p style={{ fontSize:"13px"}}>Opt-in to receive occasional,<br /> product updates, user research invitations,<br /> company announcements, and digests.</p>
                  </label>
                )
              }
            <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up' : 'log in' }</button>
            {
              isSignup && (
                <p style={{ color: "#666767", fontSize:"13px"}}>By clicking "Sign up", you agree to our <span style={{ color: "#007ac6"}}>terms of<br />service</span>,<span style={{ color: "#007ac6"}}> privacy policy</span> and 
                <span style={{ color: "#007ac6"}}> cookie policy</span>
                </p>
              )
            }
            </form>
            <p>
              {isSignup ? 'Already have an account?' : "Don't have an account"}
              <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : 'sign up' }</button>
            </p>
            </div>   
        </section>    
  )
}

export default Auth