import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(name)
    console.log(email)
    console.log(password)

    const req = await fetch("https://gaming-database.up.railway.app/api/docs/", {
       method: "POST",
       headers: {"Content-Type": "application/json"},
       body: await JSON.stringify({
        name, 
        email,
        password,
       }), 
    });

    const data =  await req.json();

    if (data.status === "ok") {
        navigate("/login");
    } else {
        alert("Duplicate Email");
    }


}

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
      
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Signup