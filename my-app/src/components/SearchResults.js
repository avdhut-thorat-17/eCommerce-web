import React from "react";
import "../styles/searchResults.css"; // Import your CSS file for styling

const SearchResults = ({ searchCriteria }) => {
  // Assuming you have a data array containing search results
  const searchResultsData = [
    {
      title: "Modern Apartment in City Center",
      description: "Spacious apartment with city view. Close to amenities.",
      city: "City A",
      area: "Area 1",
      type: "Rent",
    },
    {
      title: "Cozy House with Garden",
      description: "Charming house with a beautiful garden. Perfect for families.",
      city: "City B",
      area: "Area 2",
      type: "Buy",
    },
    {
      title: "Luxury Penthouse with Panoramic Views",
      description: "Elegant penthouse with stunning views. High-end amenities.",
      city: "City C",
      area: "Area 3",
      type: "Rent",
    },
    {
      title: "Spacious Family Home",
      description: "Large home with multiple bedrooms and a spacious backyard.",
      city: "City A",
      area: "Area 4",
      type: "Buy",
    },
    {
      title: "Studio Apartment",
      description: "Compact studio apartment in a bustling neighborhood.",
      city: "City B",
      area: "Area 2",
      type: "Rent",
    },
    {
      title: "Modern Townhouse",
      description: "Contemporary townhouse with sleek design and modern amenities.",
      city: "City C",
      area: "Area 3",
      type: "Buy",
    },
    // Add more search result items...
  ];
  

  return (
    <div className="search-results-container">
      <h2>Search Results</h2>
      <ul className="search-results-list">
        {searchResultsData.map((result, index) => (
          <li key={index} className="search-result-item">
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
