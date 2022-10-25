// export default function LogIn() {}
// export default function LogIn({ handleEmailChange, handlePasswordChange, handleLogIn }) {

export default function LogIn({ handleEmailChange, handlePasswordChange, handleSignIn }) {

 
  return (
    <div>
        <h1>Log In</h1>
      <form>
        <div>
          <label htmlFor='email'>Email </label>
          <input type='text' name="email" onChange={handleEmailChange}/>
        </div>
        <div>
          <label htmlFor='password'>Password </label>
          <input type='password' name="email" onChange={handlePasswordChange}/>
        </div>
        <div>
          <button className="sign-in-btn" type='submit' value="Submit" onClick={handleSignIn}>Log In</button>
        </div>
      </form>
    </div>
  )
}