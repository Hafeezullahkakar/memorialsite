import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for the header component
import logoSvg from '../../../assets/logo.svg'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo">
        <img src={logoSvg} alt="Logo" />
      </div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">CREATE MEMORIAL</a></li>
          <li><a href="#">PRICING</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTACT</a></li>
          <li>
      <button className="login-button">Login</button>

          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
