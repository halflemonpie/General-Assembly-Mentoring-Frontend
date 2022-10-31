import React from "react";
import "./LogOut.css";
// import React, { useEffect } from "react";

export default function LogOut({setLogIn}) {
  
  const handleSignOut = (e) => {
    e.preventDefault()
    setLoggedIn(false)
    localStorage.clear()
  }
  return (
    <div>
      <div>
        <h1>Sign Out</h1>

        <form>
          <button className='sign-off' value='Sign-Out' type='submit' onClick={handleSignOut}>Sign Out</button>
        </form>
      </div>
    </div>
  )
}