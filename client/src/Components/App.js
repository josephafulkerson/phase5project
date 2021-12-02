import React, { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticated";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    fetch("/me")
    .then(res => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user)
          setAuth(true)
        })
      }
      else {
        setAuth(false)
      }
    })
  }, [])

  console.log(currentUser);

  return (
    <div>
      <Router>
        <NavBar setCurrentUser={setCurrentUser} />
        {currentUser ? <Authenticated currentUser={currentUser}/> : <Unauthenticated setCurrentUser={setCurrentUser}/>}
      </Router>
    </div>
  );
}

export default App;
