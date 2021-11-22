import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

function Home({setCurrentUser, currentUser}) {
const navigate = useNavigate();

const [newUser, setNewUser] = useState({
 username: '', 
 password: '',
 password_confirmation: '',   
})
// const [newUserPw, setNewUserPw] = useState("")

const handleChange = (e) => {
    setNewUser({
        ...newUser,
        [e.target.name]: e.target.value
    })
}

const logoutButton = () => {
    if(!!currentUser) {
        return <button onClick={handleLogout}>Logout</button>
    }
}

const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
          }).then(() => setCurrentUser(''));
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
          username: newUser.username,
          password: newUser.password,
          password_confirmation: newUser.password_confirmation
              })  
    })
    .then(response => {
        if(response.created) {
            response.json().then((userData) => setCurrentUser(userData))
        }
    })
    
    navigate('/')
}

    return(
    <div>
        <div>
        <NavLink to="gameTwo">
            <button>Speed Typer</button>
        </NavLink>

        <NavLink to="flappybird">
            <button>Flappybird</button>
        </NavLink>

        <NavLink to="gameThree">
            <button>Reacteroids</button>
        </NavLink>
        <NavLink to="login">
            <button>Login</button>
        </NavLink>
        </div>
        <div>
            <form id="signupform" onSubmit={handleSignUp}><br></br>
                <label >Username:</label>
                <input type="text" id="username" name="username" value={newUser.username} onChange={handleChange}></input><br></br>
                <label >Password:</label>
                <input type="password" id="password"name="password" value={newUser.password} onChange={handleChange}></input><br></br>
                <label >Password Confirmation:</label>
                <input type="password" id="password_1confirmation" name="password_confirmation" value={newUser.password_confirmation} onChange={handleChange}></input><br></br><br></br>
                <input type="submit" value="Sign Up"></input>
            </form>
            {logoutButton()}
        </div>
    </div>
    
    // this is just for a commit
    )

}

export default Home