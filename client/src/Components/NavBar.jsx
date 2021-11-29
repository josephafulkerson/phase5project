import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </div>
    )
}

export default NavBar
