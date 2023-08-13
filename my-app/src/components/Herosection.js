import React from "react";
import "../styles/herosec.css"; // Import your CSS file for styling
import SearchBar from "./Search";

const HeroSection = ({ showOverlayMenu }) => {
  return (
    <div
      className={`hero-container ${showOverlayMenu ? "hide-hero-content" : ""}`}
    >
      
      <div className="hero-content">
        <div className="search-bar">
          <SearchBar/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
