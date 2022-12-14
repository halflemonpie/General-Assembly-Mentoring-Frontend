import React, { useState } from 'react'
import "./SignUp.css";

export default function SignUp({ handleNameChange, handleEmailChange, handlePasswordChange, handleSignUp }) {
  
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <div>
          <label htmlFor='name'>Name </label>
          <input type='text' name="name" onChange={handleNameChange}/>
        </div>
        <div>
          <label htmlFor='email'>Email </label>
          <input type='text' name="email" onChange={handleEmailChange}/>
        </div>
        <div>
          <label htmlFor='password'>Password </label>
          <input type='password' name="email" onChange={handlePasswordChange}/>
        </div>
        <div>
          <button className='submit-btn' type='submit' value="Submit" onClick={handleSignUp}>Submit</button>
        </div>
      </form>
    </div>
  )
}