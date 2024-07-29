import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [logStatus,setLogStatus]=useState('Signup');
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{logStatus}</h1>
        {logStatus==='Login'?<></>:<input type="text" placeholder='Your Name' />}
        <input type="email" placeholder='Your Email' />
        <input type="text" placeholder='Your password' />
        <button className='loginsignup-button'>Continue</button>
        <div className="loginsignup-footer">
          {logStatus==="Signup"?
          <p>Already have an account? <span onClick={()=>setLogStatus("Login")}>Login here</span></p>:
          <p>Don't have an account?<span onClick={()=>setLogStatus("Signup")}>Sign Up here</span></p>}
          <div className="loginsignup-footer-checkbox">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
  

    </div>
  )
}

export default LoginSignup