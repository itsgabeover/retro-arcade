import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";

function Home() {

const [newUsername, setNewUsername] = useState("")
const [newUserPw, setNewUserPw] = useState("")


const updateUser = (evt) => {
    setNewUsername( evt.target.value);
}
const updatePw = (evt) => {
    setNewUserPw( evt.target.value);
}


const handleSignUp = (event) => {
    
    event.preventDefault();
    console.log(event)
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          username: newUsername,
          password_digest: newUserPw
              })  
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

    return(
    <div>
        <div>
        <NavLink to="GameTwo">
            <button>Speed Typer</button>
        </NavLink>

        <NavLink to="Flappybird">
            <button>Flappybird</button>
        </NavLink>

        <NavLink to="GameThree">
            <button>Reacteroids</button>
        </NavLink>
        </div>
        <div>
            <form id="signupform" onSubmit={handleSignUp}><br></br>
                <label >Username:</label>
                <input type="text" id="username" name="username" onChange={updateUser}></input><br></br>
                <label >Password:</label>
                <input type="password" id="password"name="password" onChange={updatePw}></input><br></br><br></br>
                <input type="submit" value="Sign Up"></input>
            </form>
        </div>
    </div>
    
    // this is just for a commit
    )

}

export default Home