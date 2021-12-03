import React from "react";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import { Switch, Route } from "react-router-dom";

const Authenticated = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home currentUser={currentUser}/>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/profile">
          <Profile currentUser={currentUser}/>
        </Route>
      </Switch>
    </>
  );
};

export default Authenticated;
