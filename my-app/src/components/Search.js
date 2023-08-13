import React, { useState } from "react";
import "../styles/search.css"; // Import your CSS file for styling
import { ReactComponent as SearchIcon } from "../images/search.svg"; // Replace with the path to your search icon SVG file

const SearchBar = () => {
  const cities = ["City A", "City B", "City C", "City D"]; // Replace with your city options
  const searchTypes = ["Buy", "Rent", "Sell"]; // Replace with your search type options
  const areas = ["Area 1", "Area 2", "Area 3", "Area 4"]; // Replace with your area options

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSearchType, setSelectedSearchType] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  return (
    <div className="search-bar-container">
      <div className="search-group">
        <select
          className="search-select"
          value={selectedSearchType}
          onChange={(e) => setSelectedSearchType(e.target.value)}
        >
          <option value="" disabled>
            Select search type
          </option>
          {searchTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          className="search-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="" disabled>
            Select a city
          </option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <select
        className="search-select"
        value={selectedArea}
        onChange={(e) => setSelectedArea(e.target.value)}
      >
        <option value="" disabled>
          Select an area
        </option>
        {areas.map((area, index) => (
          <option key={index} value={area}>
            {area}
          </option>
        ))}
      </select>
      <button className="search-button">
        <SearchIcon className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
