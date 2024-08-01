import React from 'react'
import './Css/LoginSignup.css'


const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="Email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className=' login-signup-login'>Already have account ? <span>Login here</span></p>
        <div className="login-sign-up-agree">
          <p> <input type="checkbox" name='' id='' /> By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup