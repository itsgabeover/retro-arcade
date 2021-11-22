import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

function Login({setCurrentUser}) {
const navigate = useNavigate();
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password}),

    
    })
      .then((r) => r.json())
      .then((user) => setCurrentUser(user));
      navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      type="password"
      valuye={password}
      onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login