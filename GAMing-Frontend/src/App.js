import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import mainBoardCalendar from './screens/MBCalendar';
import LogOut from "./components/LogOut";
import LogIn from "./components/LogIn";
import SignUp from './components/SignUp';
import MainBoard from './components/MainBoard';
import userProfile from './components/UserProfile';
import SignIn from "./screens/SignIn";
import UserProfile from './screens/UserProfile';
import MainBoard from './components/MainBoard';
import axios from 'axios';
// import './App.css';
// import { useState, useEffect } from "react";
// import Main from './MainBoard,jsx';

function App() {
  const [gaming, setGaming] = useState("Mentoring Matching");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, setLogIn] = useState(false);
  const [UserProfile, setUserProfile] = useState("");
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("");

  const getMentoring = async () => {
    let results = await axios("")
    setGaming(results.data)
  }

  useEffect(() => {
    getMentoring()
  }, [])

  
  return (
    <div className="App">

    </div>
  );
}

export default App;
