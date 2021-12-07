import React from "react";
import { useHistory } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const NavBar = ({ setCurrentUser }) => {
  const history = useHistory();

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => r.json());
    setCurrentUser(null);
    history.push("/");
  };

  return (
    <div>
      <Nav>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/profile">
            Profile&nbsp;
            <CgProfile />
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavLink to="/" onClick={handleLogout}>
            Logout
          </NavLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default NavBar;
