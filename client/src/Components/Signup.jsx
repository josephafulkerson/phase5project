import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  Redirect, useHistory, Link } from 'react-router-dom'

const Signup = ({setCurrentUser}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const history = useHistory()

function handleSubmit(e) {
  e.preventDefault();
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password,
      passwordConfirm
    })
  })
  .then(res => {
    if (res.ok) {
      res.json().then(user => {
        setCurrentUser(user)
        history.push("/")
      })
    } else {
      res.json().then(errors => {
        console.error(errors)
        alert('Server Error, please try again')
      })
    }
  })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <TextField
          label="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>
        <TextField
          label="Password"
          type="password"
          name=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <TextField
          label=" Confirm Password"
          type="password"
          name="password_confirmation"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        ></TextField>
        <Button size="small" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Signup;
