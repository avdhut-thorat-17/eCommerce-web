import React, { useState } from "react";
import "../styles/navbar.css";
import Portfolio from "./Portfolio";
export default function Navbar() {
  const [showOverlayMenu, setShowOverlayMenu] = useState(false);

  const toggleOverlayMenu = () => {
    setShowOverlayMenu(!showOverlayMenu);
  };
  return (
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          {/* <!-- Navbar Logo --> */}
          <div className="logo">
            {/* <!-- Logo Placeholder for Inlustration --> */}
            <a href="#home">
              <i className="fas fa-chess-knight"></i> Logo
            </a>
          </div>

          {/* <!-- Navbar Links --> */}
          <ul id="menu">
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/Portfolio">Gallery</a>
            </li>
            <li>
              <a to="/AboutUs">About</a>
            </li>
            <li>
              <a to="/Feature">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Menu Icon */}
      <div className={`menuIcon ${showOverlayMenu ? "toggle" : ""}`} onClick={toggleOverlayMenu}>
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className={`overlay-menu ${showOverlayMenu ? "show" : ""}`}>
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Gallery</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          
        </ul>
      </div>
    </>
  );
}
