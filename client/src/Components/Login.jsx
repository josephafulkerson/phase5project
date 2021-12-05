import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


const Login = ({setCurrentUser}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };


    return (
        <div>
          <Redirect to="/" />
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <p>
            <TextField
              label="Username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></TextField>
          </p>
          <TextField
            label="Password"
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
  
          <Button size="small" variant="contained" type="submit">
            Log In
          </Button>
        </form>
        <h5>Don't have an account?</h5>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    );
  };

export default Login
