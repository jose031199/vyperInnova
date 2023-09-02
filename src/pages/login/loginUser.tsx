import React from 'react'
import google from '../../images/google_logo.png'
import outlook from '../../images/outlook.png'
import {Link } from "react-router-dom";

const LoginUser = () => {
  return (
    <div className='login_user'>
      <div className='login_form'>
        <form action="">
          <h1>Login</h1>
          <input type="email" name="" id="" placeholder='email'/>
          <input type="password" name="" id="" placeholder='password'/>
          <div className='login_options'>
            <input type="image" src={google} width={90} height={80}/>
            <input type="image" src={outlook} alt="" width={90} height={80}/>
          </div>

          <div className='submit_options'>
            <input type="submit" value="Login" />
            <Link to={'/'}  className="back">Regresar</Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginUser
