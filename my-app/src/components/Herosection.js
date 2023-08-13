import React from "react";
import { useState, useEffect } from "react";
import "../styles/herosec.css"; // Import your CSS file for styling
import SearchBar from "./Search";

const HeroSection = ({ showOverlayMenu }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const phrases = [
    "Find your dream home",
    "Explore the best rooms",
    "Use us and SAVE your TIME ",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (text === phrases[index]) {
        setTimeout(() => {
          eraseText();
        }, 1000);
      } else if (text === "") {
        if (index === phrases.length - 1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
        setTimeout(() => {
          typeText(phrases[index]);
        }, 500);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text, index]);

  const typeText = (phrase) => {
    setText((prevText) => phrase.slice(0, prevText.length + 1));
  };

  const eraseText = () => {
    setText((prevText) => prevText.slice(0, prevText.length - 1));
  };
  return (
    <div
      className={`hero-container ${showOverlayMenu ? "hide-hero-content" : ""}`}
    >
      <div className="hero-content">
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
      <div className="typing-effect">
        <p id="typed-text"></p>
      </div>
      <div className="scroll-arrow">
        <span className="arrow"></span>
        <span className="arrow"></span>
        <span className="arrow"></span>
      </div>
    </div>
  );
};

export default HeroSection;
