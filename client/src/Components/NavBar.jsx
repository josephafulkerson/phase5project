import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
