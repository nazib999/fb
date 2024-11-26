import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <div className="login-wrapper">
        <div className="login-left">
            <h2>Lamasocial</h2>
            <p>Connect with friends and the world around <br /> you on facebook.</p>
        </div>
        <div className="login-right">
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button className='login-btn'><Link to='/' style={{listStyle:"none",textDecoration:"none",color:"inherit"}}>Log in</Link></button>
            <span>Forget Password?</span>
            <button className='new'>Create a New Account</button>
        </div>
        </div>
    </div>
  )
}

export default Login