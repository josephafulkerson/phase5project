import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
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
      </Switch>
    </>
  );
};

export default Unauthenticated;
