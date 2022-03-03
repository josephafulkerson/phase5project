import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FcMoneyTransfer } from "react-icons/fc";
import Clock from "./Clock"

import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
} from "./NavBarElements";

const NavBar = ({ setCurrentUser }) => {
  const history = useHistory();
  const [stockTime, setStockTime] = useState(new Date());

  const handleLogout = () => {
    fetch("/api/logout", {
      method: "DELETE",
    }).then((r) => r.json());
    setCurrentUser(null);
    history.push("/");
  };

    useEffect(() => {
    const interval = setInterval(() => setStockTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Nav>
      <NavLink to="/" className="nav"><FcMoneyTransfer size={30} /></NavLink>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/profile">
            Profile&nbsp;
            <CgProfile />
          </NavLink>
        </NavMenu>
        <NavBtn>
          <Clock stime={stockTime} />
          <NavLink to="/" onClick={handleLogout}>
          Logout
          </NavLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default NavBar;
