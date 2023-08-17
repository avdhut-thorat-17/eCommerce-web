// import React from 'react'
// import '../styles/feature.css';
// export default function Feature() {
//   return (
//     <div className="feature-properties-section">
//   <h2>Featured Rooms</h2>
//   <div className="property-list">
//     {/* Featured property 1 */}
//     <div className="property-card">
//       <img src="https://www.thebrokebackpacker.com/wp-content/uploads/2021/08/Twin-hostel-private-room.jpg" alt="Property 1" />
//       <h3>Property Title 1</h3>
//       <p>Price: $500,000</p>
//       <button>View Details</button>
//     </div>
    
//     {/* Featured property 2 */}
//     <div className="property-card">
//       <img src="https://www.thebrokebackpacker.com/wp-content/uploads/2021/08/Shutterstock-Single-private-rooms.jpg" alt="Property 2" />
//       <h3>Property Title 2</h3>
//       <p>Price: $750,000</p>
//       <button>View Details</button>
//     </div>
//     {/* Featured property 3 */}
//     <div className="property-card">
//       <img src="https://www.hiusa.org/wp-content/uploads/2023/03/hi_sd_downtown_bunk_suitcase-640x360-min.jpg" alt="Property 2" />
//       <h3>Property Title 3</h3>
//       <p>Price: $750,000</p>
//       <button>View Details</button>
//     </div>
//     {/* Featured property 4 */}
//     <div className="property-card">
//       <img src="https://www.hiusa.org/wp-content/uploads/2023/03/hi_la_santa_monica_premium_male_dorm-640x360-min.jpg" alt="Property 2" />
//       <h3>Property Title 4</h3>
//       <p>Price: $750,000</p>
//       <button>View Details</button>
//     </div>
    
//     {/* Add more featured properties as needed */}
//   </div>
// </div>

//   )
// }






import React, { useState } from 'react';
import '../styles/feature.css';

export default function Feature() {
  const colors = [
    '#FF5733', // Color 1
    '#33FF57', // Color 2
    '#5733FF', // Color 3
    // Add more colors as needed
  ];

  const [propertyDetails, setPropertyDetails] = useState({});
  
  const toggleDetails = (property) => {
    if (property.id === propertyDetails.id) {
      setPropertyDetails({});
    } else {
      setPropertyDetails(property);
    }
  };

  const properties = [
    {
      id: 1,
      title: 'Cozy Apartment',
      image: 'https://www.thebrokebackpacker.com/wp-content/uploads/2021/08/Twin-hostel-private-room.jpg',
      price: '$500,000',
      description: 'A cozy apartment in a quiet neighborhood...',
      features: '2 bedrooms, 1 bathroom, 1200 sqft',
      location: 'Akurdi, Pune'
    },
    {
      id: 2,
      title: 'Luxury Villa',
      image: 'https://www.thebrokebackpacker.com/wp-content/uploads/2021/08/Shutterstock-Single-private-rooms.jpg',
      price: '$1,200,000',
      description: 'A luxurious villa with stunning views...',
      features: '4 bedrooms, 3 bathrooms, pool, garden',
      location: 'Akurdi, Pune'
    },
    {
        id: 3,
        title: 'Modern Condo',
        image: 'https://www.hiusa.org/wp-content/uploads/2023/03/hi_sd_downtown_bunk_suitcase-640x360-min.jpg',
        price: '$750,000',
        description: 'A modern condo with city skyline views...',
        features: '3 bedrooms, 2 bathrooms, balcony',
        location: 'Akurdi, Pune'
      },
      {
        id: 4,
        title: 'Charming Cottage',
        image: 'https://www.hiusa.org/wp-content/uploads/2023/03/hi_la_santa_monica_premium_male_dorm-640x360-min.jpg',
        price: '$350,000',
        description: 'A charming cottage in the countryside...',
        features: '2 bedrooms, 1 bathroom, garden',
        location: 'Akurdi, Pune'
      },
    // Add more property objects as needed
  ];
  

  return (
    <div className="feature-properties-section">
      <h2>Featured Rooms</h2>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <p>Price: {property.price}</p>
            <button onClick={() => toggleDetails(property)}>View Details</button>
            {property.id === propertyDetails.id && (
              <div className="property-details">
                <p>Description: {property.description}</p>
                <p>Features: {property.features}</p>
                <p>Location: {property.location}</p>
                {/* Add more property details */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
