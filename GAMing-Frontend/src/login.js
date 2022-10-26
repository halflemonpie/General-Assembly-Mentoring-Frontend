import React from "react";
import { useState } from "react";

const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>LogIn</h1>
      <form>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <imput type="submit" />
      </form>
      </div>
    )
}

export default LogIn