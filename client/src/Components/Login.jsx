import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Login = ({ setCurrentUser }) => {
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
    <div className="login">
      <Redirect to="/" />
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <Box pt={2}>
          <TextField sx={{m: 0, width: '25ch'}}
            label="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></TextField>
          <br />
          <br />
          <TextField sx={{m: 0, width: '25ch'}}
            label="Password"
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </Box>
        <br />
        <Button size="small" variant="contained" type="submit">
          Log In
        </Button>
      </form>
      <br />
      <br />
      <h5>Don't have an account?</h5>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Login;
