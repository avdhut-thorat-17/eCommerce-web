// Import necessary React components and styles
import React, { useState } from "react";
import "../styles/search.css"; // Import your CSS file for styling
import { ReactComponent as SearchIcon } from "../images/search.svg"; // Replace with the path to your search icon SVG file

const SearchBar = () => {
  const cities = ["City A", "City B", "City C", "City D"];
  const searchTypes = ["Buy", "Rent", "Sell"];
  const areas = ["Area 1", "Area 2", "Area 3", "Area 4"];

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSearchType, setSelectedSearchType] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [numRoommates, setNumRoommates] = useState("");

  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  return (
    <div className="search-bar-container">
      <div className="search-group">
        <select
          className="search-select"
          value={selectedSearchType}
          onChange={(e) => setSelectedSearchType(e.target.value)}
        >
          <option>PG</option>
          <option>Hostels</option>
        </select>
        <select
          className="search-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          >
      <option>Pune</option>
      <option>Mumbai</option>
      <option>Sangamner</option>

        </select>
      </div>
      <select
        className="search-select"
        value={selectedArea}
        onChange={(e) => setSelectedArea(e.target.value)}
      >
      <option>Akurdi</option>
      </select>
      <div className="advanced-search-button-container">
        <button className="advanced-search-button" onClick={toggleAdvancedSearch}>
          Advanced Search
        </button>
      </div>
      {showAdvancedSearch && (
        <div className="advanced-search-options">
          <input
            type="number"
            placeholder="Min Price"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
          />
          <input
            type="number"
            placeholder="Number of Roommates"
            value={numRoommates}
            onChange={(e) => setNumRoommates(e.target.value)}
          />
        </div>
      )}
      <button className="search-button">
        <SearchIcon className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
