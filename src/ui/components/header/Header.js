import React, { useState } from "react";
import "./Header.css"; // Import the CSS file for the header component
import logoSvg from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={logoSvg} alt="Logo" />
        </Link>
      </div>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/creatememorial">CREATE MEMORIAL</Link>
          </li>
          <li>
            <Link to="/pricing">PRICING</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contactus">CONTACT US</Link>
          </li>
          <li>
            <Link to="/theme">Theme</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button className="login-button">
              <Link style={{ color: "#ffffff" }} to="/login">
                Login
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
