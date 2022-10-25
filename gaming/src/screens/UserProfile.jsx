
import { useState, useEffect } from "react";
import LogIn from "../components/LogIn";
import LogOut from "../components/LogOut";
import SignUp from "../components/SignUp";

export default function UserProfile({
  handleNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleLogIn,
  handleLogOut

}) {
  return (
    <div>

      <div className="user-screen-container">
      <div className="user-screen-signin">
      <LogIn
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleLogIn={handleLogIn}
        handleLogOut={handleLogOut}
        />
      </div>
      
        
       
      <div className="user-screen-signup">
      <SignUp
       handleNameChange={handleNameChange}
       handleEmailChange={handleEmailChange}
       handlePasswordChange={handlePasswordChange}
       handleSignUp={handleSignUp}
        />
        </div>

        <div className="user-screen-signout">
      <SignOut
       setSignedIn={setSignedIn}
        />
          </div>
          
      </div>
    </div>
  );
}