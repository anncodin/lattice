import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/lattice-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/development">
          <li>Development</li>
        </NavLink>
        <NavLink to="/onsale">
          <li>Onsale</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
      <button>Get In Touch</button>
    </div>
  );
};

export default Navbar;
