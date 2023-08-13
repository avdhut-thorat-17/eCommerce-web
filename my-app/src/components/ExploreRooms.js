// import React, { useState } from 'react';
// import '../styles/exploreRooms.css';

// export default function ExploreRooms() {
//   const [showAllRooms, setShowAllRooms] = useState(false);

//   const toggleView = () => {
//     setShowAllRooms(!showAllRooms);
//   };

//   const properties = [
//     {
//       name: "Deluxe Suite",
//       price: 150,
//       image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
//     },
//     {
//       name: "Premium Suite",
//       price: 200,
//       image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
//     },
//     {
//       name: "Executive Room",
//       price: 180,
//       image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
//     },
//     {
//       name: "Standard Room",
//       price: 120,
//       image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
//     },
//     {
//       name: "Deluxe Suite",
//       price: 150,
//       image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
//     },
//     {
//       name: "Premium Suite",
//       price: 200,
//       image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
//     },
//     {
//       name: "Executive Room",
//       price: 180,
//       image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
//     },
//     {
//       name: "Standard Room",
//       price: 120,
//       image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
//     },
//     // Add more properties as needed
//   ];
  

//   const visibleProperties = showAllRooms ? properties : properties.slice(0, 4);

//   return (
//     <div className="explore-rooms-container">
//       <h2>Explore Our Rooms</h2>
//       <div className="room-cards">
//         {visibleProperties.map((property, index) => (
//           <div key={index} className="room-card">
//             <img src={property.image} alt={property.name} />
//             <h3>{property.name}</h3>
//             <p>Starting at ${property.price}/night</p>
//           </div>
//         ))}
//       </div>
//       <button className="explore-all-button" onClick={toggleView}>
//         {showAllRooms ? 'View Less' : 'Explore All'}
//       </button>
//       {showAllRooms && (
//         <button className="view-less-button" onClick={toggleView}>
//           View Less
//         </button>
//       )}
//     </div>
//   );
// }












import React, { useState } from 'react';
import '../styles/exploreRooms.css';

export default function ExploreRooms() {
  const [showAllRooms, setShowAllRooms] = useState(false);

  const toggleView = () => {
    setShowAllRooms(!showAllRooms);
  };

  const properties = [
    {
            name: "Deluxe Suite",
            price: 150,
            image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
          },
          {
            name: "Premium Suite",
            price: 200,
            image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
          },
          {
            name: "Executive Room",
            price: 180,
            image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
          },
          {
            name: "Standard Room",
            price: 120,
            image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
          },
          {
            name: "Deluxe Suite",
            price: 150,
            image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
          },
          {
            name: "Premium Suite",
            price: 200,
            image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
          },
          {
            name: "Executive Room",
            price: 180,
            image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
          },
          {
            name: "Standard Room",
            price: 120,
            image: "https://www.touristsecrets.com/wp-content/uploads/2020/08/bed-142517_1280-1024x683.jpg",
          },// Your property data here
  ];

  const visibleProperties = showAllRooms ? properties : properties.slice(0, 4);

  return (
    <div className="explore-rooms-container">
      <h2>Explore Our Rooms</h2>
      <div className="room-cards">
        {visibleProperties.map((property, index) => (
          <div key={index} className="room-card">
            <img src={property.image} alt={property.name} />
            <h3>{property.name}</h3>
            <p>Starting at ${property.price}/night</p>
          </div>
        ))}
      </div>
      <button className="explore-all-button" onClick={toggleView}>
        {showAllRooms ? 'View Less' : 'Explore All'}
      </button>
      {showAllRooms && (
        <button className="view-less-button" onClick={toggleView}>
          View Less
        </button>
      )}
    </div>
  );
}
