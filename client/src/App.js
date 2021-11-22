import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Flappybird from './components/Flappybird.js';
import GameTwo from './components/GameTwo';
import GameThree from './components/GameThree';
import { NavLink } from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';

function App() {

  const [currentUser, setCurrentUser] = useState('')

  useEffect(()=> {
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  if(!currentUser) return <Login setCurrentUser={setCurrentUser} />
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="flappybird" element={<Flappybird />}>
                      
          </Route>
          <Route path="gameTwo" element={<GameTwo />}>
                      
          </Route>
          <Route path="gameThree" element={<GameThree />}>
                      
          </Route>
          <Route path="login" element={<Login setCurrentUser={setCurrentUser} currentUser={currentUser} />}>
                      
          </Route>
          <Route path="/" element={<Home setCurrentUser={setCurrentUser} currentUser={currentUser}/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
