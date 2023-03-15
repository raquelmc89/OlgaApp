import React from "react";
import { NavLink } from "react-router-dom";

const Header =() => (
    <header>
    <h1>About me</h1>
    <NavLink to="/" >About me</NavLink>
    <NavLink to="/contactMe" >Contact me</NavLink>
    <NavLink to="/reviews" >Reviews</NavLink>
    </header>
)

export default Header;