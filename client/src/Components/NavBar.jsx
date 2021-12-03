import React from "react";
import { NavLink, useHistory } from "react-router-dom";


const NavBar = ({setCurrentUser}) => {
  const history = useHistory()

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => r.json());
    setCurrentUser(null);
    history.push("/");
  };

  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </div>
  );
};

export default NavBar;
