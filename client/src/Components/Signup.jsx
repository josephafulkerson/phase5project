import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  Redirect, useHistory, Link } from 'react-router-dom'
import Box from "@mui/material/Box";

const Signup = ({setCurrentUser}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const history = useHistory()

function handleSubmit(e) {
  e.preventDefault();
  fetch("/api/signup", {
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
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <Box pt={2}>
        <TextField sx={{m: 1, width: '25ch'}}
          label="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>
        <br/>
        <TextField sx={{m: 1, width: '25ch'}}
          label="Password"
          type="password"
          name=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <br/>
        <TextField sx={{m: 1, width: '25ch'}}
          label=" Confirm Password"
          type="password"
          name="password_confirmation"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        ></TextField>
        </Box>
        <br />
        <Button size="small" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Signup;
