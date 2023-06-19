import React, { useState } from "react";
import "./Header.css";
import logoSvg from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import menuIcon from "../../../assets/menu.svg";
import closeIcon from "../../../assets/close.png";

const Header = ({ loggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(true);

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
      <div className="menu-toggle" onClick={handleMenuToggle}>
        {menuOpen ? (
          <img src={closeIcon} alt="Close" />
        ) : (
          <img src={menuIcon} alt="Menu" />
        )}
      </div>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {loggedIn ? (
          <ul>
            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/creatememorial">CREATE MEMORIAL</Link>
            </li>
            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <Link to="/pricing">PRICING</Link>
            </li>
            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <Link to="/about">ABOUT</Link>
            </li>
            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <Link to="/contactus">CONTACT US</Link>
            </li>
            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <Link to="/theme">Theme</Link>
            </li>
            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <Link to="/profile">Profile</Link>
            </li>

            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <button className="login-button">
                <Link style={{ color: "#ffffff" }} to="/login">
                  Login
                </Link>
              </button>
            </li>
          </ul>
        ) : (
          <ul>
            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <Link to="/mymemo">My Memorials</Link>
            </li>
            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <Link to="/contactus">Contact</Link>
            </li>
            <li
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <Link to="/myaccount">My Account</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
