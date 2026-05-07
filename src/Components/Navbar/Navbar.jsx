import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/lattice-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar container">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          <li>About</li>
        </NavLink>
        <NavLink to="/development" onClick={() => setMenuOpen(false)}>
          <li>Development</li>
        </NavLink>
        <NavLink to="/onsale" onClick={() => setMenuOpen(false)}>
          <li>Onsale</li>
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          <li>Contact</li>
        </NavLink>
        <li>
          {" "}
          <button className="btn btn-2 mobile-btn">
            Get In Touch <i class="ri-arrow-right-up-line"></i>
          </button>
        </li>
      </ul>
      <div className="navbar-btns">
        <button className="btn btn-1">
          <i class="ri-phone-fill"></i>
          +89(0) 1256 2156
        </button>
        <button className="btn btn-2">
          Get In Touch <i class="ri-arrow-right-up-line"></i>
        </button>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <i class="ri-close-fill"></i>
        ) : (
          <i class="ri-menu-4-line"></i>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
