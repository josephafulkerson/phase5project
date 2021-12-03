import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import Profile from "./Profile";
import { Switch, Route, Link } from "react-router-dom";

const Unauthenticated = ({setCurrentUser}) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </>
  );
};

export default Unauthenticated;
